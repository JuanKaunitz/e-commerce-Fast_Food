import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor:"white"
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
    height: 80,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function CardCategories({
  id,
  name,
  image,
  types,
  deleteCategory,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia
          className={classes.cover}
          image={image}
          title="Our categories"
        />
      </div>
      <div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
        </CardContent>
      </div>
      <div className={classes.controls}>
        <Typography variant="subtitle1" color="textSecondary">
          {types}
        </Typography>
      </div>
      <div>
        <IconButton onClick={() => deleteCategory(id)}>
          <DeleteIcon />
        </IconButton>
        <Link  variant="body2" color='secondary' to={`/categoryDetail/${id}`}>
          Editar
        </Link>
      </div>
    </Card>
  );
}
