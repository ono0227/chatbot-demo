import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles(() =>
    createStyles({
        "button": {
            borderColor: '#FFB549',
            color: '#FFB549',
            fontWeight: 600,
            marginBottom: '8px',
            "&:hover": {
                backgroundColor: '#FFB549',
                color: '#fff'
            }
        }
    })
);

const Answer = (props) => {
    const classes = useStyles();

    return (
        <Button 
        className={classes.button}
        variant="outlined" onClick={() => props.select(props.content, props.nextId)}> 
            {props.content}
        </Button>
    );
}

export default Answer
