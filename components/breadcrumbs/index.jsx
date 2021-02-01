import React from 'react';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';

const StyledBreadCrumb = styled(Breadcrumb)`
  padding: 16px 0;
  padding-left: 24px;
  background-color: ${(props) => props.theme.pallette.primary.light.shade3};
`;

const BreadCrumbs = () => (
  <StyledBreadCrumb>
    <Breadcrumb.Item>Utforsk</Breadcrumb.Item>
    <Breadcrumb.Item>Arrangementer</Breadcrumb.Item>
    <Breadcrumb.Item>Søknadsportal</Breadcrumb.Item>
  </StyledBreadCrumb>
);

export default BreadCrumbs;
