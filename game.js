
let number=Math.floor(Math.random() * 100) + 1;
let attempts=0;
function check()
{
    attempts++;
    let guess=document.getElementById("guess").value;
    if(guess==number)
    {
       document.getElementById("result").innerHTML=`You guessed the number in ${attempts} attempts!`;
    }
    else if(guess<number && guess>0)
    {
        document.getElementById("result").innerHTML="Too Low!";
    }
    else if(guess>number && guess<=100)
    {
        document.getElementById("result").innerHTML="Too High!";
    }
    else
    {
        document.getElementById("result").innerHTML="Your number is out of range!";
    }
}