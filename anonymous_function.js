//(a)Print odd numbers in an array
var arr = [1,2,3,4,5];
var odd = arr.filter(function(item){
    return item%2==1;
});
console.log(...odd);  //1 3 5

//(b)Covert all the strings to title caps in a string array
var arr = ['antony','joe','peter','george','sandy'];
var caps = arr.map(function(item){
    return item.toUpperCase();
});
console.log(...caps); //ANTONY JOE PETER GEORGE SANDY

//(c)Sum of all numbers in an array
var arr = [1,2,3,4,5];
var add = arr.reduce(function(elem,index){
    return elem+index;
},0);
console.log(add); //15

//(d)Return all the prime numbers in an array
var arr = [1,2,3,4,5,6,7,8,9,10];
var ans = arr.filter(function(item){
    for(let i=2;i<item;i++){
        if(item%i===0) return false;
    }
    return item!==1;
});
console.log(...ans); //2 3 5 7

//(e)Return all the palindromes in an array
var arr = ['ram','mom','honda','malayalam'];
var palindrome = arr.filter(function(a,b,c){
    var wordSplit = a.split('').reverse().join('');
    if(a==wordSplit){
        console.log(arr[b]);
    }
}); //mom malayalam

//(f)Return median of two sorted arrays of the same size
function getMedian(ar1,ar2,n){
    var i=0;
    var j=0;
    var count;
    var m1=-1,m2=-1;
    for(count=0;count<=n;count++){
        if(i==n){
            m1=m2;
            m2=ar2[0];
            break;
        }
        else if(j==n){
            m1=m2;
            m2=ar1[0];
            break;
        }
        if(ar1[i]<=ar2[j]){
            m1=m2;
            m2=ar1[i];
            i++;
        }
        else{
            m1=m2;
            m2=ar2[j];
            j++;
        }
    }
    return (m1+m2)/2;
}
var ar1=[1,12,15,26,38];
var ar2=[2,13,17,30,45];
var n1=ar1.length;
var n2=ar2.length;
if(n1==n2)
console.log("Median is "+getMedian(ar1,ar2,n1));
else
console.log("Doesn't work for arrays of unequal size"); //Median is 16

//(g)Remove duplicates from an array
var arr = ['a','b','a','c','b'];
var uniqueElem = arr.filter(function(a,b){
    return arr.indexOf(a)===b;
});
console.log(uniqueElem); //[ 'a', 'b', 'c' ]

//Rotate an array by k times
var arr = [1,2,3,4];
var rotate = function(a,b){
    b = b % arr.length;
    let i = -1;
    while(++i<b){
        arr.unshift(arr.pop());
    }
    return arr;
};
console.log(rotate(arr,2)); //[3,4,1,2]