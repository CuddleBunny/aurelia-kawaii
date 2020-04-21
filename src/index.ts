import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./elements/face/kawaii-face'),
        PLATFORM.moduleName('./elements/backpack/kawaii-backpack'),
        PLATFORM.moduleName('./elements/browser/kawaii-browser'),
        PLATFORM.moduleName('./elements/cat/kawaii-cat'),
        PLATFORM.moduleName('./elements/chocolate/kawaii-chocolate'),
        PLATFORM.moduleName('./elements/credit-card/kawaii-credit-card'),
        PLATFORM.moduleName('./elements/file/kawaii-file'),
        PLATFORM.moduleName('./elements/ghost/kawaii-ghost'),
        PLATFORM.moduleName('./elements/ice-cream/kawaii-ice-cream'),
        PLATFORM.moduleName('./elements/mug/kawaii-mug'),
        PLATFORM.moduleName('./elements/planet/kawaii-planet'),
        PLATFORM.moduleName('./elements/speech-bubble/kawaii-speech-bubble')
    ]);
}
