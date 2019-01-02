document.querySelectorAll('.key').forEach( key => {
  key.addEventListener('transitionend', (e) => {
      if(e.propertyName === 'transform') {
        key.classList.remove('playing');
      }
  });
});

window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  if(!key) return;
  key.classList.add('playing');
  setTimeout( () => key.classList.remove('playing'), 70);
  playSound(e.keyCode);
});

const playSound = keyCode => {
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
};