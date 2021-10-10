const number = document.querySelectorAll(".number")

numbers.forEach((number) =>{
    number.addEventListener("click",(event)=>{
      updateScreen(currentNumber)  
    })
})

const layar_kalkulator = document.querySelector(".layar_kalkulator")

const updateScreen = (number) =>{
    layar_kalkulator.value = number
}

const inputNumber = (number)=>{
    if (currentNumber === '0'){
        currentNumber=number
    }
    else {
        currentNumber+=number
    }
}

const operator = document.querySelectorAll(".operator")

operators.forEach((operator) =>{
    operators.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator=(operator=>{
    prevNumber = currentNumber
    kalkulatorOperator = operator
    currentNumber='0'
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=>{
    kalkulator()
    updateScreen(currentNumber)
})

const kalkulator = () =>{
    let result = ''
    switch(kalkulatorOperator){
        case "+":
            result= parseFloat(prevNumber)+parseFloat(currentNumber)
            break
        case "-":
            result= prevNumber-currentNumber
            break
        case "*":
            result= prevNumber*currentNumber
            break
        case "/":
            result= prevNumber/currentNumber
            break
        default:
            break
    }
    currentNumber = result
    kalkulatorOperator=''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})

const desimal=document.querySelector('.desimal')

desimal.addEventListener('click', (event)=>{
    inputDesimal(event.target.value)
    updateScreen(currentNumber)
})

inputDesimal = (dot)=>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber +=dot
}
