'use client'

import { useActionState, useState } from 'react';
import '../css/style.css'

export default function InscriptionHome() {

  // Valores
  const [nome, setNome] = useState("");
  const [data, setData] = useState("")
  const [telefone, setTelefone] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [cep, setCep] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("")
  const [cpf, setCpf] = useState("")



  return (
    <div className="h-screen w-screen bg-black flex">

      <div className="w-[10%] h-full flex flex-col bg-blue-950 items-center p-2">
        <img
          className="w-10 h-10"
          src="../img/logo-sbt.png" alt="Logo SBT" />
      </div>


      <div className="w-[90%] h-full bg-white text-black justify-center items-center flex flex-col gap-6">
        <h1 className="text-xl">Cadastro</h1>
        <form className="grid grid-cols-2 gap-5" action="">

          {/* Nome Completo */}
          <div className="flex flex-col">
            <label htmlFor="">Nome Completo:</label>
            <input
              value={nome}
              placeholder="Nome Completo"
              type="text"
              minLength={3}
              required />
          </div>


          {/* E-mail */}
          <div className="flex flex-col">
            <label htmlFor="">E-mail:</label>
            <input
            value={email}
              placeholder="example@gmail.com"
              type="e-mail" />
          </div>


          {/* Data Nascimento*/}
          <div className="flex flex-col">
            <label htmlFor="">Data de Nascimento:</label>
            <input
            value={data}
              placeholder=""
              type="date" />
          </div>


          {/* Gênero */}
          <div className="flex flex-col">
            <label htmlFor="">Gênero:</label>

            <select
            value={genero}
              name="genero" id="">
              <option value="">Feminino</option>
              <option value="">Masculino</option>
              <option value="">Prefiro não dizer</option>
            </select>
          </div>


          {/* Telefone */}
          <div className="flex flex-col">
            <label htmlFor="">Telefone:</label>
            <input
            value={telefone}
              placeholder="(xx) xxxxx-xxxx"
              required
              type="tel" />

          </div>


          {/* CPF */}
          <div className="flex flex-col">
            <label htmlFor="">CPF:</label>
            <input
            value={cpf}
              placeholder="Qual seu cpf?"
              type="text" />
          </div>


          {/* Endereço */}
          <div className="flex flex-col">
            <label htmlFor="">Endereço:</label>
            <div className="grid grid-cols-2 gap-2">

              <input
              value={cep}
                placeholder="CEP"
                type="text" />

              <input
              value={logradouro}
                placeholder="Logradouro"
                type="text" />

              <input
              value={numero}
                placeholder="Número"
                type="text" />

              <input
              value={complemento}
                placeholder="Complemento"
                type="text" />
            </div>

          </div>


          {/* Imagem */}
          <div className="flex flex-col">
            <label htmlFor="">Selecione uma imagem:</label>
            <input
              placeholder="Escolha uma imagem"
              type="file" />
          </div>



          {/* Termos e Condições*/}
          <div className="flex items-center gap-2">
            <input
              placeholder="Aceite"
              type="checkbox" />

            <label>
              Aceite os Termos e Condições
            </label>

          </div>



          {/* Necessidade Especial*/}
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>
              Você possui alguma necessidade especial?
            </label>
          </div>



        </form>

        <div className="flex w-full justify-center">
          <button className="bg-blue-950 w-[30%] h-10 rounded-md text-white">Cadastrar</button>
        </div>
      </div>
    </div>




  );
}
