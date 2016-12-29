/**
 * Created by Xieyu on 2016/12/19.
 */
var aqidata=[];

function init(){



    document.getElementById("in").addEventListener("click",inHandle);
    document.getElementById("check").addEventListener("click",search);

}

function inHandle(){
    var value=document.getElementById("content").value;
    aqidata=value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);
    console.log(aqidata);
    render();
}

function render(){
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
}

function search() {
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
    console.log(childs);
}

init();