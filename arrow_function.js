//(a)Print odd numbers in an array
var arr = [1,2,3,4,5];
var odd = arr.filter((item)=>{item%2==1;});
console.log(...odd); //1 3 5

//(b)Convert all the strings to title caps in a string array
var arr = ['antony','joe','peter','george','sandy'];
var caps = arr.map((item)=>{
    item.toUpperCase();
});
console.log(...caps); //ANTONY JOE PETER GEORGE SANDY

//(c)Sum of all numbers in an array
var arr = [1,2,3,4,5];
var add = arr.reduce((elem,index)=>{
    elem+index;
},0);
console.log(add); //15

//(d)Return all the prime numbers in an array
var arr = [1,2,3,4,5,6,7,8,9,10];
var ans = arr.filter((item)=>{
    for(let i=2;i<item;i++){
        if(item%i===0) return false;
    }
    return item!==1;
});
console.log(...ans); //2 3 5 7

//(e)Return all the palindromes in an array
var arr = ['ram','mom','honda','malayalam'];
var palindrome = arr.filter((a,b,c)=>{
    var wordSplit = a.split('').reverse().join('');
    if(a==wordSplit){
        console.log(arr[b]);
    }
}); //mom malayalam