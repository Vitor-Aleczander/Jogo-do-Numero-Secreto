function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    let qtdDisponivel = document.querySelector('.lista');
    
    if(tipoIngresso.value == 'pista') {
        let pista = parseInt(document.getElementById('qtd-pista').textContent);
        comprarIngresso(quantidade);
    } 
}

function comprarIngresso(quantidade){
    let qtdLugar = parseInt(document.getElementById(id).textContent);
    if (quantidade > qtdLugar) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdLugar = qtdLugar - quantidade;
        document.getElementById(id).textContent = qtdLugar;
        alert('Compra realizada com sucesso!');
        
    }
}
