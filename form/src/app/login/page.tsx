"use client"
import Link from 'next/link'
import '../../css/style.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { formatarCpf, Login, validarCpf } from '@/services/user'


export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [erro, setErro] = useState("")
    const [isCpfValido, setIsCpfValido] = useState(true);

    const router = useRouter();

    function handleLogin() {
        const usuario = Login(email, cpf)

        if (usuario) {
            router.push("/perfil")
        } else {
            setErro("E-mail ou CPF incorretos")
        }
    }

    function Cpf(event: React.ChangeEvent<HTMLInputElement>) {
        const cpfNew = event.target.value;
        const cpfFormatado = formatarCpf(cpfNew)

        setCpf(cpfFormatado);
        const cpfValido = validarCpf(cpfNew)
        setIsCpfValido(cpfValido)
    }

    return (
        <div className="w-screen h-screen bg-blue-950 flex justify-center items-center">

            <div className="w-[40%] h-[80%] rounded-2xl flex flex-col items-center justify-around p-10 text-black bg-white">
                <h1 className="text-2xl text-black">Login</h1>

                <div className='flex flex-col w-full'>
                    <label htmlFor="">E-mail</label>
                    <input
                        className="w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder="example@gmail.com" />
                </div>

                <div className='flex flex-col w-full'>
                    <label htmlFor="">CPF</label>

                    <input
                        type="text"
                        value={cpf}
                        onChange={Cpf}
                        maxLength={14}
                        className="w-full"
                        placeholder="CPF" />
                </div>

                <div className='flex flex-col  w-full items-center h-20 justify-between'>
                    <div className='flex w-full justify-around'>
                        <button
                            className="bg-blue-500 w-[40%] text-white p-2 rounded"
                            onClick={handleLogin}
                        >
                            Entrar
                        </button>


                        <button className="bg-blue-950 w-[40%] text-white p-2 rounded">
                            <Link href="/">
                                Cadastrar
                            </Link>
                        </button>
                    </div>

                     {erro && <p className="text-red-500 mt-2">{erro}</p>}

                </div>

            </div>

        </div>
    )
}