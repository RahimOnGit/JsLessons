//ez

//1

/*let name = prompt("What's your name?");
console.log("Hi "+name+" how you doing today");
*/

//2

/*let word1 = prompt("enter the first word"); 

let word2 = prompt("enter the second word");

if(word1.toLowerCase()<word2.toLowerCase())
{
    console.log(word1+" come first according to alfabetical order");
}
else if(word1.toLowerCase()>word2.toLowerCase())
{
    console.log(word2+ " come first according to alfabetical order")
}
else
{
    console.log("both are same");
}
*/


//3

/*let age = Number((prompt("enter your age ")));

if(!isNaN(age))
{
    

    if(age>=18)
{
console.log("adult");
}
else
{
    console.log("not adult");
}
}
else
{
    console.log("please enter a valid number")
}
*/


//4
/*let guessAnimal = prompt("Enter an animal");
let theAnimal = "cat"

if(guessAnimal===theAnimal)
{
console.log("Woo right Guessing!!");
}
else
{
    console.log("Wrong guess try again if you want :)")
}
*/

//_____________________________________________________


//Mid

//5

/*let userColor = prompt("Enter your favorit color");

switch(userColor)
{
    case "red":
       console.log("Hmm.. this color remind me of fire"); 
    break;


    case "blue":
       console.log("Hmm.. this color remind me of the ocean"); 
    break;


    case "green":
       console.log("Hmm.. this color remind me of nature"); 
    break;


    
}
*/
//6
/*
let result = Number(prompt("enter you result"));
if (result>=50)
{
    console.log("pass");
}
else if(result<=50)
{
    console.log("fail");
}
else
{
    console.log("enter a valid number")
}
*/

//7

/*
let weather = prompt("What's the weather like today? Type 'sunny', 'rainy', or 'cloudy':").toLowerCase();

switch (weather) {
  case "sunny":
    console.log("Perfect weather for a picnic in the park!");
    break;

  case "rainy":
    console.log("Maybe a movie night indoors with a warm drink?");
    break;

  case "cloudy":
    console.log("Great weather for a walk or reading a book!");
    break;

  default:
    console.log("I don't recognize that weather type. Please try 'sunny', 'rainy', or 'cloudy'.");
    break;
}
*/

//8

/*let lingo=prompt("which language do you speak? ").toLowerCase();

switch(lingo)
{
    case "swedish":
    console.log("Hej , hur mår du ?");    
    break;

    case "english":
    console.log("Hi , how are you ?");    
    break;

    case "arabic":
    console.log("? مرحباً, كيف حالك");    
    break;

    default:
        console.log("sorry I'm not familier with your game")
        break;
}
*/

//9
/*
let num = Number(prompt("Enter number"));
if(num%5 ==0)
{
console.log("the number is a multiple of 5. ")
}
else
{
    console.log("the number is not a multiple of 5.")
}
*/

//10

/*let q = confirm("are we going out?");
if(q)
{
    console.log("Sounds good .. im getting ready :)");

}
else
{
    console.log("ahh ok , see you next time");
}
    */


//Hard
//11
/*
let teken =prompt("Enter anything ..im going to check it if it's number or character");
if(!isNaN(teken))
{
console.log("Obviously a number")
}
else 
{
    console.log("I think it's character")
}
*/

//12

/*
let word1 = prompt("Enter the first word");
let word2 = prompt("Enter the second word");
let word3 = prompt("Enter the third word");

let longestword=word1;

if(word2.length>longestword.length)
{
longestword = word2;
}

if(word3.length > longestword.length)
{
longestword = word3;
}
console.log("longest word is "+longestword)
*/

//13

/*
let userPassword= prompt("enter password");
if(userPassword.length >=8)
{

 if(/\d/.test(userPassword))
{
console.log("passed check")
}
else
{
    console.log("must conatin at least one digit")
}
}
else
{
    console.log("at least 8 characters long")
}
*/



//14
/*
let age = Number(prompt("enter you age"));
switch(true)
{
    case (age>=0&&age<=12):
console.log("child");
    break;

    case (age>=13&&age<=19):
console.log("teenager");
    break;

    case (age>=20&&age<=64):
console.log("adult");
    break;

 
    case (age >=65) :
        console.log("senior");
    break;

    default:
console.log("please enter a valid number");

}
*/


//15

/*
let option1 = confirm("do you want to tea?");


let option2 = confirm("do you want to coffee?");

if(option1&&!option2)
{
    console.log("i see you want some tea");
}
else if(option2&&!option1)
{
    console.log("i see you want som coffee");
}
else if(option1&&option2)
{
    console.log("mann you gready!")
}
else
{
    console.log("you didn't choose anything .. why are you here??")
}
*/


