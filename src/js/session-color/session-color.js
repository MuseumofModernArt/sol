import { BaseDomain } from '../util/util';

const highlightColors = {
  0: '$color/session:1',
  1: '$color/session:2',
  2: '$color/session:8',
  3: '$color/session:7',
  4: '$color/session:10',
  5: '$color/session:11',
  6: '$color/session:12',
};

const cookieKey = 'sessionHighlightColor';
const sessionColorClassRegex = /\$color\/session\:\S+/;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const IsCookieSet = (name) => {
  return document.cookie.indexOf(name) > -1;
};

export default class SessionColor {
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
    document.cookie = `${cookieKey}=${this.colorKey}; path=/; domain=${BaseDomain()};`;
  }

  applySessionColor() {
    const htmlClassList = document.documentElement.classList;
    htmlClassList.forEach((c) => {
      if (sessionColorClassRegex.test(c)) {
        htmlClassList.remove(c);
      }
    });
    htmlClassList.add(highlightColors[this.colorKey]);
  }
}
