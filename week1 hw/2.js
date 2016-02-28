function mul(x,y){
	var r =[];
	for (var i = 0 ; i < a.length ; i++)
	r[i]=a[i]*b[i];	
	return r;
	
}
a=[1,2,3,4];
b=[4,3,2,1];

c=mul(a,b);

console.log("[1,2,3,4]x[4,3,2,1] = "+c);