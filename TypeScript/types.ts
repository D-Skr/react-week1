let a: number = 4;
let b = 'ddsfadfasf';
let c = true;

const d: string[] = ['asdf','fda'];

let e: any = 3;
e = 'asdf';

function test(a: string): number | string {
    return '';
}

const test2 = (a: number): number => {
    return a*2;
}

d = d.map((x: string) => x.toLowerCase());

function countCont(coord: { lat: number, long?: number}) {

}

function printIt(id: number | string){
    if (typeof id ==='number') {
        console.log(id.toString());
    } else if (typeof === 'string') {
        id.toUpperCase;
    }
}

function getSum(a: number | number[]) {
    if(Array.isArray(a)) {

    }
}

const x: undefined = undefined;
const z: null = null; 