import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const { Option } = Select;

const StyledSelect = styled(Select)`
  width: 100%;
`;

function PageheaderDropdown({
  options,
  selectMode,
  placeholder,
  selected,
  setSelected,
}) {
  const [selectState, setSelectState] = useState(false);

  return (
    <StyledSelect
      allowClear
      mode={selectMode}
      clearIcon={<FontAwesomeIcon icon={faTimes} />}
      menuItemSelectedIcon={<FontAwesomeIcon icon={faCheck} />}
      showArrow
      size="small"
      placeholder={placeholder}
      value={selected}
      onChange={(value) => console.log(value)}
      open={true}
    >
      {options &&
        options.map((option, index) => (
          <Option value={option.value} title={option.value} key={index}>
            {option.value}
          </Option>
        ))}
    </StyledSelect>
  );
}

export default PageheaderDropdown;
