// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************


const cucumber = require('cypress-cucumber-preprocessor').default
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql 
  
  on('file:preprocessor', cucumber())
  require('cypress-mochawesome-reporter/plugin')(on);
  const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
  on('task', {readPdf});
  const pdf = require('pdf-parse');
  on('task', {
    getPdfContent(pdfName) {
      return (parsePdf(pdfName))
    }
  })
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
const neatCSV = require('neat-csv');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const fs = require("fs");
const path = require('path')
const pdf = require('pdf-parse');

export const parsePdf = (pathToPdf) => {

  return new Promise((resolve) => {
    const pdfPath = path.resolve(pathToPdf)
    let dataBuffer = fs.readFileSync(pdfPath);
    pdf(dataBuffer).then(function ({ text }) {

      resolve(text);

    });
  })

}
/*
const tesseract = require("tesseract.js")
const fs = require("fs")
const Jimp = require("jimp");

*/
/*
const getImageText = async (obj) => {
  let { fileName, lang, logger } = obj
  let recognizeResult = null
  try {
    if (fs.existsSync(fileName)) {
      if (logger) {
        const myLogger = {
          logger: m => console.log(m)
        }
        recognizeResult = await tesseract.recognize(fileName, lang, myLogger)
      } else {
        recognizeResult = await tesseract.recognize(fileName, lang)
      }
      if (recognizeResult) {
        return recognizeResult.data.text
      }
    }
  } catch (error) {
    return error.message
  }
}

const compareImages = async (obj) => {
  const { fileName1, fileName2 } = obj
  const example1 = await Jimp.read(fileName1)
  const example2 = await Jimp.read(fileName2)
  const example1Hash = example1.hash()
  const example2Hash = example2.hash()
  const distance = Jimp.distance(example1, example2)
  const diff = Jimp.diff(example1, example2)

  if (example1Hash !== example2Hash || distance > 0.15 || diff > 0.15) {
    return false
  } else {
    return true
  }
}

*/




//////////////////////////////////
const fs = require('fs')
const path = require('path')
const pdf = require('pdf-parse');

const repoRoot = path.join(__dirname, '..', '..')

  const parsePdf = async (pdfName) => {
  const pdfPathname = path.join(repoRoot, pdfName)
  let dataBuffer = fs.readFileSync(pdfPathname);
  return await pdf(dataBuffer) 
}
export default parsePdf;

//For connecting to SQL Server
const mysql = require('mysql')
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

