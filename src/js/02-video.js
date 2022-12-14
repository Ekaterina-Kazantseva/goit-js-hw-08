import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOPLAYER_TIME = 'videoplayer-current-time';

const onPlay = function (data) {

  localStorage.setItem(VIDEOPLAYER_TIME, data.seconds);
  
};

const savedTime = localStorage.getItem(VIDEOPLAYER_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(onPlay, 1000));

