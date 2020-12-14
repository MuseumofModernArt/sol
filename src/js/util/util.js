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

// Loops through the parts of a hostname and tries to set a cookie on that domain, returning the highest level possible.
// Derived from http://rossscrivener.co.uk/blog/javascript-get-domain-exclude-subdomain
const BaseDomain = () => {
  if (!document.domain) {
    return '';
  }

  let i=0,domain=document.domain,p=domain.split('.'),s='_gd'+(new Date()).getTime();
  while(i<(p.length-1) && document.cookie.indexOf(s+'='+s)==-1){
    domain = p.slice(-1-(++i)).join('.');
    document.cookie = s+"="+s+";domain="+domain+";";
  }
  document.cookie = s+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+domain+";";
  return domain;
}

export {
  IsMobileOrTablet,
  DocumentReady,
  WindowHasSize,
  GetElementsList,
  BaseDomain,
}
