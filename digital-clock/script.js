let ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date()
    let hours = dateTime.getHours()
    let mins = padzero(dateTime.getMinutes())
    let secs = padzero(dateTime.getSeconds())

    if(hours>12)
        {
            hours = hours - 12
            document.getElementById('ampm').innerHTML ='PM'
        }
    document.getElementById('hours').innerHTML = padzero(hours)
    document.getElementById('minutes').innerHTML = mins
    document.getElementById('seconds').innerHTML = secs
}


function padzero(num)
{
    return num<10?'0'+num:num;
}
setInterval(displayTime,500)