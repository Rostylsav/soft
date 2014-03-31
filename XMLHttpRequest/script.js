(function()
{   
    var collection = [];
    function getData(url,callback,method) 
    {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true); 
        xhr.onreadystatechange = function() {  
            if (xhr.readyState != 4) return; 
                callback(xhr.responseText);  
        }
        xhr.send(null); 
    }

    function transformToObject(item)
    {
        var array=item.split(',');
        return {name:array[0], age:array[1], town:array[2]};
    }

    function getCollection(text)
    {
        var array_of_strings = [];
        array_of_strings = text.split('\n');
        collection = array_of_strings.map(transformToObject);
    }

    getData('test.txt', getCollection, 'GET');
    console.log(collection);
})()
