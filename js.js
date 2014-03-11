// Масив який зберігає завдання введені користувачем.
var  array_of_tasks=[];

var id_for_task=0;//  Змінна яка відповідає за id завдань
var number_of_tasks=0; //  Кількість завдань.

// Функція яка створює  і відображає всі потрібні елементи Html для представлення одного елемента з масиву завдань array_of_tasks.
function ShowTask(text,isCheck,id)
{
	var containerTask = document.getElementById('myContainer');
		
		var container = document.createElement('div');// Створення загального контейнера для відображення завдання
			container.id = 'container'+id;
	
		var newCheckbox = document.createElement('input');// Створення Checkbox для відзначення стану завдання (виконане або не виконане)
			newCheckbox.id = 'check'+id;
			newCheckbox.className = 'check';
			newCheckbox.type='checkbox';
			newCheckbox.checked=isCheck;
			if(newCheckbox.checked) //  Перевірка чи Checkbox-а Відмічений чи ні. В відповідності присвоювання йому класів стилю.
			{
				container.className="isChecked";
			}
			else
			{
				container.className="container";
			}
			newCheckbox.addEventListener("click", IsChecked,false); //  Додавання Checkbox-у події з викликом функції IsChecked().
			
		var newDiv = document.createElement('div'); // Створення контейнера для відображення тексту завдання
			newDiv.id = 'get_task'+id;
			newDiv.className = 'get_task';

		var newButton=document.createElement('button'); // Створення кнопки для видалення завдання
			newButton.id='button'+id;
			newButton.className="button";
			newButton.addEventListener("click", Remove,false); //  Додавання події з викликом функції Remove().
		
		newDiv.appendChild(document.createTextNode(text));
		document.getElementById('task').value=''; 
		
		container.appendChild(newCheckbox); //  Виведення даних
		container.appendChild(newDiv);
		container.appendChild(newButton);
		containerTask.appendChild(container);
}

// Функція відображає всі завдання з масиву array_of_tasks.
function ShowAllTasks(arr)
{
	document.getElementById('myContainer').innerHTML = '';  //  Очистка контейнера виведення завдань.
	
	for(var i=0;i<arr.length;i++)
	{
		ShowTask(arr[i].task,arr[i].isCheck,arr[i].id);  //  Виведення конкретного завдання.
	}
}

// Функція яка додає завдання в масив завдань array_of_tasks при натисканні кнопки Enter.
function IfPressEnter()
{
	if (event.keyCode == 13)  //  Перевірка чи натиснути кнопка Enter.
	{
		AddTask();  //  Додавання завдання в масив завдань.
		ShowAllTasks(array_of_tasks); //  Виведення всіх завдань.
	}
}

// Функція додає завдання до масиву завдань array_of_tasks.
function AddTask()
{
	array_of_tasks.push({task:document.getElementById('task').value, isCheck:false, id:id_for_task});
	id_for_task++;
	AddNumberOfTask();
}

// Функція перевіряє чи завдання відмічене як виконане.
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

// Функція відображає завдання які були не відмічені як виконані.
function ActiveTask()
{
	var  arrayActiveTask=[];//  Тимчасовий масив для збереження активних завдань.
	var j=0; 
	for (var i=0;i<array_of_tasks.length;i++)
	{
		if(!array_of_tasks[i].isCheck)
		{
			arrayActiveTask[j]=array_of_tasks[i];
			j++;
		}
	}
	ShowAllTasks(arrayActiveTask); //  Відображення списку активних завдань.
}

// Функція відображає завдання які були відмічені як виконані.
function CompletedTask()
{
	var  arrayCompletedTask=[];//  Тимчасовий масив для збереження не активних завдань.
	var j=0;
	for (var i=0;i<array_of_tasks.length;i++)
	{
		if(array_of_tasks[i].isCheck)
		{
			arrayCompletedTask[j]=array_of_tasks[i];
			j++;
		}
	}
	ShowAllTasks(arrayCompletedTask);//  Відображення списку не активних завдань.
}

// Функція видаляє вибране завдання з масиву завдань.
function Remove(e){
	if(e.target)
	{
		for(var i=0;i<id_for_task;i++)
			{
				if(e.target.id==('button'+i))//  Перевірка яка кнопка була натиснута.
				{
					if(!array_of_tasks[i].isCheck)
					{
						DelNumberOfTask();
					}	
					array_of_tasks.splice(i, 1);	// Видалення елемента з масиву завдань.
				}
				
			}	
	}
	ShowAllTasks(array_of_tasks);//  Відображення  завдань.
}

var number_of_tasksActive;

// Функція відмічає всі завдання як виконані
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

// Функція яка виконується після загрузки Html сторінки.
function Init()
{
	document.getElementById('check_all').addEventListener("click", IsCheckedAll,false);
	NumberOfAllTask();
	ShowAllTasks(array_of_tasks);
}

// Функція відображає кількість всіх завдань.
function NumberOfAllTask(){
	
	var parent2 = document.getElementById('myContainer2');
	parent2.innerHTML='Tasks to do: '+number_of_tasks;
} 

// Функція збільшує кількість завдань.
function AddNumberOfTask(){
	number_of_tasks++;
	NumberOfAllTask();
	number_of_tasksActive=number_of_tasks;
}

// Функція зменшує кількість завдань.
function DelNumberOfTask(){
	number_of_tasks--;
	NumberOfAllTask();
	number_of_tasksActive=number_of_tasks;
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	