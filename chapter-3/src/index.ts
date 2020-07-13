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
let b3 = false
const c3 = true
let d3: boolean = true
//literal type
let e3: true = true
// let f3: true = false
