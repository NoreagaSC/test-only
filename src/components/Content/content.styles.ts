import { MEDIA } from 'shared';
import styled from 'styled-components';

const StyledContent = styled.div`
  ${MEDIA.desktop} {
    position: relative;
    width: 1440px;
    height: 1080px;
    margin: 0 160px 0 320px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    border: 1px solid rgba(66, 86, 122, 0.1);
  }

  ${MEDIA.mobile} {
    width: auto;
    height: auto;
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(66, 86, 122, 0.1);
  position: relative;
`;

export { GridItem, StyledContent };
