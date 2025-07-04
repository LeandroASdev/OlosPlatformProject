"use client";

import SideBar from "@/components/sidebar";
import { TbPencilCog } from "react-icons/tb";
import { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const ariaLabel = { "aria-label": "description" };

const GeneralConfig = () => {
  const [isGeneralActive, setIsGeneralActive] = useState(false);
  const [isCountryConfigActive, setIsCountryConfigActive] = useState(false);
  const [isTabActive, setIsTabActive] = useState(null);

  const paises = [
    "Brasil",
    "Argentina",
    "Canada",
    "Chile",
    "Colombia",
    "Equador",
    "Espanha",
    "Guatemala",
    "México",
    "Peru",
    "Portugal",
    "Paraguai",
    "United States of America",
    "Uruguai",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Configurações salvas!");
  };

  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 p-8 bg-[#F5F5F5]">
        <h1 className="text-2xl font-bold">Configurações Gerais</h1>
        <p>Aqui você pode gerenciar as configurações gerais do sistema.</p>

        {/* ÍCONES */}
        <div className="flex items-center justify-center gap-8 mt-8">
          {/* Ícone 1 - Geral */}
          <div className="flex flex-col items-center">
            <div
              className={`p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors duration-300 cursor-pointer ${
                isGeneralActive ? "bg-orange-300" : "bg-gray-300"
              }`}
              onClick={() => {
                setIsGeneralActive((prev) => !prev);
                setIsCountryConfigActive(false); // fecha o outro
              }}
            >
              <TbPencilCog className="text-3xl text-gray-700 hover:text-[#EC7D22]" />
            </div>
            <p className="text-gray-700 font-bold mt-2">Geral</p>
          </div>

          {/* Ícone 2 - Países */}
          <div className="flex flex-col items-center">
            <div
              className={`p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors duration-300 cursor-pointer ${
                isCountryConfigActive ? "bg-orange-300" : "bg-gray-300"
              }`}
              onClick={() => {
                setIsCountryConfigActive((prev) => !prev);
                setIsGeneralActive(false); // fecha o outro
              }}
            >
              <TbPencilCog className="text-3xl text-gray-700 hover:text-[#EC7D22]" />
            </div>
            <p className="text-gray-700 font-bold mt-2 text-center">
              Configurações dos países
            </p>
          </div>
        </div>

        {/* SEÇÃO GERAL ATIVA */}
        {isGeneralActive && (
          <div onSubmit={handleSubmit}>
            <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Configurações Gerais
              </h2>
              <p>Aqui você pode configurar as opções gerais do sistema.</p>

              {/* Abas */}
              <div className="flex gap-4 mt-6">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor:
                      isTabActive === "dados" ? "#EC7D22" : "#1976d2",
                    "&:hover": {
                      backgroundColor:
                        isTabActive === "dados" ? "#d66a1f" : "#115293",
                    },
                  }}
                  onClick={() =>
                    setIsTabActive((prev) =>
                      prev === "dados" ? null : "dados"
                    )
                  }
                >
                  Dados
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor:
                      isTabActive === "whatsapp" ? "#EC7D22" : "#1976d2",
                    "&:hover": {
                      backgroundColor:
                        isTabActive === "whatsapp" ? "#d66a1f" : "#115293",
                    },
                  }}
                  onClick={() =>
                    setIsTabActive((prev) =>
                      prev === "whatsapp" ? null : "whatsapp"
                    )
                  }
                >
                  Whatsapp
                </Button>
              </div>

              {/* Conteúdo da aba ativa */}
              {isTabActive === "dados" && (
                <div className="mt-6 bg-gray-50 p-4 border rounded-lg">
                  <form action="" className="space-y-4" onSubmit={handleSubmit}>
                    {/* Container da linha com flex */}
                    <div className="flex items-center justify-evenly gap-4">
                      {/* Label à esquerda */}
                      <label className="w-1/3 text-left font-medium">
                        Nome da plataforma:
                      </label>

                      {/* Input centralizado */}
                      <Input
                        placeholder="Insira o nome..."
                        fullWidth
                        inputProps={ariaLabel}
                      />

                      {/* Asterisco à direita */}
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2">
                        *
                      </span>
                    </div>

                    {/* Container Pais */}
                    <div className="flex items-start justify-evenly gap-4">
                      <label className="text-left font-medium pt-2">
                        País:
                      </label>
                      <FormControl sx={{ flex: 1 }}>
                        <Select
                          id="pais-select"
                          displayEmpty
                          defaultValue=""
                          className="w-full"
                        >
                          <MenuItem value="" disabled>
                            Selecione um país
                          </MenuItem>
                          {paises.map((pais, index) => (
                            <MenuItem key={index} value={pais}>
                              {pais}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>

                    {/* Container Fuso horario */}
                    <div className="flex items-start justify-evenly gap-4">
                      <label className="w-1/3 text-left font-medium pt-2">
                        Fuso Horário:
                      </label>
                      <FormControl sx={{ flex: 1 }}>
                        <Select
                          id="pais-select"
                          displayEmpty
                          defaultValue=""
                          autoWidth
                        >
                          <MenuItem value="" disabled>
                            Selecione um Fuso horário
                          </MenuItem>
                          {/* {paises.map((pais, index) => (
                                    <MenuItem key={index} value={pais}>
                                        {pais}
                                    </MenuItem>
                                ))} */}
                        </Select>
                      </FormControl>
                    </div>

                    {/* Container Chave de liçenca */}
                    <div className="flex items-center justify-evenly gap-4">
                      {/* Label à esquerda */}
                      <label className="w-1/3 text-left font-medium">
                        Chave de Liçenca:
                      </label>

                      {/* Input centralizado */}
                      <Input
                        placeholder="Chave de licença..."
                        fullWidth
                        inputProps={ariaLabel}
                      />

                      {/* Asterisco à direita */}
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2">
                        *
                      </span>
                    </div>

                    {/* Container Chave de inventário */}
                    <div className="flex items-center justify-evenly gap-4">
                      {/* Label à esquerda */}
                      <label className="w-1/3 text-left font-medium">
                        Chave de Inventário:
                      </label>

                      {/* Input centralizado */}
                      <Input
                        placeholder="Chave de inventário..."
                        fullWidth
                        inputProps={ariaLabel}
                      />

                      {/* Asterisco à direita */}
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2">
                        *
                      </span>
                    </div>
                  </form>
                </div>
              )}

              {isTabActive === "whatsapp" && (
                <div className="mt-6 bg-gray-50 p-4 border rounded-lg">
                  <label className="block mb-4">
                    Número WhatsApp:
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      placeholder="(00) 91234-5678"
                    />
                  </label>
                  <label className="block mb-4">
                    Mensagem padrão:
                    <textarea
                      className="w-full mt-1 p-2 border rounded"
                      rows="3"
                      placeholder="Digite a mensagem"
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Botão de salvar fora do conteúdo da aba */}
            {isTabActive && (
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Salvar
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default GeneralConfig;
