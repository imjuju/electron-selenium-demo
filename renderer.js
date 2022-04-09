const { ipcRenderer } = require("electron");
const XLSX = require("xlsx");

document.getElementById("btn_search").addEventListener("click", () => {
  const searchWord = document.getElementById("txt_search").value;
  ipcRenderer.send("run:selenium", searchWord);
});

document.getElementById("file_uploader").addEventListener("change", (event) => {
  const input = event.target;
  const reader = new FileReader();
  reader.onload = () => {
    const fileData = reader.result;
    const wb = XLSX.read(fileData, { type: "binary" });
    wb.SheetNames.forEach((sheetName) => {
      var rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
      console.log(JSON.stringify(rowObj));
    });
  };
  reader.readAsBinaryString(input.files[0]);
});
