console.log('hola');
console.log(document.querySelector('h1').textContent);


const $datosFinales = document.querySelector('#entrar');

$datosFinales.onclick = function(){
	const primerNombre = document.querySelector('#primer-nombre');
	const segundoNombre = document.querySelector('#segundo-nombre');
	const apellido = document.querySelector('#apellido');
	const edad = Number(document.querySelector('#edad'));


	document.querySelector('#datos-finales').value = $datosFinales;

	return false;
}

