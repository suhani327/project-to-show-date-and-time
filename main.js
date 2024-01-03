 

// console.log(date);

// console.log(a);


setInterval(function(){
      var date=new Date();
      var a= date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
      document.querySelector("#date").innerHTML=a;
},1000);
      
//  console.log(date.)
var time=new Date();
var b=time.toDateString();
      document.querySelector("#time").innerHTML=b;