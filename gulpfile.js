let projectFolder = "dist";
let sourceFolder = "#src";

let path = {
    build: {
        html: projectFolder + "/",
        css: projectFolder + "/css/",
        js: projectFolder + "/js/",
        img: projectFolder + "/img/",
        fonts: projectFolder + "/fonts/"
    },

    src: {
        html: sourceFolder + "/",
        css: sourceFolder + "/scss/style.scss",
        js: sourceFolder + "/js/script.js",
        img: sourceFolder + "/img/**/*.{jpg, png, svg, git, ico, webp}",
        fonts: sourceFolder + "/fonts/*.ttf"
    },

    watch: {
        html: sourceFolder + "/**/*.html",
        css: sourceFolder + "/scss/**/*.scss",
        js: sourceFolder + "/js/**/*.js",
        img: sourceFolder + "/img/**/*.{jpg, png, svg, git, ico, webp}",
    },

    clean: "./" + projectFolder + "/"

}

let {src, dest} = require("gulp"),
    gulp = require("gulp"),
    browser_sync = require("browser-sync").create();


function browserSync(params) {
    browser_sync.init({
        server: {
            baseDir: path.clean
        },
        port: 3000,
        notify: false
    })
}


let watch = gulp.parallel(browserSync)

exports.watch = watch;
exports.default = watch
