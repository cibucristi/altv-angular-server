import * as alt from 'alt-server';

alt.on('playerConnect', handlePlayerConnect);

function handlePlayerConnect(player) {
    alt.log(`[${player.id}] ${player.name} has connected to the server.`);

    player.model = 'mp_m_freemode_01';
    player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);

    alt.emitClient(player, "initializeBrowser");
}

alt.onClient("testServerEvent", (player, ...args) => {
    console.log(player);
    console.log(...args);
})