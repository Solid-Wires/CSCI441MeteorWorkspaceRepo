import React from 'react';
import {createRoot} from 'react-dom/client';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

Meteor.startup(() => {
  Tracker.autorun(() => { 
    // ReactDOM.render was considered deprecated, so I did this slightly differently
    // This is how we're supposed to do it, according to React 18.
    createRoot(document.getElementById('site')).render(
      <>
        <h1>Hello world!</h1>
      </>
    );
  })
});
