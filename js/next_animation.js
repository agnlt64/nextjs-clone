
const LINE_SIZE = 18;

const dotsContainer = document.getElementById('dots');
const indexesToLight = [
    // N
    0*LINE_SIZE,
    1*LINE_SIZE,
    2*LINE_SIZE,
    3*LINE_SIZE,
    4*LINE_SIZE,
    1*LINE_SIZE+1,
    2*LINE_SIZE+2,
    3*LINE_SIZE+3,
    4*LINE_SIZE+4,

    0*LINE_SIZE+4,
    1*LINE_SIZE+4,
    2*LINE_SIZE+4,
    3*LINE_SIZE+4,
    4*LINE_SIZE+4,

    // E
    0*LINE_SIZE+6,
    1*LINE_SIZE+6,
    2*LINE_SIZE+6,
    3*LINE_SIZE+6,
    4*LINE_SIZE+6,

    0*LINE_SIZE+7,
    2*LINE_SIZE+7,
    4*LINE_SIZE+7,

    0*LINE_SIZE+8,
    2*LINE_SIZE+8,
    4*LINE_SIZE+8,

    // X
    0*LINE_SIZE+10,
    4*LINE_SIZE+10,
    1*LINE_SIZE+11,
    3*LINE_SIZE+11,
    2*LINE_SIZE+12,
    1*LINE_SIZE+13,
    3*LINE_SIZE+13,
    0*LINE_SIZE+14,
    4*LINE_SIZE+14,

    // T
    0*LINE_SIZE+15,
    0*LINE_SIZE+16,
    1*LINE_SIZE+16,
    2*LINE_SIZE+16,
    3*LINE_SIZE+16,
    4*LINE_SIZE+16,
    0*LINE_SIZE+17,
]


for (let i = 0; i < 5; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    for (let j = 0; j < LINE_SIZE; j++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.idx = i*LINE_SIZE + j;
        line.appendChild(dot);
    }
    dotsContainer.appendChild(line);
}

function animateDot(dot, delay, reverse) {
    dot.animate([
        reverse ? {backgroundColor: 'white', boxShadow: '0 0 1px 1px #3291ffcc, 0 0 2px 1px #3291ff40'}
                : {backgroundColor: 'var(--light-gray)', boxShadow: 'none'},
        reverse ? {backgroundColor: 'var(--light-gray)', boxShadow: 'none'}
                : {backgroundColor: 'white', boxShadow: '0 0 1px 1px #3291ffcc, 0 0 2px 1px #3291ff40'},
    ], {
        duration: 300,
        delay: delay,
        iterations: 1,
        fill: 'forwards',
    })
    delay += 10;
}

let prevPlaying = false;
dotsContainer.parentElement.addEventListener('mouseover', () => {
    let delay = 0.0;
    indexesToLight.forEach(idx => {
        const dot = dotsContainer.querySelector(`[data-idx="${idx}"]`);
        animateDot(dot, delay, false);
        prevPlaying = true;
        delay += 10;
    });
    prevPlaying = false;
});

dotsContainer.parentElement.addEventListener('mouseout', () => {
    let delay = 0.0;
    indexesToLight.forEach(idx => {
        const dot = dotsContainer.querySelector(`[data-idx="${idx}"]`);
        if (!prevPlaying) animateDot(dot, delay, true);
        delay += 10;
    });
})