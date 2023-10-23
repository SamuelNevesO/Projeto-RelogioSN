// varreduras de elementos HTML
const hr = document.getElementById('horas')
const min = document.getElementById('minutos')
const seg = document.getElementById('segundos')

const relogio = setInterval(function tempo(){

    let dataDeHoje = new Date()
    let hours =  dataDeHoje.getHours()
    let minutes = dataDeHoje.getMinutes()
    let seconds = dataDeHoje.getSeconds()

    if(hours <10){
        hours = '0'+hours
    } else if(minutes<10){
        minutes = '0'+minutes
    }else if(seconds<10){
        seconds = '0'+seconds
    }

    hr.textContent = hours
    min.textContent=minutes
    seg.textContent = seconds

    

})
