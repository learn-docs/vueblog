[Github来源：力扣 (LeetCode)｜刷题打卡](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

> [已开启]任务一：刷题打卡 * 10 篇

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

**时间： 3 月 1 日 ～ 3 月 13 日**

- [力扣 (LeetCode)-两数之和,有效的括号,两数相加｜刷题打卡](https://juejin.cn/post/6934840493352157197)-3月1日
- [力扣 (LeetCode)-合并两个有序链表,删除排序数组中的重复项,JavaScript笔记｜刷题打卡](https://juejin.cn/post/6935212632173445151)-3月2日
- [力扣 (LeetCode)-最大子序和,JavaScript数据结构与算法（数组）｜刷题打卡](https://juejin.cn/post/6935568341322956830)-3月3日
- [针对CSS说一说｜技术点评](https://juejin.cn/post/6935952741755781156)-3月4日
- [力扣 (LeetCode)-栈,括号生成 ｜刷题打卡](https://juejin.cn/post/6936378038129164319)-3月5日
- [原来也没有那么难！Vue商城开发 | 技术点评](https://juejin.cn/post/6936871299234922509)-3月6日
- [力扣 (LeetCode)-加一，队列 ｜刷题打卡](https://juejin.cn/post/6937296154132480007)-3月7日
- [JavaScript数据结构之链表 | 技术点评](https://juejin.cn/post/6937443215599468558)-3月8日
- [JavaScript的数据结构-集合 ｜技术点评](https://juejin.cn/post/6937811746245574670)-3月9号
- [力扣 (LeetCode)-合并两个有序数组,字典,散列表｜刷题打卡](https://juejin.cn/post/6938184217868107812)-3月10号
- [力扣 (LeetCode)-对称二叉树,树｜刷题打卡](https://juejin.cn/post/6938556015445016584)-3月11号
- [力扣 (LeetCode)-104. 二叉树的最大深度，图｜刷题打卡](https://juejin.cn/post/6938924519793000456)-3月12号

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

### 28. 实现 strStr()

一、题目描述

实现 `strStr()` 函数。

给定一个 `haystack` 字符串和一个 `needle` 字符串，在 `haystack` 字符串中找出 `needle` 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  `-1`。

```
输入: haystack = "hello", needle = "ll"
输出: 2

输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

说明:

当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 `needle` 是空字符串时我们应当返回 `0` 。这与C语言的 `strstr()` 以及 `Java`的 `indexOf()` 定义相符。

二、思路分析

当两字符串相等时，返回`0`

`haystack` 为空串时，返回`-1`

`needle` 为空串时，返回`0`

`needle` 的长度大于 `haystack` 返回`-1`

循环 `haystack` ，`i`记录其指针。和 `needle` 的第一位进行相等判断，当一样时，开始循环 `needle`，`j`记录其指针。`res`记录相等时的i指针，即结果。

`i和j加一`，继续循环。

如果之后全相等，中间没有出现不等的情况。`（hello，ll）`那么当`j和needle`的长度相等了，就跳出循环。

如果中间出现不相等，那么`i`就返回`res`记录的下一位置，继续循环，`res和j`重置。继续对比 `noodle` 的第一个字符。

重复上述步骤，当`j和len`相等就说明匹配到了，跳出循环；`i等于haystack`长度，即`haystack`循环完毕后，`j`还不等于`len`，那么就是没找到，`res`重置，跳出循环。


三、答案代码

```
var strStr = function(haystack, needle) {
    if(haystack===needle) return 0
    if(haystack==="") return -1
    if(needle==="") return 0
    if(needle.length>haystack.length) return -1
    var j=0,i=0,res=-1

    while(i>=0){
        var c=haystack[i]
        var len=needle.length
        if(j===len) break
        if(i==haystack.length){
            if(j<len){
                res=-1
            }
            break
        }

        if(c===needle[j]){
            j++
            if(res===-1) res=i
            i++
        }else{
            if(res>-1){
                i=res+1
                j=0
                res=-1
            }else{
                i++
            }
            
        }
    }
  
    return res
};
```

四、总结

> 28. 实现 strStr()题解

### 回看笔者往期高赞文章，也许能收获更多喔！

- [一个合格的初级前端工程师需要掌握的模块笔记](https://juejin.cn/post/6925197705832562696)
- [Vue.js笔试题解决业务中常见问题](https://juejin.cn/post/6916664414422695949)
- [【初级】个人分享Vue前端开发教程笔记](https://juejin.cn/post/6923946134025191432)
- [长篇总结之JavaScript，巩固前端基础](https://juejin.cn/post/6844904078934278158)
- [前端面试必备ES6全方位总结](https://juejin.cn/post/6844904067764846600)
- [达达前端个人web分享92道JavaScript面试题附加回答](https://juejin.cn/post/6913480482638266382)
- [【图文并茂，点赞收藏哦！】重学巩固你的Vuejs知识体系](https://juejin.cn/post/6844904117337341959)
- [【思维导图】前端开发-巩固你的JavaScript知识体系](https://juejin.cn/post/6844904106243391495)
- [14期-连肝7个晚上，总结了计算机网络的知识点！（共66条）](https://juejin.cn/post/6850037263116533773)
- [这是我的第一次JavaScript初级技巧](https://juejin.cn/post/6929701436276097032)
- [localStorage和sessionStorage本地存储](https://juejin.cn/post/6923331849708109838)
- [HTML5中的拖放功能](https://juejin.cn/post/6922602775947771911)
- [挑战前端知识点HTTP/ECMAScript](https://juejin.cn/post/6918735942710722574)
- [必学必会-音频和视频](https://juejin.cn/post/6918011549231775751)
- [前端170面试题+答案学习整理（良心制作）](https://juejin.cn/post/6917635279423537165)
- [前端HTML5面试官和应试者一问一答](https://juejin.cn/post/6917044041863397383)
- [哪吒闹海，席卷图文学习前端Flex布局](https://juejin.cn/post/6916162359765663752)
- [腾讯位置服务开发应用](https://juejin.cn/post/6909784318856396808)
- [【进阶】面试官问我Chrome浏览器的渲染原理（6000字长文）](https://juejin.cn/post/6905946191193325582)
- [面试官一上来就问我Chrome底层原理和HTTP协议（万字长文）](https://juejin.cn/post/6900724539833516040)
- [熬夜总结了 “HTML5画布” 的知识点](https://juejin.cn/post/6855448306517344263)
- [this/call/apply/bind（万字长文）](https://juejin.cn/post/6844904186069401607)
- [HTTP/HTTPS/HTTP2/DNS/TCP/经典题](https://juejin.cn/post/6844904163453714445)
- [执行上下文/作用域链/闭包/一等公民](https://juejin.cn/post/6844904161532706823)
- [Web页面制作基础](https://juejin.cn/post/6844904104712470535)
- [学习总结之HTML5剑指前端（建议收藏，图文并茂）](https://juejin.cn/post/6844904082629459975)

❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章

### 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

### 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)
