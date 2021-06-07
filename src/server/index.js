
var path = require('path')
// Require Express to run server and routes
const express = require('express')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
// Start up an instance of app
const app = express();

//To encrypt API key
const dotenv = require('dotenv');
dotenv.config();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));


console.log(__dirname);

//API data
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apikey = process.env.API_KEY;

app.get('/', function (req, res) {
  
    res.sendFile('dist/index.html')
})

//POST to API

let URL = [];
app.post('/urlAnalysis', async function (req, res){
    
   URL = req.body.url;//user input
   //console.log(URL);
   const urlApi = `${baseURL}${apikey}&url=${URL}&lang=en`
   const response = await fetch(urlApi);
   try {
    const APIData = await response.json();
    console.log('server side data', APIData);
    res.send(APIData);
    return APIData
    
}
catch (error) {
    console.log("error", error);
}
   
});

// designates what port the app will listen to for incoming requests
const server = app.listen(8081, function () {
    console.log('Server is running on port 8081!')
})