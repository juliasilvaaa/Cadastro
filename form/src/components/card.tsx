'use client'
import '../css/style.css'
import React, { useState, useEffect } from 'react';

interface Card {
    isVisible: boolean
    onSelecionar: (selecionadas: string[]) => void
    onDescricaoChange: (descricao: string) => void
}

export default function Card({ isVisible, onSelecionar, onDescricaoChange }: Card) {

  const [selecionadas, setSelecionadas] = useState<string[]>([]);
  const [descricao, setDescricao] = useState('');

  const opcoes = ['Auditiva', 'Visual', 'Motora', 'Intelectual', 'Outra'];
    if (!isVisible) {
        return null
    }
 function toggleOpcao(opcao: string) {
    const novaLista = selecionadas.includes(opcao)
      ? selecionadas.filter((o) => o !== opcao)
      : [...selecionadas, opcao];

    setSelecionadas(novaLista);
    onSelecionar(novaLista); // informa o pai
  }

  useEffect(() => {
    onDescricaoChange(descricao); // atualiza sempre que digita
  }, [descricao]);

  return (
    <div className="p-4 border rounded bg-gray-100">
      <p className="font-medium mb-2">Selecione sua(s) necessidade(s):</p>
      <div className="flex flex-col gap-2">
        {opcoes.map((opcao) => (
          <label key={opcao} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selecionadas.includes(opcao)}
              onChange={() => toggleOpcao(opcao)}
            />
            {opcao}
          </label>
        ))}
      </div>

      {selecionadas.includes('Outra') && (
        <div className="mt-4">
          <label className="block mb-2 font-medium">Descreva sua necessidade:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Ex: utilizo leitor de tela, etc."
          />
        </div>
      )}
    </div>
  );
}