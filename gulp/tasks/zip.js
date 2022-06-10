import del from "del";
import zipPlugin from "gulp-zip";


export const zip = () => {
    // del(`./${app.path.rootFolder}.zip`);
    del(`./archive.zip`);
    // return app.gulp.src(`${app.path.buildFolder}/**/*.*`)
    return app.gulp.src('dist/**/*')
    // .pipe(app.plugins.plumber(
    //     app.plugins.notify.inError({
    //         title: "ZIP",
    //         message: "Error: <%= error.message %>"
    //     })
    // ))
    // .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
    .pipe(zipPlugin(`archive.zip`))
    .pipe(app.gulp.dest('./'));
} 