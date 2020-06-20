const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Hellraiser',
            artist: 'Christopher Young',
            url: 'http://m10.music.126.net/20200620130038/4bd6bf2528c97ddf7ff9b11f23ed5905/ymusic/c64d/3641/f97d/83d06db3ffad33c96076001fd950b481.mp3',
            cover: 'cover1.jpg',
        }
    ]
});
