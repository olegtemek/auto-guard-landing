import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { soursemaps: true })

		.pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
		.pipe(app.plugins.replace(/@svg\//g, 'assets/img/svgicons/'))
		.pipe(app.plugins.replace(/@icons\//g, 'assets/img/icons/'))
		.pipe(app.plugins.replace(/@bg\//g, 'assets/img/bg/'))

		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(groupCssMediaQueries())
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 4 versions"],
			cascade: true
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
}