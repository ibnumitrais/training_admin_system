var textjsonformat = '{\
    "name":"John",\
    "age":31,\
    "pets":[\
        { "animal":"dog", "name":"Fido" },\
        { "animal":"cat", "name":"Felix" },\
        { "animal":"hamster", "name":"Lightning" }\
    ]\
}';

function appendToResult(htmldata) {
    var e = document.createElement('div');
    e.innerHTML = htmldata;

    document.getElementById("result").appendChild(e);
}

var myObj = JSON.parse(textjsonformat);

appendToResult("Name : "+ myObj.name);
appendToResult("Age : "+ myObj.age);