import * as sampleInput from "./inputs.js"

class Node {
  constructor(kind, value, child) {
    this.kind = kind
    this.value = value
    this.children = child || []
  }
}

let nodes = []
let helper = []

let { kind, attributes } = options

for (i = attributes.length - 1; i >= 0; i--) {
  if (i == attributes.length - 1) {
    attributes[i].properties.forEach(value => nodes.push(new Node(attributes[i].kind, value)))
  } else {
    attributes[i].properties.forEach(value => {
      helper.push(new Node(attributes[i].kind, value, nodes))
    })
    nodes = helper
    helper = []
  }
}

const tree = new Node('root', 'root', nodes)

const combiGenerator =(inputNode)=>{
  let combinations = []
  const looper = (node, obj) => {
      let foo = obj
      if (node.children.length>0){
            node.children.forEach((item) => {
              looper(item, [...foo,{kind: item.kind, value: item.value}])
            })
          } else {
        combinations.push(foo)
      }
    }
    
    inputNode.children.forEach((node)=>{
      if (node.children.length>0){
        looper(node,[{kind: node.kind, value: node.value}])
      }
    })

    return combinations
}

let findNode = (fetchNode,inputNode)=>{
  return inputNode.children.find(item=>fetchNode === item.value)
}

const treeForm = document.getElementById("variantForm")

let possibleCombinations = combiGenerator(tree)

let modifiedCombinations = possibleCombinations.map(combination => combination.map(item => item.value))

let modifiedVariants = []
variants.map(combination =>{
if(combination.stock === "active") {
  let value = combination.attribute_values.map(item => item.value)
  modifiedVariants.push(value);
}
}
)

let validCombiSearchFn = (inputArray,searchKey) => {
let available = []
if (searchKey.length === 1){
  inputArray.map((input)=> {
    if(input.find(item => item === searchKey[0])){
      available.push(input)
    }
  })
} else {
  inputArray.map((input)=> {
    if(JSON.stringify(input)===JSON.stringify(searchKey)){
      available.push(input)
    }
  })
}

return available
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
let test = validCombiSearchFn(modifiedVariants,modifiedInputs)

if(test.length !== 1){
  let foo = validCombiSearchFn(modifiedVariants,[event.target.value])
  foo[0].forEach(item => {
    document.getElementById(item).checked =true
  })
}
})
