import MoMABalanceText from "./moma-balance-text/moma-balance-text";
import Focus from "./focus/focus";
import Viewporter from "./viewporter/viewporter";
import Modernizr from "./modernizr/modernizr";

class MoMAStyle {
  constructor() {
    let f = new Focus();
    let bt = new MoMABalanceText(MoMABalanceText.BalanceTextClass);
    let m = new Modernizr();
  }
}

export {
  MoMAStyle,
  MoMABalanceText,
  Focus,
  Viewporter,
  Modernizr,
};
