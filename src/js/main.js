import MoMABalanceText from "./moma-balance-text/moma-balance-text";
import Focus from "./focus/focus";
import Viewporter from "./viewporter/viewporter";
import Modernizr from "./modernizr/modernizr";
import AccentColor from "./accent-color/accent-color";

class MoMAStyle {
  constructor() {
    let f = new Focus();
    let bt = new MoMABalanceText(MoMABalanceText.BalanceTextClass);
    // let m = new Modernizr();
    let a = new AccentColor();

    window.addEventListener("load", () => {
      bt.balance();
    });
  }
}

export {
  MoMAStyle,
  MoMABalanceText,
  Focus,
  Viewporter,
  Modernizr,
  AccentColor,
};
