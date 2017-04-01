/**
 * Created by Xieyu on 2016/8/19.
 */
    var aqidata=[];
    //将事件封装进一个构造函数内，避免污染全局变量
    var Zhang=function(){
        this.inHandle=function () {
            //先获取textarea的值，然后将其存入数组中
            var value=document.getElementById("content").value;
            aqidata=value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);
            //获取展示区域，在其中创建元素
            var show=document.getElementById("show");
            show.innerHTML="";
            for(var i=0;i<aqidata.length;i++){
                var node=document.createElement("div");
                node.style.background="red";
                node.style.color="white";
                node.style.textAlign="center";
                node.style.margin="5px";
                node.style.display="inline-block";
                node.style.overflow="hidden";
                node.setAttribute("class","node"+i);
                node.innerText=aqidata[i];
                show.appendChild(node);
            }
        };
        this.search=function() {
            var info=document.getElementById("search").value;
            var show=document.getElementById("show");
            var childs=show.childNodes;
            for(var i=0;i<childs.length;i++){
                if(childs[i].innerText.indexOf(info.toString())!=-1){
                    childs[i].style.background="blue";
                    for(var j=0;j<childs.length;j++) {
                        if(i==j) continue;
                        childs[j].style.background="red";
                    }
                }
            }
        }
    };
    var zhang=new Zhang();
    document.getElementById("in").addEventListener("click",zhang.inHandle);
    document.getElementById("check").addEventListener("click",zhang.search);
