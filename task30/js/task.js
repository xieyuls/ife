/**
 * Created by JIA on 2016/8/29.
 */


var Check=function(){
    var valueList=document.getElementsByClassName("import");
    var content=document.getElementsByClassName("content");
    var button=document.getElementsByClassName("check")[0];
    var flag=0;

    this.init=function(){
        for(var i=0;i<valueList.length;i++){
            valueList[i].addEventListener("focus",focusCheck);
            valueList[i].addEventListener("blur",blurCheck);
        }
        button.addEventListener("click",allCheck);
    }

    function focusCheck(){
        for(var i=0;i<valueList.length;i++){
            if(this==valueList[i]) {
                if(this.value=="")
                    content[i].innerText="必填,长度为4-16个字符";
            }
        }
    }

    function blurCheck(){
        for(var i=0;i<valueList.length;i++){
            if(this==valueList[i]) {
                content[i].innerText="";
                if(this.value=="") {
                    content[i].innerText="内容不能为空!";
                    content[i].className="content errorCont";
                    this.className="import error";
                    flag=0;
                }
                else if(this.value.length>16||this.value.length<4) {
                    content[i].innerText="长度必须为4-16个字符!";
                    content[i].className="content errorCont";
                    this.className="import error";
                    flag=0;
                }
                else{
                    content[i].innerText="符合要求";
                    content[i].className="content correctCont";
                    this.className="import correct";
                    flag=1;
                }
            }
        }

    }

    function allCheck(){
        if(flag==1) alert("提交成功！");
        else{
            for(var i=0;i<valueList.length;i++){
                if(valueList[i].value=="") {
                    alert("输入内容不能为空!");
                    break;
                }
                else if(valueList[i].value.length>16||valueList[i].value.length<4) {
                    alert("字符长度有误!");
                    break;
                }
            }
        }
    }
}

var check=new Check();
check.init();
