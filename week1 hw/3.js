var n;
function prime(n){
for (var i = 2 ;i <= n ;i++){
if (n!=i && n%i===0)
   break;	
if (n/i===1 && n%i===0 )
   console.log(n);
   
}
}

for (var j = 2;j<1000;j++)
	prime(j);