import BalanceText from "balance-text";
import { GetElementsList } from "./../util/util";

const BalanceTextClass = 'balance-text';

export default class MoMABalanceText {
  constructor(className) {
    if (className) this.className = className;
    else this.className = BalanceTextClass;

    this.styleSheetCreated =
      document.querySelectorAll('style[data-owner="balance-text"]').length > 0;
    if (!this.styleSheetCreated) this.createStyleSheet();
  }

  createStyleSheet(callback) {
    let styleSheet = document.createElement("style");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.dataset.owner = "balance-text";
    /*
      Create our BalanceText override classes for a clean calculation.
      BalanceText also applies these as temporary styles as part of its algorithm:
        el.style.display = 'inline';
        el.style.float = 'none';
        el.style.lineHeight = 'normal';
        el.style.position = 'static';
        el.style.whiteSpace = 'nowrap';
    */
    styleSheet.innerHTML = `
      .balance-text\\:measure {
        -webkit-box-orient: inline-axis !important;
        -webkit-line-clamp: none        !important;
        border:             none        !important;
        box-sizing:         border-box  !important;
        height:             auto        !important;
        margin:             initial     !important;
        max-height:         initial     !important;
        max-width:          initial     !important;
        min-height:         initial     !important;
        min-width:          initial     !important;
        overflow:           visible     !important;
        padding:            initial     !important;
        transform:          none        !important;
        width:              auto        !important;
      }
      .balance-text\\:measure:after,
      .balance-text\\:measure:before {
        display: none !important;
      }
      .balance-text\\:hold {
        display: none !important;
      }
    `;

    if (callback) styleSheet.onload = callback;

    document.head.appendChild(styleSheet);
    this.styleSheetCreated = true;
  }

  balance(els) {
    if (!els) els = `.${this.className}`;

    if (!this.styleSheetCreated) {
      this.createStyleSheet(() => {
        this.balance(els);
      });
    } else {
      let elsList = GetElementsList(els);
      elsList.forEach((el) => {
        el.dataset.inlineCss = el.style.cssText;
        el.style.cssText = "";
        el.innerHTML = el.innerHTML.replace(
          /\u00ad/g,
          '<span data-owner="balance-text-placeholder-softhyphen"></span>'
        );
        el.classList.add("balance-text:measure");
      });
      BalanceText(elsList); // Native call without any foreach since the library does it itself.

      elsList.forEach((el) => {
        el.classList.remove("balance-text:measure");
        el.innerHTML = el.innerHTML.replace(
          /<span data-owner="balance-text-placeholder-softhyphen"><\/span>/g,
          "&shy;"
        );
        el.style.cssText = el.dataset.inlineCss;
        delete el.dataset.inlineCss;
      });

      let postEls = [].slice.call(
        document.getElementsByClassName("balance-text:hold")
      );
      postEls.forEach((el) => el.classList.remove("balance-text:hold"));
    }
  }

  balanceWithDelay(delay, els) {
    const delayTime = delay || 250;
    return setTimeout(() => {
      this.balance(els);
    }, delayTime);
  }

  toggleBalanceTextClass(input) {
    if (this.shouldBalanceText(input)) return this.className;
    else return "";
  }

  shouldBalanceText(input) {
    let trimRegex = /(^\s)|(\s$)/;
    let nobrRegex = /<nobr>.*<\/nobr>/;
    let delimiterRegex = /(.*(\s|-|–|—|&ndash;|&mdash;).*){2,}/;

    let inputTrimmed = input.replace(trimRegex, "");
    let inputNoBr = inputTrimmed.replace(nobrRegex, "!!nobr!!");
    return inputNoBr.match(delimiterRegex) !== null;
  }
}

export  {
  BalanceTextClass,
};
