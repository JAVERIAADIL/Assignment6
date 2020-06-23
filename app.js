//chap 21-25
//question1
var first=prompt("Enter your first name:");
var last=prompt("Enter your last name");
var fullName=first+" "+last;
document.write("<br>"+"Hello "+fullName+" . Hope you will be fine!")

//question2
var fav=prompt("Enter your favourite mobile phone model:");
var c=fav.length;
document.write("<br>"+"My favorite is: "+fav+"<br>"+"Length of string: "+c)

//question3
var st="Pakistani";
var c=st.indexOf("n");
document.write("<br>"+"String: "+st+"<br>"+"Index of 'n': "+c)

//question4

var st="Hello World";
var c=st.lastIndexOf("l");
document.write("<br>"+"String: "+st+"<br>"+"Index of 'l': "+c)

//question5

var st="Pakistani"
var c=st.charAt(3)
document.write("<br>"+"String: "+st+"<br>"+"Character at index 3: "+c)
//question6



var first=prompt("Enter your first name:");
var last=prompt("Enter your last name");
var fullName=first.concat(" ").concat(last)
document.write("<br>"+"Hello "+fullName+" . Hope you will be fine!")





//question7



var st="Hyderabad";
var v="Islam";

var c=st.slice(5,9);
var z=v.concat(c);
document.write("<br>"+"City: "+st+"<br>"+"After replacement : "+z)
//question8
var message="Ali and Sami are best friends. They play criket and football together";
var fin=message.replace(/and/g,"&");

document.write("<br>"+"Message: "+message+"<br>"+"After replacement : "+fin)
//question9
var val="472";
var val1=parseInt(val);

document.write("<br>"+"Value: "+val+"<br>"+"Type : "+"String"+"<br>"+"Value: "+val1+"<br>"+"Type : "+"Number")
//question10
var first=prompt("Enter your input:");
var c=first.toUpperCase();
document.write("<br>"+"User input: "+first+"<br>"+"Upper case : "+c)

//question11


var first=prompt("Enter your input:");
var c=first.slice(0,1);
var d=first.slice(1);
var c=c.toUpperCase();
var e=c+d
document.write("<br>"+"User input: "+first+"<br>"+"Title case : "+e)

//question12
var num=35.36;
var c=num.toString();
var d=c.replace(".","")
document.write("<br>"+"Number: "+num+"<br>"+"Result : "+d)
//question13
var x=prompt("Enter your username");
for (var i=0;i<x.length;i++){
if (x.charCodeAt(i)==3 || x.charCodeAt(i)==44 || x.charCodeAt(i)==46 || x.charCodeAt(i)==64){
    
    alert( "Please enter a valid username ")
}
}
//question14
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
 var b=prompt("What do you want to order: ");
 var b=b.toLowerCase();
 
 for (i=0;i<=5;i++){
     if (b==a[i]){
     x=1;
     
     document.write("<br>"+b+" is available at index "+i+" in our bakery")
     break;}
     
     
 
     }
      if(x==0) { document.write("<br>"+"We are sorry."+b+" is not available in our bakery")}
//question15
var pass=prompt("Enter your password");



for (var i=0;i<x.length;i++){
    for (var j=0;j<=9;j++){
    if (x[0]!=j && x.length>=6 &&( (x.charCodeAt(i)>=97 || x.charCodeAt(i)<=122)||(x.charCodeAt(i)>=65 || x.charCodeAt(i)<=90))&&x[i]==j){
        
        document.write("<br>"+" Entered password "+pass)
    }
    }
}
for (var i=0;i<x.length;i++){
    for (var j=0;j<=9;j++){
    if (x[0]==j ){
        
        document.write("<br>"+" Entered password "+pass+"<br>"+"Password can not begin with a number"+"<br>"+"Please enter a valid password")
    }
    }
}

    if ( x.length<6){
        
        document.write("<br>"+" Entered password "+pass+"<br>"+"Password should contain atleast 6 characters"+"<br>"+"Please enter a valid password")
    }
    

    for (var i=0;i<x.length;i++){
        for (var j=0;j<=9;j++){
        if (( (x.charCodeAt(i)>=97 || x.charCodeAt(i)<=122)||(x.charCodeAt(i)>=65 || x.charCodeAt(i)<=90))&&x[i]==j){
            document.write("<br>"+" Entered password "+pass+"<br>"+"Password must contain alphabates and numbers"+"<br>"+"Please enter a valid password")
           
        }
        }
    }
//question16
var university="University of Karachi";
var c=university.split("")
for (var i=0;i<c.length;i++){
    document.write("<br>"+c[i])
}
//question17
var inp=prompt("Enter your input");

