(function()
{   
    var value=[];
    function getData(url,callback,method) 
    {
        
        var xhr = new XMLHttpRequest();

        xhr.open(method, url, true); 

        xhr.onreadystatechange = function() {  
            if (xhr.readyState != 4) return; 
            value = callback(xhr.responseText); 
            
        }
        xhr.send(null); 
        console.log(value);
    }

    function getCollection(text)
    {
        var array_of_strings=new Array();
        var collection=new Array();
        array_of_strings=text.split('\n');
        function transformToObject(item)
        {
            var array=item.split(',');
            return {name:array[0],age:array[1],town:array[2]};
        }
        collection=array_of_strings.map(transformToObject);
        return collection;
    }
    getData('test.txt', getCollection, 'GET');


})()
