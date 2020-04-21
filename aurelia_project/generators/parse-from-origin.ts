import { inject } from 'aurelia-dependency-injection';
import { Project, ProjectItem, CLIOptions, UI } from 'aurelia-cli';
import * as fs from 'fs';
import * as rimraf from 'rimraf';
import * as projectSettings from '../aurelia.json';

const git = require('simple-git/promise')();

const tempFolder = 'temp';

@inject(Project, CLIOptions, UI)
export default class ParseFromOriginGenerator {
    constructor(private project: Project, private options: CLIOptions, private ui: UI) { }

    async execute() {
        await this.ui.log('Syncing characters with react-kawaii...');        

        await this.ui.log(`Cloning ${projectSettings.sync.sourceOrigin} to ${tempFolder}...`);
        rimraf.sync(tempFolder);
        // TODO: Separate into another generator?
        await git.clone(projectSettings.sync.sourceOrigin, tempFolder);

        let results = fs.readdirSync(tempFolder + '/src/components');
        await this.ui.log('Found component folders: ' + results.toString());

        let characters = {};

        results.forEach(character => {
            if(character === "common") return;

            let data = fs.readFileSync(`${tempFolder}/src/components/${character}/${character.charAt(0).toUpperCase() + character.slice(1)}.jsx`, 'utf8');
            let pathsData = fs.readFileSync(`${tempFolder}/src/components/${character}/paths.js`, 'utf8');
            
            characters[character] = {};

            characters[character].size = data.match(/size: ([0-9]*),/)[1];
            characters[character].mood = data.match(/mood: \'([a-z]*)\'/)[1];
            characters[character].color = data.match(/color: \'([#A-Za-z0-9]*)\'/)[1];

            let template = data.match(/<Wrapper className={className}>\s*([\s\S]*)<\/Wrapper>/)[1];

            template = template.replace('uniqueId={getUniqueId()}', 'unique-id.bind="getUniqueId()"');
            template = template.replace('Face', 'g as-element="kawaii-face"');
            template = template.replace('fillRule', 'fill-rule');
            template = template.replace('xlinkHref', 'xlink:href');
            template = template.replace('xmlnsXlink', 'xmlns:xlink');
            template = template.replace(/d={([^}]*)}/g, 'd.one-time="$1"');
            template = template.replace(/(\w*)={([^}]*)}/g, '$1.bind="$2"');

            characters[character].template = template;

            let paths = pathsData.match(/([A-Za-z]*):\s+'(.*)'/g);
            characters[character].paths = paths.reduce((a, v) => {
                let match = v.match(/([A-Za-z]*):\s+'(.*)'/).slice(1);

                a[match[0]] = match[1];

                return a;
            }, {});
        });

        //console.log(characters);
    }

    generateHtmlSource(template: string) {
        return `<template>
            ${template}
        </template>`;
    }

    generateJSSource(data: { size: number, mood: string, color: string, paths: object}) {
        return `
        `;
    }
}
