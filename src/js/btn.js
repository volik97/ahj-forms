export default class Button {
  constructor() {
    this.element = document.createElement('button');
    this.element.classList.add('btn');
    this.element.type = 'submit';
    this.element.textContent = 'Click to toggle popover';
  }

  renderButton(targetEl) {
    targetEl.appendChild(this.element);
  }
}
