// electron/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => {
    // whitelist channels if you will use ipc
    const valid = ['do-something'];
    if (valid.includes(channel)) ipcRenderer.send(channel, data);
  },
  invoke: (channel, args) => {
    const valid = ['get-config'];
    if (valid.includes(channel)) return ipcRenderer.invoke(channel, args);
    return null;
  }
});
