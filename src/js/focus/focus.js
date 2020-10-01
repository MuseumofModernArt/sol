import KeyCodes from './../util/keycodes';

const ShowFocusClass = 'show-focus';

export default class Focus {
  constructor() {
    ShowFocusOnTabPress();
    RemoveFocusOnClick();
  }
}

const ShowFocusOnTabPress = () => {
  document.body.addEventListener('keydown', (e) => {
    if (e.which == KeyCodes.TAB) {
      document.documentElement.classList.add(ShowFocusClass);
    }
  });
}

const RemoveFocusOnClick = () => {
  document.body.addEventListener('click', (e) => {
    if (e.clientX == 0 && e.clientY == 0) return;
    document.documentElement.classList.remove(ShowFocusClass);
  });
}

export {
  ShowFocusOnTabPress,
  RemoveFocusOnClick,
  ShowFocusClass
};
