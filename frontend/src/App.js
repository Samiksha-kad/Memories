import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Forms';
import useStyles from './styles';
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/postsactions'
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(0)

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src="https://socialtelecast.com/wp-content/uploads/2020/02/rose-day-images.jpg" alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;