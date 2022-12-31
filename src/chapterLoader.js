
//confirms that file was called (debug only)
console.log('\n\n\ncreating chapter...\n\n\n')

const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
    
      
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.join(__dirname, 'preload.js'),
      },
    });
    
  
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'chapter.html'));
  
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  };