var d=inp.charAt(inp.length-1);
document.write("<br>"+"User input : "+inp +"<br>"+"Last character of input: "+d)
//question18
var text="The quick brown fox jumps over the lazy dog";
var count=0;
for (var i=0;i<text.length;i++){
    if (text.slice(i,i+3)==="the"){
        count=count+1
        var c=text.indexOf("the")

    }
}
for (var i=c;i<text.length;i++){
    if (text.slice(i,i+3)==="the"){
        count=count+1
        

    }
}

document.write("<br>"+"Text : "+text +"<br>"+"There are "+count+ " ocuurence(s) of word 'the'")



//chap26-30
//question1
var num=+prompt("Enter a positive number:");
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("<br>"+"Number : "+num +"<br>"+"Round off value: "+round+"<br>"+"Floor value : "+floor+"<br>"+"Ceil value : "+ceil)

//question2
var num=+prompt("Enter a negative number:");
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("<br>"+"Number : "+num +"<br>"+"Round off value: "+round+"<br>"+"Floor value : "+floor+"<br>"+"Ceil value : "+ceil)

//question3
var num=+prompt("Enter a number: ");
var absol=Math.abs(num);
document.write("<br>"+"The absolute value of "+num+" is "+ absol)

//question4
var num=Math.random()*10;
var round=Math.round(num);
document.write("<br>"+"Random dice value : "+round )

//question5
var toss=Math.random()*3;
var floor=Math.floor(toss);
if (floor===1){
    document.write("<br>"+floor+"<br>"+"Random coin value: Tails")
}
else if (floor===2){
    document.write("<br>"+floor+"<br>"+"Random coin value: Heads")
}

//question6
var ran=Math.random()*101;
var floor=Math.floor(ran);
document.write("<br>"+"Random number between 1 and 100: "+floor)

//question7
var weight=+prompt("Enter Your weight in  kg");
var fix=weight.toFixed(1);
var dis=parseInt(fix);
document.write("<br>"+"The weight ofuser is : "+dis + " kilograms")

//question8
var ran=Math.random()*11;
var floor=Math.floor(ran);
var use=+prompt("Enter a secret number between 1 to 10 in a whole number");
if (floor===use){
    document.write("<br>"+"Congragulation , the secret number is  "+use)

}
else{document.write("<br>"+"Try again !")

}
      //chap31-34
//question1
var a=new Date();
document.write("<br>"+a)

//question2
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var n=new Date();
var b=a.getMonth();
var c=month[b]
document.write("<br>"+"Current month: "+c)
//question3
var n=new Date();
var b=a.toString();
var c=b.slice(0,3)
document.write("<br>"+"Today is  "+c)

//question4
var n=new Date();
var b=a.getDay();
if (b==0 || b==1){
document.write("<br>"+"It's Fun day")}

//question5

var n=new Date();
var b=a.getDate();
if (b<16){
document.write("<br>"+"First fifteen days of the month")}
else {
    document.write("<br>"+"Last days of the month")}
//question6

var n=new Date();
var b=a.getTime();
var c=b/(1000*60)
document.write("<br>"+"Current Date :  "+n+"<br>"+"Elapsed milliseconds since January 1,1970 :  "+b+"<br>"+"Elapsed minutes since January 1,1970 :  "+c)


//question7
var n=new Date();
var b=a.getHours();
if (b<12){
document.write("<br>"+"It's AM")}
else {
    document.write("<br>"+"It's PM")}

//question8
var laterDate=new Date("Dec 31,2020")
document.write("<br>"+laterDate)

//question9
var fr=new Date("April 24,2020");
var mil=fr.getTime();
var today=new Date();
var tmil=today.getTime();
var diff=tmil-mil;
var convert=diff/(1000*60*60*24)
document.write("<br>"+convert+" days has passed since 1st Ramadan, 2020")

//question10
var fr=new Date("Jan 1,2015");
var mil=fr.getTime();
var today=new Date();
var tmil=today.getTime();
var diff=tmil-mil;
var convert=diff/(1000)
document.write("<br>"+"Current date: "+today+"<br>"+convert+" seconds has passed since beginning of 2015")
//question11
var today=new Date();
var tmil=today.getHours();


var f=today.setHours(tmil-1);
document.write("<br>"+"Current date: "+today+"<br>"+" 1 hour ago , it was "+f)

//question12
var today=new Date();
var tmil=today.getFullYear();

var f=today.setFullYear(tmil-100);
document.write("<br>"+"Current date: "+today+"<br>"+" 100 years back , it was "+f)

//question13
var age=+prompt("Enter  your age");
var today=new Date();
var tmil=today.getFullYear();
var yea=tmil-age;

document.write("<br>"+"Your age is: "+age+"<br>"+" Your birth year is: "+yea)

//question14
var name=prompt("Enter your name");
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var today=new Date();
var mili=today.getTime();

