import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  faCaretDown,
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useInputContext } from '../../../context/InputContext.jsx';

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

const StyledMessageWrapper = styled.div`
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

const StyledArrowHeaderWrapper = styled.div`
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

const DropDownHeader = ({ text, successMessage, warningMessage }) => {
  const { personaliaFormikProvider } = useInputContext();
  const [animating, setAnimating] = useState(false);

  const { errors, values } = personaliaFormikProvider;

  return (
    <StyledWarningWrapper
      onClick={() => setAnimating((prev) => !prev)}
      warning={Object.keys(errors).length !== 0}
    >
      <StyledArrowHeaderWrapper animate={animating}>
        <FontAwesomeIcon icon={faCaretDown} />
        <h2>{text}</h2>
      </StyledArrowHeaderWrapper>
      <StyledMessageWrapper warning={Object.keys(errors).length !== 0}>
        <p>
          {Object.keys(errors).length !== 0
            ? `Fyll inn ${
                Object.keys(errors).length
              } felter med gyldig informasjon`
            : 'Alle felter godkjent'}
        </p>
        <FontAwesomeIcon
          icon={
            Object.keys(errors).length === 0
              ? faCheckCircle
              : faExclamationTriangle
          }
        />
      </StyledMessageWrapper>
    </StyledWarningWrapper>
  );
};

export default DropDownHeader;
