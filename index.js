const left = document.getElementById("left__side");



const handleOnMove = e => {
    const leftWidth = e.clientX / window.innerWidth * 100;

    left.style.width = `${leftWidth}%`;
}

document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);


