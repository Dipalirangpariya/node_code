let n;
let pattern_no;
function getpattern(n,pattern_no)
{
 if(pattern_no=1)
 {
    
     let num = 1;
    for (var i = 0; i < n; i++)
    {
        for (var j = 0; j <= i; j++ )
        {
              
        console.log( "num");
        }
        
            num = num + 1;
  
    
         console.log("\n");
    }
}

else if(pattern_no=2)
{
    var k = 2 * n - 2;
  
    
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < k; j++)
            console.log(" ");

        k = k - 1;
  
        for (j = 0; j <= i; j++ )
        {
              
            console.log("* "); 
        }

        console.log("\n");
    }

    
}
else if(pattern_no=3){
    num = 1;

    for (i = 0; i < n; i++)
    {
  
        for (j = 0; j <= i; j++ )
        {
              
           console.log(num);
        }
          
            num = num + 1;
  
        console.log("\n");
    }


}  
else{
    console.log("enter number between 1 to 3"); 
}
   //driver code
}
n=5;pattern_no=2;
   getpattern(n,pattern_no);