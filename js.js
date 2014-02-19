var  arrayTask=[];

var idForTask=0;
var numberOfTasks=0;

function getIsCheck(temp)
{
	return arrayTask[temp].isCheck;
}
function getTask(  temp)
{
	return arrayTask[temp].task;
}

function showTask(temp,valueId)
{
	var containerTask = document.getElementById('myContainer');
		
		var container = document.createElement('div');
			container.id = 'container'+valueId;
	
		var newCheckbox = document.createElement('input');
			newCheckbox.id = 'check'+valueId;
			newCheckbox.className = 'check';
			newCheckbox.type='checkbox';
			newCheckbox.checked=getIsCheck(temp);
			if(newCheckbox.checked)
			{
				container.className="isChecked";
			}
			else
			{
				container.className="container";
			}

		var newDiv = document.createElement('div');
			newDiv.id = 'get_task'+valueId;
			newDiv.className = 'get_task';

		var newButton=document.createElement('button');
			newButton.id='button'+valueId;
			newButton.className="button";
		
		newDiv.appendChild(document.createTextNode(getTask(temp)));
		
		document.getElementById('task').value='';
		
		container.appendChild(newCheckbox);
		container.appendChild(newDiv);
		container.appendChild(newButton);
		containerTask.appendChild(container);

		
		document.getElementById('button'+valueId).addEventListener("click", isRemove,false);
		document.getElementById('check'+valueId).addEventListener("click", isChecked,false);

}
function showAllTask()
{
	var valueId=0;
	document.getElementById('myContainer').innerHTML = '';
	
	for(var i=0;i<arrayTask.length;i++)
	{
		showTask(i,valueId);
		valueId++;
	}
	
}
function ifPressEnter()
{
	if (event.keyCode == 13)
	{
		addTask();
		showAllTask();
	}
}

function addTask()
{
	arrayTask.push({task:document.getElementById('task').value, isCheck:false, idTask:idForTask});
	
	idForTask++;
	addNumberOfTask();
}
function isChecked(e)
{	
	if(e.target.checked)
		{
			for(var i=0;i<arrayTask.length;i++)
			{
				if(e.target.id==('check'+arrayTask[i].idTask))
				{
					arrayTask[i].isCheck=true;
				}
				
			}
			delNumberOfTask();
		}
	else
		{
			for(var i=0;i<arrayTask.length;i++)
			{
				if(e.target.id==('check'+arrayTask[i].idTask))
				{
					arrayTask[i].isCheck=false;
				}
			}
			addNumberOfTask();
		}	
	showAllTask();
}
function activeTask()
{
	var valueId=0;
	document.getElementById('myContainer').innerHTML = '';
	for (var i=0;i<arrayTask.length;i++)
	{
		if(!arrayTask[i].isCheck)
		{
			showTask(i,valueId);
			valueId++;
		}
	}
}
function completedTask()
{
	var valueId=0;
	document.getElementById('myContainer').innerHTML = '';
	for (var i=0;i<arrayTask.length;i++)
	{
		if(arrayTask[i].isCheck)
		{
			showTask(i,valueId);
			valueId++;
		}
	}
}
function isRemove(e){
	if(e.target)
	{
		for(var i=0;i<idForTask;i++)
			{
				if(e.target.id==('button'+i))
				{
					if(!arrayTask[i].isCheck)
					{
						delNumberOfTask();
					}	
					arrayTask.splice(i, 1);	
				}
				
			}	
	}
	showAllTask();
	
}
var  arrayTaskActive=[];
var numberOfTasksActive;
function isCheckedAll(e)
{	
	
	if(e.target.checked)
	{
		numberOfTasks=0;
		numberOfAllTask();
		for(var i=0;i<arrayTask.length;i++)
		{
			arrayTaskActive[i]=arrayTask[i].isCheck;
			arrayTask[i].isCheck=true;	
		}
	}
	else
	{
		numberOfTasks=numberOfTasksActive;
		numberOfAllTask();
		for(var i=0;i<arrayTask.length;i++)
		{
			arrayTask[i].isCheck=arrayTaskActive[i];
		}
	}
	showAllTask();
}

function init(){
	
	document.getElementById('check_all').addEventListener("click", isCheckedAll,false);
	numberOfAllTask();
	showAllTask();
}


function numberOfAllTask(){
	
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do: '+numberOfTasks;
} 

function addNumberOfTask(){
	numberOfTasks++;
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do: '+numberOfTasks;
	numberOfTasksActive=numberOfTasks;
}

function delNumberOfTask(){
	numberOfTasks--;
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do:  '+numberOfTasks;
	numberOfTasksActive=numberOfTasks;
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	