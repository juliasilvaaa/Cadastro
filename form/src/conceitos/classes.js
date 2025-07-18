"use strict";
// Clase : é um molde para criar OBJETOS com propriedades (variaveis) e métodos (funções).
// Usada para organizar o código de forma modular, reutilizar e facil de manter
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = exports.Estante = exports.Pessoa = exports.Pessoas = exports.Colaborador = exports.Empresa = void 0;
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
var Empresa = /** @class */ (function () {
    function Empresa(nome, cnpj) {
        // Atributo privado do tipo Colaborador passando um array com valor inicial vazio.
        this.colaboradores = []; // Como já iniciamos ele com valor vazio, não é necessário o Construtor
        // Inicializando o valor
        this.nome = nome;
        this.cpnj = cnpj;
    }
    // Método para adicionar colaboradores
    // colaborador : Valor | Colaborador : Tipo
    Empresa.prototype.adicionaColaborador = function (colaborador) {
        this.colaboradores.push(colaborador);
    };
    Empresa.prototype.mostrarColaboradores = function () {
        for (var _i = 0, _a = this.colaboradores; _i < _a.length; _i++) {
            var colaborador = _a[_i];
            console.log(colaborador);
        }
    };
    return Empresa;
}());
exports.Empresa = Empresa;
var Colaborador = /** @class */ (function () {
    // Atalho
    function Colaborador(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
var empresa1 = new Empresa("Udemy", "11.333.344/0001-11");
var colaborador1 = new Colaborador("Julia", "Silva");
var colaborador2 = new Colaborador("Virginia", "Silva");
var colaborador3 = new Colaborador("Thauanny", "Costa");
// Adicionando colaboradores na empresa
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.mostrarColaboradores();
console.log(empresa1);
// Criar classe PESSOA com métodos falar, andar
var Pessoas = /** @class */ (function () {
    function Pessoas(pessoas) {
        if (pessoas === void 0) { pessoas = []; }
        this.pessoas = pessoas;
    }
    Pessoas.prototype.adicionarPessoa = function (pessoa) {
        this.pessoas.push(pessoa);
    };
    Pessoas.prototype.falar = function (pessoa) {
        console.log(pessoa.nome + " Diz: Olá");
    };
    Pessoas.prototype.andar = function (pessoa) {
        console.log(pessoa.nome + " Está andando");
    };
    Pessoas.prototype.mostrarPessoas = function () {
        for (var _i = 0, _a = this.pessoas; _i < _a.length; _i++) {
            var pessoa = _a[_i];
            console.log(pessoa);
        }
    };
    return Pessoas;
}());
exports.Pessoas = Pessoas;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var pessoas = new Pessoas();
var pessoa1 = new Pessoa("Julia", 18);
var pessoa2 = new Pessoa("Ale", 18);
var pessoa3 = new Pessoa("Virginia", 18);
pessoas.adicionarPessoa(pessoa1);
pessoas.adicionarPessoa(pessoa2);
pessoas.adicionarPessoa(pessoa3);
pessoas.falar(pessoa1);
pessoas.andar(pessoa3);
pessoas.mostrarPessoas();
// Criar uma 'estante'
var Estante = /** @class */ (function () {
    function Estante(categoria, produtos) {
        if (produtos === void 0) { produtos = []; }
        this.categoria = categoria;
        this.produtos = produtos;
    }
    // Método adicionar produto a estante
    Estante.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    // Método mostrar produtos
    Estante.prototype.mostrarProdutos = function () {
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            console.log(produto);
        }
    };
    return Estante;
}());
exports.Estante = Estante;
// Criar um carrinho de compras
var Carrinho = /** @class */ (function () {
    function Carrinho(produtos) {
        if (produtos === void 0) { produtos = []; }
        this.produtos = produtos;
    }
    Object.defineProperty(Carrinho.prototype, "total", {
        // Calcular Total
        get: function () {
            return this.produtos.reduce(function (soma, produto) { return soma + produto.preco; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Carrinho.prototype.adicionarProdutos = function (produto) {
        this.produtos.push(produto);
    };
    Carrinho.prototype.mostrarCarrinho = function () {
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            console.log("Produto: ".concat(produto.nome, ", Pre\u00E7o: R$ ").concat(produto.preco));
        }
        console.log("Total: R$ ".concat(this.total));
    };
    return Carrinho;
}());
exports.Carrinho = Carrinho;
var categoria = new Estante("Mercado");
categoria.adicionarProduto({ nome: "Arroz", preco: 20 });
categoria.adicionarProduto({ nome: "Leite", preco: 5 });
categoria.adicionarProduto({ nome: "Farofa", preco: 6 });
categoria.adicionarProduto({ nome: "Cebola", preco: 8 });
console.log(categoria);
// categoria.mostrarProdutos();
var carrinho = new Carrinho();
carrinho.adicionarProdutos({ nome: "Arroz", preco: 20 });
carrinho.mostrarCarrinho();
