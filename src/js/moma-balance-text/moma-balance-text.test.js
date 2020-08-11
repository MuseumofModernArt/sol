import MoMABalanceText from './moma-balance-text';

describe("BalanceText", () => {
  const btClass = 'balance-text';
  const shouldBalanceTextTests = [
    { input: "Judd", expected: false },
    { input: "a good day for books", expected: true },
    { input: "Feb 20–July 10", expected: true },
    { input: "Feb 20–July&nbsp;10", expected: true },
    { input: "Feb&nbsp;20–July&nbsp;10", expected: false },
    { input: "Feb 20–22", expected: true },
    { input: "Feb 20&ndash;22", expected: true },
    { input: "9:00–9:30", expected: false },
    { input: "9:00 AM–5:00 PM", expected: true },
    { input: "Fluvial metropolis", expected: false },
    { input: "Fluvial metro-polis", expected: true },
    { input: "I—am", expected: false },
    { input: "I—am—not", expected: true },
    { input: "I&mdash;am—not", expected: true },
    { input: "Judd is minimalist", expected: true },
    { input: "Judd&nbsp;is&nbsp;minimalist", expected: false },
    { input: "Felix Fen&shy;eon", expected: false },
    { input: "Design: <nobr>Now in Production</nobr>", expected: false },
    { input: "New York\n", expected: false },
    { input: "Graphic Design: <nobr>Now in Production</nobr>", expected: true },
  ];

  const momaBT = new MoMABalanceText(btClass);

  describe("ShouldBalanceText", () => {
    shouldBalanceTextTests.forEach((t) => {
      test(`matches for input: ${t.input}`, () => {
        expect(momaBT.shouldBalanceText(t.input)).toBe(t.expected);
      })
    });
  });

  describe("ToggleBalanceTextClass", () => {
    shouldBalanceTextTests.forEach((t) => {
      test(`toggles for input: ${t.input}`, () => {
        let expected = t.expected ? btClass : '';
        expect(momaBT.toggleBalanceTextClass(t.input)).toBe(expected);
      })
    });
  });
});
