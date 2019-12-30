import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${props => (props.theme ? props.theme.fontMedium : '2rem')};
  text-align: center;
`;

export default Title;
