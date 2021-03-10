import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(7),
        },
    },
}));

const LoadingBox = () => {
    const classes = useStyles();
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className={classes.root}>
           
                <CircularProgress />
              
            </div>
        </div>
    )
}

export default LoadingBox