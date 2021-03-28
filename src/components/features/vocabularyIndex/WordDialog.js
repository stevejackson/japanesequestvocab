import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DefinitionList from "../../patternLibrary/DefinitionList";
import DefinitionItem from "../../patternLibrary/DefinitionItem";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function WordDialog({vocabularyWord, open, onClose}) {
  if(!open) {
    return <></>
  }

  const imageLocation = vocabularyWord.screenshot ? vocabularyWord.screenshot.substring(7) : null

  const contentOrMdash = (content) => content ? content : <>&mdash;</>

  return (
    <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open} maxWidth={"md"}>
      <DialogTitle id="customized-dialog-title" onClose={onClose}>
        {vocabularyWord.powerlevel}: {vocabularyWord.expression}
      </DialogTitle>
      <DialogContent dividers>
        <DefinitionList>
          <DefinitionItem term="Power Level">{vocabularyWord.powerlevel}</DefinitionItem>
          <DefinitionItem term="Expression">{vocabularyWord.expression}</DefinitionItem>
          <DefinitionItem term="Pronunciation">{vocabularyWord.pronunciation}</DefinitionItem>
          <DefinitionItem term="Definition">{contentOrMdash(vocabularyWord.definition)}</DefinitionItem>
          <DefinitionItem term="Notes">{contentOrMdash(vocabularyWord.notes)}</DefinitionItem>
          <DefinitionItem term="Screenshot">
            {contentOrMdash(imageLocation &&
              <img src={imageLocation} alt={vocabularyWord.expression} style={{
                width: "100%",
              }}/>)
            }
          </DefinitionItem>
          <DefinitionItem term="Game">{contentOrMdash(vocabularyWord.game)}</DefinitionItem>
          <DefinitionItem term="Episode">{contentOrMdash(vocabularyWord.episode)}</DefinitionItem>
          <DefinitionItem term="Video URL">
            {contentOrMdash(vocabularyWord.videolink &&
              <a href={vocabularyWord.videolink}>Click here</a>)
            }
          </DefinitionItem>
        </DefinitionList>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
