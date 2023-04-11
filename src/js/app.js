import Button from './btn';
import Tooltip from './tooltip';

const btn = new Button();
const tooltip = new Tooltip();
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
document.body.appendChild(tooltip.element);
container.appendChild(btn.element);

btn.element.addEventListener('click', (e) => tooltip.onButton(e));
