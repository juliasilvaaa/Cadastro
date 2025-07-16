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
        <div className="w-screen h-screen flex items-center bg-white">

            <div className="h-[100%] bg-white w-[50%] flex justify-center items-center">

                <div className='flex flex-col w-[60%] h-[80%] justify-around'>

                    <div>
                        <h1 className='text-3xl font-semibold text-black'>Hello,</h1>
                        <h1 className='text-3xl font-semibold text-black'>Welcome Back</h1>
                    </div>

                    <div className='flex flex-col gap-5 text-black'>

                        <input
                            id='input-login'
                            className="w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" placeholder="example@gmail.com" />

                        <input
                            id='input-login'
                            type="text"
                            value={cpf}
                            onChange={Cpf}
                            maxLength={14}
                            className="w-full"
                            placeholder="CPF" />

                        {erro && <p className="text-red-500 mt-2">{erro}</p>}


                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <button
                            className="bg-black w-[40%] text-white p-2 rounded"
                            onClick={handleLogin}>
                            Login
                        </button>

                        <div className='flex items-center w-full gap-2'>
                            <h1 className='text-black'>Don't have an account?</h1>
                            <button className="text-black rounded font-semibold">
                                <Link href="/">
                                    Create Account
                                </Link>
                            </button>
                        </div>

                    </div>

                </div>

            </div>



            <div className='h-[100%] bg-black w-[50%] flex items-center justify-center rounded-l-xl'>
                <img
                    className="w-full h-full rounded-l-lg"
                    src="../img/background.png" alt="3d image" />            </div>

        </div>
    )
}