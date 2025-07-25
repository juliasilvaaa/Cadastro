export function validarEmailAdm(email: string){
    
}

export function LoginAdm(email: string, senha: string): boolean {
  const emailPadrao = "admin@site.com";
  const senhaPadrao = "123456";

  return email === emailPadrao && senha === senhaPadrao;
}
