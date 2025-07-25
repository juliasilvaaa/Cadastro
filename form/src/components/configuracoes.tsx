import '../css/ajustes.css'

export default function Configurações() {
    return (
        <div className='flex flex-col gap-10 w-full h-full p-10 bg-white'>
            <h1 className="font-bold text-black text-2xl">Ajustes</h1>

            <div className='container-ajustes'>
                <div className='container-ajuste'>
                    <h1 className="text-lg font-medium">Conta</h1>
                </div>

                <div className="container-ajuste">
                    <h1 className="text-lg font-medium">Aparência</h1>

                    <select
                        name="aparencia" id="">
                        <option value="">Escuro</option>
                        <option value="Masculino">Claro</option>
                    </select>

                </div>


                <div className="container-ajuste">
                    <h1 className="text-lg font-medium">Acessibilidade</h1>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
                    </label>
                </div>

                <div className="container-ajuste">
                    <h1 className="text-lg font-medium">Notificações</h1>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
                    </label>
                </div>

            </div>

        </div>
    )
}