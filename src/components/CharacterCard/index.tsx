import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardHeader } from "@mui/material";
import { API, PokemonImg } from "../../services";
import { usePokemonProvider } from "../../providers/PokemonProvider";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../../assets/img/heartFavHomeIcon.png";
import { handleIsFavorite } from "../../helpers/handleIsFavorite";

const CharacterCard = ({ ...props }: { name: string; id: string }) => {
  const { setCharacterInfo } = usePokemonProvider();

  const navigate = useNavigate();

  // get specific pokemon info with id and set it on context, than changes page to character info
  const handleCharacterInfo = () => {
    API.get(`pokemon/${props.id}`).then((response) => {
      setCharacterInfo(response.data);
      navigate("/character-info");
    });
  };

  return (
    <Card
      sx={{ maxWidth: 175, width: 175 }}
      onClick={handleCharacterInfo}
      style={{ margin: "2%", backgroundColor: "#f6f0d4" }}
    >
      <CardHeader
        // if pokemon is favorite, show a heart icon. Else show nothing
        avatar={
          handleIsFavorite(props.id) ? (
            <img
              src={HeartIcon}
              alt="heart-icon"
              style={{ width: 35, height: 25 }}
            />
          ) : null
        }
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // get a directly pokemon image with id
          image={PokemonImg(props.id)}
          alt="pokemon image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
