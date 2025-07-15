'use client'

import React, { useState } from 'react';
import '../css/style.css'
import { formatarCpf, formatarTelefone, handleCEPChange, handleNomeChange, salvarUsuario, validarCpf, validarEmail, validarIdade, validarTelefone } from '@/services/user';

import Card from '@/components/card';
import Link from 'next/link';

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
  const [emailValido, setEmailValido] = useState(true)
  const [necessidadeEspecial, setNecessidadeEspecial] = useState(false)
  const [necessidadesSelecionadas, setNecessidadesSelecionadad] = useState<string[]>([])
  const [descricaoOutra, setDescricaoOutra] = useState('')
  const [termos, setTermos] = useState('')

  // Mensagens de erro e sucesso
  const [mensagem, setMensagem] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const [sucesso, setSucesso] = useState("");
  const [mostrarSucesso, setMostarSucesso] = useState(false);


  const handleClick = () => {
    setIsVisible(true)
  }

  function FullName(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setNome(name);
    handleNomeChange(name)
  }

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const newEmail = event.target.value;
    setEmail(newEmail)
    setEmailValido(validarEmail(newEmail))
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
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImagemURL(base64); // Agora sim, isso será salvo corretamente
      };

      reader.readAsDataURL(file); // Isso converte a imagem para base64
    }
  }


  function cadastrar() {
    if (!nome || !email) {
      setMensagem('Preencha todos os campos obrigatórios!');
      setMostrarAlerta(true);
      return;
    }
    if (!validarIdade(data)) {
      return; // para não continuar o cadastro
    }
    if (!validarCpf(cpf)) {
      alert('Digite um cpf válido!!')
      return;
    }
    if (!validarEmail(email)) {
      alert("Digite um e-mail válido")
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
      temNecessidadeEspecial: necessidadeEspecial,
      imagem: imagemURL || "",
      necessidades: necessidadeEspecial ? necessidadesSelecionadas : [],
      outraDescricao: descricaoOutra,
    });

    // Mostra mensagem de sucesso
    setSucesso('Cadastro realizado com sucesso!');
    setMostarSucesso(true);

    // (opcional) esconde o sucesso depois de alguns segundos
    setTimeout(() => setMostarSucesso(false), 4000);
  }


  return (
    <div
      id='container'
      className="h-screen w-screen flex bg-white ">

      <div
        id='container-logo'
        className="w-[10%] h-screen flex flex-col bg-blue-950 items-center p-2 gap-4">
        <img
          className="w-10 h-10"
          src="../img/logo-sbt.png" alt="Logo SBT" />

        <button
          id='button-login'
          className='bg-blue-900 rounded-2xl w-full h-10 flex justify-center items-center'>
          <Link href="/login">
            Login
          </Link>
        </button>


      </div>


      <div
        id='container-cadastro'
        className="w-[90%] bg-white text-black items-center flex flex-col overflow-y-scroll">



        {/* Mensagem de alerta */}
        {mostrarAlerta && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded shadow-lg w-[90%] max-w-md text-center">
            <strong className="font-bold">Atenção: </strong>
            <span className="block sm:inline">{mensagem}</span>
            <button
              onClick={() => setMostrarAlerta(false)}
              className="absolute top-1 right-3 text-red-500 text-xl font-bold"
            >
              &times;
            </button>
          </div>
        )}



        <form
          id='form-cadastro'
          className="flex flex-col w-full items-center gap-10 py-5 max-w-[1000px] px-5 " action="">
          <h1 className='text-blue-950 text-2xl font-semibold'>Cadastro</h1>

          <div className='grid grid-cols-2 gap-5 w-full'>


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
                onChange={handleEmail}
                placeholder="example@gmail.com"
                type="email" />

              {!emailValido && (
                <span id='error-message'>E-mail inválido</span>
              )}
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

          </div>
          <div className='flex w-[100%] items-start justify-around h-auto'>
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
            <div className="flex flex-col items-center gap-2">
              <div className='flex items-center gap-2'>
                <input
                  type="checkbox"
                  onClick={handleClick}
                  checked={necessidadeEspecial}
                  onChange={(e) => setNecessidadeEspecial(e.target.checked)} />

                <label className='flex gap-1'>

                  Você possui alguma necessidade especial?
                </label>
              </div>

              {necessidadeEspecial && (
                <Card isVisible={isCardVisible}
                  onSelecionar={(opcoes: string[]) => setNecessidadesSelecionadad(opcoes)}
                  onDescricaoChange={(descricao: string) => setDescricaoOutra(descricao)}
                />
              )}
            </div>
          </div>
          <button
            onClick={cadastrar}
            className="bg-blue-950 w-[30%] h-10 rounded-md text-white cursor-pointer">
            Cadastrar
          </button>


        </form>
        {mostrarSucesso && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded shadow-lg w-[90%] max-w-md text-center">
            <strong className="font-bold">Sucesso: </strong>
            <span className="block">{sucesso}</span>
            <button
              onClick={() => setMostarSucesso(false)}
              className="absolute top-1 right-2 text-green-600 text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        )}


      </div>

    </div>

  );
}
