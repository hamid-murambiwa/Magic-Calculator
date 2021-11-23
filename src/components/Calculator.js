import React from 'react';
// import './calc.css';

class calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <div id="CON">
                
                <section id="buttons">
                    <div id="screen">0</div>
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className="last-row">/</button>
                    
                    
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="last-row">X</button>
                    
                    
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button className="last-row">-</button>
                    
                    
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className="last-row">+</button>
                    
                    
                    <button className="item0">0</button>
                    <button>.</button>
                    <button className="last-row">=</button>
                    
                </section>
            </div>
        );
    }
}

export default calculator;