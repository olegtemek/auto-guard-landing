import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber())
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
		.pipe(app.plugins.replace(/@svg\//g, 'assets/img/svgicons/'))
		.pipe(app.plugins.replace(/@icons\//g, 'assets/img/icons/'))
		.pipe(app.plugins.replace(/@bg\//g, 'assets/img/bg/'))
		.pipe(webpHtmlNosvg())
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
}