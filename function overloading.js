let n;
let num;
function getpattern(n){
    num = 1;
    for (var i = 0; i < n; i++)
    {
        for (var j = 0; j <= i; j++ )
        {
          console.log( "num");
        }
            num = num + 1;
        console.log(" ");
    }
}
function getpattern(n,num){

    for (var i = 0; i < n; i++)
    {
  
        for (var j = 0; j <= i; j++ )
        {
              
         console.log( "num");
        }
          
            num = num + 1;
  
        console.log( "\n");
    }
}


getpattern(5);
getpattern(5,1);