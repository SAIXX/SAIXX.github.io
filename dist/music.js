const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'no future',
            artist: 'no future',
            url: 'http://www.saixx.cn/2020/07/09/1.mp3',
            cover: 'cover1.jpg',
        }
    ]
});
