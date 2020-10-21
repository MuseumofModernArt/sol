import * as Util from './util/util';
import MoMABalanceText from './moma-balance-text/moma-balance-text';
import Focus from './focus/focus';
import Viewporter from './viewporter/viewporter';
import SessionColor from './session-color/session-color';
import Modernizr from './modernizr/modernizr';

class Sol {
  constructor() {
    this.viewporter = new Viewporter();
    this.focus = new Focus();
    this.sessionColor = new SessionColor();
    this.balanceText = new MoMABalanceText()
    this.balanceText.initInteraction();
  }
}

export {
  Sol,
  MoMABalanceText,
  Focus,
  Viewporter,
  SessionColor,
  Modernizr,
  Util,
};
