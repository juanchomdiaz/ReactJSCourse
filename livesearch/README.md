A live search test app!


### Step 1 - Node Modules

    npm install

### Step 2 - Running the App

    npm run servers
 
## Front End App Folder

All of the front end source code can be found in the './app' folder. A description of each subfolder is as follows:

### images

Here you can (optionally)  place images that can be processed with the npm command:

    npm run image-min

This will minify the images and put them into the '.local_server/img/' folder.

### sass

Here you will find the SCSS files, we use Sass on the project to compile down to CSS. These files will be automatically compiled upon save when you are running the standard 'npm run dev-server' command. However you can compile this yourself by running this command:

    npm run sass

## Node Back End Server Folder

### app.js

To start the server on its own you can run this command:

    npm run node-server

