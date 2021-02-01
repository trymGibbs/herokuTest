import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Steps, Card, Collapse, Badge, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbtack,
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import './index.less';
import agencies from '../../../../data/Agency';
import events from '../../../../data/Events';
import CardTag from '../../../tags/cardtag/index';
import CardPin from '../childs/cardPin/index';
import CustomSteps from '../../../steps/customsteps/index.jsx';
import ContactInfo from '../childs/contactInfo/index';

const { Meta } = Card;
const { Panel } = Collapse;
const { Step } = Steps;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.pallette.grey};
  margin: 0;
  width: 98%;
  border: 0.5px solid #d6d6d6;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const StyledCollapse = styled(Collapse)`
  width: 100%;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.pallette.primary.light.shade3};
`;

const StyledBadge = styled(Badge)`
  font-size: 20px;

  &:hover {
    font-size: 30px;
  }
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 7px;
`;

const FlexContainerRowSmall = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 38%;
  justify-content: space-between;
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 7px;
`;

const ParagraphNoMargin = styled.p`
  margin: 0;
`;

const EventCard = ({
  title,
  wordCount,
  remainingFields,
  lastAnswer,
  eventIndex,
  setPrioritized,
  eventId,
}) => {
  const [collapseState, setCollapseState] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [currentStep, setCurrentStep] = useState();
  const [sortedInfo, setSortedInfo] = useState(
    events[eventIndex].completion.sort((a, b) => a.status - b.status)
  );

  const applianceSize = () => {
    let size = '';
    if (wordCount < 2000) size = `${'Liten'} søknad ${wordCount}`;
    else if (wordCount > 2000 && wordCount < 5000)
      size = `${'Medium'} søknad ${wordCount}`;
    else size = `${'Stor'} søknad ${wordCount}`;

    return size;
  };

  const addToPrioritized = (event) => {
    setPrioritized((prev) => [...prev, events[eventIndex]]);
    setPinned(true);
  };

  useEffect(() => {}, [currentStep, sortedInfo]);

  return (
    <StyledCard bordered bodyStyle={{ padding: 0 }}>
      <FlexContainerRow>
        <h2 style={{ marginBottom: 0 }}>{title}</h2>
        <FlexContainerRowSmall>
          {remainingFields && remainingFields > 0 ? (
            <CardTag
              tagColor="warning"
              tagIcon={faQuestionCircle}
              onClickLogick={setCollapseState}
              tagText={`${remainingFields} felter krever gjennomgang`}
            />
          ) : (
            <CardTag
              tagColor="success"
              tagIcon={faCheckCircle}
              onClickLogick={setCollapseState}
              tagText="Godtatt søknad"
            />
          )}
          <CardPin
            isPinned={pinned}
            pinCheckLogic={addToPrioritized}
            checkColor1="lightgray"
            checkColor2="#048e7e"
          />
        </FlexContainerRowSmall>
      </FlexContainerRow>
      <FlexContainerColumn>
        <ParagraphNoMargin>{applianceSize()}</ParagraphNoMargin>
        <ParagraphNoMargin>{`Siste svar fra søker ${lastAnswer} timer siden`}</ParagraphNoMargin>
      </FlexContainerColumn>
      <StyledCollapse
        ghost
        expandIconPosition="right"
        activeKey={collapseState}
        onChange={() =>
          collapseState === 0 ? setCollapseState(1) : setCollapseState(0)
        }
      >
        <Panel header="Utvid for mer informasjon" key={1}>
          <ParagraphNoMargin
            style={{ paddingLeft: 20 }}
          >{`Sist behandlet: ${13}.${1}.${2021} - ${17}:${17}:${17}`}</ParagraphNoMargin>
          <ParagraphNoMargin
            style={{ paddingLeft: 43, marginBottom: '2rem' }}
          >{`Sendt inn: ${13}.${1}.${2021} - ${10}:${15}:${17}`}</ParagraphNoMargin>
          <FlexContainerRow>
            <FlexContainerColumn>
              <CustomSteps
                cardId={eventId}
                cardIndex={eventIndex}
                eventData={sortedInfo}
                key={eventIndex * Math.random()}
                currentStep={setCurrentStep}
              />
            </FlexContainerColumn>
            {currentStep && (
              <ContactInfo contactInfo={sortedInfo} currentStep={currentStep} />
            )}
          </FlexContainerRow>
        </Panel>
      </StyledCollapse>
    </StyledCard>
  );
};

export default EventCard;
