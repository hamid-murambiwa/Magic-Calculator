import React from 'react';
import '../styling/quote.css';

function Quote() {
  return (
    <section className="sec">
      <p className="quote">
        Mathematics as an expression of the human mind reflects the active will,
        the contemplative reason, and the desire for aesthetic perfection.
        Its basic elements are logic and intuition, analysis and construction,
        generality and individuality.
      </p>
      <h3>
        — Richard Courant, German-American mathematician
      </h3>
    </section>
  );
}

export default Quote;
