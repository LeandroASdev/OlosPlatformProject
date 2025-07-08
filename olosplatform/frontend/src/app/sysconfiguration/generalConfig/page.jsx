"use client";

import SideBar from "@/components/sidebar";
import { TbPencilCog } from "react-icons/tb";
import { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ariaLabel = { "aria-label": "description" };

const GeneralConfig = () => {
  const [isGeneralActive, setIsGeneralActive] = useState(false);
  const [isCountryConfigActive, setIsCountryConfigActive] = useState(false);
  const [isGeneralTabActive, setIsGeneralTabActive] = useState(null);
  const [isCountryTabActive, setIsCountryTabActive] = useState(null);

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
      <div className="transition-all duration-300 ease-in-out">
        <SideBar />
      </div>
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
                      isGeneralTabActive === "dados" ? "#EC7D22" : "#1976d2",
                    "&:hover": {
                      backgroundColor:
                        isGeneralTabActive === "dados" ? "#d66a1f" : "#115293",
                    },
                  }}
                  onClick={() =>
                    setIsGeneralTabActive((prev) =>
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
                      isGeneralTabActive === "whatsapp" ? "#EC7D22" : "#1976d2",
                    "&:hover": {
                      backgroundColor:
                        isGeneralTabActive === "whatsapp"
                          ? "#d66a1f"
                          : "#115293",
                    },
                  }}
                  onClick={() =>
                    setIsGeneralTabActive((prev) =>
                      prev === "whatsapp" ? null : "whatsapp"
                    )
                  }
                >
                  Whatsapp
                </Button>
              </div>

              {/* Conteúdo da aba ativa Dados */}
              {isGeneralTabActive === "dados" && (
                <div className="mt-6 bg-gray-50 p-4 border rounded-lg flex flex-col justify-center items-between">
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

                    {/* Container País e Fuso horário lado a lado */}
                    <div className="flex items-center justify-center gap-4">
                      {/* País */}
                      <div className="flex items-center justify-evenly gap-4 w-1/2">
                        <FormControl sx={{ width: "100%" }}>
                          <Select id="pais-select" displayEmpty defaultValue="">
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

                      {/* Fuso horário */}
                      <div className="flex items-center justify-evenly gap-4 w-1/2">
                        <FormControl sx={{ width: "100%" }}>
                          <Select
                            id="fuso-horario-select"
                            displayEmpty
                            defaultValue=""
                          >
                            <MenuItem value="" disabled>
                              Selecione um fuso horário
                            </MenuItem>
                            <MenuItem value="UTC-3">UTC-3</MenuItem>
                            <MenuItem value="UTC-4">UTC-4</MenuItem>
                            <MenuItem value="UTC+0">UTC+0</MenuItem>
                            {/* Adicione mais fusos horários conforme necessário */}
                          </Select>
                        </FormControl>

                        {/* Asterisco obrigatório */}
                        <span className="w-1/12 text-red-500 text-right text-xl pt-2">
                          *
                        </span>
                      </div>
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

                    {/* Container Organização */}
                    <div className="flex items-center justify-evenly gap-4">
                      <label className="w-1/3 text-left font-medium">
                        Organização:
                      </label>
                      <FormControl fullWidth>
                        <Select
                          id="fuso-horario-select"
                          displayEmpty
                          defaultValue=""
                        >
                          <MenuItem value="" disabled>
                            Selecione uma Organização...
                          </MenuItem>
                          <MenuItem value="Santander">Santander</MenuItem>
                          <MenuItem value="Foundever">Foundever</MenuItem>
                          <MenuItem value="Thato">Thato</MenuItem>
                          {/* Adicione mais organizacoes conforme necessário */}
                        </Select>
                      </FormControl>
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2" />
                    </div>

                    {/* Container Checkbox */}
                    <div className="flex items-center justify-start gap-4">
                      <label className="w-1/3 text-left font-medium">
                        Destino de gravações por campanha :
                      </label>
                      <Checkbox {...label} className="text-left" />
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2" />
                    </div>

                    {/* Container Max Hangup */}
                    <div className="flex items-center justify-evenly gap-4">
                      <label className="w-1/3 text-left font-medium">
                        Max Hangup:
                      </label>
                      <Input
                        placeholder="Max Hangup..."
                        fullWidth
                        inputProps={ariaLabel}
                      />
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2">
                        *
                      </span>
                    </div>

                    {/* URL de informações do analytics */}
                    <div className="flex items-center justify-evenly gap-4">
                      <label className="w-1/3 text-left font-medium">
                        URL de informações do analytics:
                      </label>
                      <Input
                        placeholder="https://example.com/analytics"
                        fullWidth
                        inputProps={ariaLabel}
                      />
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2" />
                    </div>
                  </form>
                </div>
              )}

              {/* Conteúdo da aba WhatsApp */}
              {/* Aqui no front antigo era uma tabela */}
              {isGeneralTabActive === "whatsapp" && (
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
            {isGeneralTabActive && (
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
              >
                Salvar
              </button>
            )}
          </div>
        )}

        {/* SEÇÃO GERAL ATIVA */}
        {isCountryConfigActive && (
          <div onSubmit={handleSubmit}>
            <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Configurações dos paises
              </h2>
              <p>Aqui você pode configurar as opções gerais do sistema.</p>
              {/* Abas */}
              <div className="flex gap-4 mt-6">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor:
                      isCountryTabActive === "dados" ? "#EC7D22" : "#1976d2",
                    "&:hover": {
                      backgroundColor:
                        isCountryTabActive === "dados" ? "#d66a1f" : "#115293",
                    },
                  }}
                  onClick={() =>
                    setIsCountryTabActive((prev) =>
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
                      isCountryTabActive === "planosDiscagem"
                        ? "#EC7D22"
                        : "#1976d2",
                    "&:hover": {
                      backgroundColor:
                        isCountryTabActive === "planosDiscagem"
                          ? "#d66a1f"
                          : "#115293",
                    },
                  }}
                  onClick={() =>
                    setIsCountryTabActive((prev) =>
                      prev === "planosDiscagem" ? null : "planosDiscagem"
                    )
                  }
                >
                  Plano de Discagem
                </Button>
              </div>

              {/* Conteúdo da aba ativa Dados */}
              {isCountryTabActive === "dados" && (
                <div className="mt-6 bg-gray-50 p-4 border rounded-lg flex flex-col justify-center items-between">
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

                    {/* Container País e Fuso horário lado a lado */}
                    <div className="flex items-center justify-center gap-4">
                      {/* País */}
                      <div className="flex items-center justify-evenly gap-4 w-1/2">
                        <FormControl sx={{ width: "100%" }}>
                          <Select id="pais-select" displayEmpty defaultValue="">
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

                      {/* Fuso horário */}
                      <div className="flex items-center justify-evenly gap-4 w-1/2">
                        <FormControl sx={{ width: "100%" }}>
                          <Select
                            id="fuso-horario-select"
                            displayEmpty
                            defaultValue=""
                          >
                            <MenuItem value="" disabled>
                              Selecione um fuso horário
                            </MenuItem>
                            <MenuItem value="UTC-3">UTC-3</MenuItem>
                            <MenuItem value="UTC-4">UTC-4</MenuItem>
                            <MenuItem value="UTC+0">UTC+0</MenuItem>
                            {/* Adicione mais fusos horários conforme necessário */}
                          </Select>
                        </FormControl>

                        {/* Asterisco obrigatório */}
                        <span className="w-1/12 text-red-500 text-right text-xl pt-2">
                          *
                        </span>
                      </div>
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

                    {/* Container Organização */}
                    <div className="flex items-center justify-evenly gap-4">
                      <label className="w-1/3 text-left font-medium">
                        Organização:
                      </label>
                      <FormControl fullWidth>
                        <Select
                          id="fuso-horario-select"
                          displayEmpty
                          defaultValue=""
                        >
                          <MenuItem value="" disabled>
                            Selecione uma Organização...
                          </MenuItem>
                          <MenuItem value="Santander">Santander</MenuItem>
                          <MenuItem value="Foundever">Foundever</MenuItem>
                          <MenuItem value="Thato">Thato</MenuItem>
                          {/* Adicione mais organizacoes conforme necessário */}
                        </Select>
                      </FormControl>
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2" />
                    </div>

                    {/* Container Checkbox */}
                    <div className="flex items-center justify-start gap-4">
                      <label className="w-1/3 text-left font-medium">
                        Destino de gravações por campanha :
                      </label>
                      <Checkbox {...label} className="text-left" />
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2" />
                    </div>

                    {/* Container Max Hangup */}
                    <div className="flex items-center justify-evenly gap-4">
                      <label className="w-1/3 text-left font-medium">
                        Max Hangup:
                      </label>
                      <Input
                        placeholder="Max Hangup..."
                        fullWidth
                        inputProps={ariaLabel}
                      />
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2">
                        *
                      </span>
                    </div>

                    {/* URL de informações do analytics */}
                    <div className="flex items-center justify-evenly gap-4">
                      <label className="w-1/3 text-left font-medium">
                        URL de informações do analytics:
                      </label>
                      <Input
                        placeholder="https://example.com/analytics"
                        fullWidth
                        inputProps={ariaLabel}
                      />
                      <span className="w-1/12 text-red-500 text-right text-xl pt-2" />
                    </div>
                  </form>
                </div>
              )}

              {/* Conteúdo da aba WhatsApp */}
              {/* Aqui no front antigo era uma tabela */}
              {isCountryTabActive === "whatsapp" && (
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
            {isCountryTabActive && (
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
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
