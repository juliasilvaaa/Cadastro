
'use client'

import { useEffect, useState } from "react";
import '../css/style.css'

type Pessoa = {
  id: number;
  nome: string;
  data_nascimento: string; // ← era number, agora string
  email: string;
  imagem: string;
  cpf: string;
  telefone: string;
};

function calcularIdade(dataNascimento: string | undefined): number {
  if (!dataNascimento) return 0; // Retorna 0 se for undefined ou vazio

  const partes = dataNascimento.split("/");
  if (partes.length !== 3) return 0; // Verifica se a data está no formato esperado

  const [dia, mes, ano] = partes;
  const nascimento = new Date(`${ano}-${mes}-${dia}`);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth() - nascimento.getMonth();

  if (mesAtual < 0 || (mesAtual === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }


  return idade;
}


export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Pessoa[]>([]);

  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const usuariosSalvos = localStorage.getItem("usuarios");
    if (usuariosSalvos) {
      setUsuarios(JSON.parse(usuariosSalvos));
    }
  }, []);

  return (
    <div className="bg-white h-[100%] items-center justify-center">


      <div className="flex flex-col p-5 gap-5 w-full h-[100%]">
        <div className="flex justify-between w-full h-[10%]">
          <h1 className="text-black font-bold text-2xl">Usuários</h1>
          <button className="w-30 h-10 bg-purple-900 rounded-xl text-white">
            Novo Usuário
          </button>
        </div>

        <div className="w-full flex flex-col gap-5 p-2 border-1 rounded-2xl border-gray-300 h-[90%] items-center">

          {/* Pesquisa e Filtro */}
          <div className="flex justify-between items-center w-full h-10 text-black">
            <h1>Usuários ({usuarios.length})</h1>

            <div className="flex items-center gap-5">
              <h1>Filtros (0)</h1>
              <input className="w-[30vh] h-[30px] border px-2" type="text" />
            </div>
          </div>

          {/* Listar Usuários */}
          <div className="w-full overflow-auto">
           <table className="w-full table-auto">
  <thead className="bg-gray-300 text-black">
    <tr className="bg-gray-200 text-center">
      <th>
        <input type="checkbox" />
      </th>
      <th>ID</th>
      <th>Imagem</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Email</th>
      <th>CPF</th>
      <th>Telefone</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {usuarios.map((pessoa) => (
     <tr key={pessoa.id} className="hover:bg-gray-100 text-black text-center">
  <td className="border border-gray-300">
    <input type="checkbox" />
  </td>
  <td className="border border-gray-300">{pessoa.id}</td>
  <td className="border border-gray-300">
    <img
      src={
        pessoa.imagem && pessoa.imagem.trim() !== ""
          ? pessoa.imagem
          : "../img/user.png"
      }
      alt="Foto do usuário"
      className="w-12 h-12 object-cover rounded-full mx-auto"
    />
  </td>
  <td className="border border-gray-300">{pessoa.nome}</td>
  <td className="border border-gray-300">{calcularIdade(pessoa.data_nascimento)}</td>
  <td className="border border-gray-300">{pessoa.email}</td>
  <td className="border border-gray-300">{pessoa.cpf}</td>
  <td className="border border-gray-300">{pessoa.telefone}</td>
  <td className="border border-gray-300">
    <button className="text-xl font-bold">⋮</button>
  </td>
</tr>

    ))}
    {usuarios.length === 0 && (
      <tr>
        <td colSpan={9} className="text-center text-gray-400 py-4">
          Nenhum usuário encontrado
        </td>
      </tr>
    )}
  </tbody>
</table>

          </div>
          {/* <button onClick={() => {
  localStorage.removeItem("usuarios");
  console.log("Todos os usuários foram apagados.");
}}>
  Limpar usuários
</button> */}
        </div>
      </div>

    </div>
  );
}
