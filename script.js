const enLowerCase = [{ code: '192', text: '`', location: '0' }, { code: '49', text: '1', location: '0' },
  { code: '50', text: '2', location: '0' }, { code: '51', text: '3', location: '0' }, { code: '52', text: '4', location: '0' },
  { code: '53', text: '5', location: '0' }, { code: '54', text: '6', location: '0' }, { code: '55', text: '7', location: '0' },
  { code: '56', text: '8', location: '0' }, { code: '57', text: '9', location: '0' }, { code: '48', text: '0', location: '0' },
  { code: '189', text: '-', location: '0' }, { code: '187', text: '=', location: '0' }, { code: '8', text: 'Backspace', location: '0' },
  { code: '9', text: 'Tab', location: '0' }, { code: '81', text: 'q', location: '0' }, { code: '87', text: 'w', location: '0' },
  { code: '69', text: 'e', location: '0' }, { code: '82', text: 'r', location: '0' }, { code: '84', text: 't', location: '0' },
  { code: '89', text: 'y', location: '0' }, { code: '85', text: 'u', location: '0' }, { code: '73', text: 'i', location: '0' },
  { code: '79', text: 'o', location: '0' }, { code: '80', text: 'p', location: '0' }, { code: '219', text: '[', location: '0' },
  { code: '221', text: ']', location: '0' }, { code: '46', text: 'Delete', location: '0' }, { code: '20', text: 'CapsLock', location: '0' },
  { code: '65', text: 'a', location: '0' }, { code: '83', text: 's', location: '0' }, { code: '68', text: 'd', location: '0' },
  { code: '70', text: 'f', location: '0' }, { code: '71', text: 'g', location: '0' }, { code: '72', text: 'h', location: '0' },
  { code: '74', text: 'j', location: '0' }, { code: '75', text: 'k', location: '0' }, { code: '76', text: 'l', location: '0' },
  { code: '186', text: ';', location: '0' }, { code: '222', text: '"', location: '0' }, { code: '13', text: 'Enter', location: '0' },
  { code: '16', text: 'Shift', location: '1' }, { code: '220', text: '\\', location: '0' }, { code: '90', text: 'z', location: '0' },
  { code: '88', text: 'x', location: '0' }, { code: '67', text: 'c', location: '0' }, { code: '86', text: 'v', location: '0' },
  { code: '66', text: 'b', location: '0' }, { code: '78', text: 'n', location: '0' }, { code: '77', text: 'm', location: '0' },
  { code: '188', text: ',', location: '0' }, { code: '190', text: '.', location: '0' }, { code: '191', text: '/', location: '0' },
  { code: '38', text: '▲', location: '0' }, { code: '16', text: 'Shift', location: '2' }, { code: '17', text: 'Ctrl', location: '1' },
  { code: '91', text: 'Win', location: '0' }, { code: '18', text: 'Alt', location: '1' }, { code: '32', text: ' ', location: '0' },
  { code: '18', text: 'Alt', location: '2' }, { code: '17', text: 'Ctrl', location: '2' }, { code: '37', text: '◄', location: '0' },
  { code: '40', text: '▼', location: '0' }, { code: '39', text: '►', location: '0' }];

