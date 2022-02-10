function check() {
    var c=0;
    var q1=document.quiz.ques1.value;
    var q2=document.quiz.ques2.value;
    var q3=document.quiz.ques3.value;
    var q4=document.quiz.ques4.value;
    if(q1=="javascript") (c++)
    if(q2=="javascrip") (c++)
    if(q3=="javascri") (c++)
    if(q4=="javascr") (c++)
    document.write("Your score is ");
    document.write(c);
}