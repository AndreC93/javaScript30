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
    this.initializeSkipButtonListeners();
    this.initializeProgressListener();
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
        slider.blur();
      });
    })
  }

  initializeSkipButtonListeners() {
    this.skipButtons.forEach(button => button.addEventListener('click', () => this.video.currentTime += parseFloat(button.dataset.skip)));
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
  
  initializeProgressListener() {
    let mousedown = false;
    const scrubVideo = offsetX => {
      const percent = offsetX / this.progress.offsetWidth;
      this.video.currentTime = percent * this.video.duration;
      this.progressBar.style.flexBasis = percent * 100;
    }
    this.progress.addEventListener('mousedown', () => mousedown = true);
    this.progress.addEventListener('mousemove', (e) => mousedown && scrubVideo(e.offsetX))
    this.progress.addEventListener('mouseup', (e) => {
      mousedown = false;
      scrubVideo(e.offsetX);
    });
    this.video.addEventListener('timeupdate', () => {
      const percent = this.video.currentTime / this.video.duration;
      this.progressBar.style.flexBasis = `${percent * 100}%`;
    });
  }
  
}

const videoPlayer = new VideoPlayer();
