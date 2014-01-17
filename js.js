var valueId=0;

var arrayDiv= new Array();
function getTask()
{
	var newCheckbox = document.createElement('input');
	
		newCheckbox.id = 'check'+valueId;
		newCheckbox.className = 'check';
		newCheckbox.type='checkbox';
		

    var newDiv = document.createElement('div');
	
		newDiv.id = 'get_task'+valueId;
		newDiv.className = 'get_task';
		
	arrayDiv.push(document.getElementById('task').value);

	newDiv.appendChild(document.createTextNode(document.getElementById('task').value));
	
	document.getElementById('task').value='';
	
	document.body.appendChild(newCheckbox);
	document.body.appendChild(newDiv);	
	
	document.getElementById('check'+valueId).addEventListener("click", isChecked,false);

	valueId++;
}

function isChecked()
{	
	for(var i=0; i<arrayDiv.push(); i++ )
		{
			if(document.getElementById('check'+i).checked)
			{
				document.getElementById('get_task'+i).style.textDecoration ='line-through';
				document.getElementById('get_task'+i).style.color ='#999';
				
			}
			else
			{
				document.getElementById('check'+i).style.color ='#999';
				document.getElementById('get_task'+i).style.textDecoration ='none';
				document.getElementById('get_task'+i).style.color ='#111';
			}
		}
}

function isCheckedAll()
{	
	if(document.getElementById('check_all').checked)
	{
		for(var i=0; i<arrayDiv.push(); i++ )
		{
				document.getElementById('check'+i).style.color ='#ff0000';
				document.getElementById('get_task'+i).style.textDecoration ='line-through';
				document.getElementById('get_task'+i).style.color ='#999';
		}
	}
	else
	{
		for(var i=0; i<arrayDiv.push(); i++ )
		{
			if(document.getElementById('check'+i).checked)
			{
				document.getElementById('get_task'+i).style.textDecoration ='line-through';
				document.getElementById('get_task'+i).style.color ='#999';
			}
			else
			{
				document.getElementById('check'+i).style.color ='#999';
				document.getElementById('get_task'+i).style.textDecoration ='none';
				document.getElementById('get_task'+i).style.color ='#111';
			}
		}
	}
}

