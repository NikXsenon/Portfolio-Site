import replace from "gulp-replace";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";
import concat from 'gulp-concat';
import uglify from "gulp-uglify";
// import cleancss from "gulp-clean-css";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
    concat: concat,
    uglify: uglify,
    // cleancss: cleancss
}
