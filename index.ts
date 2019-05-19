import * as _ from 'lodash';

async function hello () {
    return 'hello world'
}

const url = new URL ('...');

// _.pickBy()


let number:any = 23;
let test: number = 23;

number = '23';
number = 23;

//define types

type Style = 'bold' | 'italic'; 
let font: Style;

font= 'something'; // should be an error because font only allows type Style

//example objects

interface Person {
    first : string;
    last: string;
    // fast: boolean; or may use the following opcion
    [key: string]: any; //this is an opcional property of the object
}

const person: Person = {
    first: "Robert",
    last: "Plant",
}

const person2: Person = {
    first: "Jimmy",
    last: "Page",
    fast: true,
}

//function example

function proxy (x: number, y:number) : void { //put void in order to be sure that return a valur
    return Math.pow(x,y).toString();
}

pow (23, 10);

//Arrays

const arr: number[] = [];


arr.push(1);
arr.push('23');
arr.push(false);


type MyList = [number?, string?, boolean?] //putting a ? means that this is an optional type

const array : MyList = []

array.push(1);
array.push('23');
array.push(false);
