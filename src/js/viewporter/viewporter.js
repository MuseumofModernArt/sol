const checkElementDims = (cssProperties) => {
  const testElement = document.createElement("div");
  testElement.style.cssText = cssProperties;
  document.documentElement.insertBefore(
    testElement,
    document.documentElement.firstChild
  );
  const testElementDims = {
    width: testElement.offsetWidth,
    height: testElement.offsetHeight,
  };
  document.documentElement.removeChild(testElement);
  return testElementDims;
};

const updateRemValue = (cssVariable, cssValue) => {
  document.documentElement.style.setProperty(
    cssVariable,
    " " + cssValue / 10 + "rem"
  );
};

const updateVHOffset = () => {
  const initialVisibleHeight = checkElementDims(
    "position: fixed; top: 0; bottom: 0;"
  )["height"];
  const visibleHeight = window.innerHeight; // Comparison for iOS in landscape, which does wierd things with bottom-fixed elements.
  const vh100 = checkElementDims("position: fixed; top: 0; height: 100vh")[
    "height"
  ];
  const vhOffset = vh100 - Math.min(initialVisibleHeight, visibleHeight);
  updateRemValue("--vh-offset", vhOffset);
  setTimeout(() => {
    window.dispatchEvent(new Event("updatedVHOffset"));
  }, 100);
};

const updateVisibleHeight = () => {
  const visibleHeight = window.innerHeight;
  updateRemValue("--visible-height", visibleHeight);
  setTimeout(() => {
    window.dispatchEvent(new Event("updatedVisibleHeight"));
  }, 100);
};

const updateScrollbarWidth = () => {
  const percent100 = checkElementDims(
    "position: fixed; top: 0; width: 100%; height: 200vh;"
  )["width"];
  const scrollbarWidth = window.innerWidth - percent100;
  updateRemValue("--scrollbar-width", scrollbarWidth);
};

document.addEventListener("DOMContentLoaded", () => {
  updateScrollbarWidth();
  updateVisibleHeight();
  updateVHOffset();
});

window.addEventListener("load", () => {
  setTimeout(updateVisibleHeight, 500); // Runs these again after load for iOS in landscape.
  setTimeout(updateVHOffset, 500);
});

let orientationChanged = false;
window.addEventListener("orientationchange", () => {
  orientationChanged = true;
  setTimeout(() => (orientationChanged = false), 750);
});

window.addEventListener("resize", () => {
  updateScrollbarWidth();
  updateVisibleHeight();
  if (orientationChanged) {
    updateVHOffset();
  }
});
