let time;
let date;
let a;
const option={weekday:'long',year:'numeric',month:'long',day:'numeric'};
setInterval(()=>
{
    a=new Date();
    
    time=a.getHours() +':'+ ''+a.getMinutes() + ':' + ''+ a.getSeconds();
    date=a.toLocaleDateString(undefined,option);
    document.getElementById('time').innerHTML=time +' '+ 'on'+' ' + date;
},1000

)