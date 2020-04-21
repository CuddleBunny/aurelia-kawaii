import { bindable } from 'aurelia-framework';
import { KawaiiElement } from './../kawaii-element';
import { Mood } from './../../mood';

export class KawaiiMug extends KawaiiElement {
    @bindable size = 170;
    @bindable mood = Mood.Blissful;
    @bindable color = '#A6E191';

    paths = {
		shape: 'M17.591 22.258h21.5V5.565C39.091 2.49 41.718 0 44.955 0h121.181C169.374 0 172 2.49 172 5.565v70.483C172 97.526 153.588 115 130.955 115H80.136c-20.764 0-37.93-14.72-40.633-33.733C17.283 78.701 0 60.722 0 38.952c0-9.205 7.891-16.694 17.591-16.694zm20.627 47.704V33.387h-21.5c-3.233 0-5.863 2.496-5.863 5.565 0 15.485 11.835 28.37 27.363 31.01z',
		shadow: 'M156.99 0h9.106C169.356 0 172 2.49 172 5.565v70.483C172 97.526 153.462 115 130.673 115h-16.89 7.784c22.79 0 41.327-17.474 41.327-38.952V5.565c0-3.074-2.644-5.565-5.903-5.565H106z'
    }
}
