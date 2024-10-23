const playlist = ['Ana Castela', 'Cazuza', 'MC Tuto', 'MC daleste', 'Matheus do forro', 'Taylor Swift']
// Guarda as musicas que ja foram tocadas da playlist
let tocadas = [];

// faz um numero aleatorio
function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}


function randomlyExecutePlaylist() {
    // verifica se as musicas tocadas tem o mesmo length que a playlist
    if (tocadas.length === playlist.length) {
        console.log('todas as musicas ja foram tocadas, pode ir a uma outra playlist, ou então, reiniciar essa!');
        tocadas = [];
        return;
    }


    let number;
    // garante que a música escolhida aleatoriamente ainda não foi tocada, evitando repetições. 
    do {
        number = randomNumber(0, playlist.length);

    } while (tocadas.includes(playlist[number]));

    // coloca a musica tocada ao registro de tocadas
    tocadas.push(playlist[number])

    console.log(playlist[number]);
    
}

// executa a variavel randomlyExecutePlaylist() com a quantidade de musicas da variavel playlist
function playThePlaylist() {
    for(let i = 0; i <= playlist.length; i++) {
        randomlyExecutePlaylist()
    }

}




