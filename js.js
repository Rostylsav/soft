var valueId=0;
var arrayDiv= new Array();
var numberOfTasks=0;

function getTask()
{

	var parent = document.getElementById('myContainer');
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
	parent.appendChild(newCheckbox);
	parent.appendChild(newDiv);
	
	/*document.body.appendChild(newCheckbox);
	document.body.appendChild(newDiv);	*/
	
	document.getElementById('check'+valueId).addEventListener("click", isChecked,false);

	valueId++;
	numberOfTasks++;
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
		numberOfTasks--;
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


function active()
{
	for (var i=0;i<arrayDiv.push();i++)
	{
		if(document.getElementById('check'+i).checked)
			{
				document.getElementById('get_task'+i).style.display='none';
				document.getElementById('check'+i).style.display='none';
			}
		else
			{
				document.getElementById('get_task'+i).style.display='block';
				document.getElementById('check'+i).style.display='block';
			}
	}
}

function completed()
{
	for (var i=0;i<arrayDiv.push();i++)
	{
		if(!document.getElementById('check'+i).checked)
			{
				document.getElementById('get_task'+i).style.display='none';
				document.getElementById('check'+i).style.display='none';
			}
		else
			{
				document.getElementById('get_task'+i).style.display='block';
				document.getElementById('check'+i).style.display='block';
			}
		
	}
}


function allTask()
{
	for (var i=0;i<arrayDiv.push();i++)
	{
		document.getElementById('get_task'+i).style.display='block';
		document.getElementById('check'+i).style.display='block';
	}
}

var parent = document.getElementById('numberOfTasks');
var newDivTask = document.createElement('div');
	newDivTask.appendChild(numberOfTasks);
	parent.appendChild(newDivTask);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	