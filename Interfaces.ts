// v1
//function print( coord: {x: number, y: number})

//v2
type Point = {
    x: number, 
    y: number
}

function print(coord: Point) {

}

//primitive types
type stringOrNumber = string | number;

function print(coord: stringOrNumber) {

}

//interfaces
interface IPoint = {
    x: number, 
    y: number
}

interface I3DPoint extends IPoint {
    z: number;
}

//intersection types
type D3Point = Point & {
    z: number;
}

//a and b available for implementation ITest
interface ITest {
    a: number;
}

interface ITest {
    b: number;
}

//type cannot be used as interface, a or b only
// type IITest {
//     a: number;
// }

type IITest {
    b: number;
}


//cast types
const c =(point: IPoint) => {
    const d:I3DPoint = point as I3DPoint;
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement