import { bindable } from 'aurelia-framework';
import { KawaiiElement } from './../kawaii-element';
import { Mood } from './../../mood';

export class KawaiiChocolate extends KawaiiElement {
    @bindable size = 320;
    @bindable mood = Mood.Blissful;
    @bindable color = '#fc105c';

    paths = {
		choco_background: 'M114 206a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h106a4 4 0 014 4v202z',
		choco_inner_1: 'M15 8h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V10a2 2 0 00-2-2H15zm28 26a2 2 0 002-2V18a2 2 0 00-2-2H18a2 2 0 00-2 2v14a2 2 0 002 2h25z',
		choco_inner_2: 'M68 8h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V10a2 2 0 00-2-2H68zm28 26a2 2 0 002-2V18a2 2 0 00-2-2H71a2 2 0 00-2 2v14a2 2 0 002 2h25z',
		choco_inner_3: 'M15 50h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V52a2 2 0 00-2-2H15zm28 26a2 2 0 002-2V60a2 2 0 00-2-2H18a2 2 0 00-2 2v14a2 2 0 002 2h25z',
		choco_inner_4: 'M68 50h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V52a2 2 0 00-2-2H68zm28 26a2 2 0 002-2V60a2 2 0 00-2-2H71a2 2 0 00-2 2v14a2 2 0 002 2h25z',
		choco_inner_5: 'M15 92h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V94a2 2 0 00-2-2H15zm28 26a2 2 0 002-2v-14a2 2 0 00-2-2H18a2 2 0 00-2 2v14a2 2 0 002 2h25z',
		choco_inner_6: 'M68 92h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V94a2 2 0 00-2-2H68zm28 26a2 2 0 002-2v-14a2 2 0 00-2-2H71a2 2 0 00-2 2v14a2 2 0 002 2h25z',
		paper: 'M0 125l114-32.5V207a4 4 0 01-4 4H4a4 4 0 01-4-4v-82z',
		paper_folded: 'M0 125.016h102.305L114 92.5 0 125.016z'
    }
}
