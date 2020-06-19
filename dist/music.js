const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'http://aod.cos.tx.xmcdn.com/group80/M0B/26/55/wKgPDF7VQmTjA4blACG2x6mE4uo759.mp3',
            cover: 'cover1.jpg',
        }
    ]
});
