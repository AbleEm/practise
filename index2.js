  const options= {
    "kind": "Lightning Cable",
    "attributes": [
      {
        "kind": "color",
        "properties": ['black', 'silver', 'gold']
      },
      {
        "kind": "length",
        "properties": ['1 meter', '1.8 meters', 'mfi to type c']
      }
    ]
  }

  const options2 = {
    "kind": "Lightning Cable",
    "attributes": [
      {
        "kind": "color",
        "properties": ["red", "white", "black"]
      },
      {
        "kind": "length",
        "properties": ["1m", "3m", "6m"]
      },
      {
        "kind": "finish",
        "properties": ["nylon", "rubber"]
      }
    ]
  }

  const variants = [
    {
      name: 'color: black | length: 1 meter',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: '1 meter' }
      ]
    },
    {
      name: 'color: black | length: 1.8 meters',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: '1.8 meters' }
      ]
    },
    {
      name: 'color: black | length: mfi to type c',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: 'mfi to type c' }
      ]
    },
    {
      name: 'color: silver | length: 1 meter',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'silver' },
        { kind: 'length', value: '1 meter' }
      ]
    },
    {
      name: 'color: silver | length: 1.8 meters',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'silver' },
        { kind: 'length', value: '1.8 meters' }
      ]
    },
    {
      name: 'color: silver | length: mfi to type c',
      stock: 'inactive',
      attribute_values: [
        { kind: 'color', value: 'silver' },
        { kind: 'length', value: 'mfi to type c' }
      ]
    },
    {
      name: 'color: gold | length: 1 meter',
      stock: 'inactive',
      attribute_values: [
        { kind: 'color', value: 'gold' },
        { kind: 'length', value: '1 meter' }
      ]
    },
    {
      name: 'color: gold | length: 1.8 meters',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'gold' },
        { kind: 'length', value: '1.8 meters' }
      ]
    },
    {
      name: 'color: gold | length: mfi to type c',
      stock: 'inactive',
      attribute_values: [
        { kind: 'color', value: 'gold' },
        { kind: 'length', value: 'mfi to type c' }
      ]
    }
  ]

  const variants2 = [
    {
      name: 'color: red | length: 1m | finish: nylon',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'red' },
        { kind: 'length', value: '1m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: red | length: 1m | finish: rubber',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'red' },
        { kind: 'length', value: '1m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    {
      name: 'color: red | length: 3m | finish: nylon',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'red' },
        { kind: 'length', value: '3m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: red | length: 3m | finish: rubber',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'red' },
        { kind: 'length', value: '3m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    {
      name: 'color: red | length: 6m | finish: nylon',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'red' },
        { kind: 'length', value: '6m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: red | length: 6m | finish: rubber',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'red' },
        { kind: 'length', value: '6m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    {
      name: 'color: white | length: 1m | finish: nylon',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'white' },
        { kind: 'length', value: '1m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: white | length: 1m | finish: rubber',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'white' },
        { kind: 'length', value: '1m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    {
      name: 'color: white | length: 3m | finish: nylon',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'white' },
        { kind: 'length', value: '3m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: white | length: 3m | finish: rubber',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'white' },
        { kind: 'length', value: '3m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    {
      name: 'color: white | length: 6m | finish: nylon',
      stock: 'inactive',
      attribute_values: [
        { kind: 'color', value: 'white' },
        { kind: 'length', value: '6m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: white | length: 6m | finish: rubber',
      stock: 'inactive',
      attribute_values: [
        { kind: 'color', value: 'white' },
        { kind: 'length', value: '6m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    {
      name: 'color: black | length: 1m | finish: nylon',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: '1m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: black | length: 1m | finish: rubber',
      stock: 'inactive',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: '1m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    {
      name: 'color: black | length: 3m | finish: nylon',
      stock: 'inactive',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: '3m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: black | length: 3m | finish: rubber',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: '3m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    {
      name: 'color: black | length: 6m | finish: nylon',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: '6m' },
        { kind: 'finish', value: 'nylon' }
      ]
    },
    {
      name: 'color: black | length: 6m | finish: rubber',
      stock: 'active',
      attribute_values: [
        { kind: 'color', value: 'black' },
        { kind: 'length', value: '6m' },
        { kind: 'finish', value: 'rubber' }
      ]
    },
    
  ]

  class Node {
    constructor(kind, value, child) {
      this.kind = kind
      this.value = value
      this.children = child || []
    }
  }
  
  let nodes = []
  let helper = []
  
  let { kind, attributes } = options2
  
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
/*
  @function findNode
    Return - Node with kind, value, children
  @params:
    fetchNode - input value from form whose children need to be fetched
    inputNode - parent of fetchNode
*/
  let findNode = (fetchNode,inputNode)=>{
    return inputNode.children.find(item=>fetchNode === item.value)
  }

const treeForm = document.getElementById("variantForm")

let possibleCombinations = combiGenerator(tree)

treeForm.addEventListener('change', () => {
  let inputs = treeForm.querySelectorAll('input')

  inputs = [...inputs]

  let selectedInputs = []
  inputs.map((input) => {
    if (input.checked == true) {
      selectedInputs.push(input)
    }
  })

  inputs.map((input)=>{
    if(input.hasAttribute("disabled")){
        input.removeAttribute("disabled")
    }
})

  let list = possibleCombinations.filter((item) => {
    return item[0].value===selectedInputs[0].value
  })
  let variantList = []
  if (list) {
    list.map((listItem) => {
      variants2.find(item => {
        const attributeValues = item.attribute_values.map(it => it)
        if (JSON.stringify(attributeValues) === JSON.stringify(listItem)) {
          variantList.push(item)
        }
      })
    })
  }

//   console.log("variantList",variantList);
//   console.log("selectedInputs",selectedInputs);
//   console.log("modifiedInputs",modifiedInputs);

// console.log("selectedInputs",selectedInputs[0].value);
  let test = findNode(selectedInputs[0].value,tree)

  const selectedVariantValue = test.value
  console.log("Found Node",test);

  const nodeValid = (item, selectedVariantValue)=>{
      let validChildren = []
      item.children.forEach(it=>{
          const combination =  selectedVariantValue + item.value + it.value
          const variant = variants2.find(it=>{
              const attributePath = it.attribute_values.map(attribute=>attribute.value).join('')
              if(attributePath === combination){
                  return true
              }
          })
          if(variant.stock === 'active'){
              validChildren.push(it)
          }
      })
      if(validChildren.length === 0){
          return []
      }
      else{
          return validChildren
      }
  }

  test.children.forEach(item=>{
      if(item.children.length){
        const validChildren = nodeValid(item, selectedVariantValue)
        if(validChildren.length > 0){
            console.log("===node is valid",item.value  ,validChildren)
        }else{
            console.log("======disabl node",item.value)
        }
      }
      else{

      }
  })
  
//   if (variantList.length>0){
//       variantList.map(variant=>{
//           if (variant.stock === "inactive"){
//                 console.log("Inactive Variant", variant);
//                 variant.attribute_values.forEach((item,index)=>{
//                 if (index>0){
//                     let element = document.getElementById(item.value)
//                     element.setAttribute("disabled",true)
//                     if (element.hasAttribute("checked")){
//                         element.removeAttribute("checked")
//                     }
//                 }
//             })
//           }
//       })
//   }
})
