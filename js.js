var valueId=0;
var numberOfTasks=0;

function ifPressEnter(){
	if (event.keyCode == 13){getTask()}
}

function getTask()
{
	var containerTask = document.getElementById('myContainer');
	
	var newCheckbox = document.createElement('input');
		newCheckbox.id = 'check'+valueId;
		newCheckbox.className = 'check';
		newCheckbox.type='checkbox';

    var newDiv = document.createElement('div');
		newDiv.id = 'get_task'+valueId;
		newDiv.className = 'get_task';
		
	var container = document.createElement('div');
		container.id = 'container'+valueId;
	
	newDiv.appendChild(document.createTextNode(document.getElementById('task').value));
	
	document.getElementById('task').value='';
	
	container.appendChild(newCheckbox);
	container.appendChild(newDiv);
	containerTask.appendChild(container);

	
	document.getElementById('check'+valueId).addEventListener("click", isChecked,false);

	valueId++;
	addNumberOfTask();
}

function isChecked(e)
{	
	var CheckTarget = e.target;
	if(CheckTarget.checked)
		{
			CheckTarget.parentNode.className='isChecked';	
			delNumberOfTask();
		}
	else
		{
			CheckTarget.parentNode.className='isntCheck';
			addNumberOfTask();
		}	
}

function isCheckedAll(e)
{	
	var CheckTarget = e.target;
	if(CheckTarget.checked)
	{
		numberOfTask();
		for(var i=0; i<valueId; i++ )
		{
			document.getElementById('container'+i).className='isChecked';
			document.getElementById('check'+i).className = 'check checkColor';
		}
	}
	else
	{
		numberOfTaskAll();
		for(var i=0; i<valueId; i++ )
		{
			if(document.getElementById('check'+i).checked)
			{
				document.getElementById('container'+i).className='isChecked';
				
			}
			else
			{
				document.getElementById('container'+i).className='isntChecked';
				document.getElementById('check'+i).className = 'check';
			}
		}
	}
}


function active()
{
	for (var i=0;i<valueId;i++)
	{
		if(document.getElementById('check'+i).checked)
			{
				document.getElementById('container'+i).className='noactiv'
			}
		else
			{
				document.getElementById('container'+i).className='activ'
			}
	}
}

function completed()
{
	for (var i=0;i<valueId;i++)
	{
		if(!document.getElementById('check'+i).checked)
			{
				document.getElementById('container'+i).className='noactiv'
			}
		else
			{
				document.getElementById('container'+i).className='activ'
			}
		
	}
}


function allTask()
{
	for (var i=0;i<valueId;i++)
	{
		document.getElementById('container'+i).className='activ'
	}
}



function init(){
	
	document.getElementById('check_all').addEventListener("click", isCheckedAll,false);
	numberOfTask();
}

function numberOfTask(){
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do: 0';
}

function numberOfTaskAll(){
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do: '+numberOfTasks;
} 

function addNumberOfTask(){
	numberOfTasks++;
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do: '+numberOfTasks;
}

function delNumberOfTask(){
	numberOfTasks--;
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do:  '+numberOfTasks;
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	