const enUpperCase = [{ code: '192', text: '~', location: '0' }, { code: '49', text: '!', location: '0' },
  { code: '50', text: '@', location: '0' }, { code: '51', text: '#', location: '0' }, { code: '52', text: '$', location: '0' },
  { code: '53', text: '%', location: '0' }, { code: '54', text: '^', location: '0' }, { code: '55', text: '&', location: '0' },
  { code: '56', text: '*', location: '0' }, { code: '57', text: '(', location: '0' }, { code: '48', text: ')', location: '0' },
  { code: '189', text: '_', location: '0' }, { code: '187', text: '+', location: '0' }, { code: '8', text: 'Backspace', location: '0' },
  { code: '9', text: 'Tab', location: '0' }, { code: '81', text: 'Q', location: '0' }, { code: '87', text: 'W', location: '0' },
  { code: '69', text: 'E', location: '0' }, { code: '82', text: 'R', location: '0' }, { code: '84', text: 'T', location: '0' },
  { code: '89', text: 'Y', location: '0' }, { code: '85', text: 'U', location: '0' }, { code: '73', text: 'I', location: '0' },
  { code: '79', text: 'O', location: '0' }, { code: '80', text: 'P', location: '0' }, { code: '219', text: '[', location: '0' },
  { code: '221', text: ']', location: '0' }, { code: '46', text: 'Delete', location: '0' }, { code: '20', text: 'CapsLock', location: '0' },
  { code: '65', text: 'A', location: '0' }, { code: '83', text: 'S', location: '0' }, { code: '68', text: 'D', location: '0' },
  { code: '70', text: 'F', location: '0' }, { code: '71', text: 'G', location: '0' }, { code: '72', text: 'H', location: '0' },
  { code: '74', text: 'J', location: '0' }, { code: '75', text: 'K', location: '0' }, { code: '76', text: 'L', location: '0' },
  { code: '186', text: ';', location: '0' }, { code: '222', text: '"', location: '0' }, { code: '13', text: 'Enter', location: '0' },
  { code: '16', text: 'Shift', location: '1' }, { code: '220', text: '\\', location: '0' }, { code: '90', text: 'Z', location: '0' },
  { code: '88', text: 'X', location: '0' }, { code: '67', text: 'C', location: '0' }, { code: '86', text: 'V', location: '0' },
  { code: '66', text: 'B', location: '0' }, { code: '78', text: 'N', location: '0' }, { code: '77', text: 'M', location: '0' },
  { code: '188', text: ', ', location: '0' }, { code: '190', text: '.', location: '0' }, { code: '191', text: '/', location: '0' },
  { code: '38', text: '▲', location: '0' }, { code: '16', text: 'Shift', location: '2' }, { code: '17', text: 'Ctrl', location: '1' },
  { code: '91', text: 'Win', location: '0' }, { code: '18', text: 'Alt', location: '1' }, { code: '32', text: ' ', location: '0' },
  { code: '18', text: 'Alt', location: '2' }, { code: '17', text: 'Ctrl', location: '2' }, { code: '37', text: '◄', location: '0' },
  { code: '40', text: '▼', location: '0' }, { code: '39', text: '►', location: '0' }];

