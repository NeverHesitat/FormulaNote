var gulp = require('gulp'),
    merge = require('merge-stream'),
    notify = require('gulp-notify'),
    buffer = require('vinyl-buffer'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith');

var basePath = './';

gulp.task('sprites', function(){
    // 合并雪碧图
    var spriteData = gulp.src('src/assets/images/icons/*.png').pipe(spritesmith({
        imgName: 'icons.png',
        cssName: 'icons.scss',

        // 各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
        padding: 10,

        // 指定排列方式，有top-down （从上至下）, left-right（从左至右）, diagonal（从左上至右下）,
        // alt-diagonal （从左下至右上）和 binary-tree（二叉树排列） 五种供选择，默认 binary-tree
        algorithm: 'top-down',
        algorithmOpts: { sort: true },
        imgPath: basePath + 'src/assets/images/icons.png'
    }));

    // 写文件: gulp.dest(文件的输出目录)
    // imagemin()压缩图片文件

    // 图像流
    var imgStream = spriteData.img
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/images/'));

    // 样式流
    var cssStream = spriteData.css
        .pipe(gulp.dest('src/assets/scss/'));

    // 合并imgStream和cssStream
    return merge(imgStream, cssStream)
        .pipe(notify('sprites generation completion.'));
});

gulp.task('default', ['sprites'], function(){
    // 监视文件，并且可以在文件发生改动时候做一些事情(这里即为上面定义的'sprites'任务)
    gulp.watch('src/assets/images/icons/*.*', ['sprites']);
});
