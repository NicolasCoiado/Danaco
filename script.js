function carregar(){
        var agora = new Date;
        let hora = agora.getHours();
        var dia = String(agora.getDate()).padStart(2, '0');
        let componente = window.document.getElementById("ahora")
    
        console.log(hora)
        console.log(componente)
    
        if(dia==9 && hora>=12){
            
        }
        else{
            componente.innerHTML=`Parabéns você chegou até aqui, agora aguarde a hora certa...`
        }
}