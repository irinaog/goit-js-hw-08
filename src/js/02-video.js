const vimeo = require('@vimeo/player');
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

onContinuePlay();

// player.on('timeupdate', function (data) {
//     const time = JSON.stringify(data.seconds);
//     localStorage.setItem(STORAGE_KEY, time);
// });
player.on('timeupdate', throttle(onRemindTimePlay, 1000));

function onRemindTimePlay (data) {
    const time = JSON.stringify(data.seconds);
    localStorage.setItem(STORAGE_KEY, time);
}
 
function onContinuePlay() {
    const currentTime = localStorage.getItem(STORAGE_KEY);
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
};

