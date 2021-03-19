<!--
 * @description: README
 * @author: bubao
 * @date: 2021-03-04 03:46:35
 * @last author: bubao
 * @last edit time: 2021-03-19 22:40:12
-->

# uc2mp3

本工具可以将网易云音乐的缓存文件 (.uc) 格式解码成 (.mp3) 格式。

按字节异或`0xa3`，得到的就是 mp3 文件。

这是使用`process.nextTick`封装的方法，建议使用下面的代码直接处理：

```js
function core(buffer) {
    if (!Buffer.isBuffer(buffer)) {
        return false;
    }
    return buffer.map(value => value ^ 0xA3);
}
```
