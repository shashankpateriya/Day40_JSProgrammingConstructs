let twoDigNum;
let count=0;
let sum=0;
while(count<5)
{
    twoDigNum = Math.floor(Math.random() * 90) + 10;
    console.log('Number = '+twoDigNum);
    sum += twoDigNum;
    count++;
}
console.log('Sum of 5 two digits number is = '+sum);
console.log('Average of the sum of the 5 two digits number is = '+ sum/count);