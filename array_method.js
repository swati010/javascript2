/*//Array store the value by index.
//index      0       1          2         3         4
let city=["pune","Indapure","Baramati","Sangli","solapur"]
console.log(city)
console.log(typeof city)

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])
console.log(city[4])

console.log("---------for loop use------------")
for(let i=0;i<city.length;i++)
{
    //console.log(i)//index no
    console.log(city[i])//array value
}


console.log("---------Array Properties------------")

let city1=["pune","Indapure","Baramati","Sangli","solapur"]
console.log(city1.length)

console.log('---------------Array Method--------------')

// 1---Push();----add last element & return new length array.
let fruit=["apple","grapes","Mango","custerdapple"]
let p=fruit.push("watermelon")
console.log(p)
console.log(fruit)

//2---Pop();----Remove last element of array & return remove element.
let fruit1=["apple","grapes","Mango","custerdapple"]
let p1=fruit1.pop()
console.log(p1)
console.log(fruit1)

//3---unshift();----add start/begining element & return new length array.
let fruit2=["apple","grapes","Mango","custerdapple"]
let p2=fruit2.unshift("sweetlemon")
console.log(p2)
console.log(fruit2)

//4---shift();----Remove start\begining element of array & return remove element.
let fruit3=["apple","grapes","Mango","custerdapple"]
let p3=fruit3.shift()
console.log(p3)
console.log(fruit3)

//5---indexOf();----search the element & return the index no of in element otherwise -1
let fruitt=["apple","grapes","Mango","custerdapple"]
let pp=fruitt.indexOf("Mango")
console.log(pp)
console.log(fruitt)

//6---include();----search the element & return the  true otherwise false.
let fruity=["apple","grapes","Mango","custerdapple"]
let aa=fruity.includes("Mango")
console.log(aa)
console.log(fruity)

//7---slice();----devides the array based on index & return array
//fruit.slice(startposition,endposition)
let fruites=["apple","grapes","Mango","custerdapple","papaya","chiku"]
let aaa=fruites.slice(2,6)
console.log(aaa)
//console.log(fruites)


//Program slice()
let country=["India","USA","Urop","china","Africa","Japan"]
let cp=country.slice(1,2)
console.log(cp)
//let cap=country.slice(-3)
console.log(country)


//8-Program splice():delete the element starting nd end position & return this element nd replace element
//country.splice(starting,endposition,replace)
let country1=["India","USA","Urop","china","Africa","Japan"]
let cpp=country1.splice(1,2,"usa")
console.log(cpp)
console.log(country1)

//9 concat()-----connect one or two array in single array.
let stud=["sagar","sonu"]
let stud1=["ganu","sonu","mayuri"]
let stud2=["sujata","sagar","sonu"]
let con=stud1.concat(stud,stud2)
console.log(con)



//10 Flat();---

let stud3=[["sagar","sonu"],["ganu","sonu","mayuri"],["shushant","kunal"]]
let f=stud3.flat()
console.log(f)
console.log(stud3[1][2])


//11...fill()------
let noo=[2,3,4,5,6,7,5]
let ff=noo.fill('22',2,4)
console.log(ff)
console.log(noo)

//12---join()join the latter @,-,=
let numm=[11,22,33,22]
console.log(numm.join('--'))
console.log(numm.join('===='))





// call back value
//13...1....map()-----compare all element & return new arry.
let numbb=[12,22,33,32,21,32,24]
let m=numbb.map(function(el,index,arr){
    return el+2
}).reduce(function(acc,el){
    return acc+el
},5)
console.log(m)


//program2
let birthYear=[1992,1998,2000,1995,2005,2021]
let arr1=birthYear.map(function(el){
    return 2022-el
    
})
console.log(arr1)

//program 3 ---map
let numberr=[100,203,313,424,222,112]
let nummm=numberr.map(function(el){
    return el-100

})
console.log(nummm)

//14...2....filter()-----filter  out element based on condition & return new arry.
let numbbb=[12,22,33,32,21,32,24,2,3]
let nn=numbbb.filter(function(el,index,arr){
    return el<10
})
console.log(nn)


//15...3....reduce()-----add every element & return single value.
let num1=[12,22,33,32,21,32,24,2,3]
let n1=num1.reduce(function(acc,el,index,arr){
    return acc+el
})
console.log(n1)

//16-----4---forEach():work with every element of an arry & no return value..
let names=['sarika',"shital","nilesh","raj","kishore"]
names.forEach(function(el,index,arr){
    console.log(' welcome  '  +  el)
})

//program 2
let num2=[1,2,3,2,3,4]

num2.forEach(function(el){
    console.log(el+2)

})

//program 3
let names1=['sarika',"shital","nilesh","raj","kishore"]
names1.forEach(function(el,index,arr){
    console.log(' hello My Name Is  '  +  el)
})

//progrm
let aa=[2,2,1,3]
let bb=[3,4,6,6]
let cc=aa.map(function(el,index,arr){
    return el+bb[index]
})
console.log(cc)

//program
let a=[3,2,1,3]
let b=[3,4,6,6]
let c=[2,1,1,1]
a.forEach(function(el,index,arr){
console.log(el*b[index]*c[index])
})//.reduce(function(acc,el){
    //return acc+el
//})


//Arrow function use in map()
let ar=[2,3,2,3,2,4]
let ab=ar.map(el=>el+2)
    console.log(ab)
    */


//17-----5--every():all element condition mach true otherwise false
let e=[12,23,22,33,11]
let ev=e.every(function(el){
    return el>=11
})
console.log(ev)


//18-----6--some():all element compaire the  condition & atleast one element mach  mach true otherwise false
let e1=[12,23,22,33,41]
let ev1=e1.some(function(el){
    return el>40
})
console.log(ev1)


//19-----7--find():
let fi=[12,23,22,33,2,42,41]
let nd=fi.find(function(el){
    return el>40
})
console.log((nd))


//20-----8--findindex():
let fin=[12,23,22,33,22,45,41]
let nad=fin.findIndex(function(el){
    return el>40
})
console.log((nad))



//21 sort()--
let a=['shital','mahadeo','bharti','ganesh','Avi']
let s=a.sort()
console.log(s)


//22 fill
let a1=['shital','mahadeo','bharti','ganesh','Avi']
let s1=a1.fill('Ishu',1,4)
console.log(s1)
