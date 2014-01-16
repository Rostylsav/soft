
function getTask()
{
    var newDiv = document.createElement('div');
	
		newDiv.className = 'myDivCSSClass';
		newDiv.id = 'myDivId';
		newDiv.style.background = '#CFCFCF' 
		newDiv.style.width = '550px';
		newDiv.style.color = '#999';
		newDiv.style.marginTop = '2px';	
		newDiv.style.padding = '15px';
		newDiv.style.fontSize= '24px';
		newDiv.style.fontFamily= 'inherit';
		newDiv.style.lineHeight= '1.4em';
	
	
	
    var text = document.getElementById('task').value;
	document.getElementById('task').value='';
	
    var textNode = document.createTextNode(text);
	
    newDiv.appendChild(textNode);
	document.body.appendChild(newDiv);
	
}