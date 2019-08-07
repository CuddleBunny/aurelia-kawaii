import { bindable } from 'aurelia-framework';
import { KawaiiElement } from './../kawaii-element';
import { Mood } from './../../mood';

export class KawaiiCreditCard extends KawaiiElement {
    @bindable size = 200;
    @bindable mood = Mood.Blissful;
    @bindable color = '#83D1FB';

    paths = {
        shape: 'M187.018 143H10.982C4.916 143 0 138.097 0 132.047V10.953C0 4.903 4.916 0 10.982 0h176.036C193.084 0 198 4.903 198 10.953v121.094c0 6.05-4.916 10.953-10.982 10.953',
        shadow: 'M176.018 143c6.066 0 10.982-4.903 10.982-10.953V10.953C187 4.903 182.084 0 176.018 0h11C193.084 0 198 4.903 198 10.953v121.094c0 6.05-4.916 10.953-10.982 10.953h-11z',
    }
}
