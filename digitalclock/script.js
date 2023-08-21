let ampm = document.getElementById("ampm")

function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    if(hr>12){
       hr = hr-12
       ampm.innerHTML='pm'

    }
    document.getElementById('hours').innerHTML= zerozero(hr)
    document.getElementById('mins').innerHTML=zerozero(min)
    document.getElementById('seconds').innerHTML= zerozero(sec)


}

function zerozero(num){
    return num<10?"0"+num:num
}
  

setInterval(displayTime,1000)



