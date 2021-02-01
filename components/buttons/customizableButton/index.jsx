import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  border: none;

  :hover {
    border: 2px solid transparent;
    transform: scale(1.05);
    will-change: transform;
  }
`;

function PriorityButton({
  btnShape,
  btnType,
  btnSize,
  btnIcon,
  btnText,
  btnColor,
}) {
  return (
    <StyledButton
      shape={btnShape}
      type={btnType}
      size={btnSize}
      icon={<FontAwesomeIcon icon={btnIcon} />}
      style={{ backgroundColor: btnColor }}
    >
      {btnText}
    </StyledButton>
  );
}

export default PriorityButton;
