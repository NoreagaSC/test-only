import styled from 'styled-components';

const StyledContent = styled.div`
  position: relative;
  width: 1440px;
  height: 1080px;
  margin-left: 320px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid rgba(66, 86, 122, 0.1);
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(66, 86, 122, 0.1);
  position: relative;
`;

export { GridItem, StyledContent };
