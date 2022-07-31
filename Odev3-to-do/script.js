const input = document.querySelector('.input')
const button = document.querySelector('.buttoninput')
const list = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()

    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = input.value
    itemall.appendChild(item)

    if ( input.value === '' ) return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>' 
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const deletebutton = document.createElement("button")
    deletebutton.innerHTML = '<i class="fa-solid fa-trash"></i>' 
    deletebutton.classList.add("delete-button")
    itemall.appendChild(deletebutton)

    list.appendChild(itemall)
    input.value = ''
}

function kontrol(e) {
    const item = e.target

    if ( item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    if ( item.classList[0] === 'delete-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

button.addEventListener('click', clickButton)
list.addEventListener('click', kontrol)