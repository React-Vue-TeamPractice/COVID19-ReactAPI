import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));
  
  export const CircularDeterminate = () => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
  
    React.useEffect(() => {
      const tick = () => {
        setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
      }
  
      const timer = setInterval(tick, 20);
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className={classes.root}>
        <CircularProgress variant="determinate" value={progress} />
      </div>
    );
  }