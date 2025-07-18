// Tipagem Avançada e Integração
// Recursos como tipos condicionais, tipos de união e interseção, tipos mapeados, inferência de tipos e tipos de utilitários, 
// que permitem criar definições de tipo mais complexas e flexíveis. A integração com TypeScript envolve o uso desses recursos para fornecer 
// tipagem estática em projetos JavaScript, melhorando a segurança do código, a experiência do desenvolvedor e a manutenção


// - Tipos condicionais - É como um if para tipos
// Permitem criar tipos que dependem de outros tipos
// T extends U ? X : Y
// Se o tipo T for compatível com U, o tipo final será X.

// Se não for, o tipo final será Y.

//  Exemplo básico:
type EhString<T> = T extends string ? "é string" : "não é string";

type Teste1 = EhString<string>; // "é string"
type Teste2 = EhString<number>; // "não é string"

// Tipo que transforma todas as propriedades em string
export type Pessoa = {
    nome: string;
    idade: number;
    ativo: boolean
}

type SomenteString<T> = {
    [K in keyof T]: string
}

// Tipos em typescript só existem em tempo de compilação, não existem em tempo de execução (não aparecem no console.log)
type PessoaString = SomenteString<Pessoa>;

// Para vermos no console, vamos criar um objeto real
const pessoaStr: PessoaString = {
    nome: "Ju",
    idade: "18",
    ativo: "true"
};
console.log(pessoaStr)



// - Mapped Types (`keyof`, `in`)


// - Utility Types (`Partial`, `Pick`, `Omit`, `Record`)
// - Intersection Types (`&`)
// - Inferência avançada
// - Manipulação de tipos com `typeof` e `as const`
// - Trabalhar com bibliotecas JS tipadas