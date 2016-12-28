var gulp = require('gulp'),
    merge = require('merge-stream'),
    notify = require('gulp-notify'),
    buffer = require('vinyl-buffer'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith');

var basePath = './';

gulp.task('sprites', function(){
    // 合并雪碧图
    var spriteData = gulp.src('src/sprites/**/*.png').pipe(spritesmith({
        imgName: 'icons.png',
        cssName: 'icons.scss',
        padding: 10,
        algorithm: 'top-down',
        algorithmOpts: { sort: true },
        imgPath: basePath + 'assets/icons.png'
    }));

    // 写文件: gulp.dest(文件的输出目录)
    // imagemin()压缩图片文件

    // 图像流
    var imgStream = spriteData.img
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/'));

    // 样式流
    var cssStream = spriteData.css
        .pipe(gulp.dest('src/plugin/scss/'));

    // 合并imgStream和cssStream
    return merge(imgStream, cssStream)
        .pipe(notify('sprites generation completion.'));
});

gulp.task('default', ['sprites'], function(){
    // 监视文件，并且可以在文件发生改动时候做一些事情(这里即为上面定义的'sprites'任务)
    gulp.watch('src/sprites/**/*.*', ['sprites']);
});