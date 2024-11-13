let countEl = document.getElementById("count-el")

let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}

let saveVl = document.getElementById("save-vl")

function save() {
    let countStr = count + " - "
    saveVl.textContent += countStr
    countEl.innerText = 0
    count = 0
}