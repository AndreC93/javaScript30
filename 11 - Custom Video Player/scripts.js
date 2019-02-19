class VideoPlayer {
  constructor() {
    const player = document.querySelector('.player');
    this.video = player.querySelector('.viewer');
    this.progress = player.querySelector('.progress');
    this.progressBar = player.querySelector('.progress__filled');
    this.toggle = player.querySelector('.toggle');
    this.sliders = player.querySelectorAll('.player__slider');
    this.skipButtons = player.querySelectorAll('[data-skip]');
    this.initializeListeners();
  }

  initializeListeners() {
    this.video.addEventListener('click', () => this.togglePlay());
    ['play', 'pause'].forEach(event => this.video.addEventListener(event, () => this.togglePlayButton()));
  }

  togglePlay() {
    this.video.paused ? this.video.play() : this.video.pause();
  }
  
  togglePlayButton() {
    const icon = this.video.paused ? '►' : '❚ ❚';
    this.toggle.textContent = icon;
  }

}

const videoPlayer = new VideoPlayer();
