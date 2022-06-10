
export const js = () => {
    return app.gulp.src(app.path.src.js)
    .pipe(app.plugins.concat('js.js'))
    .pipe(app.plugins.uglify())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
}

