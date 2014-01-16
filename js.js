var i=1;
function getTask()
{

	var newCheckbox = document.createElement('input');
	
		newCheckbox.id = 'check';
		newCheckbox.type='checkbox';
		newCheckbox.name='checkbox'+i;	

    var newDiv = document.createElement('div');
	
		newDiv.id = 'get_task';

	newDiv.appendChild(document.createTextNode(document.getElementById('task').value));
	document.getElementById('task').value='';
	document.body.appendChild(newCheckbox);
	document.body.appendChild(newDiv);
	i++;
}

