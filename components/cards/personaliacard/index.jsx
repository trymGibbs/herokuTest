import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Skeleton, Card, Avatar, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { useApplicationContext } from '../../context/ApplicationContext';

const { Meta } = Card;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.pallette.primary.light.shade3};
  margin: 0;
  margin-bottom: 5px;
`;

const StyledSkeleton = styled(Skeleton)`
  background-color: grey;
`;

const StyledButton = styled(Button)`
  margin-right: 5px;

  & > svg {
    margin-left: 5px;
  }
`;

const PersonaliaCard = () => {
  const [loading, setLoading] = useState(true);
  // const { handleAutoFill } = useApplicationContext();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <StyledCard loading={loading}>
      <StyledSkeleton loading={false} avatar active>
        <Meta
          avatar={
            <Avatar
              size={100}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          }
          title="Logget inn som Ola Nordmann"
          description="Informasjon informasjon informasjon informasjon Informasjon informasjon informasjon informasjon"
        />
      </StyledSkeleton>
      <StyledButton type="primary">
        Autofyll ansvarlig <FontAwesomeIcon icon={faEdit} />
      </StyledButton>
      <StyledButton>
        Konto <FontAwesomeIcon icon={faUserCircle} />
      </StyledButton>
    </StyledCard>
  );
};

export default PersonaliaCard;
