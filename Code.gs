// 
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom API Menu')
      .addItem('Display random facts','callFacts')
      .addItem('Display numbers facts','callNumbers')
      .addToUi();
}

function callFacts() {
  
  // Call the Numbers API for random math fact
  var response = UrlFetchApp.fetch("http://numbersapi.com/random/trivia");
  Logger.log(response.getContentText());
  
  var fact = response.getContentText();
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(sheet.getLastRow() + 1,1).setValue([fact]);
  
}

function callNumbers() {
  
  // Call the Numbers API for random math fact
  var response = UrlFetchApp.fetch("http://numbersapi.com/random/math");
  Logger.log(response.getContentText());
  
  var fact = response.getContentText();
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(sheet.getLastRow() + 1,1).setValue([fact]);
  
}