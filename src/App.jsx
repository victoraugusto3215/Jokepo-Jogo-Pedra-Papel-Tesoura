import { useState } from 'react'
import './App.css'

let opcaoescolhidauser = 0;
let opcaoescolhidapc = 0;
let empate = 0;
let pontuacaouser = 0;
let pontuacaopc = 0;

const Titulo = () => {
  return (
    <div>
      <h1 id="titulo">Pedra Papel Tesoura</h1>
    </div>
  );
}

const Placar = () => {
return (
  <div>
              <div id="placar">
                          <h1> Placar</h1>   <br/>
                        <div ID="divplacar">
                          <div id="placarPC">
                              <p>Computador</p> <br/>
                              <p id="pontuaPC">0</p>
                          </div>

                          <div id="placarEmpate">
                            <p id="empate">Empate</p> <br/>
                            <p id="quantEmpate">0</p>
                          </div>
                          <div>
                              <p id="">Usuário</p> <br/>
                              <p id="pontuaUser">0</p>
                          </div>
                        </div>
              </div>
  </div>
);
}

const Jogada = () => {
  return(
    <div>
          <div id="jogadas">
                  <div id="pc">
                    <img src="../img/pedra.png" id="iconpc" alt=""/>
                    <div id="loader"></div>
                  </div>

                  <div id="centro">
                    <img src="../img/jogo.png" alt="" id="imgJOGO"/>
                    <h2 id="resultado"></h2>
                  </div>

                  <div id="user">
                    <img src="../img/pedra.png" id="iconuser" alt=""/>
                  </div>
          </div>
    </div>
  );

}

const Icones = () => {
  return (
    <div>
      <div id="botoes">
        <button id="botaojogar" onClick={Botao}><img src="../img/play.png" id="play" alt=""/><h5 id="joga"> Jogar</h5></button>
        <button id="jogarnovamente" onClick = {JogarNovo}> <img src="../img//voltar.png" id="voltar" alt=""/> Jogar Novamente</button><br /><br />
        <h3 id="textointerativo"></h3><br />
      </div>
      <div id="painelbotoes" onClick = {Rodada}>
        <img src="../img/pedra.png" onClick={Pedra} alt="" id="pedra"  className="icon" />
        <img src="../img/papel.png" onClick = {Papel} alt="" id="papel" className="icon" />
        <img src="../img/tesoura.png" onClick = {Tesoura} alt="" id="tesoura"  className="icon" />
      </div>
    </div>
  );
}

const Botao = () => {
  document.getElementById("botaojogar").style.display = "none";
  document.getElementById("painelbotoes").style.display = "block"
  document.getElementById("textointerativo").innerHTML = "Escolha uma das opções"
  document.getElementById("painelbotoes").style.display = "block";
}

const Pedra = () => {
  document.getElementById("textointerativo").innerHTML = "Aguarde...";
  opcaoescolhidauser = 1;
  console.log(opcaoescolhidauser)
  document.getElementById("imgJOGO").style.display = "none";
  document.getElementById("iconuser").style.display = "block";
  document.getElementById("iconuser").src = "../img/pedra.png";
  Geraraleatorio()
}

const Papel = () => {
  document.getElementById("textointerativo").innerHTML = "Aguarde...";
  opcaoescolhidauser = 2;
  console.log(opcaoescolhidauser)
  document.getElementById("imgJOGO").style.display = "none";
  document.getElementById("iconuser").style.display = "block";
  document.getElementById("iconuser").src = "../img/papel.png";
  Geraraleatorio()
}
const Tesoura = () => {
  document.getElementById("textointerativo").innerHTML = "Aguarde...";
  opcaoescolhidauser = 3;
  console.log(opcaoescolhidauser)
  document.getElementById("imgJOGO").style.display = "none";
  document.getElementById("iconuser").style.display = "block";
  document.getElementById("iconuser").src = "../img/tesoura.png";
  Geraraleatorio()
}

