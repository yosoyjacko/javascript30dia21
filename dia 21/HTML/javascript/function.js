console.log("hello world!");

const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);

    speed.textContent = data.coords.speed;
    arrow.getElementsByClassName.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
    console.log(err);
    alert('HEY ya!');
});
