const areaTexto = document.querySelector(".area-texto");
const textoMensaje = document.querySelector(".texto-mensaje");
const textoAlerta = document.querySelector(".texto-alerta");
const ingreseTexto = document.querySelector(".ingrese-texto");
const btnCopiar = document.querySelector(".copiar");
const btnLimpiar = document.querySelector(".limpiar");
const botonDesencriptar = document.querySelector(".desencriptar");

btnCopiar.style.display = "none";
btnLimpiar.style.display = "none";

function btnEncriptar(){
    if (areaTexto.value == ""){
        alert('Debe ingresar primero un texto para encriptar');
    } else {
        const textoEncriptado = encriptar(areaTexto.value);
        textoMensaje.value = textoEncriptado;
        areaTexto.value = "";
        textoMensaje.style.backgroundImage = "none";
        textoAlerta.style.display = "none";
        ingreseTexto.style.display = "none";
        btnCopiar.style.display = "inline";
        btnLimpiar.style.display = "inline";
    }
}

function btnDesencriptar(){
    if (areaTexto.value == ""){
        alert('Debe ingresar primero un texto para desencriptar');
    } else {
        const textoEncriptado = desencriptar(areaTexto.value);
        textoMensaje.value = textoEncriptado;
        areaTexto.value = "";
        textoMensaje.style.backgroundImage = "none";
        textoAlerta.style.display = "none";
        ingreseTexto.style.display = "none";
        btnCopiar.style.display = "inline";
        btnLimpiar.style.display = "inline";
    }
}

function encriptar(stringEncriptada){
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncriptada;

}

function desencriptar(stringDesencriptada){
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDesencriptada;

}

function copiarTexto(){
    const textoEncriptado = textoMensaje.value;
    navigator.clipboard.writeText(textoEncriptado)
  .then(() => {
    alert('Texto copiado al portapapeles');
  })
  .catch(err => {
    alert('Error al copiar al portapapeles:', err);
  })
}

function limpiarCampos(){
    areaTexto.value = "";
    textoMensaje.value = "";
    textoMensaje.style.backgroundImage = "url(media/avatar.png)";
    textoAlerta.style.display = "block";
    ingreseTexto.style.display = "block";
    btnCopiar.style.display = "none";
    btnLimpiar.style.display = "none";
}