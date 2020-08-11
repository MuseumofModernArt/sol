const IsMobileOrTablet = () => {
  const iOS = /iOS|iPhone|iPad/g.test(navigator.userAgent);
  const android = /Android/g.test(navigator.userAgent);

  return android || iOS;
}

const DocumentReady = (fn) => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const WindowHasSize = () => {
  return window.innerHeight > 0 && window.innerWidth > 0;
}

// Custom get elements that filters stuff with no height (it or parent is display: none)
const GetElementsList = (elements) => {
  if (!elements) return [];

  // is selector
  if (typeof elements === "string") return document.querySelectorAll(elements);

  // is single element
  if (elements.tagName && elements.querySelectorAll) return [elements];

  let elsArray = [].slice.call(elements);
  elsArray = elsArray.filter((el) => el.getBoundingClientRect().height !== 0);

  return elsArray;
}

export {
  IsMobileOrTablet,
  DocumentReady,
  WindowHasSize,
  GetElementsList,
}
