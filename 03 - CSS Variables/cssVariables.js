class CssVariables {
  constructor() {
    this.inputs = document.querySelectorAll('.controls input');
    this.inputs.forEach(input => input.addEventListener('change', this.handleUpdate));
    this.inputs.forEach(input => input.addEventListener('mousemove', this.handleUpdate));
  }

  handleUpdate() {
    const suffix = this.dataset.sizing || '';
    const root = document.documentElement;
    root.style.setProperty(`--${this.name}`, this.value + suffix);
  }


}

const cssVariables = new CssVariables();