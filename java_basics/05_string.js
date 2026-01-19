const name="aman"
const repoCount=50
console.log(name[3])
//console.log(name + repoCount)
console.log(`my name is ${name} and my repocounts is ${repoCount}`)



const gameName=new String('amansharma')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('s'))



// const newGame1=new String("aman -sharma")
// const newString=newGame1.substring(0,4)
// console.log(newString)
// const anotherString=newGame1.slice(-10,4)
// console.log(anotherString)

const newGame1=new String("aman-sharma")
const newString=newGame1.substring(0,4)
console.log(newString)
const anotherString=newGame1.slice(-10,4)
console.log(anotherString)
const newStringOne="  anuj  "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newGame1.split('-'))


const url="http.//aman.com/aman%20sharma"
console.log(url.replace('%20','-'))

console.log(url.includes('aman'))