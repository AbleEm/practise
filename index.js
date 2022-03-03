const combinations = [
    'color: red | length: 1m | finish: nylon',
    'color: red | length: 1m | finish: rubber',
    'color: red | length: 3m | finish: nylon',
    // 'color: red | length: 3m | finish: rubber',
    'color: red | length: 6m | finish: nylon',
    'color: red | length: 6m | finish: rubber',
    'color: white | length: 1m | finish: nylon',
    'color: white | length: 1m | finish: rubber',
    'color: white | length: 3m | finish: nylon',
    'color: white | length: 3m | finish: rubber',
    // 'color: white | length: 6m | finish: nylon',
    'color: white | length: 6m | finish: rubber',
    'color: black | length: 1m | finish: nylon',
    'color: black | length: 1m | finish: rubber',
    'color: black | length: 3m | finish: nylon',
    'color: black | length: 3m | finish: rubber',
    'color: black | length: 6m | finish: nylon',
    // 'color: black | length: 6m | finish: rubber' 
]

const combinations2 = [
  'color: black | length: 1 meter',
  'color: black | length: 1.8 meters',
  'color: black | length: mfi to type c',
  'color: silver | length: 1 meter',
  'color: silver | length: 1.8 meters',
  'color: silver | length: mfi to type c',
  'color: gold | length: 1 meter',
  'color: gold | length: 1.8 meters',
  'color: gold | length: mfi to type c'
]

const combinations3 = [
    'black,1 meter',
    'black,1.8 meters',
    'black,mfi to type c',
    'silver,1 meter',
    'silver,1.8 meters',
    'silver,mfi to type c',
    'gold,1 meter',
    'gold,1.8 meters',
    'gold,mfi to type c'
]

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

const treeForm  = document.getElementById("variantForm")

const result = document.getElementById("result")
const combiList = document.getElementById("combiList")
const stockStatus = document.getElementById("stockStatus")

treeForm.addEventListener('change', ()=>{
    let inputs = treeForm.querySelectorAll('input')

inputs = [...inputs]

let selectedInputs = []
inputs.map((input)=>{
     if (input.checked == true){
         selectedInputs.push(input.value)
     }
})
// console.log("SELECTED", selectedInputs);

let helper = combinations3.map((item)=>{
    return item.split(',')
})
console.log(helper);

let list  = helper.filter((item)=>{
    return item.includes(selectedInputs[0])
})

console.log("list",list);


const areVariantAttributesSetsEqual = (variantAttributesSet,selectedVariantAttributesSet)=>{
    return (
      variantAttributesSet.size === selectedVariantAttributesSet.size &&
      [...variantAttributesSet].every((value) =>
        selectedVariantAttributesSet.has(value)
      )
    );
  }

if (list){
    list.map((listItem)=>{
        const selectedVariant = variants.find(item=>{
            const attributeValues = item.attribute_values.map(it=>it.value)
            if(attributeValues[0] === listItem[0] && attributeValues[1] === listItem[1]){
               return true
            }
        })
        console.log('======selectedVariant',selectedVariant)
    })
}

// let str = selectedInputs.reduce(function (total,item) {
//     return total + ", " + item.id
// },'')
// let combination = str.substr(2,str.length)
// console.log(combination);


// let test = combinations2.filter((foo)=>{
//     return foo.startsWith(selectedInputs[0].name + ": " + selectedInputs[0].id)
// })

// let list = ''

// test.forEach(element => {
//     list = list + element + "\n"
// })

// if(combinations2.includes(combination)){
//     result.innerText = "Combination exists"
//     combiList.innerText = list
// } else {
//     result.innerText = "Combination doesn't exist"
//     combiList.innerText = " "
// }

// variants.forEach(variant => {
//     if (variant.name === combination){
//         let value = variant.attribute_values[variant.attribute_values.length -1].value
//         let foo = document.getElementById(value)
//         if (variant.stock === "inactive"){
//             // foo.style.color = "red"
//             stockStatus.innerText = "Stock doesn't exist"
//         } else {
//             // value.style.color = "black"
//             stockStatus.innerText = "Stock exists"
//         }
//     }
// })
})

