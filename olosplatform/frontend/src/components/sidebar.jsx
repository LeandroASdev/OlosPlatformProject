"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoMdExit } from "react-icons/io";
import { FiSettings, FiHome, FiBarChart2 } from "react-icons/fi";
import { BsRecordCircle } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const activeMenuItems = [
    { label: "Dashboard", route: "/dashboard", icon: <FiHome /> },
    { label: "Gravações", route: "/recordings", icon: <BsRecordCircle /> },
    {
      label: "Relatórios",
      route: "/reports",
      icon: <HiOutlineDocumentReport />,
    },
  ];

  const menuItems = [
    //dashboard
    { label: "Configuração", route: "/sysconfiguration", icon: <FiHome /> },
    { label: "Gravações", route: "/recordings", icon: <BsRecordCircle /> },
    {
      label: "Relatórios",
      route: "/reports",
      icon: <HiOutlineDocumentReport />,
    },
    { label: "Monitoramento", route: "/monitor" },
    { label: "Mailing & Estratégia", route: "/mailing" },
    { label: "Bilhetagem", route: "/ticketing" },
    { label: "Alarme", route: "/alarm" },
    { label: "Sessões", route: "/session" },
    { label: "Email", route: "/email" },
  ];

  const menuItems2 = [
    //sysconfiguration
    { label: "Página Inicial", route: "/dashboard", icon: <FiHome /> },
    {
      label: "Configurações Gerais",
      route: "/sysconfiguration/generalConfig",
      icon: <FiSettings />,
    },
    { label: "Organizações", route: "/sysconfiguration/customers" },
    { label: "Usuários", route: "/users" },
    { label: "Tabulações", route: "/tabulations" },
    { label: "Pausas", route: "/pauses" },
    { label: "Campanhas", route: "/campaigns" },
    { label: "Backup", route: "/backup" },
    { label: "Infraestrutura", route: "/infrastructure" },
    { label: "Alarmes", route: "/alarms" },
  ];

  const menuItems3 = [
    //gravacoes
    { label: "Pagina Inicial", route: "/dashboard", icon: <FiHome /> },
  ];

  const menuItems4 = [
    //relatorios
    { label: "Página Inicial", route: "/dashboard", icon: <FiHome /> },
    {
      label: "Relatórios",
      route: "/reports",
      icon: <HiOutlineDocumentReport />,
    },
    { label: "Templates", route: "/templates" },
    { label: "Relatórios Customizados", route: "/customReports" },
  ];

  const menuItems5 = [
    //mailing & estrategia
    { label: "Página Inicial", route: "/dashboard", icon: <FiHome /> },
    { label: "Layout", route: "/layout" },
    { label: "Importação", route: "/import" },
    { label: "Estratégia", route: "/strategy" },
    { label: "Mailing", route: "/mailing" },
    { label: "Agendamento", route: "/scheduling" },
    { label: "Integração", route: "/integration" },
  ];

  const menuItems6 = [
    //bilhetagem
    { label: "Página Inicial", route: "/dashboard", icon: <FiHome /> },
    { label: "Planos de Tarifacão", route: "/tariffPlans" },
    { label: "Planos de Monitoração", route: "/monitoringPlans" },
    { label: "Monitoração", route: "/monitoring" },
    {
      label: "Relatórios",
      route: "/billingReports",
      icon: <HiOutlineDocumentReport />,
    },
    { label: "Configurações", route: "/billingConfig" },
  ];

  //monitoramento(redireciona para uma pagina externa)
  //alarme(redireciona para uma pagina externa)
  //email(redireciona para uma pagina externa)

  const menuItems7 = [
    //sessao
    { label: "Página Inicial", route: "/dashboard" },
    { label: "Sessões Ativas", route: "/sessions" },
    { label: "Histórico de Sessões", route: "/sessionHistory" },
  ];

  const getActiveMenu = () => {
    if (pathname.startsWith("/sysconfiguration")) return menuItems2;
    if (pathname.startsWith("/recordings")) return menuItems3;
    if (pathname.startsWith("/reports")) return menuItems4;
    if (pathname.startsWith("/mailing")) return menuItems5;
    if (pathname.startsWith("/ticketing")) return menuItems6;
    if (pathname.startsWith("/session")) return menuItems7;
    return menuItems; // Default to the main menu if no specific path matches
  };

  const activeMenu = getActiveMenu();

  return (
    <>
      {/* Sidebar */}
      <aside className="group relative top-0 left-0 h-full bg-gradient-to-b from-[#87989e] via-[#0676ad] to-[#3CA9E6] text-white flex flex-col p-4 transition-all duration-300 w-20 hover:w-80 z-50">
        {/* Logo */}
        <div className="mb-4 flex items-center space-x-2">
          <Image
            src="/Logo_olos.png"
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>

        {/* Mensagem de boas-vindas */}
        <div className="mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm leading-tight">
          <p>
            Você está acessando <strong>Professional Service</strong>.
          </p>
          <p>Boa tarde, seu último login foi</p>
        </div>

        {/* Menu com ícones e labels no hover */}
        <nav className="mb-6 block group-hover:hidden">
          <ul className="flex flex-col gap-4">
            {activeMenuItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 cursor-pointer hover:text-[#EC7D22] transition-all duration-300 hover:scale-105"
                onClick={() => router.push(item.route)}
              >
                <div className="min-w-[24px] text-xl">{item.icon}</div>
                <span className="whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Submenu dinâmico com base na rota */}
        <nav className="hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-1">
          <ul className="flex flex-col gap-2 text-sm">
            {activeMenu.map((item) => (
              <li
                key={item.label}
                className="cursor-pointer hover:text-[#FFA94D] transition duration-200"
                onClick={() => router.push(item.route)}
              >
                <div className="flex items-center gap-3 text-white font-bold hover:text-[#FFA94D]">
                  {/* Exibe ícone se existir */}
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Rodapé */}
        <div className="mt-auto pt-6 border-t border-white/20 flex flex-col gap-2">
          <a
            href="#"
            className="flex items-center gap-3 text-[#FFA94D] hover:scale-105 transition-transform duration-300"
          >
            <FiHome />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Página Inicial
            </span>
          </a>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-3 text-[#FFA94D] hover:scale-105 transition-transform duration-300"
            >
              <IoMdExit />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Sair
              </span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
