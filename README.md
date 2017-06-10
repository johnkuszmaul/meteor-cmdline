## How to use

If you want to test some JavaScript code quickly, create an empty GitHub repository, manually copy the files from this one and write your code in `server/main.js`.
Then, you can run your code using:

    meteor --once

To exit, you'll have to `Ctrl+C`.

**Do not** modify this repository directly.

## How this was set up 

When I set up this repo, I followed the tutorial [here](http://practicalmeteor.com/writing-command-line-programs-with-meteor/). Just an FYI. No need to redo this

    meteor remove meteor-platform

    meteor remove autopublish insecure

    meteor add meteor

    meteor add mongo

    meteor add trackery

    meteor add http
    
    meteor remove blaze-html-templates reactive-var mobile-experience
