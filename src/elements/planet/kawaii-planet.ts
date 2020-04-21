import { bindable } from 'aurelia-framework';
import { KawaiiElement } from './../kawaii-element';
import { Mood } from './../../mood';

export class KawaiiPlanet extends KawaiiElement {
    @bindable size = 190;
    @bindable mood = Mood.Blissful;
    @bindable color = '#FCCB7E';

    paths = {
		shape: 'M67 134c37.003 0 67-29.997 67-67S104.003 0 67 0 0 29.997 0 67s29.997 67 67 67z',
		shadow: 'M61.5 133.777C95.93 130.98 123 102.151 123 67 123 31.849 95.93 3.02 61.5.223A67.906 67.906 0 0 1 67 0c37.003 0 67 29.997 67 67s-29.997 67-67 67c-1.852 0-3.686-.075-5.5-.223z'
    }
}
