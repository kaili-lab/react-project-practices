# hard part

## 媒体查询

1. 要么是 mobile first，要么是 desktop first；
2. 默认的样式直接写出来，其他尺寸下的样式需要在`@media(){}`中写

   1. 下面是 mobile first 的写法，媒体查询使用`min-width`

   ```css
   @media (min-width: 768px) {
     .container {
       max-width: 700px;
       flex-direction: row;
     }
   }
   ```

## 如何实现响应式场景下图片切换

1. 在 html 中将不同尺寸的图片都加上去
2. 在 css 中，根据媒体查询去隐藏和现实不同的图片
