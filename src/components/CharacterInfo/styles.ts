import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  font-family: Poke-hollow-font;
  width: 100%;
  min-height: 100vh;

  .to-home-button {
    position: fixed;
    right: 2%;
    bottom: 7%;
    width: 120px;
    height: 70px;
    font-family: Poke-font;
    cursor: pointer;
  }

  .to-home-button > img {
    width: 80px;
  }

  .to-home-button > p {
    margin: -45px 0px 0px;
    font-size: 20px;
  }

  .profile-card {
    display: flex;
    width: 92%;
    margin: 20px auto 0px;
    height: fit-content;
    background-color: #f6f0d4;
    padding: 2%;
    border-radius: 10px;
  }

  .sprites-container {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: space-evenly;
    margin: 0px auto;
    margin-top: 30px;
  }

  .sprites-container > img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #d3c593;
  }
`;
