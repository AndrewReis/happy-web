import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  position: relative;


    > a {
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      background: #15C3D6;
      border-radius: 20px;

      position: absolute;
      bottom: 35px;
      right: 45px;
    }

    .leaflet-container{
      z-index: 5;
    }
`;


export const AsideBar = styled.aside`
  padding-left: 100px;
  width: 440px;
  height: 100%; 
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  header {
    width: 233px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
      margin-top: 80px;
      font-weight: 800; 
      font-size: 40px;
      line-height: 42px;
    }
    p {
      margin-top: 24px;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    text-align: left;

      strong {
        font-weight: 800;
        font-size: 24px;
        line-height: 34px;
      }
      span {
        font-size: 20px;
      }
  }
`;


