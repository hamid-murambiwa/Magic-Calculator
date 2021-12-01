import { useState } from 'react';
import calculate from '../Logic/calculate';

const CalcHooks = () => {
  const [obj, setobj] = useState({ total: 0, next: null, operation: null });
  const handleClick = (btn) => {
    setobj((prev) => ({ ...prev, ...calculate(prev, btn) }));
  };

  return (
    <div id="CON">
      <section id="buttons">
        <div id="screen">
          {obj.total}
          {obj.operation}
          {obj.next}
        </div>
        <button type="button" onClick={() => handleClick('AC')}>ac</button>
        <button type="button" onClick={() => handleClick('+/')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" onClick={() => handleClick('÷')} className="last-row">÷</button>
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" onClick={() => handleClick('x')} className="last-row">x</button>
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" onClick={() => handleClick('-')} className="last-row">-</button>
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" onClick={() => handleClick('+')} className="last-row">+</button>
        <button type="button" onClick={() => handleClick('0')} className="item0">0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" onClick={() => handleClick('=')} className="last-row">=</button>
      </section>
    </div>
  );
};

export default CalcHooks;
