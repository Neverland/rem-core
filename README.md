# rem-core

使px单位的css属性自动转化为rem为单位的nodejs 包文件。

-----------------
    - 使用node-css把css解析后,对px为单位对属性进行rem转换处理。
    - 对文字进行特殊处理追加至产出的css文件之后。
    - developer只用专注开发,配置灵活方便, 对原始文件无侵入。
-----------------

## flexible.js
默认可以配合淘宝的[flexible.js](https://github.com/amfe/lib-flexible)使用

## 调用方式

```javascript
    rem(content, file, config);
```


## Usage

* 需要在css文件头部声明/* !@userem */

```css
body {
    border-top: 1px;
    border-bottom: 10px;
    padding: 10px; /* @norem */
    background-size: 10px 10px;
}
```

输出:

```css
body {
    border-top: 1px;
    border-bottom: 0.5557rem;
    padding: 10px;
    background-size: 0.5557rem 0.5557rem;
}
```

## Option

- rem `{Number}` 1rem=多少px `default` 18
- min `{Number}` 最小转化值 `default` 3
- exclude `{Array.<String>}` 忽略的样式 `default` `['width', 'height', 'background', 'background-size']`
- fontSize2Rem: `{Boolean}` 字体大小是否转rem单位 `default` true 
    *值为false时会根据dpr输出1倍,2倍,3倍大小的css样式, 这种模式更适合于以内容为主的阅读页面。
    *可以根据实际需要写多个不同的配置
- type `{?default}` 支持[flexible](https://github.com/amfe/lib-flexible)
- dpr `{!Number}` 1, 2, 3 如设计稿的尺寸为
    *320-375 那么dpr为1 
    *640-720 那么dpr为2 


## about font-size
- 对font-size进行了特殊处理,没有使用rem而是根据dpi输出三种大小字体

### type: default && fontSize2Rem: false

```css
@media(-webkit-min-device-pixel-ratio: 2) {    
    .course-name {
        font-size: 36px ;
    }
}
@media(-webkit-min-device-pixel-ratio: 3) {
    .course-name {
        font-size: 54px ;
    }
}
```

### type: null && fontSize2Rem: false
```
[data-dpr="1"] .course-name {
    font-size: 18px; 
}
[data-dpr="2"] .course-name {
    font-size: 36px; 
}
[data-dpr="3"] .course-name {
    font-size: 54px; 
}
```

## 关于原始值
    -在css未进行压缩模式时可以看到原始值
```css
    margin: 0.6668rem/* @source-size: 25px; */ 0;
```

## changelog

<table>
    <thead>
        <tr>
            <th>版本</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody> 
        <tr>
            <td>v0.0.1</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tbody>
</table>
