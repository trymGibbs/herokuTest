import styled from 'styled-components';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const StyledMenu = styled(Menu)`
  margin-left: auto;

  @media ${'(min-width: 992px)'} {
    width: 260px;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  font-size: 1.5rem;

  & > svg {
    margin-right: 3px;
  }
`;

const MainNav = () => {
  console.log();

  return (
    <StyledMenu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
      <StyledMenuItem key="1">
        <FontAwesomeIcon icon={faHome} />
        Utforsk
      </StyledMenuItem>
      <StyledMenuItem key="2">
        <FontAwesomeIcon icon={faSignInAlt} />
        Logg inn
      </StyledMenuItem>
    </StyledMenu>
  );
};

export default MainNav;
