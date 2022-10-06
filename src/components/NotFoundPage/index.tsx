import PikachuFace from "../../assets/img/404_image.png";

const NotFoundPage = () => {
  return (
    <div>
      <img src={PikachuFace} alt="Pikachu Face" width="50%" />
      <p style={{ fontFamily: "Poke-font" }}>404 Not Found</p>
    </div>
  );
};

export default NotFoundPage;
