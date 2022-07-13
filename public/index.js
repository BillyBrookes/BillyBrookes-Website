var r = document.documentElement;

function start(){
    r.style.setProperty('--split-percentage', lerp(0, 15, 0.02));
}
start()