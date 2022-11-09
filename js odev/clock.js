
let fullName = prompt("Lutfen Adinizi Giriniz: ")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} <medium style="color:white">${fullName}</medium>`

      function showTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
        setTimeout(showTime, 1000);
        
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
      showTime()