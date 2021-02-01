import { Collapse } from 'antd';
import styled from 'styled-components';
import PersonaliaCard from '../../../components/cards/personaliacard/index.jsx';
import StyledH1 from '../../../components/titles/H1.jsx';
import PersonaliaForm from '../../../components/forms/personaliaform/index.jsx';
import DropDownHeader from '../../../components/headers/dropdownheader/index.jsx';
import ApplicationPortal from '../..';

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
  & > div {
    font-size: 1.5rem;
    & > div {
      & > h2 {
        margin: 0;
        padding: 0;
        font-size: 1.3rem;
      }
      & > span {
      }
    }

    & > div:nth-child(2) {
      & > div {
        padding: 0;
      }
    }
  }
`;

const GeneralInformation = () => (
  <ApplicationPortal>
    <StyledH1>Generell informasjon</StyledH1>
    <PersonaliaCard />
    <StyledCollapse defaultActiveKey={['2', '3', '4', '9']}>
      <Panel
        showArrow={false}
        key="9"
        header={<DropDownHeader text="Ansvarlig" />}
      >
        <PersonaliaForm />
      </Panel>
    </StyledCollapse>
  </ApplicationPortal>
);

export default GeneralInformation;
