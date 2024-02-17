import * as alt from 'alt-client';

export let view = new alt.WebView('http://localhost:4200/');
view.focus();

alt.onServer("initializeBrowser", () => {
    view.on('SEND_TO_SERVER', (eventName, ...args) => {
        console.log('you have sent to server from web.')
        console.log(`eventName: ${eventName} args: ${args}`)
        alt.emitServer(eventName, ...args)
    })

    view.on('onBrowserLoaded', () => {
        alt.log('The browser loaded succesfully.');  
    })
});