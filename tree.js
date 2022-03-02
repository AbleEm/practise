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
    constructor(value,child){
        this.value = value
        this.children = child || []
    }
}

let nodes = []
let helper = []
let combinations = []

let {name,attributes} = sampleInput

for (i=attributes.length-1;i>=0;i--){
    if (i==attributes.length-1){
    attributes[i].values.forEach(value=>nodes.push(new Node(value)))
    } else{
        attributes[i].values.forEach(value=>{
            helper.push(new Node(value,nodes))
        })
        nodes =helper
        helper = []
    }
}

const tree = new Node('root', nodes)

console.log(tree);

nodes.forEach(color=>{
    // console.log(color.value)
    color.children.forEach(length=>{
        // console.log(color.value,length.value)
        length.children.forEach(finish=>{
            // console.log(color.value,length.value,finish.value)
            combinations.push(`${color.value} | ${length.value} | ${finish.value}`)
        })
    })
})

console.log(combinations);

// let nonSelectedNodes = [];
//     let excludedSkus = [];
//     let temp = [this];
//     while (temp.length > 0) {
//       let node = temp.pop();
//       if (node.children.length === 0) {
//         if (!node.isSelected) {
//           nonSelectedNodes.push(node);
//         }
//         excludedSkus.push(...node.excludedSkus);
//       } else {
//         temp.push(...node.children);
//       }
//     }
//     return { nonSelectedNodes: nonSelectedNodes, excludedSkus: excludedSkus };