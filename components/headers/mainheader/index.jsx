import { useState } from 'react';
import { Layout, Input, Image } from 'antd';
import styled from 'styled-components';
import MainNav from '../../navigations/mainnav/index.jsx';
// import GibbsLogo from 'next/image'

const { Header } = Layout;
const { Search } = Input;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.pallette.white};
  padding: 0;
  padding-left: 12px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 35px;
    padding-right: 35px;
  }
`;

const StyledSearch = styled(Search)`
  max-width: 800px;
  min-width: 200px;
  margin-left: 20px;
  width: 80%;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 20px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: auto;
  }
`;

const StyledImage = styled(Image)`
  min-width: 80px;
`;

const MainHeader = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading((prev) => !prev), 3000);
  };

  return (
    <StyledHeader>
      <StyledImage width={100} src="/images/logos/logo-mini.png" />
      <StyledSearch
        placeholder="Søk etter lokale, artister, utstyr..."
        allowClear
        enterButton="Søk"
        size="large"
        loading={loading}
        onSearch={handleSearch}
      />
      <MainNav />
    </StyledHeader>
  );
};

export default MainHeader;
