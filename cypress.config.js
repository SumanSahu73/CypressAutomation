//import { readPdf } from './cypress/scripts/readPdf'



const { defineConfig } = require('cypress');
//const sqlServer= require('cypress-sql-server');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
//const { verifyDownloadTasks } = require('cy-verify-downloads');
const {isFileExist, findFiles} = require('cy-verify-downloads');
const mysql = require('mysql')
const { readPdf } =require('./cypress/scripts/readPdf.js')

const pdf = require('pdf-parse');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify"); ///
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {
  //This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  require('cypress-mochawesome-reporter/plugin')(on);
  on('task',{downloadFile});
  //on('task', verifyDownloadTasks);
 on('task',{isFileExist, findFiles});
 on('task', {readPdf});
 
// on('task', {readPdf});
 await preprocessor.addCucumberPreprocessorPlugin(on, config); //

  on("file:preprocessor", browserify.default(config));  //
  tasks = sqlServer.loadDBPlugin(config.db); ////
  on('task', tasks);////
//excel to json
  on('task',{
      excelToJsonConverter(filePath)
      {
        const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });
      return result;
      }
  })
  on('task', { queryDb: query => { return queryTestDb(query, config) }, }); 
 
function queryTestDb(query, config) {
 // creates a new mysql connection using credentials from cypress.json env's
 const connection = mysql.createConnection(config.env.db)
 // start connection to db
 connection.connect()
 // exec query + disconnect to db as a Promise
 return new Promise((resolve, reject) => {
 connection.query(query, (error, results) => {
 if (error) reject(error)
 else {
 connection.end()
 return resolve(results)
 }
 })
 })
}
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
  charts: true,
  reportPageTitle: 'Automation Report',
  reportFilename: "[status]_[datetime]-[name]-report",
  autoOpen: true,
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
},
defaultCommandTimeout: 11000,
//downloadsFolder: 'cypress/DOWNLOADSNew',
downloadsFolder: 'cypress/downloads',
pageLoadTimeout: 60000,
projectId: "7hcqzs",  
chromeWebSecurity: false,
env: {
  url: "http://demoblaze.com/index.html",
  url1: "https://rahulshettyacademy.com",
  username: "Chanchal",
  password: "chanchal",
  db:{
    host: "sql12.freesqldatabase.com",
    user: "sql12671839",
    password: "q2Q7IpPQ3u",
    database: "sql12671839"

  }
},
retries: {
  runMode: 1,
  },
  
  e2e: {
    setupNodeEvents, //(on, config) {
      //return require('./cypress/index.js')(on, config) 

     // task=sqlServer.loadDBPlugin(config.db);
      //on('task', 'tasks');
      //on('task',{downloadFile})
      // implement node event listeners here
       // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
       
   // },
   specPattern:[ 'cypress/integration/examples/*.js',
   'cypress/integration/POMDemoBlaze/*.js',
    'cypress/integration/Additional_Learning/*.js',
    'cypress/integration/POMSwagLabs/*.js',
    'cypress/integration/examples/BDD/*.feature'

   ]
    //specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
