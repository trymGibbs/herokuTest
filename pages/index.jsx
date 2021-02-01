import { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import ApplicationPortalNav from '../components/navigations/applicationportalnav/index.jsx';
import HelpModal from '../components/modals/helpModal';
import Link from "next/link"

const { Content } = Layout;

const StyledContent = styled(Content)`
  height: 100%;
  background-color: ${(props) => props.theme.pallette.grey};
  padding-left: 1px;
  padding-top: 55px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 10px;
    padding: 10px;
  } ;
`;

const ApplicationPortal = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ApplicationPortalNav setModalVisible={setModalVisible} />
      <StyledContent>
        {children}
      </StyledContent>
      <HelpModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default ApplicationPortal;
