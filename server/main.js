import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("I'm a meteor command line program!");
});

// NOTE: This doesn't seem to do it: we get some warning about two main functions
//main = function(argv) {
//};

