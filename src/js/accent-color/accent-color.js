const highlightColors = {
  0: "accent-color--january",
  1: "accent-color--february",
  2: "accent-color--march",
  3: "accent-color--april",
  4: "accent-color--may",
  5: "accent-color--june",
  6: "accent-color--july",
  7: "accent-color--august",
  8: "accent-color--september",
  9: "accent-color--october",
  10: "accent-color--november",
  11: "accent-color--december",
};

const cookieKey = "sessionHighlightColor";
const accentColorClassRegex = /accent-color--\S+/;

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
      "$1"
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
