'use client'

import React, { use, useState } from 'react';
import '../css/style.css'
import { formatarCpf, formatarTelefone, handleCEPChange, handleNomeChange, salvarUsuario, validarCpf, validarIdade, validarTelefone } from '@/services/user';

import Card from '@/components/card';
import { spawn } from 'child_process';

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
  const [imagemURL, setImagemURL] = useState<string | null>(null);


  // Validações
  const [isCardVisible, setIsVisible] = useState(false);
  const [isDataValida, setIsDataValida] = useState(true);
  const [isCpfValido, setIsCpfValido] = useState(true);
  const [isTelefoneValido, setIsTelefoneValido] = useState(true)



  const handleClick = () => {
    setIsVisible(true)
  }

  function FullName(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setNome(name);
    handleNomeChange(name)
  }

  function Data(event: React.ChangeEvent<HTMLInputElement>) {
    const dataYear = event.target.value;
    setData(dataYear);

    const valido = validarIdade(dataYear);
    setIsDataValida(valido);
  }


  function Telefone(event: React.ChangeEvent<HTMLInputElement>) {
    const telefoneNew = event.target.value;
    const telefoneFormatado = formatarTelefone(telefoneNew)

    setTelefone(telefoneFormatado);
    const telefoneValido = validarTelefone(telefoneNew)
    setIsTelefoneValido(telefoneValido)
  }

  function Cep(event: React.ChangeEvent<HTMLInputElement>) {
    const cepNew = event.target.value;
    const cepFormatado = handleCEPChange(cepNew);
    setCep(cepFormatado);
  }

  function Cpf(event: React.ChangeEvent<HTMLInputElement>) {
    const cpfNew = event.target.value;
    const cpfFormatado = formatarCpf(cpfNew)

    setCpf(cpfFormatado);
    const cpfValido = validarCpf(cpfNew)
    setIsCpfValido(cpfValido)
  }


  function handleImagemChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      const urlTemporaria = URL.createObjectURL(file);
      setImagemURL(urlTemporaria);
    }
  }

  function cadastrar() {
    if (!validarIdade(data)) {
      return; // para não continuar o cadastro
    }
    if (!validarCpf(cpf)) {
      alert('Digite um cpf válido!!')
      return;
    }
    if (!validarTelefone(telefone)) {
      alert("Digite um telefone válido")
      return
    }


    // Se der certo salva o usuario
    salvarUsuario({
      nome,
      email,
      data_nascimento: data,
      genero,
      telefone,
      cpf,
      cep,
      logradouro,
      numero: numero,
      complemento,
      imagem: imagemURL || "",
    });

    alert("Cadastro com sucesso!")
  }

  // // Slabvar o usuario
  // function handleClick() {
  //   salvarUsuario(nome); // aqui você chama a função da service
  // }

  return (
    <div className="h-screen w-screen flex bg-white">

      <div className="w-[10%] h-full flex flex-col bg-blue-950 items-center p-2">
        <img
          className="w-10 h-10"
          src="../img/logo-sbt.png" alt="Logo SBT" />
      </div>


      <div className="w-[90%] h-full bg-white text-black justify-center items-center flex flex-col gap-6">
        <h1 className="text-xl font-semibold  text-blue-950">Cadastro</h1>
        <form className="grid grid-cols-2 gap-5" action="">

          {/* Nome Completo */}
          <div className="flex flex-col">
            <label htmlFor="">
              Nome Completo: <span className='text-red-500'>*</span>
            </label>
            <input
              value={nome}
              onChange={FullName}
              placeholder="Nome Completo"
              type="text"
              minLength={3}
            />
          </div>


          {/* E-mail */}
          <div className="flex flex-col">
            <label className='font-medium' htmlFor="">
              E-mail: <span className='text-red-500'>*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              type="e-mail" />
          </div>


          {/* Data nascimento */}
          <div className="flex flex-col">
            <label className='font-medium' htmlFor="">
              Data de Nascimento: <span className='text-red-500'>*</span>
            </label>
            <input
              value={data}
              onChange={Data}
              type="date"
            />
            {!isDataValida && (
              <span id='error-message'>Você precisa ter 18 anos ou mais</span>
            )}
          </div>



          {/* Gênero */}
          <div className="flex flex-col">
            <label htmlFor="">
              Gênero: <span className='text-red-500'>*</span>
            </label>

            <select
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              name="genero" id="">
              {/* Valor padrão vazio */}
              <option value="">Selecione:</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Prefiro não dizer">Prefiro não dizer</option>
            </select>
          </div>


          {/* Telefone */}
          <div className="flex flex-col">
            <label htmlFor="">Telefone:</label>
            <input
            maxLength={15}
              value={telefone}
              onChange={Telefone}
              placeholder="(xx) xxxxx-xxxx"
              type="tel" />

            {!isTelefoneValido && (
              <span id='error-message'>Digite um telefone válido</span>
            )}

          </div>


          {/* Cpf */}
          <div className="flex flex-col">
            <label htmlFor="cpf" className="font-medium">
              CPF: <span className="text-red-500">*</span>
            </label>
            <input
              id="cpf"
              value={cpf}
              onChange={Cpf}
              maxLength={14}
              placeholder="Qual seu CPF?"
              type="text"
              className="border border-gray-300 rounded px-2 py-1"
            /> {!isCpfValido && (
              <span id='error-message'>Digite um cpf válido</span>
            )}
          </div>


          {/* Endereço */}
          <div className="flex flex-col">
            <label htmlFor="">Endereço:</label>
            <div className="grid grid-cols-2 gap-2">

              <input
                value={cep}
                onChange={Cep}
                placeholder="CEP"
                maxLength={9}
                type="text" />

              <input
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
                placeholder="Logradouro"
                type="text" />

              <input
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Número"
                type="text" />

              <input
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                placeholder="Complemento"
                type="text" />
            </div>

          </div>


          <div className="flex flex-col gap-2">
            <label className="font-medium">Selecione uma imagem:</label>

            {/* Label estilizada que simula o input */}
            <label
              htmlFor="upload-imagem"
              className="w-full h-[20vh] border border-dashed border-gray-400 rounded cursor-pointer flex items-center justify-center overflow-hidden bg-gray-100 hover:border-blue-500"
            >
              {imagemURL ? (
                <img
                  src={imagemURL}
                  alt="Imagem selecionada"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-500 text-sm">Clique para selecionar</span>
              )}
            </label>

            {/* Input real, escondido */}
            <input
              id="upload-imagem"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImagemChange}
            />
          </div>


          {/* Termos e Condições*/}
          <div className="flex items-center gap-2">
            <input
              placeholder="Aceite"
              type="checkbox" />
            <label className='flex gap-1'>
              Aceite os Termos e Condições
              <span className='text-red-500'>*</span>
            </label>

          </div>



          {/* Necessidade Especial*/}
          <div className="flex items-center gap-2">
            <input onClick={handleClick} type="checkbox" />
            <label className='flex gap-1'>
              <Card isVisible={isCardVisible} />
              Você possui alguma necessidade especial?
              <span className='text-red-500'>*</span>
            </label>
          </div>



        </form>

        <div className="flex w-full justify-center h-auto bg-white">
          <button
            onClick={cadastrar}
            className="bg-blue-950 w-[30%] h-10 rounded-md text-white cursor-pointer">Cadastrar</button>
        </div>
      </div>
    </div>




  );
}
