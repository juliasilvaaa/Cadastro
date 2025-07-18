// Generics <T>
// Permite criar componentes reutilizaveis que funcionam com varios tipos mantendo a seguranca do tipo
// Ao inves de fixar o tipo(string ou number) voce usa um tipo generico, geralmente letra T (de type)

// Exemplo Básico

function identidade<T>(valor: T): T{
    return valor;
}

console.log(identidade<string>("Julia"))
console.log(identidade<number>(18))


// Criar funçao generica buscarPorId()

function buscarPorId<T>(id: T): T{
    return id
}
console.log(buscarPorId(1))


// Namespaces
// Forma antiga de organizar codigo no mesmo arquivo
// Agrupa funções, classes, etc. - Tudo fica em um unico escopo global
// Requer configuração especial 

// namespace Loja {
//   export class Produto {
//     constructor(public nome: string, public preco: number) {}
//   }

//   export function exibirProduto(p: Produto) {
//     console.log(`${p.nome} custa R$${p.preco}`);
//   }
// }

// const produto = new Loja.Produto("Arroz", 20);
// Loja.exibirProduto(produto);

// Módulos (Sintaxe - import / export )
// Cada arquivo .ts é um modulo isolado

// - Vantagens
// Modularização real (um arquivo = um módulo)
// Escopo isolado → sem conflitos globais
// Funciona com Node.js, Deno, Vite, Webpack...
// Compatível com JavaScript moderno


// Funções de Ordem Superior (Higher-Order Functions)
// São funções que recebemoutra função como parametro ou retornam uma função

// - Exemplo                                      	  - Tipo em TypeScript
//  Função sem parâmetro e sem retorno	                 () => void
//  Função que recebe número e retorna número	         (x: number) => number
//  Função que recebe string e retorna boolean	         (s: string) => boolean
//  Função que retorna outra função	                     () => () => string