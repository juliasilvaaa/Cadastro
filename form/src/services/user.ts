// Objetivo: Criar uma página para cadastro com todas as validações

import { IUser } from "@/interfaces/inscription";

// -- Validações
// Nome: Minimo caracteres
// E-mail: RegExr - moldar um tipo de entrada @, qntd de caracteres
// Data Nascimento - Retornar a data formatada e idade minima (18)
// Gênero - Campo Opcional - Fornecer opções pro usuario selecionar
//

// -- Conceitos Usados
// - Replace (Objetivo principal substituir partes de string por outras, manipualando.)
// - New Date (Usada para criar um objeto de data e hora, sendo possível usar metódos para obter informações especificas ex:(getFullYear))
// - Console.warn (Usada para exibir mensagens de aviso no console do navegador)
// - localStorage (Permite armazenar dados de forma persistente)

// Lidando com a mudança do nome
export function handleNomeChange(nome: string): string {
  const minCaracteres = 3;
  console.log("Nome:", nome);

  if (nome.length < minCaracteres) {
    console.warn("Poucos caracteres");
  }

  return nome;
}

// Lidando com a mudança da data de nascimento
export function validarIdade(data: string, idadeMinima = 18): boolean {
  const dataNascimento = new Date(data + "T00:00:00");
  const hoje = new Date();

  const dataMinima = new Date(
    hoje.getFullYear() - idadeMinima,
    hoje.getMonth(),
    hoje.getDate()
  );

  const isOldEnough = dataNascimento <= dataMinima;

  return isOldEnough;
}

// Lidando com a mudança do telefone
export function formatarTelefone(telefone: string): string {
  telefone = telefone.replace(/\D/g, "");

  // Formata os primeiros digitos como DDD, adicionando parenteses e espaço
  if (telefone.length > 0) {
    telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2");
  }
  // Formata os proximos 5 digitos com hifén
  if (telefone.length > 9) {
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");
  }

  // Como ele adiciona () e hifen conta como 14 caracteres
  const maxTelefone = 15;
  // Limitando a quantidade de caracteres para o usuario não digitar mais que o permitido
  if (telefone.length > maxTelefone) {
    console.log("Digite um numéro valido");
  }
  // Retornando o valor, para que o usuario visualize o telefone formatado
  return telefone;
}

export function validarTelefone(telefone: string): boolean {
  telefone = telefone.replace(/\D/g, "");
  return telefone.length === 11;
}

export function handleCEPChange(cep: string): string {
  // Remove tudo que não for número
  cep = cep.replace(/\D/g, "");

  // Aplica máscara se tiver pelo menos 5 dígitos
  if (cep.length > 5) {
    cep = cep.replace(/(\d{5})(\d)/, "$1-$2");
  }

  // Limitando a quantidade de caracteres
  const qntdCep = 9;
  if (cep.length > qntdCep) {
    console.log("Digite um cep válido");
  }

  return cep;
}

// Tipa o parametro cep e ): Isso tipa o valor que a função retorna:
export function formatarCpf(cpf: string): string {
  cpf = cpf.replace(/\D/g, "");

  // Aplicando formatação (000.000.000-00)
  if (cpf.length > 3) {
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  }
  if (cpf.length > 7) {
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  }
  if (cpf.length > 11) {
    cpf = cpf.replace(/(\d{3})(\d)/, "$1-$2");
  }

  let maxcpf = 14;
  if (cpf.length > maxcpf) {
    console.log("Digite um cpf válido");
  }
  return cpf;
}

export function validarCpf(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, "");
  return cpf.length === 11;
}

// Criando função para salvar o usuario localmente
export function salvarUsuario(usuario: IUser) {
  const usuariosSalvos = localStorage.getItem("usuarios");
  const listUsuarios: IUser[] = usuariosSalvos
    ? JSON.parse(usuariosSalvos)
    : [];

  // Adicionando usuario a lista
  listUsuarios.push(usuario);

  // Salvar a lista atualizada
  localStorage.setItem("usuarios", JSON.stringify(listUsuarios));
  console.log("Usuario salvo com sucesso", usuario);
}
