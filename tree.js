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

class node {
    constructor(value){
        this.value = value
        this.descendants = []
        this.isRoot = false
    }
    set root(value){
        this.isRoot = value
    }
    get root(){
        return this.isRoot
    }
}

let nodes = []

let {name,attributes} = sampleInput

// attributes.forEach(feature => feature.values.forEach( item => nodes.push(new node(item))))
attributes[0].values.forEach( item => nodes.push(new node(item)))

nodes.forEach(item => {
    attributes[1].values.forEach( foo => item.descendants.push(new node(foo)))
})
// console.log("nodes des",nodes[1].descendants);

for( i=0; i< nodes.length; i++){
    nodes[i].descendants.forEach(item => attributes[2].values.forEach( foo => item.descendants.push(new node(foo))))
}
console.log("nodes",nodes[1].descendants[0].descendants);