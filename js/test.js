function testJavaScript(){
	if(!document.getElementById) alert("123");
	var testButton = document.getElementById("test");
	testButton.onclick = function(){
		testFunction();
	}
}

function testFunction(){
	$(function(){
		alert("Hello JQuery!");
	});
	$(function(){
		alert("Hello again!");
	})
}


addLoadEvent(testJavaScript);
