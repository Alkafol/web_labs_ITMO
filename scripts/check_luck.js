let button = document.createElement('button')
button.textContent = 'Нажми и испытай удачу'
button.style.marginLeft = '80%'
button.style.lineHeight = '30px'

let sticking_place = document.getElementById('shop_name')
sticking_place.appendChild(button)

button.onclick = function (){
    let random_value = Math.floor(Math.random() * (100 - 1)) + 1
    if (random_value < 50){
        alert('Эээх.. На этот раз ничего :(')
    }
    else {
        alert('Отлично! Вы выиграли хорошее настроение!')
    }
}

