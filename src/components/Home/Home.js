import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Navbar, AddTimeTable, AddTeachersRooms, SavedTimeTables } from '../../components/';
import ComponentWrappers from '../../ComponentWrappers';

import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import rep from './calender-512.png';

const welcome = () => <h3>Welcome to TT</h3>;

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Route exact path="/addnew" component={AddTimeTable} />
        <Route exact path="/addnew/:key" component={AddTimeTable} />
        <Route exact path="/saved" component={SavedTimeTables} />
        <Route exact path="/teachers" component={AddTeachersRooms} />
        <Route exact path="/rooms" component={AddTeachersRooms} />

      <Card style={{margin: 80, width: '18.6%', marginLeft:80, display: 'inline-block'}}>
        <div>
          <img src={rep} alt="Live from space album cover" style={{width: 250, height: 250}} />
        </div>
      </Card>

      <Card style={{margin: 80, width: '60%', marginLeft:0, display: 'inline-block'}}>
        <CardContent>
          <Typography type="headline" component="h1">
            Welcome to Timetable Generator
          </Typography>
          <Typography type="body1" color="secondary">
            An IEEE Project
          </Typography>
            <hr></hr>
            <br></br>
          <Typography component="p">
            Timetable generator capable of auto-generating separate timetable for Teachers and Rooms in the Institute based on the Class timetable created/auto-generated by the user.
            <br></br><br></br>This will allow User to create and modify timetables easily and have them hosted online so that they can be retrieved easily.
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="accent">Get Started</Button>
        </CardActions>
      </Card>


      </div>
    );
  }
}

export default ComponentWrappers(Home);
