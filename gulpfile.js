//sensitive data stored in external file: 
var gulp = require('gulp');
var spsave = require("gulp-spsave");
var settings = require("./settings.js");
gulp.task("spsave", function () {
    return gulp.src(["App/*.*"])
        .pipe(spsave({
            siteUrl: settings.siteUrl,
            username: settings.username,
            //domain: settings.domain,
            password: settings.password,
            folder: "SiteAssets",
            flatten: true
        }));
});