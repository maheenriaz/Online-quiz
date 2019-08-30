function check()
{
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    
    var correct=0;
    
    if(question1==="Muslim land")
    {
        correct++;
    }
    if(question2==="14-8-1947")
    {
        correct++;
    }
    if(question3==="urdu")
    {
        correct++;
    }
    if(question4==="Mohammad Ali Jinnah")
    {
        correct++;
    }
    if(question5==="Bangladesh broke away from pakistan")
    {
        correct++;
    }
   
    if(question6==="Bombay")
    {
        correct++;
    }
    
    var msg=["Great job!","That's just ok!","You really need to do better!"];
    var pic=["2.gif ","1.gif","3.gif",];
    var range;
    
    if(correct===0 || correct===1 || correct===2)
    {
        range=2;
    }
    if(correct ===3 || correct===4)
    {
        range=1;
    }
    if(correct===5 || correct===6)
    {
        range=0;
    }
    
    
  document.getElementById("after_submit").style.visibility= "visible";
  document.getElementById("msg").innerHTML= msg[range];
  document.getElementById("correct_num").innerHTML="You got " +correct+ " correct. ";
  document.getElementById("pic").src=pic[range];
  







}
