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
    this.initializePlayListeners();
    this.initializeSliderListeners();
  }
  
  initializePlayListeners() {
    [this.video, this.toggle].forEach(el => el.addEventListener('click', () => this.togglePlay()));
    ['play', 'pause'].forEach(event => this.video.addEventListener(event, () => this.togglePlayButton()));
  }
  
  initializeSliderListeners() {
    const slidersClicked = {
      volume: false,
      playbackRate: false,
    };

    const toggleSlider = (slider) => slidersClicked[slider.name] = !slidersClicked[slider.name];
    this.sliders.forEach(slider => {
      slider.addEventListener('mousedown', () => toggleSlider(slider));
      slider.addEventListener('mousemove', () => slidersClicked[slider.name] && this.handleSlider(slider));
      slider.addEventListener('mouseup', () => {
        this.handleSlider(slider);
        toggleSlider(slider);
      });
    })
  }

  handleSlider(slider) {
    this.video[slider.name] = slider.value;
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
