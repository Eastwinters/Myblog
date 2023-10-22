const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    //lrcType: 3,
    mutex: true,
    listFolded: false,
    audio: 
     [{
        name: '时の回廊',
        artist: '光田康典',
        lrc: '/music/lrc/一直很安静 - 阿桑.lrc',
        cover: 'http://pic.eastwinters.com/202310221617575.jpg',
        url: 'http://music.163.com/song/media/outer/url?id=468658.mp3'
              },
              {
            name: '每次相聚都是为了分离',
            artist: '新裤子',
            lrc: '/music/lrc/一直很安静 - 阿桑.lrc',
            cover: 'http://pic.eastwinters.com/202309291253873.jpg',
            url: 'http://music.163.com/song/media/outer/url?id=1883144306.mp3'
                  },
                  
    
        ]
        
});
