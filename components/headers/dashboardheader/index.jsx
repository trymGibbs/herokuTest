import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, PageHeader } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

const StyledPageHeader = styled(PageHeader)`
  width: 100%;
  margin-bottom: 5rem;
  grid-area: header;
`;
const Flex = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

function MainPageHeader() {
  return (
    <StyledPageHeader>
      <Flex>
        <img
          alt="Halden kommunes kommune våpen"
          src="/images/haldenvaapen.png"
          style={{ width: 75 }}
        />
        <h1 style={{ marginLeft: 20}}> Halden Kommune dashboard</h1>
      </Flex>
    </StyledPageHeader>
  );
}

export default MainPageHeader;
