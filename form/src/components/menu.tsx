// components/Menu.tsx
type Props = {
  onSelecionar: (secao: string) => void;
};


// Menu com navegação
export default function Menu({ onSelecionar }: Props) {
  return (
    <div className="h-screen bg-white text-black fixed p-4 w-[20%]">
      <ul className="space-y-4">
        <li onClick={() => onSelecionar('home')} className="cursor-pointer hover:text-yellow-400">Home</li>
        <li onClick={() => onSelecionar('painel')} className="cursor-pointer hover:text-yellow-400">Painel</li>
        <li onClick={() => onSelecionar('usuarios')} className="cursor-pointer hover:text-yellow-400">Usuarios</li>
      </ul>
    </div>
  );
}
