import { Collapse } from 'antd';
import styled from 'styled-components';
import PersonaliaCard from '../../components/cards/personaliacard/index.jsx';
import StyledH1 from '../../components/titles/H1.jsx';
import PersonaliaForm from '../../components/forms/personaliaform/index.jsx';
import DropDownHeader from '../../components/headers/dropdownheader/index.jsx';
import ApplicationPortal from ".."

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

const StyledPanel = styled(Panel)``;

const StyledWarningWrapper = styled.div`
  border: ${(props) =>
    props.warning
      ? `solid ${props.theme.pallette.alerts.warn} 1px`
      : `solid ${props.theme.pallette.alerts.wellDone} 1px`};
  border-radius: 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: -13px;
  margin-bottom: -13px;
  margin-right: -16.6px;
  margin-left: -13px;
  padding: 10px;
`;

const StyledArrowHeaderWrapper = styled.span`
  display: flex;
  align-items: center;

  & > h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
  }

  & > svg {
    margin-right: 12px;
    transition: transform 0.1s ease-out;
    transform: ${(props) => (props.animate ? 'rotate(-90deg)' : 'rotate(0)')};
  }
`;

const StyledMessageWrapper = styled.span`
  display: flex;
  align-items: center;

  & > svg {
    color: ${(props) =>
      props.warning
        ? props.theme.pallette.alerts.warn
        : props.theme.pallette.alerts.wellDone};
  }
  & > p {
    margin: 0;
    padding: 0;
    margin-right: 10px;
  }
`;

const GeneralInformation = () => (
  <ApplicationPortal>
    <StyledH1>Generell informasjon</StyledH1>
    <PersonaliaCard />
    <StyledCollapse defaultActiveKey={['2', '3', '4', '9']}>
      <StyledPanel
        showArrow={false}
        key="9"
        header={<DropDownHeader text="Formik" />}
      >
        <PersonaliaForm />
      </StyledPanel>
    </StyledCollapse>
  </ApplicationPortal>
);

export default GeneralInformation;
