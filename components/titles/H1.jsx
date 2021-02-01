import styled from 'styled-components';

const StyledH1 = styled.h1`
  background-color: ${(props) => props.theme.pallette.primary.light.shade3};
  margin: 0;
  padding: 10px;
  padding-left: 5px;
  margin-bottom: 5px;
  border: solid 1px ${(props) => props.theme.pallette.primary.light.shade2};

  font-weight: 600;
  font-size: 2rem;
`;

export default StyledH1;
