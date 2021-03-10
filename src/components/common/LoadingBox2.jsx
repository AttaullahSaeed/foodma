import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Row, Col, Container, Dropdown, Accordion, Button, Form, Spinner } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const LoadingBox2 = () => {
    const classes = useStyles();
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className={classes.root}>
           
                {/* <CircularProgress /> */}
                <Col md={12} className="text-center load-more">
									<Button variant="primary" type="button" disabled="">
										<Spinner animation="grow" size="sm" className='mr-1' />
				                        Loading...
			                        </Button>
								</Col>
            </div>
        </div>
    )
}

export default LoadingBox2