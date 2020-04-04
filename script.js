const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const wrapper = document.createElement('div');
keyboard.classList.add('wrapper');

const textarea = document.createElement('textarea');
textarea.setAttribute('readonly', '');

document.body.append(wrapper);
wrapper.append(textarea);
wrapper.append(keyboard);

const enBtnsLowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Ctrl', '◄', '▼', '►'];

function createKey(name) {
  const key = document.createElement('div');
  key.classList.add('key');
  key.setAttribute('data-key', name);
  key.textContent = name;
  return key;
}

for (let i = 0; i < enBtnsLowerCase.length; i += 1) {
  keyboard.append(createKey(enBtnsLowerCase[i]));
}

function highlightKey(key) {
  key.classList.add('active');
  setTimeout(() => {
    key.classList.remove('active');
  }, 300);
}

document.addEventListener('keydown', (e) => {
  textarea.value += e.key;
  document.querySelectorAll('.key').forEach((item) => {
    if (e.key === item.dataset.key) highlightKey(item);
  });
});
