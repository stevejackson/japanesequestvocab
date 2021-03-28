import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import * as React from 'react'

const DefinitionItem = ({ term, classes, children }) => (
  <TableRow>
    <TableCell component="th" scope="row" className={classes.term}>
      {term}
    </TableCell>
    <TableCell className={classes.description}>{children}</TableCell>
  </TableRow>
)

export default withStyles(theme => ({
  term: {
    backgroundColor: theme.palette.background.default,
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all'
  },
  description: {
    width: '100%'
  }
}))(DefinitionItem)
