export default class Key {
  constructor(name) {
    if (name.indexOf('Shift') !== -1) {
      this.text = 'Shift';
      this.dataKey = 'Shift';
      this.dataLocation = name.slice(-1);
    } else if (name.indexOf('Alt') !== -1) {
      this.text = 'Alt';
      this.dataKey = 'Alt';
      this.dataLocation = name.slice(-1);
    } else if (name.indexOf('Control') !== -1) {
      this.text = 'Ctrl';
      this.dataKey = 'Control';
      this.dataLocation = name.slice(-1);
    } else if (name === 'ArrowUp') {
      this.text = '▲';
      this.dataKey = name;
      this.dataLocation = '0';
    } else if (name === 'ArrowDown') {
      this.text = '▼';
      this.dataKey = name;
      this.dataLocation = '0';
    } else if (name === 'ArrowLeft') {
      this.text = '◄';
      this.dataKey = name;
      this.dataLocation = '0';
    } else if (name === 'ArrowRight') {
      this.text = '►';
      this.dataKey = name;
      this.dataLocation = '0';
    } else {
      this.text = name;
      this.dataKey = name;
      this.dataLocation = '0';
    }
  }
}
