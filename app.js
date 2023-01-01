let music = new Audio("./audio/1.mp3");
const songs = [
    {
        id: 1,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Alan Walker-fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Cartoon -On<br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Alan Walker-fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Cartoon -On<br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `Alan Walker-fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 9,
        songName: `Cartoon -On<br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `Alan Walker-fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `Cartoon -On<br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `Alan Walker-fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `Cartoon -On<br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `Alan Walker-fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songName: `Cartoon -On<br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songName: `Alan Walker-fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songName: `Cartoon -On<br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/18.jpg"
    },
];

const masterPlay = document.getElementById('masterPlay');
const wave = document.getElementById('wave');
const pop_song_left = document.getElementById('pop_song_left');
const pop_song_right = document.getElementById('pop_song_right');
const pop_song = document.getElementsByClassName('pop-song')[0];
const pop_art_left = document.getElementById('pop_art_left');
const pop_art_right = document.getElementById('pop_art_right');
const item = document.getElementsByClassName('Artists_bx')[0];
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol-bar')[0];
let vot_dot = document.getElementById('vol-dot');
let next = document.getElementById('next');
let back = document.getElementById('back');
let playListPlay1 = document.getElementsByClassName('playListPlay');

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
})


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});

let makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach(el => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle');
    })
}

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.onclick = (el) => {
        index = el.target.id;
        music.src = `./audio/${index}.mp3`;
        // poster_master_play.src = `./img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');


        const songTitle = songs.filter((els) => {
            return els.id == index;
        })

        songTitle.forEach(elss => {
            // const {songName} = elss;
            title.innerHTML = elss.songName;
            poster_master_play.src = elss.poster;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle');
        wave.classList.add('active1');
    }

})

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let minl = Math.floor(music_dur / 60);
    let secl = Math.floor(music_dur % 60);

    if (secl < 10) {
        secl = `0${secl}`;
    }
    currentEnd.innerText = `${minl}:${secl}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    const progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    const seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`
})

seek.onchange = () => {
    music.currentTime = seek.value * music.duration / 100;
}

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    const vol_a = vol.value;
    console.log(vot_dot)
    vol_bar.style.width = `${vol_a}%`;
    vot_dot.style.left = `${vol_a}%`;

    music.volume = vol_a / 100;
})

back.onclick = () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `./audio/${index}.mp3`;
    // poster_master_play.src = `./img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');


    const songTitle = songs.filter((els) => {
        return els.id == index;
    })

    songTitle.forEach(elss => {
        // const {songName} = elss;
        title.innerHTML = elss.songName;
        poster_master_play.src = elss.poster;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    makeAllPlays();
    playListPlay1[index - 1].classList.remove('bi-play-circle-fill');
    playListPlay1[index - 1].classList.add('bi-pause-circle');
    wave.classList.add('active1');
}

next.onclick = () => {
    index++;
    if (index >= document.getElementsByClassName('songItem').length) {
        index = 1;
    }
    music.src = `./audio/${index}.mp3`;
    // poster_master_play.src = `./img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');


    const songTitle = songs.filter((els) => {
        return els.id == index;
    })

    songTitle.forEach(elss => {
        // const {songName} = elss;
        title.innerHTML = elss.songName;
        poster_master_play.src = elss.poster;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    makeAllPlays();
    playListPlay1[index - 1].classList.remove('bi-play-circle-fill');
    playListPlay1[index - 1].classList.add('bi-pause-circle');
    wave.classList.add('active1');
}
