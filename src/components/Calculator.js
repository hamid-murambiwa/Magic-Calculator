import React from 'react';
import calculate from '../logic/calculate';
let count = '';
class calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {total: '',next: null,operation: null};
        this.handleClick = this.handleClick.bind(this);
        this.clear = this.clear.bind(this);
        this.digits = 0;
    }

    handleClick(btn) {
        if (typeof btn === 'number' || btn === '.') {
            count += btn; 
            this.state.next = count;
        }
        if (typeof btn === 'string' && btn !== '=' && btn !== 'ac' && btn !== '.') {
            count = '';
            this.state.operation = btn;
            this.state.total = document.getElementById('screen').innerText;
            document.getElementById('screen').innerText = '';
        }

        if ( btn === '=') {
            count = '';
        }

        if (btn !== '=' ) {
            document.getElementById('screen').innerText += btn;
        } else {
            if (calculate(this.state,btn).total === undefined) {
                document.getElementById('screen').innerText = '';
            } else {
                document.getElementById('screen').innerText = calculate(this.state,btn).total;
                this.state = calculate(this.state,btn);
            }
        }
    }

    clear() {
        document.getElementById('screen').innerText = ''; 
        this.state = {total: '',next: null,operation: null};
    }

    render() {
        return (
            <div id="CON">                
                <section id="buttons">
                    <div id="screen">{this.state.total}</div>
                    <button type="button" onClick={() => this.clear()}>ac</button>
                    <button type="button" onClick={() => this.handleClick('+/')}>+/-</button>
                    <button type="button" onClick={() => this.handleClick('%')}>%</button>
                    <button type="button" onClick={() => this.handleClick('÷')} className="last-row">÷</button>                                        
                    <button type="button" onClick={() => this.handleClick(7)}>7</button>
                    <button type="button" onClick={() => this.handleClick(8)}>8</button>
                    <button type="button" onClick={() => this.handleClick(9)}>9</button>
                    <button type="button" onClick={() => this.handleClick('x')} className="last-row">x</button>                                        
                    <button type="button" onClick={() => this.handleClick(4)}>4</button>
                    <button type="button" onClick={() => this.handleClick(5)}>5</button>
                    <button type="button" onClick={() => this.handleClick(6)}>6</button>
                    <button type="button" onClick={() => this.handleClick('-')} className="last-row">-</button>                                        
                    <button type="button" onClick={() => this.handleClick(1)}>1</button>
                    <button type="button" onClick={() => this.handleClick(2)}>2</button>
                    <button type="button" onClick={() => this.handleClick(3)}>3</button>
                    <button type="button" onClick={() => this.handleClick('+')} className="last-row">+</button>
                    <button type="button" onClick={() => this.handleClick(0)} className="item0">0</button>
                    <button type="button" onClick={() => this.handleClick('.')}>.</button>
                    <button type="button" onClick={() => this.handleClick('=')} className="last-row">=</button>               
                </section>
            </div>
        );
    }
}

export default calculator;