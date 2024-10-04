const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumber-htmlReport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "window",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Suman Cypress Automation" },
      { label: "Release", value: "1.1" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Dec 19th 2023, 12:31 AM EST" },
      { label: "Execution End Time", value: "Dec 19th 2023, 12:56 AM EST" },
    ],
  },
});