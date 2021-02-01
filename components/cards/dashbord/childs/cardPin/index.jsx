import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import './index.less';

function CardPin({ pinHoverColor, pinCheckLogic, checkColor1, checkColor2, isPinned }) {

  return (
    <FontAwesomeIcon
      id="card-pin"
      icon={faThumbtack}
      onClick={pinCheckLogic}
      style={{
        color: isPinned === false ? `${checkColor1}` : `${checkColor2}`,
      }}
    />
  );
}

export default CardPin;
