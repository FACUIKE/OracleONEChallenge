
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

	


	function encriptado(){
		

		var texto=document.getElementById("input-texto").value;

		var tamanho = texto.length;
		
		var textoEncrip = '';


		for(var i = 0; i < tamanho; i++){

			if(texto[i]==='a'){

				var E1 = "ai";

				textoEncrip = textoEncrip + E1;

			}

			else if(texto[i]==='i'){

				var E2 = "imes";

				textoEncrip = textoEncrip + E2;
			}

			else if(texto[i]==='o'){

				var E3 = "ober";

				textoEncrip = textoEncrip + E3;
			}

			else if(texto[i]==='u'){

				var E4 = "ufat";

				textoEncrip = textoEncrip + E4;
			}

			else if(texto[i]==='e'){

				var E5 = "enter";

				textoEncrip = textoEncrip + E5;
			}
			
			else { textoEncrip = textoEncrip + texto[i];

			}


		}



		document.getElementById("msg").value=textoEncrip;


	}

	
	function desencriptado(){
		
		var texto=document.getElementById("input-texto").value;
	
		var textoDesenc1 = texto.replaceAll("enter", "e");

		var textoDesenc2 = textoDesenc1.replaceAll("imes", "i");

		var textoDesenc3 = textoDesenc2.replaceAll("ai", "a");

		var textoDesenc4 = textoDesenc3.replaceAll("ober", "o");

		var textoDesenc = textoDesenc4.replaceAll("ufat", "u");
		

		


		// var textoDesencrip1 = textoDesencrip.replace('imes', 'i')

		// var textoDesencrip2 = textoDesencrip1.replace('ai', 'a')

		// var textoDesencrip3 = textoDesencrip2.replace('ober', 'o')

		// var textoDesencrip4 = textoDesencrip3.replace('ufat', 'u')

		document.getElementById("msg").value=textoDesenc;
	}



	function copiar(){
		let texto = document.getElementById('msg');
		texto.select();
		texto.setSelectionRange(0, 9999);
		document.execCommand('copy');
	}