//sensitive data stored in external file: 
var gulp = require('gulp');
var spsave = require("gulp-spsave");
var settings = require("./settings.js");
gulp.task("spsave", function () {
    return gulp.src(["App/*.*"])
        .pipe(spsave({
            siteUrl: settings.siteUrl,
            username: settings.username,
            password: settings.password,
            folder: "Style Library/JSApps/App1",
            flatten: false
        }));
});