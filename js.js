var valueId=0;
var numberOfTasks=0;

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
	for (var i=0;i<valueId;i++)
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
	for (var i=0;i<valueId;i++)
	{
		document.getElementById('get_task'+i).style.display='block';
		document.getElementById('check'+i).style.display='block';
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	