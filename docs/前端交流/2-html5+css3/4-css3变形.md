## 变形

### translate(x,y) 

表示元素水平方向移动 x，垂直方向移动 y，其中 y 可以省略，表示垂直方向没有位移

	translateX(x)：表示元素水平方向移动 x。
	translateY(y)：表示元素垂直方向移动y。

### rotate(angle) 

表示元素顺时针旋转 angle 角度，angle 的单位通常为 deg

### scale(x,y) 

表示元素水平方向缩放比为 x，垂直方向上缩放比为y，其中y可以省略，表示y和 x相同，以保持缩放比。

	scaleX(x)：表示元素水平方向缩放比为 x。
	scaleY(y)：表示元素垂直方向上缩放比为 y。

### skew(angleX ,angleY) 

表示元素沿着 x 轴方向倾斜angleX角度，沿着y轴方向倾斜angleY角度，其中 angleY可以省略，表示 Y 轴方向不倾斜。

	skewX(angleX)：表示元素沿着 x 轴方向倾斜angleX 角度。
	skewY(angleY)：表示元素沿着 y 轴方向倾斜 angleY 角度。

### transform-origin

表示元素旋转的中心点

默认值为 50% 50%。

- 第一个值表 示元素旋转中心点的水平位置，它还可以赋值 left、right、center、长度、百分比；
- 第二个值表示元素旋转中心点的垂直位置，它还可以赋值 top、bottom、 center、长度、百分比。

### CSS3 的 3D 变形属性

transform 增加了三个变形函数：

    rotateX：表示元素沿着 x 轴旋转。
    rotateY：表示元素沿着 y 轴旋转。
    rotateZ：表示元素沿着 z 轴旋转。

### transform-style

用来设置嵌套的子元素在 3D 空间中显示效果。它可以设置两个属性值，flat（子元素不保留其 3D 位置，默认值）和 preserve-3d（子元 素保留它的 3D 位置）。

### perspective

设置成透视效果，透视效果为近大远小。该属性值用来设置 3D 元素距离视图的距离，单位为像素，已经内置了，我们只需要写具体数值即可，默认值为 0。当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。
    
### perspective-origin

设置 3D 元素所基于的 x 轴和 y 轴，改变 3D 元素的底部位置，该属性取值同transform-origin，默认值为 50% 50%。