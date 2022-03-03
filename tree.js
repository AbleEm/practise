let variants = [
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

const sampleInput = {
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
const sampleInput2 = {
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

const assessmentInput = {
  "kind": "Lightning Cable",
  "attributes": [
    {
      "kind": "color",
      "properties": [
        {
          "kind": "red",
          "active": true
        },
        {
          "kind": "blue",
          "active": true
        },
        {
          "kind": "green",
          "active": true
        }
      ]
    },
    {
      "kind": "length",
      "properties": [
        {
          "kind": "1m",
          "active": true
        },
        {
          "kind": "3m",
          "active": true
        },
        {
          "kind": "6m",
          "active": false
        }
      ]
    },
    {
      "kind": "finish",
      "properties": [
        {
          "kind": "nylon",
          "active": true
        },
        {
          "kind": "rubber",
          "active": false
        }
      ]
    }
  ]
}

class Node {
  constructor(kind, value, child) {
    this.kind = kind
    this.value = value
    this.children = child || []
  }
}

let nodes = []
let helper = []
let combinations = []

let { kind, attributes } = sampleInput2

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

const looper = (node, value) => {
  if (node.children.length > 0) {
    node.children.forEach((item) => {
      looper(item, value + ", " + item.value)
    })
  } else {
    combinations.push(value.split(", "))
  }
}

tree.children.forEach(node => {
  if (node.children.length > 0) {
    //   console.log({kind : node.kind, value: node.value});
    looper(node, node.value)
  }
})

console.log(combinations);