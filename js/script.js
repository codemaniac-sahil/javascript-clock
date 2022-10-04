let time;
let date;
let a;
const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    s = a.getHours()
    f = a.getSeconds()
    if (f < 10) {
        f = '0' + f;
    }
    if (s < 10) {
        s = '0' + s;
    }
    m = a.getMinutes()
    if (m < 10) {
        m = '0' + m;
    }

    time = s + ':' + '' + m + ':' + '' + f;
    date = a.toLocaleDateString(undefined, option);
    document.getElementById('clock').innerHTML = time;
    document.getElementById('day').innerHTML = date;
}, 1000)
a = new Date();
s = a.getHours()
if (s<12){
    document.getElementById('time').innerHTML = " Morning";
    document.body.style = "background-image:linear-gradient(yellow,orange);";
}else if (s<16) {
    document.getElementById('time').innerHTML = " Afternoon";
    document.body.style = "background-image:linear-gradient(red,yellow);";
}else{
    document.getElementById('time').innerHTML = " Evening";
    document.body.style = "background-image:linear-gradient(black,gray);";
}

// code for alarm

hours = document.querySelector('#hours')
mins = document.querySelector('#mins')

for (i=0; i <= 23; i++) {
    hours.options[hours.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
for (i=0; i <= 59; i++) {
    mins.options[mins.options.length] = new Option(i < 10 ? "0" + i : i, i);
}

function checkAlarm(alarmH,alarmM){
    b = new Date()
    checkHour = b.getHours()
    checkMins = b.getMinutes()
    if ((checkHour === parseInt(alarmH)) && (checkMins === parseInt(alarmM))) {
        return true
    } else {
        return false
    }
}
localStorage.setItem("isSet","false")
setAlarm = document.querySelector('#setAlarm')
setAlarm.addEventListener('click',()=>{
    if (localStorage.isSet == "false"){
    alarmHour = hours.value
    alarmMinutes = mins.value
    setAlarm.innerHTML = 'Reset'
    localStorage.isSet = "true";
    document.querySelector('.para').innerHTML = "Your alarm is set to " + alarmHour + " hrs : " + alarmMinutes + " mins"
    const i = setInterval(()=>{
        if (checkAlarm(alarmHour,alarmMinutes)){
            var audio = new Audio('alarm1.mp3')
            audio.play()
            clearInterval(i)
            hours.value = '00'
            mins.value = '00'
            document.querySelector('.para').innerHTML = 'Your alarm shows here'
            setAlarm.innerHTML = 'Set Alarm'
            localStorage.isSet = "false"
            alert("Wake up !! Your alarm is ringing")
        }
    },1000)
    z = i
    } 
    else {
        localStorage.isSet = "false"
        setAlarm.innerHTML = 'Set Alarm'
        document.querySelector('.para').innerHTML = 'Your alarm shows here'
        hours.value = '00'
        mins.value = '00'
        clearInterval(z);
    }
})










