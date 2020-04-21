import { bindable } from 'aurelia-framework';
import { KawaiiElement } from './../kawaii-element';
import { Mood } from './../../mood';

export class KawaiiFile extends KawaiiElement {
    @bindable size = 200;
    @bindable mood = Mood.KO;
    @bindable color = '#83D1FB';

    paths = {
		shape: 'M14.938 0C7.24 0 .998 6.24.998 13.938v125.124C1 146.76 7.24 153 14.938 153h76.124c7.698 0 13.939-6.24 13.939-13.938V35.569c0-.457-.183-.895-.505-1.218L70.65.504',
		shadow: 'M105,34.8555 L95.954,34.8555 C95.961,35.1885 95.979,35.5195 95.979,35.8545 L95.979,138.9965 C95.979,146.7255 89.648,152.9895 81.836,152.9895 L90.927,152.9895 C98.739,152.9895 105.07,146.7255 105.07,138.9965 L105.07,35.8545 C105.07,35.5215 105.066,35.1885 105.059,34.8555 L105,34.8555 Z'
    }
}
