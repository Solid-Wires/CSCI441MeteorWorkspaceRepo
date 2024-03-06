import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
//import './main.html';

Meteor.startup(function () {

  let jsx = (
    <div>
      <h1>I am a JSX!</h1>
    </div>
  );
  ReactDom.render(jsx, document.getElementById('content'));
  console.log("Hello world, from client!");
});
