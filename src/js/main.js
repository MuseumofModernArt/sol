import MoMABalanceText from "./moma-balance-text/moma-balance-text";
import Focus from "./focus/focus";
import Viewporter from "./viewporter/viewporter";
import AccentColor from "./accent-color/accent-color";
import Modernizr from "./modernizr/modernizr";

class MoMAStyle {
  constructor() {
    let f = new Focus();
    let bt = new MoMABalanceText(MoMABalanceText.BalanceTextClass);
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
  AccentColor,
  Modernizr,
};
