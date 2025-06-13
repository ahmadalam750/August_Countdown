function eidHandler(){
    var eidDate = new Date("August-14-2025")
    var nowDate = new Date()
    

    var diff = eidDate - nowDate

    var month =document.getElementById("month")
    var d = document.getElementById("days")
    var h = document.getElementById("hours")
    var m = document.getElementById("min")
    var s = document.getElementById("sec")
    

    var months = Math.floor(diff/(1000*60*60*24*30))
    var days = Math.floor(diff/(1000*60*60*24)%30)
    var hours = Math.floor(diff/(1000*60*60)%24)
    var min = Math.floor(diff/(1000*60)%60)
    var sec = Math.floor(diff/(1000)%60)
    
   
    
    month.innerText = months
    d.innerText = days
    h.innerText = hours
    m.innerText = min
    s.innerText = sec
}


setInterval(eidHandler,1000)
