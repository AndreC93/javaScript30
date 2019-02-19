class VideoPlayer {
  constructor() {
    const player = document.querySelector('.player');
    this.video = player.querySelector('.viewer');
    this.progress = player.querySelector('.progress');
    this.progressBar = player.querySelector('.progress__filled');
    this.toggle = player.querySelector('.toggle');
    this.sliders = player.querySelectorAll('.player__slider');
    this.skipButtons = player.querySelectorAll('[data-skip]');
  }


}

const videoPlayer = new VideoPlayer();