var c=month[tmil];
var units=410;
var char=10;
var total=units*char;
var d=total.toFixed(2);
var late=1000;
var total1=total+late;
var e=total1.toFixed(2);
var due=new Date("June 20,2020");


document.write("<br>"+"<h1>"+"K-Electric Bill"+"</h1>")
document.write("<br>"+"Customer Name: "+name+"<br>"+" Month: "+c)
document.write("<br>"+"Number of units: "+units+"<br>"+" Charges per unit: "+char)

document.write("<br>"+"Net Amount Payable(within Due Date): "+d+"<br>"+" Late payment charges: "+late)

document.write("<br>"+"Gross Amount Payable(after Due Date): "+e)

//chap35-38
//question1
function display(){
    document.write( new Date())
}
var c=display()

//question2
a=prompt("Enter your first name");
b=prompt("Enter your last name");
var c;
function greet(a,b){
    c= a+" "+b;
    document.write("<br>"+"Hello "+c)
    

}
greet(a,b)

//question3
a=+prompt("Enter  first number");
b=+prompt("Enter  second number");

function sum(a,b){
    return a+b
    

}
document.write("<br>"+sum(a,b))

//question4
 function calc(num1,opr,num2){
     if(opr === "+"){
         return num1 + num2
     }
     else if(opr === "-"){
         return num1 - num2
     } 
     else if(opr === "*"){
         return num1 * num2
     }
     else if(opr === "/"){
        return num1 / num2
    }
    else if(opr === "%"){
        return num1 % num2
    }
     else{
         return "Incorrect Operator!"
     }
 }
 var result = calc(5,"-",5);
 var result1 = calc(4,"*",6);
 var result2 = calc(4,"$",9);
 var result3 = calc(5,"/",5);
 var result4 = calc(4,"+",6);
 var result5 = calc(4,"%",9);


 document.write("<br>"+result)
 document.write("<br>"+result1)
 document.write("<br>"+result2)
 document.write("<br>"+result3)
 document.write("<br>"+result4)
 document.write("<br>"+result5)

 //question5
 function square(a){
     return a*a
 }
 document.write("<br>"+square(6))

 //question6
 var fact=1;
 function factorial(a){
     for (i=1;i<=a;i++){
         fact=fact*i;

     }

 }
 factorial(7)
 document.write("<br>"+fact)
 //question7
 a=+prompt("Enter  first number");
b=+prompt("Enter  second number");

function count(a,b){
    for (i=a;i<=b;i++){
        document.write("<br>"+i)
    }
    

}
count(a,b)


//question8
var sq1;
var sq2;
var base=+prompt("Enter value of base:");

var perpendicular=+prompt("Enter value of perpendicular:");
function calculateHypotenuse(){
        function calculateSquare(base,perpendicular){
             sq1=base*base;
            sq2=perpendicular*perpendicular;
        }
        calculateSquare(base,perpendicular)
        return sq1+sq2
    }
document.write("<br>"+"The value of hypotneus is : "+calculateHypotenuse())

//question9
//part2

var width=+prompt("Enter value of width:");

var height=+prompt("Enter value of height:");
function calculateArea(width,height){
        
        
        return width*height
    }
document.write("<br>"+"The area is is : "+calculateArea(width,height))

//part1

function calculateArea(width,height){
        
        
        return width*height
    }
document.write("<br>"+"The area is is : "+calculateArea(5,6))

//question10
var word=prompt("Enter your input:");
var c=word.length-1
var check="";
var d=0;
function checking(){
    for (var i=0;i<word.length/2;i++){
        if (word[i]===word[c-i]){
            
           check+=word[i]
        }
         
        
        
    }
    document.write("<br>"+word+" is a palindrome")
    
   
}




checking();


//question11
function capital(string){
    return string.replace(/\w\S*/g,function (txt) {
        return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
    });
    
}
document.writeln("<br>"+capital("the quick brown fox"));

//question12
var c;
function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
     c= longestWord[0]
     return c
  }
  document.writeln("<br>"+findLongestWord("Web Development Tutorial"));

  //question13
 
  function count(string,letter){
      var letter=0;
      for (i=0;i<string.length;i++){
          if (string.charAt(i)==letter){
              letter+=1;
              
          }
          }
          return letter

      }

        

    
  
  document.writeln("<br>"+"The occurence of of the letter is "+count("JSResourceS.com","o"));

  //question14
  document.writeln("<br>"+"<h1>"+"The Geometrizer "+"</h1>")

  function calcCicumference(radius){
      return 2*3.142*radius
  }
  function calcArea(radius){
    return 3.142*radius*radius
}
document.writeln("<br>"+"The circumference is   "+calcCicumference(8));
document.writeln("<br>"+"The area is   "+calcArea(8));