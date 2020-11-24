var inp = document.getElementById('redirect-url');
var redirectURL = document.getElementById('redirect-link');

inp.addEventListener('input', function() {
	var ref = inp.value;
	redirectURL.href = ref + '';
});
