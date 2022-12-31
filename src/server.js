// Backend code
const { ipcMain, dialog } = require("electron");
const fs = require("original-fs");

ipcMain.handle("selectDir", (evt) => {
    dialog.showOpenDialog({ properties: ['openDirectory', 'multiSelections'] })
    .then((args) => {
        if(args.canceled) return;    
        for(let i = 0; i < args.filePaths.length; i++){
            console.log(args.filePaths[i])
            readMangaDir(args.filePaths[i]);
        }
    })
})

function readMangaDir(filepath){
    fs.readdir(filepath,(err, files) => {
        if (err)
          console.log(err);
        else {
          files.forEach(dir => {
            console.log(dir);
            fs.readdir(filepath + "/" + dir ,(err, pages) => {
                
                console.log(filepath + "/" + dir);
                if (!err){
                    console.log(pages);
                    console.log("\nCurrent directory filenames:");
                  files.forEach(file => {
                    console.log(file);
                  })
                }
                
            })
          })
        }
    })
    console.log('\n\nsending to chapter loader\n\n')

  console.log (__dirname, chapterLoader.js)
}