let inputarea = document.getElementById("inp");
let addbuttoncontrol = document.getElementById("add-button");
let display=document.getElementById("display-list")
let deleteint = document.getElementById("delete-control")
let mainlist1 = document.getElementById("mainlist")
let rrrr=document.getElementsByClassName("deleteclass")



let todo=[];
function addtodo(){
 if(!inputarea.value){
    alert("please input a valid to-do")
 }else{
    todo.unshift(inputarea.value );
    
 }
};
function showlist(){
    display.innerHTML=""
    todo.forEach(function(n){
        display.innerHTML += "<li>"+n+"</li>"

    })
}
function delete1(){
    todo.shift(inputarea.value);
    showlist();
}
addbuttoncontrol.addEventListener("click",function(e){
    addtodo()
    showlist()
    inputarea.value=""
    
    todo.forEach(function(e){
        if (inputarea.value=="") {
            let deletebutton= document.createElement("input");
            deletebutton.setAttribute("type","button")
            deletebutton.setAttribute("value","delete")
            deletebutton.setAttribute("id","buttondiv",)
            deletebutton.classList.add("deleteclass")
            mainlist.appendChild(deletebutton)
  //           e.preventDefalt()
        }else{
            todo.forEach(function(e){
                !deletebutton
                e.preventDefalt()
            })
        }
    })

    
})
function remove1(e){
    todo = e.target
    if(rrrr.classList[0]==="deleteclass"){
        rrrr.remove()

    }
}

mainlist.addEventListener("click",function(e){
    delete1()
    showlist()
})
mainlist1.addEventListener("click",function(){
    deletebutton.remove()

})