"use strict";
// Fundamentos TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoDescricao = exports.Produtos = void 0;
exports.default = Pessoa;
// - Tipagem básica (`string`, `number`, `boolean`)
// String - Aceita valores de texto
// Number - Aceita valores númericos
// Boolean - Aceita valores verdadeiro ou falso
// - `any`, `unknown`, `void`, `never`
// Any - Pode receber valores de qualquer tipo, usado em codigos sem verificação de tipo
// Unknown - Semelhante a any na sua capacidade de armazenar dados de qualquer tipo, uma alternativa mais segura, pois impoe verificação de tipo antes que operações possam ser realizadas
// Void - Usado para funções que não retornam nada.
// Never - Usado quando uma função nunca retorna (por exemplo, erro ou loop infinito).
// - Arrays e Tuplas 
// Array (string[], number[], etc) - Uma lista de elementos do mesmo tipo (qntd e ordem flexiveis)
// Ex: let pessoas: string[] = ["Julia", "Alexandra"]
// Tupla: ([number, string], [boolean, string, number]) - Um array com número fixo de elementos e tipos definidos em ordem exata 
// Ex: let pessoa: [number, string] = [1, "Julia"]
// - Enums
// É uma forma de dar nomes a valores fixos (number ou string), usado para representar categorias,estados ou opções limitadas
// enum DiaDaSemana {
//   Segunda = 1,
//   Terca,
//   Quarta
// }
// console.log(DiaDaSemana.Terca); // 2
// - Funções com tipagem
// Especificar o tipo de parametros e o tipo de retorno da função
// - Type Alias
// É uma forma de dar um nome personalizado a um tipo (seja primitivo, objeto, tupla, função, etc).
// Sintaxe: type NomeDoTipo = tipoOriginal;
// - Union Types (`string | number`)
// É quando você permite que uma variavel aceite mais de um tipo
// function imprimir(valor: string | number) {
//   console.log("Valor:", valor);
// }
// - Type Inference
// É quando o typescript "advinha" o tipo com bas eno valor atribuido, mesmo sem dizermos. É usado quando o valor é obvio, codigo simples e local.
// Exercícios
// - Crie uma função que recebe nome e idade e retorna uma frase. ✅
// - Faça um array de produtos (nome, preço) e liste no console. ✅
// - Crie um tipo para representar um usuário. ✅
function Pessoa(nome, idade) {
    nome = 'Julia';
    idade = 18;
    var frase = nome + idade;
    console.log(frase);
    return frase;
}
var Produtos = /** @class */ (function () {
    function Produtos(categoria) {
        this.produtos = [];
        this.categoria = categoria;
    }
    // Adicionar Produtos
    Produtos.prototype.adicionarProdutos = function (produto) {
        this.produtos.push(produto);
    };
    // Mostrar Produtos
    Produtos.prototype.mostrarProdutos = function () {
        console.log("Produtos da categoria: ".concat(this.categoria));
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            console.log("- ".concat(produto.nome, " | R$ ").concat(produto.preco.toFixed(2)));
        }
    };
    return Produtos;
}());
exports.Produtos = Produtos;
var ProdutoDescricao = /** @class */ (function () {
    function ProdutoDescricao(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return ProdutoDescricao;
}());
exports.ProdutoDescricao = ProdutoDescricao;
var categoria = new Produtos('Informática');
var produto1 = new ProdutoDescricao('Monitor', 1000);
var produto2 = new ProdutoDescricao('Mouse', 100);
var produto3 = new ProdutoDescricao('Teclado', 150);
var produto4 = new ProdutoDescricao('Fone', 200);
// Adicionando os produtos a categoria
categoria.adicionarProdutos(produto1);
categoria.adicionarProdutos(produto2);
categoria.adicionarProdutos(produto3);
categoria.adicionarProdutos(produto4);
categoria.mostrarProdutos();
console.log(categoria);
var usuario1 = {
    nome: 'Julia',
    idade: 18,
    email: 'julia@gmail.com'
};
console.log(usuario1);
