import React,{Component} from "react"

class Element  {
    constructor(name,buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name,buildYear,area,numTrees){
        super(name,buildYear);
    this.area = area;
    this.numTrees = numTrees;

    }

    treeDensity = () => {
        const dens = this.numTrees/this.area;
        console.log(`Density of ${this.name} is ${dens}.`)
    }
}

class Street extends Element {
    constructor(name,buildYear,length,size=3){
        super(name,buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classify = new Map();
        classify.set(1,'tiny');
        classify.set(2,'small');
        classify.set(3,'normal');
        classify.set(4,'big');
        classify.set(5,'huge');
        console.log(`${this.name} build in ${this.buildYear} is a ${classify.get(this.size)} street`)
    }
}
const allElement = new Element('abc',678);
const allParks = [new Park('GreenPark',1998,0.2,1200),
new Park('OakPark',1993,0.4,568),
new Park('PlamPark',2015,0.3,215)
]

const allStreets = [new Street('Mahatma Gandhi Road', 1998,1.1,4),new Street('Sanjivi Road', 1882,1.1,3),
new Street('Bhagat Singh Road', 1991,1.1,2)]


function reportPark(p){
    console.log('.....park.....');
    p.forEach(element => element.treeDensity());

}

reportPark(allParks);

//export default (name,buildYear) => new Element('abcd',2000)
export default new Element("name",2000)




