import * as React from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    "&:hover": {
      boxShadow: "4px 4px 2px rgb(150, 150, 150, 1)",
    }
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundColor: 'rgb(240, 240, 240, 1)',
    cursor: "pointer",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export const VocabularyWordCard = ({vocabularyWord, onShowVocabWordDetails}) => {
  const classes = useStyles();

  const imageLocation = vocabularyWord.screenshot ? vocabularyWord.screenshot.substring(7) : null

  return (
    <Grid item key={vocabularyWord.powerlevel} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={imageLocation}
          title="Image title"
          onClick={onShowVocabWordDetails}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {vocabularyWord.powerlevel}: {vocabularyWord.expression}
          </Typography>
          <Typography>
            {vocabularyWord.definition}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onShowVocabWordDetails}>
            View Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
