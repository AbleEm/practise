import * as sampleInput from "./inputs.js"

const treeForm = document.getElementById("variantForm")
const result = document.getElementById("result")
let levels = treeForm.childElementCount

let modifiedVariants = []
sampleInput.variants2.map(combination =>{
  if(combination.stock === "inactive") {
    let value = combination.attribute_values.map(item => item.value)
    modifiedVariants.push(value);
  }
}
)

console.log("modifiedVariants",modifiedVariants);

let invalidCombiSearchFn = (inputArray,searchKey) => {
  let unavailableCombinations = []
  inputArray.map((input)=> {
    if(input.find(item => item === searchKey)){
      unavailableCombinations.push(input)
    }
  })
  return unavailableCombinations
}


treeForm.addEventListener('change', (event) => {

  let inputs = [...treeForm.querySelectorAll('input')]

  let selectedInputs = []
  inputs.map((input) => {
    if (input.checked == true) {
      selectedInputs.push(input)
    }
    if (input.hasAttribute("disabled")){
      console.log("INPUT",input);
      input.removeAttribute("disabled")
    }
  })

  let modifiedInputs = selectedInputs.map(input => input.value)
  let checkCombiUnavailable = invalidCombiSearchFn(modifiedVariants,modifiedInputs[0])

  console.log("UNAVAILABLE",checkCombiUnavailable);
  let filterFn = () => {
    let helper = checkCombiUnavailable.filter(combi=>{
      return combi.includes('6m')
    })
    console.log(helper.length);
  }
filterFn()
  let test = ()=>{
    let foo = []
    checkCombiUnavailable.map((item)=> {
    if (item.includes(modifiedInputs[levels-2])){
      foo.push(item)
      return foo
    }
  })
  return foo
}
let em = test()
  if (em.length>0){
    em.forEach((input)=>{
      console.log("input",input);
      let element = document.getElementById(input[input.length -1])
      element.checked = false
      element.setAttribute("disabled", true)
    })
  }
})
