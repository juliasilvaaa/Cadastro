'use client'

import { useState } from "react";
import { LoginAdm } from "@/services/adm"; 
import Link from "next/link";
export default function LoginAdministrator() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin() {
    const autenticado = LoginAdm(email, senha);

    if (autenticado) {
      alert("Login realizado com sucesso!");
    
    } else {
      setErro("Email ou senha inválidos");
    }
  }

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* Imagem de fundo */}
      <img
        src="/img/background.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white w-[40%] bg-black/50 h-[80%] rounded-2xl">
        <div className="flex flex-col h-full justify-around p-10">
          <h1 className="text-2xl font-bold mb-4">Bem-vindo, Admin</h1>

          <input
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 px-4 py-2 rounded bg-white text-black"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="mb-4 px-4 py-2 rounded bg-white text-black"
          />

          {erro && <p className="text-red-400 mb-2">{erro}</p>}

          <button
            className="bg-blue-600 px-6 py-2 rounded text-white"
            onClick={handleLogin}
          >
            <Link href="/home-adm">
                  Log in
                </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
