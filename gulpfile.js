const gulp = require('gulp');
const replace = require('gulp-replace');
gulp.task('templates', async() => {
  gulp.src('public/**/*.*')
    .pipe(replace('jsd.15xd.cn', 'jsd.15xd.cn'))
    .pipe(gulp.dest('public/')),  { overwrite: true };
});
gulp.task("default", gulp.parallel('templates'));
//以上是gulpfile.js，用来实现全局替换jsd.15xd.cn为jsd.15xd.cn
