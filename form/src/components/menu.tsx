// components/Menu.tsx
type Props = {
  onSelecionar: (secao: string) => void;
};


// Menu com navegação
export default function Menu({ onSelecionar }: Props) {
  return (
    <div className="h-screen bg-gray-50 text-black fixed w-[20%] flex justify-between">
      <ul className="space-y-4 p-5">
        <li onClick={() => onSelecionar('home')} className="cursor-pointer hover:text-yellow-400">Home</li>
        <li onClick={() => onSelecionar('painel')} className="cursor-pointer hover:text-yellow-400">Painel</li>
        <li onClick={() => onSelecionar('usuarios')} className="cursor-pointer hover:text-yellow-400">Usuarios</li>
      </ul>

      <hr className="h-full border-1 border-gray-300"/>
    </div>
  );
}
