'use client'
import Link from 'next/link'
import '../../css/style.css'
import { useEffect, useState } from 'react'
import { IUser } from '@/interfaces/inscription'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCakeCandles, faEnvelope, faIdCard, faLocationArrow, faLocationDot, faPhone, faThumbTack, faUser, faVenusMars, faVoicemail } from '@fortawesome/free-solid-svg-icons'


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
        <div className="h-screen w-screen bg-white flex">

            <div className="w-[20%] bg-blue-900 h-full flex flex-col items-center justify-between p-10">

                <div
                    className="flex flex-col gap-4 items-center"
                    id="containe">

                    <div className="w-32 h-32 rounded-full overflow-hidden">
                        <img src={usuario.imagem} alt="Foto do perfil" className="w-full h-full object-cover" />
                    </div>


                    <h1>{usuario.nome}</h1>

                    <h1>{usuario.email}</h1>

                    <h1 className='text-center text-sm'>{usuario.telefone || "Número não informado"}</h1>
                </div>

                <button className='bg-red-600 h-10 w-full rounded-2xl cursor-pointer'>
                    <Link href="/" className="block w-full h-full text-center leading-10 text-white">
                        Sair
                    </Link>
                </button>
            </div>

            <div className="w-[80%] h-full flex">

                <div
                    className="flex flex-col justify-start p-8 w-full text-black gap-4">
                    <h1 className='text-2xl'>Informações Pessoais</h1>

                    <div
                        id='container-info'>

                        <div
                            id='container-user'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faUser}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-blue-800  h-full" />
                                    <h1>Nome:</h1>
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
                                        className="text-blue-800  h-full" />
                                    <h1>E-mail:</h1>
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
                                        className="text-blue-800  h-full" />
                                    <h1>Telefone:</h1>
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
                                        className="text-blue-800 h-full" />
                                    <h1>Data de Nascimento:</h1>
                                </div>                                <h1>{usuario.data_nascimento}</h1>
                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faIdCard}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-blue-800  h-full" />
                                    <h1>CPF:</h1>
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
                                        className="text-blue-800  h-full" />
                                    <h1>Gênero:</h1>
                                </div>
                                <h1>{usuario.genero}</h1>
                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <h1 className='text-2xl'>Endereço</h1>

                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faLocationDot}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-blue-800  h-full" />
                                    <h1>CEP:</h1>
                                </div>
                                <h1>{usuario.cep}</h1>
                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faLocationArrow}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-blue-800  h-full" />
                                    <h1>Logradouro:</h1>
                                </div>
                                <h1>{usuario.logradouro}</h1>
                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faThumbTack}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-blue-800  h-full" />
                                    <h1>Número:</h1>
                                </div>                                <h1>{usuario.numero}</h1>
                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faBuilding}
                                        style={{ width: '20px', height: '20px' }}
                                        className="text-blue-800 h-full" />
                                    <h1>Complemento:</h1>
                                </div>
                                <h1>{usuario.complemento}</h1>
                            </div>

                            <hr id='line' />
                        </div>


                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <h1 className='text-2xl'>Necessidades Especiais</h1>

                            </div>

                            <hr id='line' />
                        </div>

                        <div
                            id='container-user'>
                            <div className='flex justify-between'>
                                <h1>Descrição</h1>
                                <div className='flex flex-col'>
                                    {usuario.necessidades?.map((item, index) => (
                                        <h1 key={item} className='w-full'>
                                            {item}
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