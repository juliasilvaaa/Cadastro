// Clase : é um molde para criar OBJETOS com propriedades (variaveis) e métodos (funções).
// Usada para organizar o código de forma modular, reutilizar e facil de manter

import { Cairo } from "next/font/google";
import { Produtos } from "./fundamentos";

// Quando usar?
// 1. Precisa representar uma entidade com dados e comportamentos Exemplo: um usuário que tem nome, email, e métodos como logar().
// 2. Vai criar vários objetos parecidos (instâncias) Ex: criar várias empresas, cada uma com nome, CNPJ, endereço…
// 3. Precisa de herança (um tipo que herda de outro) Quando você tem uma estrutura onde uma coisa é um tipo de outra.

// Quando NÃO usar?
// O código é pequeno e simples (prefira funções).
// Você não precisa guardar estado ou comportamento em objetos.
// A classe só tem uma função pura (sem this, sem propriedades).

// Modificadores de Acesso

// Public: acessivel de qualquer lugar(padrão)
// Private: acessível apenas dentro da classe
// Protected: acessivel dentro da classe e de suas subclasses
// Readonly: não pode ser alterado após ser definido

// Herança: Permite que uma classe herde propriedades e métodos da outra

// Getters e Setters: Permitem controle sobre acesso e modificação de propriedades:

export class Empresa {
  // Atributo publico, podendo ser acessado dentro e fora da classe (Readonly - Só pode ser lido fora da classe, não vai ser alterado)
  // O atributo já vem como padrão Publico.
  public readonly nome: string;
  // Atributo privado do tipo Colaborador passando um array com valor inicial vazio.
  private readonly colaboradores: Colaborador[] = []; // Como já iniciamos ele com valor vazio, não é necessário o Construtor
  protected readonly cpnj: string;

  constructor(nome: string, cnpj: string) {
    // Inicializando o valor
    this.nome = nome;
    this.cpnj = cnpj;
  }

  // Método para adicionar colaboradores
  // colaborador : Valor | Colaborador : Tipo
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  // Atalho
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa("Udemy", "11.333.344/0001-11");
const colaborador1 = new Colaborador("Julia", "Silva");
const colaborador2 = new Colaborador("Virginia", "Silva");
const colaborador3 = new Colaborador("Thauanny", "Costa");

// Adicionando colaboradores na empresa
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostrarColaboradores();

console.log(empresa1);

// Criar classe PESSOA com métodos falar, andar

export class Pessoas {
  constructor(public readonly pessoas: Pessoa[] = []) {}

  adicionarPessoa(pessoa: Pessoa): void {
    this.pessoas.push(pessoa);
  }

  falar(pessoa: Pessoa): void {
    console.log(pessoa.nome + " Diz: Olá");
  }

  andar(pessoa: Pessoa): void {
    console.log(pessoa.nome + " Está andando");
  }

  mostrarPessoas(): void {
    for (const pessoa of this.pessoas) {
      console.log(pessoa);
    }
  }
}

export class Pessoa {
  constructor(public readonly nome: string, public readonly idade: number) {}
}

const pessoas = new Pessoas();
const pessoa1 = new Pessoa("Julia", 18);
const pessoa2 = new Pessoa("Ale", 18);
const pessoa3 = new Pessoa("Virginia", 18);

pessoas.adicionarPessoa(pessoa1);
pessoas.adicionarPessoa(pessoa2);
pessoas.adicionarPessoa(pessoa3);

pessoas.falar(pessoa1);
pessoas.andar(pessoa3)

pessoas.mostrarPessoas();


// Criar uma interface Produto e usá-la em um carrinho de compras

export interface Produto{
  nome: string
  preco: number
}

// Criar uma 'estante'
export class Estante{
  constructor(
    public readonly categoria: string, 
    public readonly produtos: Produto[] = []) {}

    // Método adicionar produto a estante
    adicionarProduto(produto: Produto): void{
      this.produtos.push(produto)
    }

    // Método mostrar produtos
    mostrarProdutos(): void{
      for (const produto of this.produtos) {
      console.log(produto);
    }
    }
} 

// Criar um carrinho de compras
export class Carrinho{
  constructor(
  public readonly produtos: Produto[] = [],
  ) {}

  // Calcular Total
  get total(): number {
    return this.produtos.reduce((soma, produto)  => soma + produto.preco, 0)
  }

  adicionarProdutos(produto: Produto): void{
    this.produtos.push(produto)
  }

  mostrarCarrinho(): void {
    for(const produto of this.produtos){
      console.log(`Produto: ${produto.nome}, Preço: R$ ${produto.preco}`);
   
    }
    console.log(`Total: R$ ${this.total}`);
  }
}


const categoria = new Estante("Mercado")

categoria.adicionarProduto({nome: "Arroz", preco: 20})
categoria.adicionarProduto({nome: "Leite", preco: 5})
categoria.adicionarProduto({nome: "Farofa", preco: 6})
categoria.adicionarProduto({nome: "Cebola", preco: 8})

console.log(categoria)
// categoria.mostrarProdutos();

const carrinho = new Carrinho();
carrinho.adicionarProdutos({nome: "Arroz", preco: 20})
carrinho.mostrarCarrinho()



