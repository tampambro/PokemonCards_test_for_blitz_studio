import React from 'react';

import './index.scss';

function ScrollButton() {
  return (
    <div className="ScrollButtons">
      <div className="ScrollButtons__up" onClick={() => window.scrollTo(0, 0)}>
        &#9650;
      </div>
      <div
        className="ScrollButtons__down"
        onClick={() => window.scrollTo(0, document.body.scrollHeight)}
      >
        &#9660;
      </div>
    </div>
  );
}

export default ScrollButton;
