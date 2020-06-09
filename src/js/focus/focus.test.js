import Focus from "./focus";
import KeyCodes from "./../util/keycodes";

test("adds focus class on tab press", () => {
  Focus.ShowFocusOnTabPress();

  const tabPress = new KeyboardEvent("keydown", { which: KeyCodes.TAB });
  document.body.dispatchEvent(tabPress);

  const hasFocusClass = document
    .querySelector("html")
    .classList.contains(Focus.ShowFocusClass);
  expect(hasFocusClass).toEqual(true);
});

test("removes focus class on body click", () => {
  Focus.RemoveFocusOnClick();
  document.querySelector("body").classList.add(Focus.ShowFocusClass);

  const mouseClick = new MouseEvent("click", { clientX: 20, clientY: 20 });
  document.body.dispatchEvent(mouseClick);

  const hasFocusClass = document
    .querySelector("html")
    .classList.contains(Focus.ShowFocusClass);
  expect(hasFocusClass).toEqual(false);
});
