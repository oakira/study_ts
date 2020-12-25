// any
let a: any = 666
let b: any = ['danger']
let c = a + b
//unknown
let a2: unknown = 40
let b2 = a2 === 123
// let c2 = a2 + 10
if (typeof a2 === 'number') {
	let d2 = a2 + 10
} else if (typeof a2 === 'string') {
	let e2 = a2 + ' is string'
}

//boolean
let a3 = true
var b3 = false
let d3: boolean = true
//literal type
const c3 = true
let e3: true = true
// let f3: true = false

//number
let a4 = 1234
var b4 = Infinity * 0.10
const c4 = 5678
let d4 = a < b
let e4: number = 100
let f4: 26.218 = 26.218
// let g4: 26.218 = 10

//bigint
//es2020以上がターゲットの場合のみ利用可能
let a5 = 1234n
