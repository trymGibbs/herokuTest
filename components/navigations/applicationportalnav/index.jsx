import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Layout, Button } from 'antd';
import styled, { keyframes } from 'styled-components';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfo,
  faUtensils,
  faBeer,
  faRoad,
  faFire,
  faChartBar,
  faAlignLeft,
  faEdit,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import { useMedia } from 'react-use-media';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background-color: ${(props) => props.theme.pallette.grey};
  margin-left: ${(props) => (props.collapsed ? '1px' : '0')};
  height: ${(props) => (props.collapsed ? '0' : '100vh')};
  position: absolute;
  z-index: 10;
  padding-top: 5px;

  @media ${(props) => props.theme.breakpoints.md} {
    position: relative;
    margin-left: 0;
    height: 100vh;
  } ;
`;

const StyledMenuFoldOutlined = styled(MenuFoldOutlined)`
  color: ${(props) => props.theme.pallette.primary.base};
  font-size: 2.3rem;
  float: right;
  margin: 10px;
  text-align: right;
`;

const transform = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

const StyledMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
  color: ${(props) => props.theme.pallette.primary.base};
  font-size: 2.3rem;
  margin-top: 10px;
  margin-bottom: 10px;
  animation: ${transform} 0.25s linear;

  @media ${(props) => props.theme.breakpoints.md} {
    float: right;
    width: 100%;
    animation: none;
  } ;
`;

const StyledMenuItem = styled(Menu.Item)`
  background-color: ${(props) => props.theme.pallette.white};
  border: ${(props) =>
    props.errors === 0
      ? `solid ${props.theme.pallette.alerts.wellDone} 1px`
      : `solid ${props.theme.pallette.alerts.warn} 1px`};
`;

const StyledMenu = styled(Menu)`
  background-color: ${(props) => props.theme.pallette.grey};
`;

const StyledHelpButton = styled(Button)`
  width: 90%;
  margin-left: 5%;
  //position: absolute;

  & > svg {
    margin-left: ${(props) => (props.collapsed === 'true' ? '0' : '5px')};
  }
`;

const StyledHamburgerMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h3 {
    margin: 0;
    padding: 0;
    width: 200px;
    margin-left: 30px;
    font-weight: 600;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ApplicationPortalNav = ({ setModalVisible }) => {
  const [collapsed, setCollapsed] = useState(true);
  const isMdWidth = useMedia({ minWidth: 768 });
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    setNavData([
      {
        title: 'Beskrivelse av arrangementet',
        icon: faEdit,
        disabled: true,
        route: '',
      },
      {
        title: 'Serveringsbevilling',
        icon: faUtensils,
        disabled: false,
        route: '/soknadsportal/serveringsbevilling',
      },
      {
        title: 'Sjenkebevilling',
        icon: faBeer,
        disabled: false,
        route: '',
      },
      {
        title: 'Søknad til brannvesnet',
        icon: faFire,
        disabled: false,
        route: '',
      },
      {
        title: 'Søknad til politiet',
        icon: faAlignLeft,
        disabled: false,
        route: '',
      },
      {
        title: 'Søknad om sperring av vei',
        icon: faRoad,
        disabled: false,
        route: '',
      },
      {
        title: 'ROS-analyse el-anlegg/utstyr',
        icon: faChartBar,
        disabled: false,
        route: '',
      },
      {
        title: 'Beskjed til miljøavdeling',
        icon: faSmog,
        disabled: false,
        route: '',
      },
    ]);
    // console.log(eventInformation);
  }, []);

  useEffect(() => {
    // console.log(navData);
  }, [navData]);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    if (isMdWidth) handleCollapse();
  }, [isMdWidth]);

  return (
    <StyledSider width="300" trigger={null} collapsible collapsed={collapsed}>
      <StyledHamburgerMenuWrapper>
        {!collapsed && <h3>Søknader og opplysninger</h3>}

        {collapsed ? (
          <StyledMenuUnfoldOutlined onClick={handleCollapse} />
        ) : (
          <StyledMenuFoldOutlined onClick={handleCollapse} />
        )}
      </StyledHamburgerMenuWrapper>
      <StyledMenu
        mode="inline"
        defaultSelectedKeys={['99']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        {(isMdWidth || !collapsed) && (
          <StyledMenuItem
            // errors={eventResponsibleEmptyFields}
            icon={<FontAwesomeIcon icon={faInfo} />}
            key="99"
          >
            <Link href="/about">
              <a>Generell informasjon</a>
            </Link>
          </StyledMenuItem>
        )}

        {(isMdWidth || !collapsed) &&
          navData.map((element, index) => (
            <StyledMenuItem
              // errors={eventResponsibleEmptyFields}
              icon={<FontAwesomeIcon icon={element.icon} />}
              key={index}
              disabled={!element.disabled}
            >
              <Link href="/about">
                <a>{element.title}</a>
              </Link>
            </StyledMenuItem>
          ))}
      </StyledMenu>
      {/* (isMdWidth || !collapsed) && (
        <StyledHelpButton
          collapsed={collapsed.toString()}
          onClick={() => setModalVisible(true)}
        >
          {!collapsed && 'Hjelp'} <FontAwesomeIcon icon={faQuestionCircle} />
        </StyledHelpButton>
      ) */}
    </StyledSider>
  );
};

export default ApplicationPortalNav;
