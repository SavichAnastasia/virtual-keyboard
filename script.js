const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const textarea = document.createElement('textarea');
textarea.setAttribute('readonly', '');

document.body.append(wrapper);
wrapper.append(textarea);
wrapper.append(keyboard);

const enBtnsLowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift_1', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift_2', 'Control_1', 'Win', 'Alt', ' ', 'Control_2', '◄', '▼', '►'];
const enBtnsUpperCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'Shift_1', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift_2', 'Control_1', 'Win', 'Alt', ' ', 'Control_2', '◄', '▼', '►'];

class Key {
  constructor(name) {
    if (name.indexOf('Shift') !== -1) {
      this.text = 'Shift';
      this.dataKey = 'Shift';
      this.dataLocation = name.slice(-1);
    } else if (name.indexOf('Control') !== -1) {
      this.text = 'Ctrl';
      this.dataKey = 'Control';
      this.dataLocation = name.slice(-1);
    } else {
      this.text = name;
      this.dataKey = name;
    }
  }
}

function createKeyElement({
  text, dataKey, dataLocation,
}) {
  const key = document.createElement('div');
  key.classList.add('key');
  key.setAttribute('data-key', dataKey);
  if (dataLocation) key.setAttribute('data-location', dataLocation);
  key.textContent = text;
  return key;
}

for (let i = 0; i < enBtnsLowerCase.length; i += 1) {
  const key = new Key(enBtnsLowerCase[i]);
  keyboard.append(createKeyElement(key));
}

function highlightKey(key) {
  key.classList.add('active');
  setTimeout(() => {
    key.classList.remove('active');
  }, 300);
}

function generateKeydownEvent(key) {
  const event = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelable: true,
    key,
  });
  document.dispatchEvent(event);
}

document.addEventListener('keydown', (e) => {
  textarea.value += e.key;
  document.querySelectorAll('.key').forEach((item) => {
    if (e.key === item.dataset.key) highlightKey(item);
  });
});

document.querySelectorAll('.key').forEach((item) => {
  item.addEventListener('click', () => {
    highlightKey(item);
    generateKeydownEvent(item.dataset.key);
  });
});
