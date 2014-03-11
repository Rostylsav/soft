// ����� ���� ������ �������� ������ ������������.
var  array_of_tasks=[];

var id_for_task=0;//  ����� ��� ������� �� id �������
var number_of_tasks=0; //  ʳ������ �������.

// ������� ��� �������  � �������� �� ������ �������� Html ��� ������������� ������ �������� � ������ ������� array_of_tasks.
function ShowTask(text,isCheck,id)
{
	var containerTask = document.getElementById('myContainer');
		
		var container = document.createElement('div');// ��������� ���������� ���������� ��� ����������� ��������
			container.id = 'container'+id;
	
		var newCheckbox = document.createElement('input');// ��������� Checkbox ��� ���������� ����� �������� (�������� ��� �� ��������)
			newCheckbox.id = 'check'+id;
			newCheckbox.className = 'check';
			newCheckbox.type='checkbox';
			newCheckbox.checked=isCheck;
			if(newCheckbox.checked) //  �������� �� Checkbox-� ³������� �� �. � ���������� ������������ ���� ����� �����.
			{
				container.className="isChecked";
			}
			else
			{
				container.className="container";
			}
			newCheckbox.addEventListener("click", IsChecked,false); //  ��������� Checkbox-� ��䳿 � �������� ������� IsChecked().
			
		var newDiv = document.createElement('div'); // ��������� ���������� ��� ����������� ������ ��������
			newDiv.id = 'get_task'+id;
			newDiv.className = 'get_task';

		var newButton=document.createElement('button'); // ��������� ������ ��� ��������� ��������
			newButton.id='button'+id;
			newButton.className="button";
			newButton.addEventListener("click", Remove,false); //  ��������� ��䳿 � �������� ������� Remove().
		
		newDiv.appendChild(document.createTextNode(text));
		document.getElementById('task').value=''; 
		
		container.appendChild(newCheckbox); //  ��������� �����
		container.appendChild(newDiv);
		container.appendChild(newButton);
		containerTask.appendChild(container);
}

// ������� �������� �� �������� � ������ array_of_tasks.
function ShowAllTasks(arr)
{
	document.getElementById('myContainer').innerHTML = '';  //  ������� ���������� ��������� �������.
	
	for(var i=0;i<arr.length;i++)
	{
		ShowTask(arr[i].task,arr[i].isCheck,arr[i].id);  //  ��������� ����������� ��������.
	}
}

// ������� ��� ���� �������� � ����� ������� array_of_tasks ��� ��������� ������ Enter.
function IfPressEnter()
{
	if (event.keyCode == 13)  //  �������� �� ��������� ������ Enter.
	{
		AddTask();  //  ��������� �������� � ����� �������.
		ShowAllTasks(array_of_tasks); //  ��������� ��� �������.
	}
}

// ������� ���� �������� �� ������ ������� array_of_tasks.
function AddTask()
{
	array_of_tasks.push({task:document.getElementById('task').value, isCheck:false, id:id_for_task});
	id_for_task++;
	AddNumberOfTask();
}

// ������� �������� �� �������� ������� �� ��������.
function IsChecked(e)
{	
	if(e.target.checked)
		{
			for(var i=0;i<array_of_tasks.length;i++)
			{
				if(e.target.id==('check'+array_of_tasks[i].id))
				{
					array_of_tasks[i].isCheck=true;
				}
				
			}
			DelNumberOfTask();
		}
	else
		{
			for(var i=0;i<array_of_tasks.length;i++)
			{
				if(e.target.id==('check'+array_of_tasks[i].id))
				{
					array_of_tasks[i].isCheck=false;
				}
			}
			AddNumberOfTask();
		}	
	ShowAllTasks(array_of_tasks);
}

// ������� �������� �������� �� ���� �� ������ �� �������.
function ActiveTask()
{
	var  arrayActiveTask=[];//  ���������� ����� ��� ���������� �������� �������.
	var j=0; 
	for (var i=0;i<array_of_tasks.length;i++)
	{
		if(!array_of_tasks[i].isCheck)
		{
			arrayActiveTask[j]=array_of_tasks[i];
			j++;
		}
	}
	ShowAllTasks(arrayActiveTask); //  ³���������� ������ �������� �������.
}

// ������� �������� �������� �� ���� ������ �� �������.
function CompletedTask()
{
	var  arrayCompletedTask=[];//  ���������� ����� ��� ���������� �� �������� �������.
	var j=0;
	for (var i=0;i<array_of_tasks.length;i++)
	{
		if(array_of_tasks[i].isCheck)
		{
			arrayCompletedTask[j]=array_of_tasks[i];
			j++;
		}
	}
	ShowAllTasks(arrayCompletedTask);//  ³���������� ������ �� �������� �������.
}

// ������� ������� ������� �������� � ������ �������.
function Remove(e){
	if(e.target)
	{
		for(var i=0;i<id_for_task;i++)
			{
				if(e.target.id==('button'+i))//  �������� ��� ������ ���� ���������.
				{
					if(!array_of_tasks[i].isCheck)
					{
						DelNumberOfTask();
					}	
					array_of_tasks.splice(i, 1);	// ��������� �������� � ������ �������.
				}
				
			}	
	}
	ShowAllTasks(array_of_tasks);//  ³����������  �������.
}

var number_of_tasksActive;

// ������� ����� �� �������� �� �������
function IsCheckedAll(e)
{	
	var  array_of_tasksActive=[];
	if(e.target.checked)
	{
		number_of_tasks=0;
		NumberOfAllTask();
		for(var i=0;i<array_of_tasks.length;i++)
		{
			array_of_tasksActive[i]=array_of_tasks[i];
			array_of_tasks[i].isCheck=true;	
		}
		ShowAllTasks(array_of_tasks);
	}
	if(e.target.checked==false)
	{
		alert('work');
		number_of_tasks=number_of_tasksActive;
		NumberOfAllTask();
		for(var i=0; i<array_of_tasks.length;i++)
		{
			array_of_tasks[i]=array_of_tasksActive[i];	
			alert('array_of_tasks[i].isCheck=  '+array_of_tasks[i].isCheck);
		}
		ShowAllTasks(array_of_tasks);
	}
	
}

// ������� ��� ���������� ���� �������� Html �������.
function Init()
{
	document.getElementById('check_all').addEventListener("click", IsCheckedAll,false);
	NumberOfAllTask();
	ShowAllTasks(array_of_tasks);
}

// ������� �������� ������� ��� �������.
function NumberOfAllTask(){
	
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do: '+number_of_tasks;
} 

// ������� ������ ������� �������.
function AddNumberOfTask(){
	number_of_tasks++;
	NumberOfAllTask();
	number_of_tasksActive=number_of_tasks;
}

// ������� ������ ������� �������.
function DelNumberOfTask(){
	number_of_tasks--;
	NumberOfAllTask();
	number_of_tasksActive=number_of_tasks;
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	