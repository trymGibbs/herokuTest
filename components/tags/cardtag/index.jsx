import React from 'react';
import { Tag } from 'antd';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledTag = styled(Tag)`
  border-radius: 7px;
  place-self: center;
  padding: 5px;

  &:hover {
    border: 2px solid transparent;
    transform: scale(1.05);
    will-change: transform;
  }
`;

function CardTag({ tagColor, tagIcon, tagText, onClickLogick }) {
  return (
    <StyledTag
      onClick={() => onClickLogick(1)}
      color={tagColor}
      icon={<FontAwesomeIcon icon={tagIcon} />}
    >
      {tagText}
    </StyledTag>
  );
}

export default CardTag;
