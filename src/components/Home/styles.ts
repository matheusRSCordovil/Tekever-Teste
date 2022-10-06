import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
    font-family: "Poke-hollow-font";
  }

  .pokemon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    margin: auto;
  }

  .favorite-button {
    position: fixed;
    right: 2%;
    bottom: 5%;
    width: 120px;
    height: 70px;
    font-family: Poke-font;
    cursor: pointer;
  }

  .favorite-button > img {
    width: 55px;
  }

  .favorite-button > p {
    margin: -28px 0px 0px;
    font-size: 20px;
  }

  .pagination {
    display: flex;
    width: 4%;
    margin: 20px auto;
    justify-content: space-between;
  }
`;
