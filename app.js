let addBtn=document.querySelector(".addBtn");
let ol=document.querySelector("ol");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
// let addedtask=document.querySelector(".addedTask");

addBtn.addEventListener("click",function(evt){
    let li=document.createElement("li");
    let btn=document.createElement("button");
    btn.innerText="Remove";
    li.innerText=inp.value;
    li.appendChild(btn);
    ol.appendChild(li);
    inp.value="";
})

ol.addEventListener("click",function(evt){
    if(evt.target.nodeName=="BUTTON"){
        let li=document.createElement("li");
        let btn=document.createElement("button");
        let btn2=document.createElement("button");
        btn.textContent="Re-add";
        btn.classList.add("readdBtn");
        btn2.innerText="Delete";
        btn2.classList.add("delBtn");
        let par=evt.target.parentElement;
        // evt.stopPropagation();
        li.innerText=par.firstChild.textContent;
        li.appendChild(btn);
        li.appendChild(btn2);
        ul.appendChild(li);
        par.remove();
    }
})


ul.addEventListener("click",function(evt){
    if(evt.target.className=="readdBtn"){
        let li=document.createElement("li");
        let btn=document.createElement("button");
        let btn2=document.createElement("button");
        btn.textContent="Remove";
        // btn2.innerText="Delete";
        let par=evt.target.parentElement;
        // evt.stopPropagation();
        li.innerText=par.firstChild.textContent;
        li.appendChild(btn);
        // li.appendChild(btn2);
        ol.appendChild(li);
        par.remove();
    }
    if(evt.target.className=="delBtn"){
        let par=evt.target.parentElement;
        par.remove();
    }
})