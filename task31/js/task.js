/**
 * Created by JIA on 2016/12/29.
 */
var radio=document.getElementsByName("id");
var selectCity=document.getElementById("city");
var selectSchool=document.getElementById("school");
var init=function () {
    for(var i=0;i<radio.length;i++){
        radio[i].addEventListener("change",radioChange);
    }
    selectCity.addEventListener("change",selectChange);
}

function radioChange(){
    if(this.getAttribute("value")=="在校生"){
        document.getElementsByClassName("student")[0].style.display="block";
        document.getElementsByClassName("worker")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("student")[0].style.display="none";
        document.getElementsByClassName("worker")[0].style.display="block";
    }
    console.log(this.getAttribute("value")=="在校生");
}

function selectChange(){
    if(this.selectedIndex==0){
        selectSchool.innerHTML="";
        selectSchool.add(new Option("北京邮电大学"));
        selectSchool.add(new Option("北京师范大学"));
    }
    else{
        selectSchool.innerHTML="";
        selectSchool.add(new Option("上海交通大学"));
        selectSchool.add(new Option("复旦大学"));
    }
}

init();