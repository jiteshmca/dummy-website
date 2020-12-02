//perform directly get-request
var inp = document.getElementById('redirect-url');
var redirectURL = document.getElementById('redirect-link');

inp.addEventListener('input', function() {
	var ref = inp.value;
	redirectURL.href = ref + '';
});

//perform request based on method type
var methodType = document.getElementById('method-type');
var formRequest = document.getElementById('form-request');

methodType.addEventListener('input', function() {
	var name = methodType.value;
	formRequest.method = name + '';
});


var input = document.getElementById('request-url');
var requestURL = document.getElementById('form-request');

input.addEventListener('input', function() {
	var ref = input.value;
	requestURL.action = ref + '';
});
