const textEl = document.getElementById('text')
const text = 'We Love Programming!'
let idx = 1

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, 130)
}