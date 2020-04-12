## table

<style>
    tr{
        height:40px;
    }
    td{
        text-align:center;
    }
</style>
<table border="1" width="500"  cellpadding="0" cellspacing="0">
    <caption>通讯录</caption>
    <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>联系方式</th>
        <th>操作</th>
    </tr>
    <tr>
        <td>1</td>
        <td>达达</td>
        <td>789</td>
        <td>
            <input type="button" value="删除" onclick="del(this)">
        </td>
    </tr>
    <tr>
        <td>2</td>
        <td>大大</td>
        <td>456</td>
        <td>
            <input type="button" value="删除" onclick="del(this)">
        </td>
    </tr>
    <tr>
        <td>3</td>
        <td>哒哒</td>
        <td>123</td>
        <td>
            <input type="button" value="删除" onclick="del(this)">
        </td>
    </tr>
</table>
<input type="button" value="添加一行" onclick="add()">

<script>
var tab=document.getElementsByTagName("table")[0];
function add(){
    var tr=tab.rows;
    var td=tr[0].cells;
    var trNew=document.createElement("tr");
    for(var i=0;i<td.length;i++){
        var tdNew=document.createElement("td");
        if(i==0){
            tdNew.innerText=tr.length;
        }
        if(i==td.length-1){
            tdNew.innerHTML="<input type='button' value='删除'>"
        }
        trNew.appendChild(tdNew);
    }
    tab.appendChild(trNew);
}

function del(a){
    var tBody=tab.getElementsByTagName("tbody")[0];
    tBody.removeChild(a.parentNode.parentNode);
}
</script>

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>table</title>
        <link rel="stylesheet" href="">
        <style>
            tr{
                height:40px;
            }
            td{
                text-align:center;
            }
        </style>
    </head>
    <body>
    <table border="1" width="500"  cellpadding="0" cellspacing="0">
        <caption>通讯录</caption>
        <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>联系方式</th>
            <th>操作</th>
        </tr>
        <tr>
            <td>1</td>
            <td>达达</td>
            <td>789</td>
            <td>
                <input type="button" value="删除" onclick="del(this)">
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>大大</td>
            <td>456</td>
            <td>
                <input type="button" value="删除" onclick="del(this)">
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>哒哒</td>
            <td>123</td>
            <td>
                <input type="button" value="删除" onclick="del(this)">
            </td>
        </tr>
    </table>
    <input type="button" value="添加一行" onclick="add()">

    <script>
    var tab=document.getElementsByTagName("table")[0];
    function add(){
        var tr=tab.rows;
        var td=tr[0].cells;
        var trNew=document.createElement("tr");
        for(var i=0;i<td.length;i++){
            var tdNew=document.createElement("td");
            if(i==0){
                tdNew.innerText=tr.length;
            }
            if(i==td.length-1){
                tdNew.innerHTML="<input type='button' value='删除'>"
            }
            trNew.appendChild(tdNew);
        }
        tab.appendChild(trNew);
    }

    function del(a){
        var tBody=tab.getElementsByTagName("tbody")[0];
        tBody.removeChild(a.parentNode.parentNode);
    }
    </script>
    </body>
    </html>