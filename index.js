var mymatch='fox';
var str1= "The quick brown fox jumps over the lazy dog.";
var myArray = str1.match(mymatch);

var newParagraph = document.createElement("p");
var newText = document.createTextNode('Original String : '+str1); 
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph); 
var newParagraph1 = document.createElement("p"); 
var newText1 = document.createTextNode("The word 'fox' was found at position : "+myArray.index); 
newParagraph1.appendChild(newText1);
document.body.appendChild(newParagraph1);
