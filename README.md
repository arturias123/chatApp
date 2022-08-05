# chatApp

Hi, welcome to my chat web application.
# Overview

This project uses JavaScript, HTML, CSS, combined with some Firebase functions to store and access Firestore documents and Webpack to bundle the JS files.
# Installation

1\. Clone the repository:

  You can clone the project whatever ways you want, either downloading it or using git clone.

2\. Install the dependencies:

  Simply use npm to install the dependencies such as firebase
```bash
npm install
```
3\. Launch the project:

First build the project
```bash
npm run build
```

Then use Live Server to see the live app.

# How the components work

The 'app.js' creates a 'chatroom' instance from 'chat.js' file and calls its functions everytime the user interacts with the features, it also creates a 'chatUI' instance from 'ui.js' and call its function to re-render the UI each time there's a change.

For instance, when a user changes the room, the function 'updateRoom' from 'chat.js' will be called, then it calls 'getChat' to retrieve the chats in the new room and pass those chats to function 'render' from 'ui.js' to update the web's UI.

# Project Preview

Below is a preview picture of the project.

![Preview](/img/preview.png)
