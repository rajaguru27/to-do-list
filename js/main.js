var button=document.getElementById("add");


var btn=document.getElementById("btn");
var inputs=document.getElementById("inputs")





var add;
add=document.getElementById("add");
var del,send;
add.addEventListener("click",function(){
     
    var output = inputs.value;
   


 send =document.createElement("div");
btn.appendChild(send);
send.classList.add("detail");

var para =document.createElement("p");
send.appendChild(para);
para.classList.add("para");
para.innerHTML=output;

 del= document.createElement("button");
send.appendChild(del);
del.classList.add("del");
del.innerHTML="Delete";

var edit= document.createElement("button");
send.appendChild(edit);
edit.classList.add("edit");
edit.innerHTML="Edit";

var done= document.createElement("button");
send.appendChild(done);
done.classList.add("done");
done.innerHTML="Done";
del.addEventListener("click",function(){
    this.parentNode.remove();
  })
  edit.addEventListener("click",function(){
    this.nextElementSibling.classList.add("view");
    para.style.backgroundColor="green";
    para.contentEditable=true;
  })
  done.addEventListener("click",function(){
    this.classList.remove("view")
    para.style.backgroundColor="red";
    para.contentEditable=false;
  })

  
  
})

 


