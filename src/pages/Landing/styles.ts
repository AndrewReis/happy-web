import styled from 'styled-components';

import background from '../../images/background.svg';

export const Container = styled.div`
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  width: 100%; 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1120px;
  height: 100%;
  max-height: 680px;


  display: flex;
  flex-direction: column;
  
  align-items: flex-start;
  justify-content: space-around;
  background: url(${background}) no-repeat 80% center;

  main {
    max-width: 394px;
    h1 {
      font-size: 86px;
      line-height: 74px;
    }
    p{
      margin-top: 40px;
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
    }
  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    position: absolute;
    right: 0;
    bottom: 0;

    background: #FFD666;
    border-radius: 30px;
    transition: background 0.2s;

    &:hover {
      background: #96FEFF;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
    font-size: 24px;
    line-height: 34px;
  }
  span {
    font-size: 20px;
  }
`;



