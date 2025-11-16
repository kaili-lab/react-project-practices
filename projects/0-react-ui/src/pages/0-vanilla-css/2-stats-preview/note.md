# Stats preview card

## 使用 img 还是 background-image

### 判断一张图是不是“装饰性背景”，可以用几个问题来筛

1. 看有没有“信息价值”
   1. 去掉这张图，用户还能理解内容吗？不看这张图，数据、文案是否仍然完整？
   2. 如果答案是“能”，那么它更可能是装饰性背景（比如渐变、纹理、角落圆弧、你这个紫色滤镜的办公照片）。
   3. 如果答案是“不能”，它就是内容图片（产品图、图表、教程步骤截图等）。
2. 看是否需要 alt 文本

   1. 需要写清楚 alt="..." 才算完整的 → 内容图片，应使用 `<img>`。
   2. alt 写了也很奇怪，比如“背景紫色办公场景照片”这种读出来只会打扰用户 → 装饰性，用 background-image 或 `<img alt="" aria-hidden="true">`。

3. 看它在布局里的角色
   1. 只是让块更好看：背景纹理、色块、光斑、遮罩 → 背景图更合适。
   2. 需要跟随文字、参与排版（比如图文并列的“图”）→ 往往用 `<img>`

### img 元素可以另存为

1. img 元素在页面上，可以通过右键另存为图片，而 background-image 则不行

### 用 img 元素实现遮罩装饰

```html
<div className="{styles.image}">
  <img src="./image-header-desktop.jpg" alt="" />
  <div className="{styles.overlay}" />
</div>
```

```css
.image {
  position: relative;
  overflow: hidden;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  inset: 0;
  background-color: hsl(277, 64%, 61%);
  mix-blend-mode: multiply;
  opacity: 0.9;
}
```

## 小屏幕尺寸图片问题

1. 右侧的图片是空的 div 的背景图，它在大屏幕下能显示是因为这个 div 和左侧的内容区在一行，由内容区的高度决定图片的显示；
2. 当来到小屏幕时，空的 div 独自一行，它需要一个高度来展示图片，这个高度来自：
   1. UI 设计稿；
   2. 固定宽度 + 设置图片宽高比
   3. 其他方式

## 圆角遮盖问题

1. 为.container 设置 `border-radius: 15px;` 不生效，是因为这是父元素，它的两个子元素正好将它覆盖了
2. 通过添加 `overflow: hidden;` 来解决；
