/**
 * Created by zjf on 2016/8/21.
 */
var bar=document.getElementById("bar");
var tag=document.getElementById("tag");
var firstin=document.getElementById("firstIn");


var TagRender=function () {
    var tagData=[];
    //初始化
    this.init=function(){
        tag.onkeypress=function(event){
            if(event && (event.keyCode==13||event.keyCode==32||event.keyCode==188)) {
                getData();
            }
        };
    };

    //检查数组中是否已经存在该元素
    function check(val){
        var i=tagData.length-1;
        flag=true;
        while(i>-1){
            if(tagData[i]==val) {
                flag = false;
                break;
            }
            i--;
        }
        return flag;
    }

    //将输入的元素添加进数组中
    function getData() {
        var value=tag.value;
        value=value.trim();
        if(value&&check(value)) {
            if(tagData.length==10){
                tagData.splice(0,1);
            }
            tagData.push(value);
            render();
            tag.value="";
            tag.setAttribute("placeholder","tag");
        }
        else if(value&&!check(value)) tag.value="";
        else  alert("请输入tag");
    }

    //对TAG节点元素进行绘制
    function render(){
        var show=document.getElementById("show");
        show.innerText="";
        for(var i=0;i<tagData.length;i++){
            createNode(i);
        }
    }

    //创建TAG节点元素
    function createNode(num){
        var show=document.getElementById("show");
        var newNode=document.createElement("div");
        var newItem=document.createElement("span");
        newNode.setAttribute("class","tagItem");
        newNode.setAttribute("id","num"+num);
        newItem.innerText=tagData[num];
        newNode.appendChild(newItem);
        newNode.addEventListener("click",del);
        show.appendChild(newNode);
    }

    //删除节点
    function del(){
        var show=document.getElementById("show");
        var id=this.getAttribute("id").slice(3);
        tagData.splice(id,1);
        render();
    }

    return this;
};

var tagRender=new TagRender();
tagRender.init();
