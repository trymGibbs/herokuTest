import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import DashboardSideNav from '../../components/navigations/dashboardsidenav/index.jsx';
import Column from '../../components/columns/index.jsx';
import MainPageHeader from '../../components/headers/dashboardheader/index.jsx';
import EventCard from '../../components/cards/dashbord/eventcard/index.jsx';
import PriorityEventCard from '../../components/cards/dashbord/priorityec/index.jsx';
import events from '../../data/Events.jsx';

const { Content } = Layout;

const StyledContent = styled(Content)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 595px);
  height: 80vh;
  height: calc(100vh - 135px);
  background-color: ${(props) => props.theme.pallette.grey};
  padding: 10px;
  margin-top: 10px;
  max-width: 100%;
  grid-area: content;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  grid-template-rows: 15% 85%;
  grid-template-areas:
    'header header'
    'sider content'
    'sider content';
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media ${'(max-width: 1334px)'} {
  }
`;

const MunicipalityDashboard = () => {
  const [eventList, setEventList] = useState();
  const [prioritized, setPrioritized] = useState([]);
  const [selected, setSelected] = useState();

  function compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  const sortByName = (event) => {
    setPrioritized(prioritized.sort((a, b) => a.title - b.title));
    console.log(event.target);
  };

  useEffect(() => {
    setEventList(events);
  }, [eventList, prioritized]);

  return (
    <>
      <Grid>
        <MainPageHeader style={{ gridArea: 'header' }} />
        {console.log(prioritized)}
        <DashboardSideNav />
        <StyledContent>
          {console.log(selected)}
          <Column
            title="Alle arangementer"
            selectMode=""
            options={[
              { value: 'slå på varsler' },
              { value: 'skru av varsler' },
            ]}
            placeholder="Velg en innstilling"
            selected={selected}
            setSelected={setSelected}
          >
            {eventList &&
              eventList.map((theEvent, index) => (
                <EventCard
                  title={theEvent.title}
                  wordCount={theEvent.size}
                  remainingFields={theEvent.fieldsRemaining}
                  lastAnswer={theEvent.lastAnswer}
                  key={index}
                  eventIndex={index}
                  setPrioritized={setPrioritized}
                  eventId={theEvent.id}
                />
              ))}
          </Column>
          <Column
            title="Dine prioriterte søknader"
            selectMode="tags"
            options={[
              { value: 'Sorter på navn' },
              { value: 'Sorter på størrelse' },
            ]}
            placeholder="Sorter arrangementer.."
            selected={selected}
            setSelected={setSelected}
          >
            {prioritized &&
              prioritized.map((theEvent, index) => (
                <PriorityEventCard
                  title={theEvent.title}
                  wordCount={theEvent.size}
                  remainingFields={theEvent.fieldsRemaining}
                  lastAnswer={theEvent.lastAnswer}
                  key={index}
                  eventIndex={index}
                  setPrioritized={setPrioritized}
                  priorityEvents={prioritized}
                  eventId={theEvent.id}
                />
              ))}
          </Column>
          <Column title="Egendefinert kolonne" dropdownTitle="Legg til" />
        </StyledContent>
      </Grid>
    </>
  );
};

export default MunicipalityDashboard;
