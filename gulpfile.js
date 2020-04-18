const gulp = require ('gulp');

const sass = require ('gulp-sass');

const autoprefixer = require ('gulp-autoprefixer');


gulp.task('sass', ()=>{

    gulp.src('./sass/*')
        .pipe(sass({
            outputStyle:'compact'
        }))
        .pipe(autoprefixer({
            browsers:['last 3 versions']
        }))
        .pipe(gulp.dest('./css'))


});



gulp.task('t', ()=> {
    console.log('This is a homework');
    console.log('My test');
} );