const Loading = () => {
 document.getElementById("iconpc").style.display = "none" 
  document.getElementById("loader").style.display = "block"
}
const Geraraleatorio = () => {
  document.getElementById("iconpc").style.display = "none";
  Loading()

  setTimeout(function () {
    document.getElementById("loader").style.display = "none"
    const aleatorionumber = Math.floor(Math.random() * 3);
    switch (aleatorionumber) {
      case 1:
        opcaoescolhidapc = 1;
        document.getElementById("textointerativo").innerHTML = ""
        document.getElementById("iconpc").style.display = "block";
        document.getElementById("iconpc").src = "../img/pedra.png";
        break;
      case 2:
        opcaoescolhidapc = 2;
        document.getElementById("textointerativo").innerHTML = ""
        document.getElementById("iconpc").style.display = "block";
        document.getElementById("iconpc").src = "../img/papel.png";
        break;
      case 3:
        opcaoescolhidapc = 3;
        document.getElementById("textointerativo").innerHTML = ""
        document.getElementById("iconpc").style.display = "block";
        document.getElementById("iconpc").src = "../img/tesoura.png";
        break;
      default:
        console.log("Erro");
        opcaoescolhidapc = 1;
        document.getElementById("textointerativo").innerHTML = ""
        document.getElementById("iconpc").style.display = "block";
        document.getElementById("iconpc").src = "../img/pedra.png";
    }
    Validacao();
  }, 1000)
  
const Validacao = () => {

  if (opcaoescolhidauser == opcaoescolhidapc) {
    console.log("Empate")
    document.getElementById("resultado").style.color = "#bdbf26"
    document.getElementById("resultado").innerHTML = "Empate"
    empate++;
  }
  else if (opcaoescolhidauser == 1 && opcaoescolhidapc == 2) {
    document.getElementById("resultado").style.color = "#e35d5d"
    document.getElementById("resultado").innerHTML = "Você Perdeu!"
    pontuacaopc++;
  }
  else if (opcaoescolhidauser == 1 && opcaoescolhidapc == 3) {
    document.getElementById("resultado").style.color = "#26bf3d"
    document.getElementById("resultado").innerHTML = "Você Ganhou!"
    document.getElementById("empate").style.marginLeft = "580px"
    pontuacaouser++;
  }
  else if (opcaoescolhidauser == 2 && opcaoescolhidapc == 1) {
    document.getElementById("resultado").style.color = "#26bf3d"
    document.getElementById("resultado").innerHTML = "Você Ganhou!"
    pontuacaouser++;
  }
  else if (opcaoescolhidauser == 2 && opcaoescolhidapc == 3) {
   document.getElementById("resultado").style.color = "#e35d5d"
   document.getElementById("resultado").innerHTML = "Você Perdeu!"
   pontuacaopc++;
  }
  else if (opcaoescolhidauser == 3 && opcaoescolhidapc == 1) {
    document.getElementById("resultado").style.color = "#e35d5d"
    document.getElementById("resultado").innerHTML = "Você Perdeu!"
    pontuacaopc++;
  }
  else if (opcaoescolhidauser == 3 && opcaoescolhidapc == 2) {
    document.getElementById("resultado").style.color = "#26bf3d"
    document.getElementById("resultado").innerHTML = "Você Ganhou!"
    pontuacaouser++;
  }
  document.getElementById("pontuaUser").innerHTML = pontuacaouser
  document.getElementById("pontuaPC").innerHTML = pontuacaopc
  document.getElementById("quantEmpate").innerHTML = empate
}
}

let numeroclick = 0;
const Rodada = () =>
{
  numeroclick++
  if(numeroclick >2)
  {
      document.getElementById("painelbotoes").style.display = "none"
      document.getElementById("botaojogar").style.display = "none"
      document.getElementById("jogarnovamente").style.display = "block"
      document.getElementById("textointerativo").style.display = "block"
      if(pontuacaouser > pontuacaopc)
      {
        document.getElementById("textointerativo").innerHTML ="Ganhador da Rodada: Usuário"
      }
      else if(pontuacaouser < pontuacaopc)
      {
        document.getElementById("textointerativo").innerHTML ="Ganhador da Rodada: Maquina"
      }
      else
      {
        document.getElementById("textointerativo").innerHTML ="Ganhador da Rodada: Empate"
      }
  }
}

const JogarNovo = () =>
{
  document.getElementById("jogarnovamente").style.display = "none"
  document.getElementById("painelbotoes").style.display = "block"
  pontuacaopc = 0;
  pontuacaouser = 0;
  numeroclick = 0;
  empate = 0;
  document.getElementById("textointerativo").innerHTML = ""
  document.getElementById("resultado").innerHTML = ""
  document.getElementById("pontuaUser").innerHTML = pontuacaouser
  document.getElementById("pontuaPC").innerHTML = pontuacaopc
  document.getElementById("quantEmpate").innerHTML = empate
}
  function App() {
    const [count, setCount] = useState(0)
    return (
      <div>

        <Titulo></Titulo>
        <Placar></Placar>
        <Jogada></Jogada>
        <Icones></Icones>
      </div>
    );
  }
  export default App
