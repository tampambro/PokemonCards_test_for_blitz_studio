import React from 'react';

import { Button } from 'react-bootstrap';

function ButtonCom(props) {
  return (
    <Button
      onClick={props.fun}
      variant={props.variant}
      className={props.nameButton}
    >
      {props.children}
    </Button>
  );
}

export default ButtonCom;
