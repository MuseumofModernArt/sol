import * as Util from './util/util';
import MoMABalanceText from './moma-balance-text/moma-balance-text';
import Focus from './focus/focus';
import Viewporter from './viewporter/viewporter';
import SessionColor from './session-color/session-color';
import Modernizr from './modernizr/modernizr';
import Nav from './nav/nav';

class Sol {
  constructor() {
    this.modernizr = new Modernizr();
    this.viewporter = new Viewporter();
    this.focus = new Focus();
    this.sessionColor = new SessionColor();
    this.nav = new Nav();
    this.balanceText = new MoMABalanceText();

    this.balanceText.initInteraction();
  }
}

export {
  Sol,
  Focus,
  Modernizr,
  MoMABalanceText,
  Nav,
  SessionColor,
  Util,
  Viewporter,
};
