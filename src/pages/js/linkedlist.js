import '../../../style.css'
import LinkedList from '../../structures/linkedList.js'

document.querySelector('#app').innerHTML = 
`
<div class="actions">
    <input type="number" id="input-control"/>
    <button id="btn-push">Push</button>
    <button id="btn-unshift">Unshift</button>
    <button id="btn-shift">Shift</button>
    <button id="btn-pop">Pop</button>

    <div id="data"><div>
</div>
`

const numbers = new LinkedList()

document.querySelector('#btn-push').addEventListener('click', () => {
    const newValue = document.querySelector('#input-control').value
    numbers.push(Number(newValue))
    document.querySelector('#input-control').value = ''
    showData()
})

document.querySelector('#btn-unshift').addEventListener('click', () => {
    const newValue = document.querySelector('#input-control').value
    numbers.unshift(Number(newValue))
    document.querySelector('#input-control').value = ''
    showData()
})

document.querySelector('#btn-shift').addEventListener('click', () => {
    numbers.shift()
    showData()
})

document.querySelector('#btn-pop').addEventListener('click', () => {
    numbers.pop()
    showData()
})

function getDataFromLinkedList(linkedlist) {
    let arr = []
    let current = linkedlist

    while(current) {
        arr.push(current.data)
        console.log(current.data)
        current = current.next
    }

    return arr
}

function showData() {
    const data = getDataFromLinkedList(numbers.head)
    console.log(data)
    let fragment = '';

    for(let item of data) {
        fragment += `<div>${item}</div>`
    }

    document.querySelector('#data').innerHTML = fragment
}