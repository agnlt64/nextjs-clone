
const command = document.getElementById('command');
const copy = document.getElementById('copy');

copy.addEventListener('click', async () => {
    // write command to clipboard
    await navigator.clipboard.writeText(command.innerText);
    for (let i = 0; i < copy.children.length; i++) {
        const child = copy.children[i].classList;
        // change icon to checkmark
        if (child.contains('bx-copy')) {
            child.remove('bx-copy');
            child.add('bx-check');
            // restore icon after 1 second
            setTimeout(() => {
                child.remove('bx-check');
                child.add('bx-copy');
            }, 1000);
        }
    }
})