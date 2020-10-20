const highlightColors = {
  0: '$color/accent:1',
  1: '$color/accent:2',
  2: '$color/accent:3',
  3: '$color/accent:4',
  4: '$color/accent:5',
  5: '$color/accent:6',
  6: '$color/accent:7',
  7: '$color/accent:8',
  8: '$color/accent:9',
  9: '$color/accent:10',
  10: '$color/accent:11',
  11: '$color/accent:12',
};

const cookieKey = 'sessionHighlightColor';
const accentColorClassRegex = /\$color\/accent\:\S+/;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const IsCookieSet = (name) => {
  return document.cookie.indexOf(name) > -1;
};

export default class AccentColor {
  constructor() {
    this.colorKey = null;

    if (!this.sessionColorIsSet()) {
      this.setRandomSessionColor();
    } else {
      this.getSessionColor();
    }

    this.applySessionColor();
  }

  sessionColorIsSet() {
    return IsCookieSet(cookieKey);
  }

  getSessionColor() {
    const pattern = new RegExp(`(?:(?:^|.*;\\s*)${cookieKey}\\s*\\=\\s*([^;]*).*$)|^.*$`);
    const cookieValue = document.cookie.replace(
      pattern,
      '$1'
    );
    this.colorKey = parseInt(cookieValue);
  }

  setRandomSessionColor() {
    const min = 0;
    const max = Object.keys(highlightColors).length - 1;

    this.colorKey = getRandomInt(min, max);
    document.cookie = `${cookieKey}=${this.colorKey}; path=/;`;
  }

  applySessionColor() {
    const htmlClassList = document.documentElement.classList;
    htmlClassList.forEach((c) => {
      if (accentColorClassRegex.test(c)) {
        htmlClassList.remove(c);
      }
    });
    htmlClassList.add(highlightColors[this.colorKey]);
  }
}
