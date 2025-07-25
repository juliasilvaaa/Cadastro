'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import '../css/style.css'
import { buscarEnderecoPorCep, formatarCpf, formatarTelefone, handleCEPChange, handleNomeChange, salvarUsuario, validarCpf, validarEmail, validarIdade, validarTelefone } from '@/services/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCakeCandles, faEnvelope, faIdCard, faLocationArrow, faLocationDot, faPhone, faThumbTack, faUser, faUserTie, faVenusMars, faVoicemail } from '@fortawesome/free-solid-svg-icons'

import Card from '@/components/card';


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
  const [nomeValido, setNomeValido] = useState(true)
  const [necessidadeEspecial, setNecessidadeEspecial] = useState(false)
  const [necessidadesSelecionadas, setNecessidadesSelecionadad] = useState<string[]>([])
  const [descricaoOutra, setDescricaoOutra] = useState('')
  const [termos, setTermos] = useState(false)

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
    setNomeValido(handleNomeChange(name))
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

  // function Cep(event: React.ChangeEvent<HTMLInputElement>) {
  //   const cepNew = event.target.value;
  //   const cepFormatado = handleCEPChange(cepNew);
  //   setCep(cepFormatado);
  // }

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


  async function Cep(event: React.ChangeEvent<HTMLInputElement>) {
    const cepDigitado = event.target.value;
    const cepFormatado = handleCEPChange(cepDigitado);
    setCep(cepFormatado);

    // Quando tiver 9 caracteres (CEP formatado), busca o endereço
    if (cepFormatado.length === 9) {
      const endereco = await buscarEnderecoPorCep(cepFormatado);
      if (endereco) {
        setLogradouro(endereco.logradouro || '');
        // Se quiser mais dados:
        // setBairro(endereco.bairro || '');
        // setCidade(endereco.localidade || '');
        // setEstado(endereco.uf || '');
      }
    }
  }



  function cadastrar() {
    if (!nome || !email || !data || !genero || !cpf) {
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
    if (!handleNomeChange(nome)) {
      return;
    }
    if (!termos) {
      setMensagem("Você preicsa aceitar os Termos e Condições")
      setMostrarAlerta(true)
      return;
    }

    const necessidadesTratadas = necessidadesSelecionadas.map((item) =>
      item.toLowerCase() === "outra" ? descricaoOutra : item
    );


    // Se der certo salva o usuario
    salvarUsuario({
      id: Date.now(),
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
      necessidades: necessidadeEspecial ? necessidadesTratadas : [],
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
      className="h-screen w-screen flex bg-white items-center ">

      <div
        id='container-logo'
        className="w-[40%] h-[100%] flex bg-white items-center gap-4 justify-between">
        <img
          className="w-full h-full rounded-r-lg"
          src="../img/background.png" alt="3d image" />


      </div>


      <div
        id='container-cadastro'
        className="w-[60%] bg-white h-[100%] text-black items-center flex flex-col overflow-y-scroll scrollbar-hide">



        {/* Mensagem de alerta */}
        {mostrarAlerta && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-red-100 border border-red-400 text-red-800 px-6 py-4 rounded shadow-lg w-[90%] max-w-md text-center">
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
          className="flex flex-col w-full  gap-10 py-10 max-w-[1000px] px-[15vh] " action="">


          <div className='flex flex-col gap-2'>

            <div className='flex w-full justify-between'>

              <h1 className='text-black text-3xl font-semibold'>Create Account</h1>

              {/* Perfil Adminstrador */}
                <Link href="/login-adm" className='bg-gray-200 h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                <FontAwesomeIcon icon={faUserTie}
                  style={{ width: '20px', height: '20px' }}
                  className="text-black  h-full" />
                </Link>
                
      
            </div>

            <div className='flex gap-2'>

              <h1>Already have an account?</h1>
              <button
                id='button-login'
                className='font-semibold'>
                <Link href="/login">
                  Log in
                </Link>
              </button>
            </div>

          </div>




          <div className='grid grid-cols-2 gap-5 w-full'>


            {/* Nome Completo */}
            <div className="flex flex-col">
              <label htmlFor="">
                Full Name: <span className='text-red-500'>*</span>
              </label>
              <input
                value={nome}
                onChange={FullName}
                placeholder="Full name"
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
                Date of Birth: <span className='text-red-500'>*</span>
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
                Gender: <span className='text-red-500'>*</span>
              </label>

              <select
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                name="genero" id="">
                {/* Valor padrão vazio */}
                <option value="">Select</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Prefiro não dizer">Prefiro não dizer</option>
              </select>
            </div>


            {/* Telefone */}
            <div className="flex flex-col">
              <label htmlFor="">Telephone:</label>
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
                placeholder="What's your CPF?"
                type="text"
                className="border border-gray-300 rounded px-2 py-1"
              /> {!isCpfValido && (
                <span id='error-message'>Digite um cpf válido</span>
              )}
            </div>


            {/* Endereço */}
            <div className="flex flex-col">
              <label htmlFor="">Address:</label>
              <div className="grid grid-cols-2 gap-2">

                <input
                  value={cep}
                  onChange={Cep}
                  placeholder="Zip Code"
                  maxLength={9}
                  type="text" />

                <input
                  value={logradouro}
                  onChange={(e) => setLogradouro(e.target.value)}
                  placeholder="Public place"
                  type="text" />

                <input
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder="Number"
                  type="text" />

                <input
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                  placeholder="Complement"
                  type="text" />
              </div>

            </div>


            <div className="flex flex-col gap-2">
              <label className="font-medium">Select an image:</label>

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
                  <span className="text-gray-500 text-sm">Click to Select</span>
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
                onChange={(e) => setTermos(e.target.checked)}
                checked={termos}
                type="checkbox" />
              <label className='flex gap-1'>
                Accept the Terms and Conditions
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
                  Do you have any special needs?

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
            className="bg-black w-[100%] h-10 rounded-lg text-white cursor-pointer">
            Create Account
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
