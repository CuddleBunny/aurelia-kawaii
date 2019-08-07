import { bindable } from 'aurelia-framework';
import { Mood } from './../mood';

export interface IKawaiiElement {
    size: number;
    mood: Mood;
    color: string;
}

export class KawaiiElement implements IKawaiiElement {
    /**
     * The desired size in pixels.
     *
     * @type {number}
     * @memberof KawaiiElement
     */
    size: number;

    /**
     * The character's mood.
     *
     * @type {Mood}
     * @memberof KawaiiElement
     */
    mood: Mood;

    /**
     * The character's color.
     *
     * @type {string}
     * @memberof KawaiiElement
     */
    color: string;

    /**
     * A key-value map of paths used in the shape.
     *
     * @type {{ [key: string]: string }}
     * @memberof KawaiiElement
     */
    paths: { [key: string]: string }

    /**
     * Generates a psuedo-unique ID to prevent name collisions across character instances.
     *
     * @returns {string}
     * @memberof KawaiiElement
     */
    getUniqueId(): string {
        return Math.random().toString(36).substring(2, 15);
    }
}