const ruLowerCase = [{ code: '192', text: 'ё', location: '0' }, { code: '49', text: '1', location: '0' },
  { code: '50', text: '2', location: '0' }, { code: '51', text: '3', location: '0' }, { code: '52', text: '4', location: '0' },
  { code: '53', text: '5', location: '0' }, { code: '54', text: '6', location: '0' }, { code: '55', text: '7', location: '0' },
  { code: '56', text: '8', location: '0' }, { code: '57', text: '9', location: '0' }, { code: '48', text: '0', location: '0' },
  { code: '189', text: '-', location: '0' }, { code: '187', text: '=', location: '0' }, { code: '8', text: 'Backspace', location: '0' },
  { code: '9', text: 'Tab', location: '0' }, { code: '81', text: 'й', location: '0' }, { code: '87', text: 'ц', location: '0' },
  { code: '69', text: 'у', location: '0' }, { code: '82', text: 'к', location: '0' }, { code: '84', text: 'е', location: '0' },
  { code: '89', text: 'н', location: '0' }, { code: '85', text: 'г', location: '0' }, { code: '73', text: 'ш', location: '0' },
  { code: '79', text: 'щ', location: '0' }, { code: '80', text: 'з', location: '0' }, { code: '219', text: 'х', location: '0' },
  { code: '221', text: 'ъ', location: '0' }, { code: '46', text: 'Delete', location: '0' }, { code: '20', text: 'CapsLock', location: '0' },
  { code: '65', text: 'ф', location: '0' }, { code: '83', text: 'ы', location: '0' }, { code: '68', text: 'в', location: '0' },
  { code: '70', text: 'а', location: '0' }, { code: '71', text: 'п', location: '0' }, { code: '72', text: 'р', location: '0' },
  { code: '74', text: 'о', location: '0' }, { code: '75', text: 'л', location: '0' }, { code: '76', text: 'д', location: '0' },
  { code: '186', text: 'ж', location: '0' }, { code: '222', text: 'э', location: '0' }, { code: '13', text: 'Enter', location: '0' },
  { code: '16', text: 'Shift', location: '1' }, { code: '220', text: '\\', location: '0' }, { code: '90', text: 'я', location: '0' },
  { code: '88', text: 'ч', location: '0' }, { code: '67', text: 'с', location: '0' }, { code: '86', text: 'м', location: '0' },
  { code: '66', text: 'и', location: '0' }, { code: '78', text: 'т', location: '0' }, { code: '77', text: 'ь', location: '0' },
  { code: '188', text: 'б', location: '0' }, { code: '190', text: 'ю', location: '0' }, { code: '191', text: '/', location: '0' },
  { code: '38', text: '▲', location: '0' }, { code: '16', text: 'Shift', location: '2' }, { code: '17', text: 'Ctrl', location: '1' },
  { code: '91', text: 'Win', location: '0' }, { code: '18', text: 'Alt', location: '1' }, { code: '32', text: ' ', location: '0' },
  { code: '18', text: 'Alt', location: '2' }, { code: '17', text: 'Ctrl', location: '2' }, { code: '37', text: '◄', location: '0' },
  { code: '40', text: '▼', location: '0' }, { code: '39', text: '►', location: '0' }];

const ruUpperCase = [{ code: '192', text: 'Ё', location: '0' }, { code: '49', text: '!', location: '0' },
  { code: '50', text: '\'', location: '0' }, { code: '51', text: '№', location: '0' }, { code: '52', text: ';', location: '0' },
  { code: '53', text: '%', location: '0' }, { code: '54', text: ':', location: '0' }, { code: '55', text: '?', location: '0' },
  { code: '56', text: '*', location: '0' }, { code: '57', text: '(', location: '0' }, { code: '48', text: ')', location: '0' },
  { code: '189', text: '_', location: '0' }, { code: '187', text: '+', location: '0' }, { code: '8', text: 'Backspace', location: '0' },
  { code: '9', text: 'Tab', location: '0' }, { code: '81', text: 'Й', location: '0' }, { code: '87', text: 'Ц', location: '0' },
  { code: '69', text: 'У', location: '0' }, { code: '82', text: 'К', location: '0' }, { code: '84', text: 'Т', location: '0' },
  { code: '89', text: 'Н', location: '0' }, { code: '85', text: 'Г', location: '0' }, { code: '73', text: 'Ш', location: '0' },
  { code: '79', text: 'Щ', location: '0' }, { code: '80', text: 'З', location: '0' }, { code: '219', text: 'Х', location: '0' },
  { code: '221', text: 'Ъ', location: '0' }, { code: '46', text: 'Delete', location: '0' }, { code: '20', text: 'CapsLock', location: '0' },
  { code: '65', text: 'Ф', location: '0' }, { code: '83', text: 'Ы', location: '0' }, { code: '68', text: 'В', location: '0' },
  { code: '70', text: 'А', location: '0' }, { code: '71', text: 'П', location: '0' }, { code: '72', text: 'Р', location: '0' },
  { code: '74', text: 'О', location: '0' }, { code: '75', text: 'Л', location: '0' }, { code: '76', text: 'Д', location: '0' },
  { code: '186', text: 'Ж', location: '0' }, { code: '222', text: 'Э', location: '0' }, { code: '13', text: 'Enter', location: '0' },
  { code: '16', text: 'Shift', location: '1' }, { code: '220', text: '\\', location: '0' }, { code: '90', text: 'Я', location: '0' },
  { code: '88', text: 'Ч', location: '0' }, { code: '67', text: 'С', location: '0' }, { code: '86', text: 'М', location: '0' },
  { code: '66', text: 'И', location: '0' }, { code: '78', text: 'Т', location: '0' }, { code: '77', text: 'Ь', location: '0' },
  { code: '188', text: 'Ю', location: '0' }, { code: '190', text: 'Ю', location: '0' }, { code: '191', text: '/', location: '0' },
  { code: '38', text: '▲', location: '0' }, { code: '16', text: 'Shift', location: '2' }, { code: '17', text: 'Ctrl', location: '1' },
  { code: '91', text: 'Win', location: '0' }, { code: '18', text: 'Alt', location: '1' }, { code: '32', text: ' ', location: '0' },
  { code: '18', text: 'Alt', location: '2' }, { code: '17', text: 'Ctrl', location: '2' }, { code: '37', text: '◄', location: '0' },
  { code: '40', text: '▼', location: '0' }, { code: '39', text: '►', location: '0' }];

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const description = document.createElement('div');
description.classList.add('description');
description.innerHTML = '<div>Ctrl + Alt  - change language</div><div><i>Windows OS</i></div>';

