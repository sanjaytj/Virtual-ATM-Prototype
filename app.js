function getaction()
{
//Intialise Pin value with varible P
var p = document.getElementById ('number').value;
var a = 1234;
//To check Pin entered is correct or not
if(p==a)
{
document.getElementById ("result").innerHTML ="Please Choose transcation";
document.getElementById ('options12').style.display = 'block'; //if pin number is correct options will Display.
}
else
{
document.getElementById ("result").innerHTML = "Invalid pin";
}
}
function myfunction(val)
{
//function to display balance amount
m = 10000;
if(val==1)//Option 1 is select to shows balance amount
{
document.getElementById ('result1' ).innerHTML ="Your amount is: "+m;
document.getElementById ('display' ). style.display = 'none';
document.getElementById ('display1' ). style.display = 'none';
}
if(val==2)//Option 2 select to display text field to enter withdraw amount
{
document.getElementById ('display').style.display = 'block';
document.getElementById ('display1').style.display = 'none';
}
if(val==3)//Option 3 is select to display fastcash option
{
document.getElementById ('display1').style.display = 'block';
document.getElementById ('display').style.display = 'none';
}
}
function getamount()
{
//function To Withdraw Amount
m = 10000;
//Intialise the textbox value in a varible
var a = document.getElementById ('amount1' ).value;
var rb = m - a;
//Check if entered amount is greater than the original amount or not and it also should be mulitple of 100
if(a<=m && a%100==0)
//alert("" +a);
document.getElementById ('display').innerHTML ="Your withdraw amount : "+a+ " and your remaining balance is "+ rb ;

else
//alert("invalid cash");
document.getElementById ('display').innerHTML ="Invalid cash";
}
function getamount1()
{
//Intialise the Dropdown value in a varible
var x = document.getElementById ("myselect1").value
m = 10000;
//check if selected amount is greater than the original amount or not and it should be mulitple of 100
if(x<=m&&x%100==0)
//alert("take your amount" +x);
document.getElementById ('display1').innerHTML ="Please take your amount : "+x;
else
document.getElementById ('display1').innerHTML ="Invalid cash";
}