import * as Util from './util/util';
import MoMABalanceText from './moma-balance-text/moma-balance-text';
import Focus from './focus/focus';
import Viewporter from './viewporter/viewporter';
import AccentColor from './accent-color/accent-color';
import Modernizr from './modernizr/modernizr';

class Sol {
  constructor() {
    this.viewporter = new Viewporter();
    this.focus = new Focus();
    this.accentColor = new AccentColor();
    this.balanceText = new MoMABalanceText()
    this.balanceText.initInteraction();
  }
}

export {
  Sol,
  MoMABalanceText,
  Focus,
  Viewporter,
  AccentColor,
  Modernizr,
  Util,
};
