function testJavaScript(){
	if(!document.getElementById) alert("123");
	var testButton = document.getElementById("test");
	testButton.onclick = function(){
		testFunction();
	}
}

function testFunction(){
	function fun(n,o) {
	   console.log(o)   
	   return {     
	   	fun:function(m){       
	   		return fun(m,n);     
	   	}   
	   }; 
	} 
	var a = fun(0);  
	a.fun(1);  
	a.fun(2);  
	a.fun(3);
}


addLoadEvent(testJavaScript);
