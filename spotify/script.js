document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: 'assets/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: 'assets/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: 'assets/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: 'assets/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: 'assets/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: 'assets/artista-mateus-kauan.jpg' }
    ];
    
    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: 'assets/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: 'assets/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: 'assets/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'assets/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: 'assets/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: 'assets/album-escandalo.jpg' }
    ];
    
    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')
        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `

        albumsGrid.appendChild(albumCard)
    })
})







