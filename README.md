Evaluate news article with Natural language processing (NLP)

4th Project for UDACITY NanoDegree

Overview
Build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral. Following are the project prerequisites:

Webserver - Node.js
Web application framework for routing - Express
Build tool - Webpack. Using Webpack, set up the app to have dev and prod environments, each with its own set of tools and commands.
External script - Service Worker
External API - Meaning Cloud

File

package-lock.json
package.json
webpack.dev.js
webpack.prod.js
.babelrc
.gitignore

src Folder

  client Folder
    index.js
    img Folder
    js Folder
      formHandler.js
      nameChecker.js
      urlChecker.js
    styles Folder
      base.scss
      footer.scss
      form.scss
      header.css
    views folder
      index.html

  server Folder
    index.js
    mockAPI.js

 test Folder
   testFormHandler.test.js
   testUrlChecker.test.js


Summary:

Learning summary list:
Setting up Webpack
Sass styles
Webpack Loaders and Plugins
Creating layouts and page design
Using APIs and creating requests to external URLs
Unit Testing using Jest Framework
Service workers


How to use this project:

In the project, you must have Key from MeaningCloud for the project to run
in my project, I used a .env file and add the key, and installed
npm install dotenv
in .env file add your Meaning Cloud API KEy as :
API_KEY=**************************

Open command line

$cd (project directory)
$npm install
Open two different command line window
In the first terminal run : $npm run build-dev
In the second terminal run :
$npm run build-prod
$npm run start