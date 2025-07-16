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
<p>É possivel tipar os parametros que vamos receber na função</p>

<h3>Tipando retorno de funções</h3>
<p>Também é possivel tipar o retorno das funções</p>
```md
```ts
function concatenar(nome: string, idade: number): string {
  return `Nome: ${nome}, idade: ${idade}`;
}


<img width="600" height="410" alt="image" src="https://github.com/user-attachments/assets/8c37eb95-448a-4330-81c8-722dccef5e65" />


