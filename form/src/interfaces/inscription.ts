export interface IUser {
  id: number
  nome: string;
  email: string;
  data_nascimento: string;
  genero: string;
  telefone?: string;
  cpf: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  imagem: string;
  temNecessidadeEspecial: boolean;
  necessidades?: string[];
  outraDescricao?: string;
}

export interface Endereco {
  logradouro: string;
  bairro: string;
  localidade: string; // cidade
  uf: string;          // estado
  erro?: boolean;
}
