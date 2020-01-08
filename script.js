var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var quizBox=document.getElementById('questionBox');
var scoreCard=document.getElementById('scoreCard');
var timer = document.getElementById('time');
var restart = document.querySelector('.restart');


var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');

    var app =  {

            questions:[
                    {q:'HTML stands for?' ,options:[ 'Hyper Text Markup Language' ,'High Text Markup Language','Hyper Tabular Markup Language','None of the above']
                    ,answer:1}, 

                    {q:'2,4,6,8,10,12,… is' ,options:['G.P','A.P','Geometric series','arithmetic series']
                    ,answer:2},

                    {q:'Common difference of sequence 5,8,11,14,… is' ,options:['3','-3','0','1']
                    ,answer:1},

                    {q:'Second term of sequence with general term n² - 4/2 is' ,options:['3','-3','0','1']
                    ,answer:4}, 

                    {q:'1,8,15,22,29,36,… is' ,options:['G.P','A.P','Geometric series','arithmetic series']
                    ,answer:2},

                    {q:'A.P whose nth term is 2n-1 is' ,options:['1,3,6,...','2,3,5...','1,3,5,...','5,3,1,...']
                    ,answer:3}
                ],

            index:0,

            load:function(){
                
                    if(this.index<=this.questions.length-1)
                    {
                        
                        this.setTimer();
                        this.showTimer();
                        this.flag=0;
                        quizBox.innerHTML=this.index+1 +"."+this.questions[this.index].q;
                        op1.innerHTML = this.questions[this.index].options[0];
                        op2.innerHTML = this.questions[this.index].options[1];
                        op3.innerHTML = this.questions[this.index].options[2];
                        op4.innerHTML = this.questions[this.index].options[3];
                        this.scoreCard();
                    }
                    else{
                        quizBox.innerHTML = "Quiz Over ......!!";
                        op1.style.display = "none";
                        op2.style.display = "none";
                        op3.style.display = "none";
                        op4.style.display = "none";
                        btn.style.display = "none";
                        timer.style.display = "none";
                        timer.parentElement.style.display = "none";
                        restart.style.display = "inline";
                    }
            },

            
            clickAble : function(){
                for(let i=0;i<ul.children.length;i++)
                {
                    ul.children[i].style.pointerEvents="auto";
                    ul.children[i].className="";
                }
            },

            notClickAble : function(){
                for(let i=0;i<ul.children.length;i++)
                {
                    ul.children[i].style.pointerEvents="none";
                }
            },

            flag : 0,

            counter : 60,

            setTimer : function(){
                this.counter = 60;
            },

            showTimer : function(){
                var c=this;
                var interval = setInterval(timeit , 1000);
                function timeit()
                {
                    var sec = c.counter%60;
                    var min = Math.floor(c.counter/60);
                    timer.innerHTML = min + ":" + sec;
                    if(c.counter<=0 || c.flag===1)
                    {
                        c.notClickAble();
                        clearInterval(interval);
                        this.flag=1;
                    }
                    c.counter--;
                }   
                
                
            },

            next: function(){
                this.index++;
                this.flag=0;
                this.load();
            }, 

            check:function(ele){
                    var id= ele.id.split('');
                    this.flag=1;
                    if(id[id.length-1]==this.questions[this.index].answer)
                    {
                        this.score++;
                        ele.className="correct";
                        ele.innerHTML="Correct";
                        this.scoreCard();
                    }
                    else{
                        ele.className="wrong";
                        ele.innerHTML="Wrong";
                    }
            },

            score:0,

            scoreCard:function(){
                scoreCard.innerHTML = this.questions.length + "/" + this.score;
            }

        }

        window.onload=app.load();
        function button(ele)
        {
            app.check(ele);
            app.notClickAble();
        }
        function next()
        {
            app.next();
            app.clickAble();
        }
