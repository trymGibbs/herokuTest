import React, { useState } from 'react';
import styled from 'styled-components';
import { Col, PageHeader } from 'antd';
import PageheaderDropdown from './columnheader/index.jsx';

const StyledPageHeader = styled(PageHeader)`
  background-color: ${(props) =>
    props.theme.pallette.primary.light.shade2} !important;
  width: 100%;
  height: 4rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9;
`;
const StyledColumnContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGridColumn = styled(Col)`
  gap: 20;
  height: 100%;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function Column({ children, selectMode, options, title, placeholder, selected, setSelected }) {
  return (
    <StyledGridColumn>
      <StyledColumnContent>
        <StyledPageHeader title={title}>
          <PageheaderDropdown
            selectMode={selectMode}
            options={options}
            placeholder={placeholder}
            selected={selected}
            setSelected={setSelected}
          />
        </StyledPageHeader>
        {children}
      </StyledColumnContent>
    </StyledGridColumn>
  );
}

export default Column;
