function sakrijPoruku() { var dt = new Date();
							  var someString = document.thisForm.clearText.value;
							  var j; var n; var dan = dt.getDate();
							  document.thisForm.clearText.value = '';
							  for(j = 0; j < someString.length; j++) { n = someString.charCodeAt(j)-dan;
							  										   document.thisForm.clearText.value += String.fromCharCode(n);
							  										 }
						 } document.getElementById('osiguraj').onclick = sakrijPoruku;

function prikaziPoruku() { var dt = new Date();
							   var someString = document.thisForm.clearText.value;
							   var j; var n; var dan = dt.getDate();
							   document.thisForm.clearText.value = '';
							   for(j = 0; j < someString.length; j++) {	n = someString.charCodeAt(j)+dan;
							   											document.thisForm.clearText.value += String.fromCharCode(n);
							   										  }
						  } document.getElementById('prikazi').onclick = prikaziPoruku;

function reload() { document.thisForm.clearText.value = ''; } document.getElementById('reset').onclick = reload;