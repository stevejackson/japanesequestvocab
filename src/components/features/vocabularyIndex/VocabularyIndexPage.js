import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {VocabularyWordCard} from "./VocabularyWordCard";

import TablePagination from '@material-ui/core/TablePagination';
import WordDialog from "./WordDialog";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const VocabularyIndexPage = ({vocabularyWords}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [wordToDisplayDetails, setWordToDisplayDetails] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let displayedVocabularyWords = vocabularyWords.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Japanese Quest
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Level up with us.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Visit the JapaneseQuest Twitch Channel
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <TablePagination
            component="div"
            count={vocabularyWords.length}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />

          <Grid container spacing={4}>
            {displayedVocabularyWords.map(vocabularyWord =>
              <VocabularyWordCard key={vocabularyWord.powerlevel}
                                  vocabularyWord={vocabularyWord}
                                  onShowVocabWordDetails={() => setWordToDisplayDetails(vocabularyWord)}
              /> )
            }
          </Grid>

          <TablePagination
            component="div"
            count={vocabularyWords.length}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      <WordDialog open={Boolean(wordToDisplayDetails)}
                  onClose={() => setWordToDisplayDetails(null)}
                  vocabularyWord={wordToDisplayDetails}
      />
      {/* End footer */}
    </React.Fragment>
  );
}


export default VocabularyIndexPage
