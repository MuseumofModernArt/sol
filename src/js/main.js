import MoMABalanceText from './moma-balance-text/moma-balance-text';
import Focus from './focus/focus';
import Viewporter from './viewporter/viewporter';
import AccentColor from './accent-color/accent-color';
import Modernizr from './modernizr/modernizr';
import * as Util from './util/util';

class MoMAStyle {
  constructor() {
    this.focus = new Focus();
    this.balanceText = new MoMABalanceText(MoMABalanceText.BalanceTextClass);
    this.accentColor = new AccentColor();

    this.resizeTimer = null;
    this.rotateTimer = null;

    window.addEventListener('load', () => {
      if (Util.WindowHasSize()) {
        this.balanceText.balance();
      }
    });

    window.addEventListener('resize', () => {
      // On resize events for desktop browsers only.
      if (!Util.IsMobileOrTablet() && Util.WindowHasSize()) {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = this.balanceText.balanceWithDelay(100);
      }
    });

    window.addEventListener('orientationchange', () => {
      if (Util.WindowHasSize()) {
        // On rotation for mobile browsers.
        clearTimeout(this.rotateTimer);
        this.rotateTimer = this.balanceText.balanceWithDelay(100);
      }
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
