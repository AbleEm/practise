import * as sampleInput from "./inputs.js"

const treeForm = document.getElementById("variantForm")
const result = document.getElementById("result")

let modifiedVariants = []
sampleInput.variants2.map(combination =>{
  if(combination.stock === "active") {
    let value = combination.attribute_values.map(item => item.value)
    modifiedVariants.push(value);
  }
}
)

let validCombiSearchFn = (inputArray,searchKey) => {
  let availableCombinations = []
  if (searchKey.length === 1){
    inputArray.map((input)=> {
      if(input.find(item => item === searchKey[0])){
        availableCombinations.push(input)
      }
    })
  } else {
    inputArray.map((input)=> {
      if(JSON.stringify(input)===JSON.stringify(searchKey)){
        availableCombinations.push(input)
      }
    })
  }
  
  return availableCombinations
}

treeForm.addEventListener('change', (event) => {

  let inputs = treeForm.querySelectorAll('input')

  inputs = [...inputs]

  let selectedInputs = []
  inputs.map((input) => {
    if (input.checked == true) {
      selectedInputs.push(input)
    }
  })

  let modifiedInputs = selectedInputs.map(input => input.value)
  let checkCombiAvailable = validCombiSearchFn(modifiedVariants,modifiedInputs)

  if(checkCombiAvailable.length !== 1){
    let availableCombinations = validCombiSearchFn(modifiedVariants,[event.target.value])
    availableCombinations[0].forEach(item => {
      document.getElementById(item).checked =true
    })
    result.innerText = "Sorry! desired combination not available right now. Please try this instead!"
    setTimeout(()=>result.innerHTML = "",2500)
  }
})
