const { app, BrowserWindow, ipcMain } = require("electron");
const { search } = require("./selenium");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

ipcMain.on("run:selenium", async (event, arg) => {
  try {
    await search(arg);
  } catch (err) {
    console.error(err);
  }
});
