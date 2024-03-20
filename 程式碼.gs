// 連結HTML檔案

function doGet() {
  var html = HtmlService.createTemplateFromFile("search");
  var check = html.evaluate();
  var show = check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return show;
}

/* 處裡html表單資料 */
function processForm(formObject) {
  var result = "";
  if (formObject.searchtext) {
    //如果表單透過搜尋文字則執行
    result = search(formObject.searchtext);
  }
  return result;
}

// 搜尋試算表裡的內容
function search(searchtext) {
    //注意!下面使用 spreadsheetId 必須於GAS編輯器裏頭的"服務"點擊"+"添加"Google Sheet API"服務
  var spreadsheetId = "1Mm4PVfckECJWAwBdi3plutmlBXyoovit7a6YhY3sfdY";  
  var dataRage = "Sheet1!A2:Y";
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
  var dataRage = "Sheet1!A2:E";
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
  var ar = [];
  data.forEach(function (f) {
    if (~f.indexOf(searchtext)) {
      ar.push(f);
    }
  });
  return ar;
}
