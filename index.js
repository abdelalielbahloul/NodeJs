var xlsx = require("xlsx");
var wb = xlsx.readFile("avancement.xlsx");
var data = xlsx.utils.sheet_to_json(wb.Sheets["sheet1"]);
var newData = data.map(function(record){
    record.EFM = record.EFM + 1;
    return record;
});
// console.log(newData);
var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB,newWS,"New Data");

xlsx.writeFile(newWB,"nv avancement.xlsx");