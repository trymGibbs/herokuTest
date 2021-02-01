import styled from 'styled-components';

const StyledH2 = styled.h2`
  background-color: ${(props) => props.theme.pallette.primary.light.shade3};

  margin: 0;
  padding: 5px;
  padding-left: 5px;
  //border: solid 1px ${(props) => props.theme.pallette.primary.light.shade2};

  font-weight: 600;
  font-size: 1.5rem;
`;

export default StyledH2;
