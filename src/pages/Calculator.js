import React from 'react';
import CalcHooks from '../components/calcHooks';
import '../styling/calculator.css';

function Calculator() {
  return (
    <div className="page-con">
      <h2>
        Lets do some math !
      </h2>
      <section className="calc-con">
        <CalcHooks />
      </section>
    </div>
  );
}

export default Calculator;
