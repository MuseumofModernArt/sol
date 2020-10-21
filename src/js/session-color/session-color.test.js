import SessionColor from './session-color';

test('setSessionColor sets the session color correctly', () => {
  const cookieBeforeCall = document.cookie.replace(
    /(?:(?:^|.*;\s*)sessionHighlightColor\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  );

  expect(cookieBeforeCall).toBe('');

  const applySessionColor = SessionColor.prototype.applySessionColor;
  SessionColor.prototype.applySessionColor = jest.fn();
  const sc = new SessionColor();

  const cookieAfterCall = document.cookie.replace(
    /(?:(?:^|.*;\s*)sessionHighlightColor\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  );

  expect(cookieAfterCall).not.toBe('');
  expect(sc.applySessionColor.mock.calls.length).toBe(1);


  SessionColor.prototype.applySessionColor = applySessionColor;
});

test('applySessionColor applies the session to $color/session', () => {
  document.body.innerHTML = '<div class="$color/session"> Words </div>';
  document.cookie = 'sessionHighlightColor=0; path=/;';

  const sc = new SessionColor();

  const div = document.querySelector('[class*=\\$color\\/session\\:1]');
  expect(div).not.toBe(null);
});
