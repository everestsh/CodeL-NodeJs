# 0001  helloworld
  
 ## 0001 



```
//1, Triggered when the HTML document is fully loaded
//When the event is triggered, execute the function body in the following function 
window.onload = function(){
	//2, Get all button nodes and get the first element
	var btn = document.getElementsByTagName("button")[0]
	//3, Assign a value to the button's onclick evrnt: when the button is clicked, execute the function body
	btn.onclick = function(){
		alert("helloworld!!")
	}
}
``` 