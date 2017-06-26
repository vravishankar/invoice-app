import gulp from 'gulp'

// Import Libraries
import del from 'del'
import path from 'path'
import runSequence from 'run-sequence'

// Import Gulp Plugins
import babel from 'gulp-babel'
import nodemon from 'gulp-nodemon'

// Set up the script directories
const dirs = {
    src: 'src',
    dist: 'dist'
}

const paths = {
    env: ['./package.json', './.env', './.gitignore'],
    scripts: ['scripts/**/*.js'],
}

// Clean Up Task
gulp.task('clean', () => {
    del.sync(['dist/**', 'dist/.*', '!dist'])
})

// Babel Task
gulp.task('babel', () => {
    gulp.src(paths.scripts, { cwd: dirs.src })
        .pipe(babel())
        .pipe(gulp.dest(dirs.dist))
})

gulp.task('nodemon', ['babel'], () => {
    nodemon({
        script: path.join(dirs.dist, 'index.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        tasks: ['babel']
    })
})

gulp.task('serve', () => {
    runSequence('clean', 'babel', 'nodemon')
})

gulp.task('default', ['clean', 'babel']);