document.body.append(wrapper);

class KeyBoard {
  constructor() {
    this.lang = JSON.parse(localStorage.getItem('myKeyboardLang')) || 'en';
    this.activeKeyboard = enLowerCase;
    this.shiftIsPressed = false;
    this.altIsPressed = false;
    this.ctrlIsPressed = false;
    this.keyboard = document.createElement('div');
  }

  static createKeyElement({
    code,
    text,
    location,
  }) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.setAttribute('data-code', code);
    key.setAttribute('data-location', location);
    key.textContent = text;
    return key;
  }

  static generateKeydownEvent(code) {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      keyCode: code,
    });
    document.dispatchEvent(event);
  }

  static highlightKey(key) {
    key.classList.add('active');
    setTimeout(() => {
      key.classList.remove('active');
    }, 300);
  }

  createKeyboard(btns) {
    for (let i = 0; i < btns.length; i += 1) {
      this.keyboard.append(KeyBoard.createKeyElement(btns[i]));
    }

    document.querySelectorAll('.key').forEach((item) => {
      item.addEventListener('mousedown', () => {
        KeyBoard.highlightKey(item);
        KeyBoard.generateKeydownEvent(item.dataset.code);
      });
    });
  }

  changeCase() {
    this.keyboard.innerHTML = '';
    switch (this.activeKeyboard) {
      case enLowerCase:
        this.createKeyboard(enUpperCase);
        this.activeKeyboard = enUpperCase;
        break;

      case enUpperCase:
        this.createKeyboard(enLowerCase);
        this.activeKeyboard = enLowerCase;
        break;

      case ruLowerCase:
        this.createKeyboard(ruUpperCase);
        this.activeKeyboard = ruUpperCase;
        break;

      case ruUpperCase:
        this.createKeyboard(ruLowerCase);
        this.activeKeyboard = ruLowerCase;
        break;

      default:
        this.createKeyboard(enLowerCase);
        this.activeKeyboard = enLowerCase;
    }
  }

  changeLang() {
    this.keyboard.innerHTML = '';
    switch (this.activeKeyboard) {
      case enLowerCase:
        this.createKeyboard(ruLowerCase);
        this.activeKeyboard = ruLowerCase;
        localStorage.setItem('myKeyboardLang', '"ru"');
        break;

      case enUpperCase:
        this.createKeyboard(ruUpperCase);
        this.activeKeyboard = ruUpperCase;
        localStorage.setItem('myKeyboardLang', '"ru"');
        break;

      case ruLowerCase:
        this.createKeyboard(enLowerCase);
        this.activeKeyboard = enLowerCase;
        localStorage.setItem('myKeyboardLang', '"en"');
        break;

      case ruUpperCase:
        this.createKeyboard(enUpperCase);
        this.activeKeyboard = enUpperCase;
        localStorage.setItem('myKeyboardLang', '"en"');
        break;

      default:
        this.createKeyboard(enLowerCase);
        this.activeKeyboard = enLowerCase;
        localStorage.setItem('myKeyboardLang', 'en');
    }
  }

  insertKeyboard(parent) {
    this.keyboard.classList.add('keyboard');

    const textarea = document.createElement('textarea');
    textarea.setAttribute('autofocus', '');

    parent.append(textarea);
    parent.append(this.keyboard);

    this.activeKeyboard = this.lang === 'en' ? enLowerCase : ruLowerCase;
    this.createKeyboard(this.activeKeyboard);

    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      document.querySelectorAll('.key').forEach((item) => {
        if (e.location === parseInt(item.dataset.location, 10) && (
          e.keyCode === parseInt(item.dataset.code, 10))) {
          KeyBoard.highlightKey(item);
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          switch (e.keyCode) {
            case 13:
              textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
              break;

            case 8:
              textarea.value = textarea.value.slice(0, start - 1)
              + textarea.value.slice(end, textarea.value.length);
              textarea.selectionStart = start - 1;
              textarea.selectionEnd = end - 1;
              break;

            case 20:
              this.changeCase();
              KeyBoard.highlightKey(document.querySelector('[data-code = "20"]'));
              break;

            case 17:
              this.ctrlIsPressed = true;
              if (this.altIsPressed) {
                this.keyboard.innerHTML = '';
                this.changeLang();
                KeyBoard.highlightKey(document.querySelectorAll('[data-code = "17"]')[item.dataset.location - 1]);
                KeyBoard.highlightKey(document.querySelectorAll('[data-code = "18"]')[item.dataset.location - 1]);
              }
              break;

            case 16:
              this.shiftIsPressed = true;
              this.changeCase();
              KeyBoard.highlightKey(document.querySelectorAll('[data-code = "16"]')[item.dataset.location - 1]);
              break;

            case 18:
              this.altIsPressed = true;
              if (this.ctrlIsPressed) {
                this.keyboard.innerHTML = '';
                this.changeLang();
                KeyBoard.highlightKey(document.querySelectorAll('[data-code = "18"]')[item.dataset.location - 1]);
                KeyBoard.highlightKey(document.querySelectorAll('[data-code = "17"]')[item.dataset.location - 1]);
              }
              break;

            case 46:
              textarea.value = textarea.value.slice(0, start)
              + textarea.value.slice(end + 1, textarea.value.length);
              textarea.selectionStart = start;
              textarea.selectionEnd = end;
              break;

            case 91:
              break;

            case 37:
              textarea.selectionStart = start - 1;
              textarea.selectionEnd = end - 1;
              break;

            case 39:
              textarea.selectionStart = start + 1;
              textarea.selectionEnd = end + 1;
              break;

            case 9:
              textarea.setRangeText('  ', textarea.selectionStart, textarea.selectionEnd, 'end');
              break;

            default:
              textarea.setRangeText(item.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
          }
        }
      });
    });

    document.addEventListener('keyup', () => {
      if (this.shiftIsPressed) {
        this.shiftIsPressed = false;
        this.changeCase();
      }

      if (this.ctrlIsPressed) {
        this.ctrlIsPressed = false;
      }

      if (this.altIsPressed) {
        this.altIsPressed = false;
      }
    });

    textarea.addEventListener('blur', () => {
      textarea.focus();
    });
  }
}

const newKeyboard = new KeyBoard();
newKeyboard.insertKeyboard(wrapper);

wrapper.append(description);
