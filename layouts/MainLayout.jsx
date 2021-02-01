import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import MainHeader from '../components/headers/mainHeader';
import MainFooter from '../components/footers/mainFooter';
import BreadCrumbs from '../components/breadCrumbs';

const StyledLayout = styled(Layout)`
  background-color: #f8f8f8;
`;

const MainLayout = ({ children }) => (
  <>
    <MainHeader />
    <BreadCrumbs />
    <StyledLayout>{children}</StyledLayout>
    <MainFooter />
  </>
);

export default MainLayout;
