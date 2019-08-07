import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./elements/face/kawaii-face'),
        PLATFORM.moduleName('./elements/backpack/kawaii-backpack'),
        PLATFORM.moduleName('./elements/browser/kawaii-browser'),
        PLATFORM.moduleName('./elements/cat/kawaii-cat'),
        PLATFORM.moduleName('./elements/credit-card/kawaii-credit-card'),        
        PLATFORM.moduleName('./elements/file/kawaii-file')
    ]);
}
