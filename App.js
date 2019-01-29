import React from 'react';
import { Home } from './apps/views/Home.js';
import { Contact } from './apps/views/Contact.js';
import { StackNavigator } from 'react-navigation';

import { Video } from './apps/views/Video.js';
import { VideoDetail } from './apps/views/VideoDetail.js';
import { Register } from './apps/views/Register.js';
import { Login } from './apps/views/Login.js';

import { Quiz } from './apps/views/Quiz.js';
import { Finish } from './apps/views/QuizFinish.js';

import { Blog } from './apps/views/Blog.js';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {
    screen: Finish
  },
  BlogRT: {
    screen: Blog
  },
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}



