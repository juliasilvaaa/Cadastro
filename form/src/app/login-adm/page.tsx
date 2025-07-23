export default function LoginAdminstrator() {
    return (
        <div className="relative w-screen h-screen flex justify-center items-center">
            {/* Imagem de fundo */}
            <img
                src="/img/background.png"
                alt="background"
                className="absolute inset-0 w-full h-full object-fit z-0"
            />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white w-[40%] bg-black/50 h-[80%] rounded-2xl">
                <div className="flex flex-col h-full justify-around p-10">
                    <h1 className="text-2xl font-bold mb-4">Bem-vindo, Admin</h1>
                   
                    <input
                        type="text"
                        placeholder="Usuário"
                        className="mb-2 px-4 py-2 rounded bg-white text-black"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className="mb-4 px-4 py-2 rounded bg-white text-black"
                    />
                    <button className="bg-blue-600 px-6 py-2 rounded text-white">
                        Entrar
                    </button>
                </div>

            </div>

            <div />
        </div>
    );
}
