import React, { useState, useEffect } from 'react';
import { Button, Badge } from 'antd';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const Step = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
    background-color: transparent;
  }

  &:hover {
    background-color: transparent;
    transform: scale(1.05);
    will-change: transform;
  }
`;

const StepIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  font-size: 20px;
`;

const StepTailContainer = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 1.7rem;
`;

const StepTailIcon = styled(FontAwesomeIcon)`
  font-size: 10px;
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 7px;
`;

function CustomStepsPriority({ eventData, cardIndex, cardId, currentStep }) {
  useEffect(() => {}, [eventData]);

  const defineStepIcon = (agencyStatus) => {
    const choosenIcon = [];

    if (agencyStatus === 1) {
      choosenIcon.push(faCheckCircle);
      choosenIcon.push('complete-icon');
    } else if (agencyStatus === 2) {
      choosenIcon.push(faQuestionCircle);
      choosenIcon.push('warning-icon');
    } else if (agencyStatus === 3) {
      choosenIcon.push(faTimesCircle);
      choosenIcon.push('error-icon');
    }
    return choosenIcon;
  };

  return (
    <>
      {eventData &&
        eventData.map((agency, index) => (
          <>
            <FlexContainerColumn key={index}>
              <Step id={cardId} onClick={() => currentStep(index)}>
                <StepIcon
                  icon={defineStepIcon(agency.status)[0]}
                  className={defineStepIcon(agency.status)[1]}
                />

                {agency.name}
              </Step>
            </FlexContainerColumn>
          </>
        ))}
    </>
  );
}

export default CustomStepsPriority;
