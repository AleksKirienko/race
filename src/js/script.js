const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    // Создаём окно браузера
    win = new BrowserWindow({
        width: 500,
        height: 850,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('src/index.html'); // загружаем в окно файл приложения index.html

    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow); //запуск

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    app.quit();
});

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
