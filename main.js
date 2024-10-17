var arr=[1,2,3];
    var player=document.getElementById("player");
    var computer=document.getElementById("computer");
    var result=document.getElementById("result");
    var playerwins=0;
    var computerWins=0;
    function match(a)
    {
     var b=arr[Math.floor(Math.random()*arr.length)];
      if(a===b)
      result.innerText="MATCH DRAW!"
      if(a==1&&b==3||a==2&&b==1||a==3&&b==2)
      {
      playerwins=playerwins+1;
      player.innerText=playerwins;
      result.innerText="PLAYER WINS!"
      }
      else
      {
      computerWins=computerWins+1;
      computer.innerText=computerWins;
      result.innerText="COMPUTER WINS!"
      }
    }