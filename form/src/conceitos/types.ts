// Types VS Interfaces

// Usados para definir a forma dos dados

// Diferenças 

// Interface usa extends
interface Usuario{
    nome: string
    idade: number
}

interface DadosUsuario extends Usuario{
    email: string
    senha: string
}

// Pode ser "reaberta" - Pode declarar a mesma interface mais d euma vez que o TS junta tudo 
interface Usuario{
    altura: number
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type usa & (interseção)
type Pessoa = {
    nome: string
}

type User = Pessoa & {
    idade: number
}

// Aceita outras coisas além de objetos
type ID = string | number


//-- Dica prática
// Para objetos e contratos com classes → use interface

// Para tipos complexos (union, função, tupla) → use type

// Em projetos reais: às vezes você usa os dois juntos


