let year = 2012;
if((year%4==0) && (year %100 ) || (year%400==0))
{
    console.log(year +" is a leap year")
}
else{
    console.log(year + (" is not a leap year"))
}
