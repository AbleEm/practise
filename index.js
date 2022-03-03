const combinations = [
    'red | 1m | nylon',
    'red | 1m | rubber',
    'red | 3m | nylon',
    'red | 3m | rubber',
    'red | 6m | nylon',
    // 'red | 6m | rubber',
    'white | 1m | nylon',
    'white | 1m | rubber',
    'white | 3m | nylon',
    // 'white | 3m | rubber',
    'white | 6m | nylon',
    'white | 6m | rubber',
    'black | 1m | nylon',
    'black | 1m | rubber',
    // 'black | 3m | nylon',
    'black | 3m | rubber',
    'black | 6m | nylon',
    'black | 6m | rubber' 
]

const treeForm  = document.getElementById("variantForm")

const result = document.getElementById("result")
const combiList = document.getElementById("combiList")

treeForm.addEventListener('change', ()=>{
    let inputs = treeForm.querySelectorAll('input')

inputs = [...inputs]
let selectedInputs = inputs.filter((input)=>{
    return input.checked == true
})

let str = selectedInputs.reduce(function (total,item) {
    return total + ' | ' + item.id
},'')

let combination = str.substr(3,str.length)

let test = combinations.filter((foo)=>{
    return foo.startsWith(selectedInputs[0].id)
})

let list = ''

test.forEach(element => {
    list = list + element + "\n"
})

if(combinations.includes(combination)){
    result.innerText = "Combination exists"
    combiList.innerText = list
} else {
    result.innerText = "Combination doesn't exist"
    combiList.innerText = " "
}
})

