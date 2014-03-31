function vote() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'test.htm', true); 

  xhr.onreadystatechange = function() {  
    if (xhr.readyState != 4) return; 

    alert(xhr.responseText); 
  }

  xhr.send(null); 
}
