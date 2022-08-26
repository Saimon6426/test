var s = 'mystring';
for (var i = 0; i < s.length; i++) {
 console.log(s.charAt(i));
}

function advice(tab){
var foo = document.getElementById("foo").value;
var bar = document.getElementById("bar").value;
tab.loader.load({
    url : contextPath+"/test.do?method=helloWorld",
    method : "POST",
    params : {
        method : "hi",
        Foo : foo,
        Bar : bar,
        scripts : true
    }
});
}  


var n = 123;
var s = '123';

if (n == s) {
 alert('Переменные равны');
}

if (n === s) {
 alert('Переменные идентичны');
}



function test() {
 myVar = 'Hello, World';
 console.log(myVar);
}
