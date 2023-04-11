export default class Tooltip {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('tooltip');
    this.title = document.createElement('h2');
    this.text = document.createElement('p');
    this.title.classList.add('tooltip-title');
    this.text.classList.add('tooltip-text');
    this.text.textContent = "And here's some amazing content. It's very engaging. Right?";
    this.title.textContent = 'Popover title';
    this.element.appendChild(this.title);
    this.element.appendChild(this.text);
  }

  onButton(e) {
    e.preventDefault();
    this.element.classList.toggle('active');
  }
}
