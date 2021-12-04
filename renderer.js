const { ipcRenderer } = require('electron');


document.getElementById('btn_search').addEventListener('click', () => {
    const searchWord = document.getElementById('txt_search').value;
    ipcRenderer.send("run:selenium", searchWord);
});


