var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    
    //var res=result.filter((ele)=>ele.region==="Europe").map((ele)=>ele.name);
    //console.log(res);
    var sum=0;

    for(var i=0;i<result.length;i++){
      sum+=result[i].population;
    }
    console.log(sum);

    var res1=result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(res1);
//   code here
//for(var i=0;i<result.length;i++){
  //console.log(result[i].name,result[i].population,result[i].region,result[i].subregion)
   
//}
};