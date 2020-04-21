import { inject } from 'aurelia-dependency-injection';
import { UI } from 'aurelia-cli';
import * as fs from 'fs';
import * as rimraf from 'rimraf';
import * as projectSettings from '../aurelia.json';

const git = require('simple-git/promise')();

const tempFolder = 'temp';

@inject(UI)
export default class ParseFromOriginGenerator {
    constructor(private ui: UI) { }

    async execute() {
        await this.ui.log('Syncing characters with react-kawaii...');

        await this.ui.log(`Cloning ${projectSettings.sync.sourceOrigin} to ${tempFolder}...`);
        rimraf.sync(tempFolder);
        // TODO: Separate into another generator?
        await git.clone(projectSettings.sync.sourceOrigin, tempFolder);

        let originComponents = fs.readdirSync(tempFolder + '/src/components');
        await this.ui.log('Found origin component folders: ' + originComponents.toString());

        let localComponents = fs.readdirSync('src/elements');
        await this.ui.log('Found local component folders: ' + localComponents.toString());

        let characters = {};

        originComponents.forEach(character => {
            if (projectSettings.sync.sourceIgnore.includes(character)) return;

            let data = fs.readFileSync(`${tempFolder}/src/components/${character}/${character.charAt(0).toUpperCase() + character.slice(1)}.jsx`, 'utf8');
            let pathsData = fs.readFileSync(`${tempFolder}/src/components/${character}/paths.js`, 'utf8');

            characters[character] = { name: character };

            // Defaults
            characters[character].size = data.match(/size: ([0-9]*),/)[1];
            characters[character].mood = data.match(/mood: \'([a-z]*)\'/)[1];
            characters[character].color = data.match(/color: \'([#A-Za-z0-9]*)\'/)[1];

            // Template
            let template = data.match(/<Wrapper className={className}>\s*([\s\S]*)<\/Wrapper>/)[1];

            projectSettings.sync.transformations.forEach(transformation => {
                if(transformation.isRegex)
                    template = template.replace(new RegExp(transformation.match, 'g'), transformation.replace);
                else
                    template = template.split(transformation.match).join(transformation.replace);
            });

            characters[character].template = template;

            // Paths            
            let paths = pathsData.match(/([A-Za-z_0-9]*):\s+'(.*)'/g);
            characters[character].paths = paths.reduce((a, v) => {
                let match = v.match(/([A-Za-z_0-9]*):\s+'(.*)'/).slice(1);

                a[match[0]] = match[1];

                return a;
            }, {});

            // Generate
            let folderName = character.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());

            if (!localComponents.includes(folderName)) fs.mkdirSync(`src/elements/${folderName}`);

            fs.writeFileSync(
                `src/elements/${folderName}/kawaii-${folderName}.html`,
                this.generateHtmlSource(characters[character].template));

            fs.writeFileSync(
                `src/elements/${folderName}/kawaii-${folderName}.ts`,
                this.generateJSSource(characters[character]));
        });
    }

    generateHtmlSource(template: string) {
        return `<template>
    ${template}
</template>`;
    }

    generateJSSource(data: { name: string, size: number, mood: string, color: string, paths: object }) {
        let paths = Object.keys(data.paths).reduce((acc, c, i, arr) => {
            return `${acc}\t\t${c}: '${data.paths[c]}'${i === arr.length - 1 ? '' : ',\n'}`;
        }, "");

        return `import { bindable } from 'aurelia-framework';
import { KawaiiElement } from './../kawaii-element';
import { Mood } from './../../mood';

export class Kawaii${data.name[0].toUpperCase() + data.name.slice(1)} extends KawaiiElement {
    @bindable size = ${data.size};
    @bindable mood = Mood.${projectSettings.sync.moodMap[data.mood]};
    @bindable color = '${data.color}';

    paths = {
${paths}
    }
}
`;
    }
}
