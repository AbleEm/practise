const prevcombinations = [
  'color: red | length: 1m | finish: nylon',
  'color: red | length: 1m | finish: rubber',
  'color: red | length: 3m | finish: nylon',
  'color: red | length: 3m | finish: rubber',
  'color: red | length: 6m | finish: nylon',
  'color: red | length: 6m | finish: rubber',
  'color: white | length: 1m | finish: nylon',
  'color: white | length: 1m | finish: rubber',
  'color: white | length: 3m | finish: nylon',
  'color: white | length: 3m | finish: rubber',
  'color: white | length: 6m | finish: nylon',
  'color: white | length: 6m | finish: rubber',
  'color: black | length: 1m | finish: nylon',
  'color: black | length: 1m | finish: rubber',
  'color: black | length: 3m | finish: nylon',
  'color: black | length: 3m | finish: rubber',
  'color: black | length: 6m | finish: nylon',
  'color: black | length: 6m | finish: rubber' 
]
const combinations = [
  [ 'red', '1m', 'nylon' ],
  [ 'red', '1m', 'rubber' ],
  [ 'red', '3m', 'nylon' ],
  [ 'red', '3m', 'rubber' ],
  [ 'red', '6m', 'nylon' ],
  [ 'red', '6m', 'rubber' ],
  [ 'white', '1m', 'nylon' ],
  [ 'white', '1m', 'rubber' ],
  [ 'white', '3m', 'nylon' ],
  [ 'white', '3m', 'rubber' ],
  [ 'white', '6m', 'nylon' ],
  [ 'white', '6m', 'rubber' ],
  [ 'black', '1m', 'nylon' ],
  [ 'black', '1m', 'rubber' ],
  [ 'black', '3m', 'nylon' ],
  [ 'black', '3m', 'rubber' ],
  [ 'black', '6m', 'nylon' ],
  [ 'black', '6m', 'rubber' ] 
]

// const combinations2 = [
//   'color: black | length: 1 meter',
//   'color: black | length: 1.8 meters',
//   'color: black | length: mfi to type c',
//   'color: silver | length: 1 meter',
//   'color: silver | length: 1.8 meters',
//   'color: silver | length: mfi to type c',
//   'color: gold | length: 1 meter',
//   'color: gold | length: 1.8 meters',
//   'color: gold | length: mfi to type c'
// ]

const combinations2 = [
  [ { kind: 'color', value: 'black' },
    { kind: 'length', value: '1 meter' } ],
  [ { kind: 'color', value: 'black' },
    { kind: 'length', value: '1.8 meters' } ],
  [ { kind: 'color', value: 'black' },
    { kind: 'length', value: 'mfi to type c' } ],
  [ { kind: 'color', value: 'silver' },
    { kind: 'length', value: '1 meter' } ],
  [ { kind: 'color', value: 'silver' },
    { kind: 'length', value: '1.8 meters' } ],
  [ { kind: 'color', value: 'silver' },
    { kind: 'length', value: 'mfi to type c' } ],
  [ { kind: 'color', value: 'gold' },
    { kind: 'length', value: '1 meter' } ],
  [ { kind: 'color', value: 'gold' },
    { kind: 'length', value: '1.8 meters' } ],
  [ { kind: 'color', value: 'gold' },
    { kind: 'length', value: 'mfi to type c' } ]
]

const combinations3 = [
  ['black', '1 meter'],
  ['black', '1.8 meters'],
  ['black', 'mfi to type c'],
  ['silver', '1 meter'],
  ['silver', '1.8 meters'],
  ['silver', 'mfi to type c'],
  ['gold', '1 meter'],
  ['gold', '1.8 meters'],
  ['gold', 'mfi to type c']
]

const variants2 = [
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
const variants3 = [
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
    stock: 'active',
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

const treeForm = document.getElementById("variantForm")

const result = document.getElementById("result")
const combiList = document.getElementById("combiList")
const stockStatus = document.getElementById("stockStatus")

treeForm.addEventListener('change', () => {
  let inputs = treeForm.querySelectorAll('input')

  inputs = [...inputs]

  let selectedInputs = []
  inputs.map((input) => {
    if (input.checked == true) {
      selectedInputs.push(input)
    }
  })

  let list = combinations2.filter((item) => {
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

  let modifiedInputs = selectedInputs.map(input=>{
    return {kind: input.name, value: input.value}
  })

  console.log("variantList",variantList);

  console.log("selectedInputs",selectedInputs);
  console.log("modifiedInputs",modifiedInputs);

})

