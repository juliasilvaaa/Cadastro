<h1>TypeScript</h1>

<p>Objetivo: Estudar e aplicar conhecimentos do TypeScript, implementando a lógica de cadastro com suas devidas validações</p>

<h2>Qual a vantagem de utilizar TypeScript?</h2>
<hr/>
<p>A principal vantagem é a Tipagem Estática, quando pensamos em JavaScript falamos de uma linguagem poderosa porém, com uma tipagem fraca, onde é possivel atribuir múltiplos valores a uma várivel, podendo causar problemas durante o desenvolvimento e após. Por isso o TypeScript garante uma tipagem forte, com mais segurança e menos problemas.</p>

<h3>Tipos de Váriaveis</h3>
<ul>
  <li><code>Any</code>: Utilizado para qualquer tipo de valor, geralmente quando o valor atribuído não possui um tipo definido.</li>
  <li><code>String</code>: Valores de texto.</li>
  <li><code>Number</code>: Valores numéricos.</li>
  <li><code>Boolean</code>: Verdadeiro ou falso.</li>
</ul>

<h3>Tipando parâmetro de funções</h3>
<p>É possivel tipar os parametros que vamos receber na função: Ao passar o parâmetro, seguido de dois pontos podemos dizer o tipo dele :tipo</p>

```ts
export function Name(name: string){
 const name: "Julia"
 console.log(name)
}
```

<h3>Tipando retorno de funções</h3>
<p>Também é possivel tipar o retorno das funções: Após o fechamento do parenteses da função, dois pontos seguidos do :tipo</p>

```ts
export function handleNomeChange(nome: string): string {
  const minCaracteres = 3;
  console.log("Nome:", nome);

  if (nome.length < minCaracteres) {
    console.warn("Poucos caracteres");
  }
  return nome;
}
```

<hr/>

<h2>Classes</h2>
<p>É um molde para criar OBJETOS com propriedades (variaveis) e métodos (funções). Usada para organizar o código de forma modular, reutilizar e facil de manter</p>

<h3>Quando usar?</h3>
<ul>
  <li>Precisa representar uma entidade com dados e comportamentos Exemplo: um usuário que tem nome, email, e métodos como logar().</li>
  <li>Vai criar vários objetos parecidos (instâncias) Ex: criar várias empresas, cada uma com nome, CNPJ, endereço…</li>
  <li>Precisa de herança (um tipo que herda de outro) Quando você tem uma estrutura onde uma coisa é um tipo de outra.</li>
</ul>

<h3>Quando NÃO usar?</h3>
<ul>
  <li>O código é pequeno e simples (prefira funções).</li>
  <li>Você não precisa guardar estado ou comportamento em objetos.</li>
  <li>A classe só tem uma função pura (sem this, sem propriedades).</li>
</ul>

<h3>Modificadores de Acesso</h3>
<ul>
  <li>Public: acessivel de qualquer lugar(padrão)</li>
  <li>Private: acessível apenas dentro da classe</li>
  <li>Protected: acessivel dentro da classe e de suas subclasses</li>
  <li>Readonly: não pode ser alterado após ser definido</li>
</ul>


<h3>Tipando Objetos | Type e Interface</h3>
<p>Seguindo na mesma linha de raciocionio, definindo o tipo para cada atributo</p>

<p>Interface</p>

```ts
export interface IUser {
  nome: string;
  email: string;
  data_nascimento: string;
}
```

<p>Type</p>

```ts
type IUser {
  nome: string;
  email: string;
  data_nascimento: string;
}
```

