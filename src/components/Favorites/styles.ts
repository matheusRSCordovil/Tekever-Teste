import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
    font-family: "Poke-hollow-font";
  }

  .pokemon-favorites-list {
    display: flex;
    flex-wrap: wrap;
  }

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
`;
