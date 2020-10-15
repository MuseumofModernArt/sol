import AccentColor from './accent-color';

test('setSessionColor sets the session color correctly', () => {
  const cookieBeforeCall = document.cookie.replace(
    /(?:(?:^|.*;\s*)sessionHighlightColor\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  );

  expect(cookieBeforeCall).toBe('');

  const applySessionColor = AccentColor.prototype.applySessionColor;
  AccentColor.prototype.applySessionColor = jest.fn();
  const ac = new AccentColor();

  const cookieAfterCall = document.cookie.replace(
    /(?:(?:^|.*;\s*)sessionHighlightColor\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  );

  expect(cookieAfterCall).not.toBe('');
  expect(ac.applySessionColor.mock.calls.length).toBe(1);


  AccentColor.prototype.applySessionColor = applySessionColor;
});

test('applySessionColor applies the session to accent-color', () => {
  document.body.innerHTML = '<div class="accent-color"> Words </div>';
  document.cookie = 'sessionHighlightColor=0; path=/;';

  const ac = new AccentColor();

  const div = document.querySelector('[class*=accent-color--january]');
  expect(div).not.toBe(null);
});
