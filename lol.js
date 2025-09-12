function confirmou(){
    var atual = new Date;
    var atual2 = atual.getFullYear();
    alert('Perfil feito com sucesso')
    
   var resultado = document.getElementById('result');
   var nick = document.getElementById('inick').value;
   var id = document.getElementById('iid').value;
   var camp = document.getElementById('icamp').value;
   var regiao = document.getElementById('iregiao').value;
   var elo = document.getElementById('ielo').value;
   var idade = Number(document.getElementById('iidade').value);
   var funcao = document.querySelector('input[name="funcao"]:checked').id;
   var idadef = atual2-idade;
   if (idadef <10 || idadef >100){
    alert(`Você tem ${idadef} e não tem a idade minima`)
   }
   else{
   resultado.innerHTML= `
   <h3>Perfil do jogador</h3>
   <p>Nick: ${nick}</p>
   <p>Id: ${id}</p>
   <p>idade: ${idadef}</p>
   <p>Campeão: ${camp}</p>
   <p>Região: ${regiao}</p>
   <p>Elo: ${elo}</p>
   <p>Função:${funcao}</p>`;
   }
}