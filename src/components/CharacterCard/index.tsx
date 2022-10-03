import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { API, PokemonImg } from "../../services";
import { useCharacterInfoProvider } from "../../providers/CharacterInfoProvider";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ ...props }: { name: string; id: number }) => {
  const { setCharacterInfo } = useCharacterInfoProvider();

  const navigate = useNavigate();

  const handleCharacterInfo = async () => {
    API.get(`pokemon/${props.id}`).then((response) => {
      setCharacterInfo(response.data);
      navigate("/character-info");
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleCharacterInfo}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
