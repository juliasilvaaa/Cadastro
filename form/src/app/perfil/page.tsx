'use client'
import Link from 'next/link'
import '../../css/style.css'
import { useEffect, useState } from 'react'
import { IUser } from '@/interfaces/inscription'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCakeCandles, faEnvelope, faIdCard, faLocationArrow, faLocationDot, faPhone, faThumbTack, faUser, faVenusMars, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { formatarDataNascimento } from '@/services/user'


export default function Perfil() {

    const [usuario, setUsuario] = useState<IUser | null>(null)


    useEffect(() => {
        const usuarioLogado = localStorage.getItem("usuarioLogado")
        if (usuarioLogado) {
            setUsuario(JSON.parse(usuarioLogado))
        }
    }, [])

    if (!usuario) return <p>Carregando...</p>
    return (
        <div
            id='container-perfil'
            className="h-screen w-screen bg-white flex">

            <div
                id='container-perfil-info'
                className="relative w-[20%] h-full bg-black p-10 overflow-hidden"
            >
                {/* Imagem de fundo */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('../img/background.png')" }}
                />

                {/* Conteúdo acima da imagem */}
                <div className="relative z-10 flex flex-col items-center justify-between h-full">
                    <div className="flex flex-col gap-4 items-center" id="container-user-profile">
                        <div
                            id='image-profile'
                            className="w-32 h-32 rounded-full overflow-hidden"
                        >

                            {/* O .trim() remove os espaços do início e do fim da string. */}
                            {/* Se a imagem do usuario existir, mostrar a foto, caso não exibir uma foto padrão */}
                            <img
                                src={usuario.imagem && usuario.imagem.trim() !== "" ? usuario.imagem : "/img/user.png"}
                                alt="Foto do perfil"
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <h1>{usuario.nome}</h1>
                        <h1>{usuario.email}</h1>
                        <h1 className='text-center text-sm'>
                            {usuario.telefone || "Número não informado"}
                        </h1>
                    </div>

                    <div className='w-full flex'>
                        <button
                            id='button-sair'
                            className='bg-white w-full rounded-2xl cursor-pointer'
                        >
                            <Link href="/" className="text-center text-black">
                                Sair
                            </Link>
                        </button>
                    </div>
                </div>
            </div>


            <div
                id='container-description-info'
                className="w-[80%] h-full flex">

                <div
                    className="flex flex-col justify-start p-8 w-full text-black gap-4">
                    <h1 className='text-2xl font-semibold'>Personal Information</h1>

                    <div
                        id='container-info'>

                        <div
                            id='container-user'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faUser}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black  h-full" />
                                    <h1>Full Name</h1>
                                </div>

                                <h1>{usuario.nome}</h1>
                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faEnvelope}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black  h-full" />
                                    <h1>E-mail</h1>
                                </div>
                                <h1>{usuario.email}</h1>
                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faPhone}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black   h-full" />
                                    <h1>Telephone</h1>
                                </div>
                                {/* Usando operador caso o usuario não preencha o campo número */}
                                <h1>{usuario.telefone || "Número não informado"}</h1>
                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faCakeCandles}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black h-full" />
                                    <h1>Date of Birth </h1>
                                </div>
                                <h1>{formatarDataNascimento(usuario.data_nascimento)}</h1>

                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faIdCard}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black h-full" />
                                    <h1>CPF</h1>
                                </div>
                                <h1>{usuario.cpf}</h1>
                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faVenusMars}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black  h-full" />
                                    <h1>Gender</h1>
                                </div>
                                <h1>{usuario.genero}</h1>
                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <h1 className='text-2xl font-semibold'>Address</h1>

                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faLocationDot}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black h-full" />
                                    <h1>Zip Code</h1>
                                </div>
                                <h1>{usuario.cep || "CEP não informado"}</h1>
                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faLocationArrow}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black h-full" />
                                    <h1>Public place</h1>
                                </div>
                                <h1>{usuario.logradouro || "Logradouro não informado"}</h1>
                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faThumbTack}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black   h-full" />
                                    <h1>Number</h1>
                                </div>                               
                                 <h1>{usuario.numero || "Número não informado"}</h1>
                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faBuilding}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-black  h-full" />
                                    <h1>Complement</h1>
                                </div>
                                <h1>{usuario.complemento || "Não informado"}</h1>
                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <h1 className='text-2xl font-semibold'>Special Needs</h1>

                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <h1>Description</h1>
                                <div className='flex flex-col'>
                                    {usuario.necessidades?.map((item, index) => (
                                        <h1 key={item} className='w-full'>
                                            {item || "Não informado"}
                                        </h1>
                                    ))}
                                </div>

                            </div>

                            <hr id='line' />
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}