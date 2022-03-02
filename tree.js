const sampleInput = {
  "name": "Lightning Cable",
  "attributes": [
    {
      "name": "color",
      "values": ["red", "white", "black"]
    },
    {
      "name": "length",
      "values": ["1m", "3m", "6m"]
    },
    {
      "name": "finish",
      "values": ["nylon", "rubber"]
    }
  ]
}
const sampleInput2 = {
  "name": "Lightning Cable",
  "attributes": [
    {
      "name": "color",
      "values": ['black', 'silver', 'gold']
    },
    {
      "name": "length",
      "values": ['1 meter', '1.8 meters', 'mfi to type c']
    }
  ]
}

const assessmentInput = {
  "name": "Lightning Cable",
  "attributes": [
    {
      "name": "color",
      "values": [
        {
          "name": "red",
          "active": true
        },
        {
          "name": "blue",
          "active": true
        },
        {
          "name": "green",
          "active": true
        }
      ]
    },
    {
      "name": "length",
      "values": [
        {
          "name": "1m",
          "active": true
        },
        {
          "name": "3m",
          "active": true
        },
        {
          "name": "6m",
          "active": false
        }
      ]
    },
    {
      "name": "finish",
      "values": [
        {
          "name": "nylon",
          "active": true
        },
        {
          "name": "rubber",
          "active": false
        }
      ]
    }
  ]
}

class Node {
  constructor(value, child) {
    this.value = value
    this.children = child || []
  }
}

let nodes = []
let helper = []
let combinations = []

let { name, attributes } = sampleInput

for (i = attributes.length - 1; i >= 0; i--) {
  if (i == attributes.length - 1) {
    attributes[i].values.forEach(value => nodes.push(new Node(value)))
  } else {
    attributes[i].values.forEach(value => {
      helper.push(new Node(value, nodes))
    })
    nodes = helper
    helper = []
  }
}

const tree = new Node('root', nodes)

const looper = (node, value) => {
  if (node.children.length > 0) {
    node.children.forEach((item) => {
      looper(item, value + " | " + item.value)
    })
  } else {
    combinations.push(value)
  }
}
tree.children.forEach(node => {
  if (node.children.length > 0) {
    looper(node, node.value)
  }
})

console.log(combinations);