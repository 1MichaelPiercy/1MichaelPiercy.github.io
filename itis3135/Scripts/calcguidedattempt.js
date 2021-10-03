const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')

keys.addEventListener('click', e => 
{
    if (e.target.matches('button'))
    {
       // type of key
const key = e.target
const action = key.dataset.action
const keyContent = key.textContent
const displayedNum = display.textContent

Array.from(key.parentNode.children)
.forEach(k => k.classList.remove('is-depressed'))

//determines if number key
if (!action) {
    //console.log('number key!')
    if (displayedNum === '0'){
        display.textContent= keyContent
    }
    else
     {
        display.textContent = displayedNum + keyContent
     }
}
if (
    action === 'add'  ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'

)
{calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action

{
    key.classList.add('is-depressed')
    calculator.dataset.previousKeyType = 'operator'
}
const previousKeyType = calculator.dataset.previousKeyType
if (!action) {
    if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
    } else {
        display.textContent = displayedNum + keyContent
    }
}

{
    console.log('operator key!')
}

if (action === 'decimal')
{
    //console.log('decimal key!')
    display.textContent = displayedNum + '.'
}
if (action === 'clear')
{
    console.log('clear key')
}
if (action === 'calculate')
{
    const secondValue = displayedNum
    console.log('equal key')
} 
    }

}  
}) 








