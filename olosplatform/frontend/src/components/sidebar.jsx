"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoMdExit } from "react-icons/io";
import { FiSettings, FiHome } from "react-icons/fi";
import { BsRecordCircle } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoBusinessOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
import { MdEmail, MdOutlineCampaign } from "react-icons/md";
import { MdOutlineBackup } from "react-icons/md";
import { TbBuildingCog } from "react-icons/tb";
import { MdAccessAlarms } from "react-icons/md";
import { MdOutlineMonitor } from "react-icons/md";
import { TbMail } from "react-icons/tb";
import { TiTicket } from "react-icons/ti";
import { VscEditSession } from "react-icons/vsc";
import { GrTemplate } from "react-icons/gr";
import { TbMessageReport } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { LuImport } from "react-icons/lu";
import { PiStrategy } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { LuMonitorDot } from "react-icons/lu";
import { RiBillLine } from "react-icons/ri";

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    //dashboard
    { label: "Configuração", route: "/sysconfiguration", icon: <FiHome /> },
    { label: "Gravações", route: "/recordings", icon: <BsRecordCircle /> },
    { label: "Relatórios", route: "/reports", icon: <HiOutlineDocumentReport />},
    { label: "Monitoramento", route: "/monitor", icon: <MdOutlineMonitor /> },
    { label: "Mailing & Estratégia", route: "/mailing", icon: <TbMail /> },
    { label: "Bilhetagem", route: "/ticketing", icon: <TiTicket /> },
    { label: "Alarme", route: "/alarm", icon: <MdAccessAlarms /> },
    { label: "Sessões", route: "/session", icon: <VscEditSession /> },
    { label: "Email", route: "/email", icon: <MdEmail /> },
  ];

  const menuItems2 = [
    //sysconfiguration
    { label: "Página Inicial", route: "/dashboard", icon: <FiHome /> },
    {
      label: "Configurações Gerais",
      route: "/sysconfiguration/generalConfig",
      icon: <FiSettings />,
    },
    {
      label: "Organizações",
      route: "/sysconfiguration/customers",
      icon: <IoBusinessOutline />,
    },
    { label: "Usuários", route: "/users", icon: <FaUsers /> },
    { label: "Tabulações", route: "/tabulations", icon: <FaTableList /> },
    { label: "Pausas", route: "/pauses", icon: <FaRegCirclePause /> },
    { label: "Campanhas", route: "/campaigns", icon: <MdOutlineCampaign /> },
    { label: "Backup", route: "/backup", icon: <MdOutlineBackup /> },
    {
      label: "Infraestrutura",
      route: "/infrastructure",
      icon: <TbBuildingCog />,
    },
    { label: "Alarmes", route: "/alarms", icon: <MdAccessAlarms /> },
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
    { label: "Templates", route: "/templates", icon: <GrTemplate /> },
    {
      label: "Relatórios Customizados",
      route: "/customReports",
      icon: <TbMessageReport />,
    },
  ];

  const menuItems5 = [
    //mailing & estrategia
    { label: "Página Inicial", route: "/dashboard", icon: <FiHome /> },
    {
      label: "Layout",
      route: "/layout",
      icon: <BsReverseLayoutTextSidebarReverse />,
    },
    { label: "Importação", route: "/import", icon: <LuImport /> },
    { label: "Estratégia", route: "/strategy", icon: <PiStrategy /> },
    { label: "Mailing", route: "/mailing", icon: <TbMail /> },
    { label: "Agendamento", route: "/scheduling", icon: <AiOutlineSchedule /> },
    {
      label: "Integração",
      route: "/integration",
      icon: <MdOutlineIntegrationInstructions />,
    },
  ];

  const menuItems6 = [
    //bilhetagem
    { label: "Página Inicial", route: "/dashboard", icon: <FiHome /> },
    {
      label: "Planos de Tarifacão",
      route: "/tariffPlans",
      icon: <RiBillLine />,
    },
    {
      label: "Planos de Monitoração",
      route: "/monitoringPlans",
      icon: <LuMonitorDot />,
    },
    { label: "Monitoração", route: "/monitoring", icon: <MdOutlineMonitor /> },
    {
      label: "Relatórios",
      route: "/billingReports",
      icon: <HiOutlineDocumentReport />,
    },
    { label: "Configurações", route: "/billingConfig", icon: <FiSettings /> },
  ];

  //monitoramento(redireciona para uma pagina externa)
  //alarme(redireciona para uma pagina externa)
  //email(redireciona para uma pagina externa)

  const menuItems7 = [
    //sessao
    { label: "Página Inicial", route: "/dashboard", icon: <FiHome /> },
    { label: "Sessões Ativas", route: "/sessions", icon: <VscEditSession /> },
    {
      label: "Histórico de Sessões",
      route: "/sessionHistory",
      icon: <FaHistory />,
    },
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
        <div className="mb-6 ml-2 flex items-center space-x-2">
          <Image
            src="/Logo_olos.png"
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>

        {/* Menu com ícones e labels no hover */}
        <nav className="mb-6 block group-hover:hidden ml-3">
          <ul className="flex flex-col gap-4">
            {activeMenu.map((item) => (
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

        {/* Mensagem de boas-vindas */}
        <div className="mb-8 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm leading-tight">
          <p>
            Você está acessando <strong>Professional Service</strong>.
          </p>
          <p>Boa tarde, seu último login foi</p>
        </div>

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
