const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncripta) {

    let matrizCodigo = [["e", "enter"], ["i", "inis"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncripta = stringEncripta.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncripta.includes(matrizCodigo[i][0])) {

            stringEncripta = stringEncripta.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncripta;

}

function btnEncriptar() {

    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    inputTexto.value = "";
}

function btnDesencriptar(){
    const TextoDesencripta= desencriptar(inputTexto.value);
    mensaje.value=TextoDesencripta;
    inputTexto.value="";
}

function desencriptar(stringDesencripta) {
    let matrizCodigo = [["e", "enter"], ["i", "inis"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencripta = stringDesencripta.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringDesencripta.includes(matrizCodigo[i][1])) {

            stringDesencripta = stringDesencripta.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencripta;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""; 
    alert("Texto Copiado Exitosamente");  
}