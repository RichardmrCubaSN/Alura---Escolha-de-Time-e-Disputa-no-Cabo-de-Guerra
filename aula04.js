// Delaração de variaveis
personagem = ["", "", ""]
viloes = ["", "", ""]
forçaPersonagem = 0
forçaViloes = 0

// Precisa criar uma lista com os três jogadores
for(let i=0; i<3; i++) {
  escolhapersonagem = prompt("Digite o nome do seu Personagem " + (i + 1))
  personagem[i] = escolhapersonagem
  // calcular a força de cada jogador e somar todo para saber a força do time.
  forçaPersonagem = forçaPersonagem + Math.floor(Math.random() * 10) + 1
}
console.log("Agora o Array de Personagem Contém: " + personagem)

// Precisa criar uma lista dos Viloes
for(let i=0; i<3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 5)
  viloesPossiveis = ["Nazare Tedesco", "Odete Roitmarn", "Flora", "Carminha", "Laura Prudente da Costa"]
  viloes[i] = viloesPossiveis[indiceAleatorio]
  // calcular a força de cada jogador do time do computador.
  forçaViloes = forçaViloes + Math.floor(Math.random() * 10) + 1
}
console.log("Agora o Array de viloes Contém: " + viloes)

//comparar os dois time para saber quem venceu.
if(forçaPersonagem > forçaViloes){
  alert("Seu time é muito forte! você ganho a disputa de cabo de guerra! sua força foi: " + forçaPersonagem)
}
else {
  if(forçaPersonagem < forçaViloes) {
     alert("Seu time é muito fraco! o Computador ganho a disputa de cabo de guerra! com força de: " + forçaViloes)
  }
  else {
     alert("Os Dois time tem a mesma força! Voces Empataram!")
  }
}