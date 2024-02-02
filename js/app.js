


setInterval(function(){
let date = new Date();

let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let am = document.querySelector('#am');


let hours_now = date.getHours();
let min_now = date.getMinutes();
let sec_now = date.getSeconds();

hour.innerText = hours_now > 12 ? hours_now - 12 : hours_now;
hour.innerText = hours_now < 10 ? "0" + hours_now : hours_now;
am.innerText = hours_now > 12 ? "pm" : "am";
min.innerText = min_now < 10 ? "0" + min_now : min_now;
sec.innerText = sec_now < 10 ? "0" + sec_now : sec_now;

},1000);


// light and Dark mode


if(localStorage.getItem('mode') === 'dark'){
    document.documentElement.classList.add("dark");
    document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-moon"></i>'
}
document.querySelector("#btn").addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
        document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-sun"></i>'
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("mode");
    } else {
        document.documentElement.classList.add("dark");
        document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-moon"></i>'
        localStorage.setItem("mode", "dark");
    }
});





// ANALOG CLOCK

let hr = document.getElementById('ahour');
let min = document.getElementById('amin');
let sec = document.getElementById('asec');


function displayTime(){
    let date = new Date();


    //getting hours,mins,secs from date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm/2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime,1000)