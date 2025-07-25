'use client'

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faDashboard, faGear, faHouse, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons'


type Pessoa = {
  id: number;
  nome: string;
  data_nascimento: string;
  email: string;
  imagem: string;
  cpf: string;
  telefone: string;
  genero: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  temNecessidadeEspecial: boolean;
  necessidades?: string[];
  outraDescricao?: string;
};

function calcularIdade(dataNascimento: string | undefined): number {
  if (!dataNascimento) return 0;
  const partes = dataNascimento.split("/");
  if (partes.length !== 3) return 0;

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
  const [perfilSelecionado, setPerfilSelecionado] = useState<Pessoa | null>(null);

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


        {/* Container all users */}

        <div className="w-full flex flex-col gap-5 rounded-2xl h-[90%] items-center">

          {/* Pesquisa e Filtro - só mostra se nenhum perfil estiver selecionado */}
          {!perfilSelecionado && (
            <div className="flex justify-between items-center w-full h-10 text-black">
              <h1>Usuários ({usuarios.length})</h1>
              <div className="flex items-center gap-5">
                <h1>Filtros (0)</h1>


                <div className="flex items-center w-50 h-8 border border-black rounded px-2 bg-white">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-black w-4 h-4"
                  />
                  <input
                    type="text"
                    placeholder="Buscar"
                    className="w-full h-full pl-2 bg-transparent outline-none border-none focus:ring-0"
                  />

                </div>


              </div>
            </div>
          )}

          {/* Condicional: Perfil ou Tabela */}
          {perfilSelecionado ? (
            <div className="flex flex-col w-full h-full bg-white rounded-2xl border-2 border-black/20">

              <div className="w-full h-full flex">

                {/* Coluna lateral com imagem de fundo */}
                <div
                  className="w-[20%] flex flex-col items-center text-white p-4 relative rounded-l-lg"
                  style={{
                    backgroundImage: "url('../img/background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                >
                  {/* Conteúdo por cima do fundo */}
                  <div className="flex flex-col items-center w-full h-full gap-8 justify-center">
                    <img
                      src={
                        perfilSelecionado.imagem && perfilSelecionado.imagem.trim() !== ""
                          ? perfilSelecionado.imagem
                          : "../img/user.png"
                      }
                      alt="Foto do usuário"
                      className="w-24 h-24 object-cover rounded-full border-2 border-white mb-4"
                    />
                    <div className="flex flex-col items-center">
                      <p>{perfilSelecionado.nome}</p>
                      <p>{perfilSelecionado.email}</p>
                      <p>{perfilSelecionado.cpf}</p>
                    </div>

                  </div>

                </div>

                {/* Coluna principal */}
                <div className="bg-transparent w-[80%] p-4 text-black flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Informações Pessoais</h1>
                    <button
                      className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                      onClick={() => setPerfilSelecionado(null)}
                    >
                      Voltar
                    </button>
                  </div>

                  <div className="flex flex-col h-full gap-5">

                    <div className="w-full gap-2 flex flex-col">
                      <p><strong>Nome: </strong>{perfilSelecionado.nome}</p>
                      <p><strong>E-mail: </strong>{perfilSelecionado.email}</p>
                      <p><strong>Telefone: </strong>{perfilSelecionado.telefone}</p>
                      <p><strong>Data de Nascimento: </strong>{perfilSelecionado.data_nascimento}</p>
                      <p><strong>CPF: </strong>{perfilSelecionado.cpf}</p>
                      <p><strong>Gênero: </strong>{perfilSelecionado.genero}</p>
                    </div>

                    <div className="w-full gap-2 flex flex-col">
                      <h1 className="text-2xl font-bold">Endereço</h1>
                      <p><strong>CEP: </strong>{perfilSelecionado.cep || "Não Informado"}</p>
                      <p><strong>Logradouro: </strong>{perfilSelecionado.logradouro || "Não Informado"}</p>
                      <p><strong>Número: </strong>{perfilSelecionado.numero || "Não Informado"}</p>
                      <p><strong>Complemento: </strong>{perfilSelecionado.complemento || "Não Informado"}</p>

                    </div>



                  </div>

                </div>
              </div>
            </div>

          ) : (
            <div className="w-full overflow-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-300 text-black">
                  <tr className="bg-gray-200 text-center">
                    <th><input type="checkbox" /></th>
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
                        <button
                          className="text-xl font-bold"
                          onClick={() => setPerfilSelecionado(pessoa)}
                        >
                          ⋮
                        </button>
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
          )}
        </div>
      </div>
    </div>
  );
}
