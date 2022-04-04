var all=document.querySelector(".btn-1");
all.addEventListener('click',function(){
    remove();
});

var brk=document.querySelector(".btn-2");
brk.addEventListener('click',function(){
    remove();
    var list1=document.querySelectorAll(".card-4,.card-5,.card-6,.card-7,.card-8,.card-9,.card-10");
    for(let i=0;i<list1.length;i++){
        list1[i].classList.add("hide");
    }
});
var lunch=document.querySelector(".btn-3");
lunch.addEventListener('click',function(){
    remove();
    var list2=document.querySelectorAll(".card-1,.card-2,.card-3,.card-7,.card-8,.card-9,.card-10");
    for(let i=0;i<list2.length;i++){
        list2[i].classList.add("hide");
    }
});

var Shakes=document.querySelector(".btn-4");
Shakes.addEventListener('click',function(){
    remove();
    var list2=document.querySelectorAll(".card-1,.card-2,.card-3,.card-4,.card-5,.card-6,.card-10");
    for(let i=0;i<list2.length;i++){
        list2[i].classList.add("hide");
    }
});

var dinner=document.querySelector(".btn-5");
dinner.addEventListener('click',function(){
    remove();
    var list2=document.querySelectorAll(".card-1,.card-2,.card-3,.card-4,.card-5,.card-6,.card-7,.card-8,.card-9");
    for(let i=0;i<list2.length;i++){
        list2[i].classList.add("hide");
    }
});

function remove(){
    var list=document.querySelectorAll(".card-1,.card-2,.card-3,.card-4,.card-5,.card-6,.card-7,.card-8,.card-9,.card-10");
    for(let i=0;i<list.length;i++){
        list[i].classList.remove("hide");
    }
}