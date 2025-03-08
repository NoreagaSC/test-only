import { COLORS, MEDIA } from 'shared';
import styled from 'styled-components';

const DateWrapper = styled.div`
  display: flex;

  ${MEDIA.desktop} {
    position: absolute;
    inset: 0;
    margin: auto;

    height: 160px;
    width: 973px;

    font-size: 200px;
    font-weight: 700;
    line-height: 160px;

    gap: 40px;

    z-index: -1;
  }

  ${MEDIA.mobile} {
    gap: 20px;
    margin: 104px auto 0 20px;
    font-size: 56px;
    line-height: 100%;

    padding-bottom: 74px;
    border-bottom: 1px solid #c7cdd9;

    letter-spacing: -2px;
  }
`;

const NumberWrapper = styled.div<{ color: string }>`
  display: flex;
  color: ${({ color }) => COLORS[color]};

  ${MEDIA.desktop} {
    gap: 10px;
  }
`;

const Digit = styled.div`
  overflow: hidden;
  font-weight: 700;

  ${MEDIA.desktop} {
    position: relative;
    width: 100px;
    height: 160px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 200px;
    line-height: 160px;
  }
`;

export { DateWrapper, Digit, NumberWrapper };
