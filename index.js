var boxes=document.querySelectorAll(".box");
var check=document.querySelector(".check");
var reset=document.querySelector(".reset");
var usc=document.getElementById("userscore");
var csc=document.getElementById("computerscore");
var dsc=document.getElementById("drawscore");
let r1;
let r2;
var c1=0;
var u1=0;
function random1()
{
var res;
var ran=Math.floor(Math.random()*3);
if(ran==0)
{
    res='rock';
    console.log(res)
}
else if(ran==1)
{
    res='paper';
    console.log(res);
}
else if(ran==2)
{
    res='scissor'
    console.log(res);
}
return res;
}




boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        var v=box.getAttribute("id");
        r2=v;
        r1=random1();
        console.log(r2);
        if((r1=='rock'&& r2=='scissor') ||(r1=='rock'&& r2=='paper'))
            {
                var comp=document.getElementById("computerscore");
                var i1=parseInt(comp.innerText);
                i1=i1+1;
                comp.innerText=i1;
                c1=i1;
                console.log(c1);
                console.log(u1)
        
            }
        else if((r1=='paper'&& r2=='rock')||(r1=='paper'&& r2=='scissor'))
            {
                var user=document.getElementById("userscore");
                var i2=parseInt(user.innerText);
                i2=i2+1;
                user.innerText=i2;
                u1=i2;
                console.log(u1);
                console.log(c1)
            }
        else if((r1=='scissor'&& r2=='rock'))
            {
                var user=document.getElementById("userscore");
                var i2=parseInt(user.innerText);
                i2=i2+1;
                user.innerText=i2;
                u1=i2;
                console.log(u1);
                console.log(c1);
        
            }
        else if((r1=='scissor'&& r2=='paper'))
            {
                var comp=document.getElementById("computerscore");
                var i1=parseInt(comp.innerText);
                i1=i1+1;
                comp.innerText=i1;
                c1=i1;
                console.log(c1);
                console.log(u1);
            }
        else if((r1=='rock'&& r2=='rock')||(r1=='paper'&& r2=='paper')||(r1=='scissor'&& r2=='scissor'))
            {
                var draw=document.getElementById("drawscore");
                var i3=parseInt(draw.innerText);
                i3=i3+1;
                draw.innerText=i3;
            }
        
        
    })
   
})

check.addEventListener('click',()=>{
    
    if(c1==u1)
    {
        alert("Both are draw")
    }
    else if(c1>u1)
    {
        alert("computer wins");
    }
    else{
        alert("user  wins");
    }
})
reset.addEventListener('click',()=>{
    usc.innerText=0;
    csc.innerText=0;
    dsc.innerText=0;

})

