import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import styled from 'styled-components';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faInbox,
  faChartBar,
  faMapMarkedAlt,
  faQuestionCircle,
  faBug,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background-color: ${(props) => props.theme.pallette.grey};
  position: absolute;
  grid-area: sider;
  margin-top: 10px;
  z-index: 10;

  @media ${(props) => props.theme.breakpoints.md} {
    position: relative;
    margin-left: 0;
  } ;
`;

const StyledMenuFoldOutlined = styled(MenuFoldOutlined)`
  color: ${(props) => props.theme.pallette.primary.base};
  font-size: 2rem;
  float: right;
  margin: 10px;
  text-align: right;

  width: 100%;
`;

const StyledMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
  float: right;
  color: ${(props) => props.theme.pallette.primary.base};
  font-size: 2rem;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledMenuItem = styled(Menu.Item)`
  background-color: ${(props) => props.theme.pallette.white};
`;

const StyledMenu = styled(Menu)`
  background-color: ${(props) => props.theme.pallette.grey};
`;

const DashboardSideNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    handleCollapse();
  }, []);

  return (
    <StyledSider width="280" trigger={null} collapsible collapsed={collapsed}>
      {collapsed ? (
        <StyledMenuUnfoldOutlined onClick={handleCollapse} />
      ) : (
        <StyledMenuFoldOutlined onClick={handleCollapse} />
      )}
      <StyledMenu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        <StyledMenuItem
          icon={<FontAwesomeIcon icon={faTachometerAlt} />}
          key="1"
        >
          Dashbord
          {/*! collapsed && <FontAwesomeIcon icon={faInfoCircle} /> */}
        </StyledMenuItem>
        <StyledMenuItem icon={<FontAwesomeIcon icon={faInbox} />} key="2">
          Inboks
        </StyledMenuItem>
        <StyledMenuItem icon={<FontAwesomeIcon icon={faChartBar} />} key="3">
          Statistikk
        </StyledMenuItem>
        <StyledMenuItem
          icon={<FontAwesomeIcon icon={faMapMarkedAlt} />}
          key="4"
        >
          Beredskapskart
        </StyledMenuItem>
        <StyledMenuItem icon={<FontAwesomeIcon icon={faCog} />} key="5">
          Innstillinger
        </StyledMenuItem>
        <StyledMenuItem
          icon={<FontAwesomeIcon icon={faQuestionCircle} />}
          key="6"
        >
          Support
        </StyledMenuItem>
        <StyledMenuItem icon={<FontAwesomeIcon icon={faBug} />} key="7">
          Meld inn feil i system
        </StyledMenuItem>
      </StyledMenu>
    </StyledSider>
  );
};

export default DashboardSideNav;
