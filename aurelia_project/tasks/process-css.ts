import {build} from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as plumber from 'gulp-plumber';
import * as notify from 'gulp-notify';
import * as less from 'gulp-less';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source, {sourcemaps: true, since: gulp.lastRun(processCSS)})
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(less())
    .pipe(build.bundle());
}

export function pluginCSS(dest) {
  return function processPluginCSS() {
    return gulp.src(project.plugin.source.css)
      .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
      .pipe(less())
      .pipe(gulp.dest(dest));
  };
}
