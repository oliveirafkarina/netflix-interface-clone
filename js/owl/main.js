var visible = true;
function irmensagem(elemento){
    elemento.innerText = "Ver tudo";
}

function voltarmensagem(elemento){
    elemento.innerText = ">"
}

function mostrarPesquisa(){
    if (visible){
        document.getElementById("search-form").style.display = "inline-block";
        visible = false;
    }
    else{
        document.getElementById("search-form").style.display = "none";  
        visible = true;
    }
}
