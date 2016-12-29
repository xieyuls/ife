/**
 * Created by JIA on 2016/12/26.
 */
var button1=document.getElementById("button1");
var timer=null;
var Traversal=function() {
    button1.addEventListener("click",dlr);
    var nodeList=[];
    var root=document.getElementById("root");
    function reset(){
        clearInterval(timer);
        for(var i=0;i<nodeList.length;i++){
            nodeList[i].style.backgroundColor="white";
        }
    }

    function dlr(){
        reset();
        preOrder(root);
        var i=0;
        nodeList[0].style.backgroundColor="blue";
        timer=setInterval(function(argument){
            i++;
            if(i<nodeList.length){
                nodeList[i-1].style.backgroundColor="white";
                nodeList[i].style.backgroundColor="blue";
            }else
            {
                clearInterval(timer);
                nodeList[i-1].style.backgroundColor="white";
            }
        },500);
    }


    function preOrder(node){
        if (!(node == null)){
            nodeList.push(node);
            preOrder(node.firstElementChild);
            preOrder(node.lastElementChild);
        }
    }
}

var traversal=new Traversal();
