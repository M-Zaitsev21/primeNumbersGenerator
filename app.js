let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let check = document.querySelector('.checkbox')
let result = document.querySelector('.result')
let primeArr = new Array()



btn.addEventListener('click', () => {
    let val = input.value
    valArr = val.split(/(?:,| )+/)
    if (input.value !== '') {
        switch (valArr.length) {
            case 1:
                getPrimeOne(Number(valArr[0]), check.checked)
                result.innerHTML = `Результат: ${prime}`
                break;
            case 2:
                getPrimeTwo(Number(valArr[0]), Number(valArr[1]), check.checked)
                result.innerHTML = `Результат: ${prime}`
                break;
            default:
                result.innerHTML = 'Попробуте другие значения'
        }
    } else {
        result.innerHTML = 'Попробуте другие значения'
    }
    input.value = ''
    primeArr.length = 0
})


// На 1 число

function getPrimeOne(a, dir = false) {
    if (dir == true) {
        nextPrime: for (let i = 1; i < a; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime
            }
            primeArr.push(i)
        }
    }
    else {
        nextPrime: for (let i = a; i <= a + 1e3; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime
            }
            primeArr.push(i)
        }
    }
    if (primeArr.length < 3) {
        prime = 'Количество простых чисел меньше 3-х'
    } else {
        if (dir == true) {
            prime = primeArr.slice(-3).toString()
        } else {
            prime = primeArr.slice(0, 3).toString()
        }
    }
}

// на 2 числа
function getPrimeTwo(a, b, dir = false) {
    if (a < b) {
        nextPrime: for (let i = a; i <= b; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime
            }
            primeArr.push(i)
        }
    }
    else {
        nextPrime: for (let i = b; i <= a; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime
            }
            primeArr.push(i)
        }
    }
    if (primeArr.length < 3) {
        prime = 'Количество простых чисел меньше 3-х'
    } else {
        if (dir == true) {
            prime = primeArr.slice(-3).toString()
        } else {
            prime = primeArr.slice(0, 3).toString()
        }
    }
}