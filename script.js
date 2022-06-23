//como é a estrutura de uma função?
//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log("Aprendendo a programar")
}
mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(nome){
    console.log(`Bem vinda, ${nome}`) //perguntar sobre a crase
}
nome("Ale")
nome("Cleiton")
nome("Maria")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function about(nome, idade, estiloMusical){
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e meu estilo favorito é musical é ${estiloMusical}`)
}

about("Alessandra", 30, "coco de roda")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function favorito(movie, music){
    console.log(`Meu filme favorito é ${movie}, e minha musica favorita é ${music}`)
}

favorito("Ilha do medo", "Filha do mar")

//*Bônus:
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(){
    return 20;
}

let resultado = 3 * triplo();
console.log(resultado);

//outra forma

function conta(x){
  return x * 3
}
console.log(conta(25))