import { styled } from "@mui/material/styles";
import { useState } from "react";
import type { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import type { Block } from "_types/block.types";
import Avatar from "boring-avatars";
import { shortenHash } from "_utils/hash.utils";
import RelativeDateView from "_views/relative-date/RelativeDate.view";

interface BlockListItemViewProps {
  item: Block;
}

const ExpandMore = styled((props) => {
  // @ts-expect-error
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  // @ts-expect-error
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BlockListItemView: FC<BlockListItemViewProps> = ({
  item: { hash, imageUrl, timestamp, transactions, difficulty, parentHash },
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2, borderRadius: 0 }}>
      <CardHeader
        avatar={
          <Avatar
            size={40}
            name={hash}
            variant="marble"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={shortenHash(hash)}
        subheader={shortenHash(parentHash)}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          alt="Random image"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <RelativeDateView date={timestamp} /> ago
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {transactions.length} transaction
          {transactions.length === 1 ? "" : "s"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {difficulty} difficulty
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          // @ts-expect-error
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {transactions.map((transaction) => (
            <Typography key={transaction}>
              {shortenHash(transaction)}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BlockListItemView;
