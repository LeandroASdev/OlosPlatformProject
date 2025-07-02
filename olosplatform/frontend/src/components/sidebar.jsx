'use client';

import Image from 'next/image';
import { usePathname,  useRouter} from 'next/navigation';
import { IoMdExit } from "react-icons/io";


const SideBar = () => {    
    const pathname = usePathname();   
    const router = useRouter();

   const menuItems = [ //dashboard
        { label: "Configuração", route: "/sysconfiguration" },
        { label: "Gravações", route: "/recordings" },
        { label: "Relatórios", route: "/reports" },
        { label: "Monitoramento", route: "/monitor" },
        { label: "Mailing & Estratégia", route: "/mailing" },
        { label: "Bilhetagem", route: "/ticketing" },
        { label: "Alarme", route: "/alarm" },
        { label: "Sessões", route: "/session" },
        { label: "Email", route: "/email" }
    ];

    const menuItems2 = [ //sysconfiguration
        { label: "Página Inicial", route: "/dashboard" },
        { label: "Configurações Gerais", route: "/generalConfig" },
        { label: "Organizações", route: "/organization" },
        { label: "Usuários", route: "/users" },
        { label: "Tabulações", route: "/tabulations" },
        { label: "Pausas", route: "/pauses" },
        { label: "Campanhas", route: "/campaigns" },
        { label: "Backup", route: "/backup" },
        { label: "Infraestrutura", route: "/infrastructure" },
        { label: "Alarmes", route: "/alarms" },
    ];

    const menuItems3 = [ //gravacoes
        { label: "Pagina Inicial", route: "/dashboard" },
    ]

    const menuItems4 = [ //relatorios 
        { label: "Página Inicial", route: "/dashboard" },
        { label: "Relatórios", route: "/reports" },
        { label: "Templates", route: "/templates" },
        { label: "Relatórios Customizados", route: "/customReports" },
    ]

    const menuItems5 = [ //mailing & estrategia
        { label: "Página Inicial", route: "/dashboard" },
        { label: "Layout", route: "/layout" },
        { label: "Importação", route: "/import" },
        { label: "Estratégia", route: "/strategy" },
        { label: "Mailing", route: "/mailing" },
        { label: "Agendamento", route: "/scheduling" },
        { label: "Integração", route: "/integration" },
    ]

    const menuItems6 = [ //bilhetagem
        { label: "Página Inicial", route: "/dashboard" },
        { label: "Planos de Tarifacão", route: "/tariffPlans" },
        { label: "Planos de Monitoração", route: "/monitoringPlans" },
        { label: "Monitoração", route: "/monitoring" },
        { label: "Relatórios", route: "/billingReports" },
        { label: "Configurações", route: "/billingConfig" },
    ]

    //monitoramento(redireciona para uma pagina externa)
    //alarme(redireciona para uma pagina externa)
    //email(redireciona para uma pagina externa)

    const menuItems7 = [ //sessao
        { label: "Página Inicial", route: "/dashboard" },
        { label: "Sessões Ativas", route: "/sessions" },
        { label: "Histórico de Sessões", route: "/sessionHistory" },
    ]

    const getActiveMenu = () => {
        if(pathname.startsWith("/sysconfiguration")) return menuItems2;
        if(pathname.startsWith("/recordings")) return menuItems3;
        if(pathname.startsWith("/reports")) return menuItems4;
        if(pathname.startsWith("/mailing")) return menuItems5;
        if(pathname.startsWith("/ticketing")) return menuItems6;
        if(pathname.startsWith("/session")) return menuItems7;
        return menuItems; // Default to the main menu if no specific path matches   
    }
    
    const activeMenu = getActiveMenu();


    return(
        <>
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-[#87989e] via-[#0676ad] to-[#3CA9E6] text-white flex flex-col p-6">
                <div className="mb-8 bg-grey-300">
                    <Image src="/Logo_olos.png" alt="Logo" width={150} height={150} className="mb-4" />
                    <p className="leading-tight text-sm">Você está acessando <strong>Professional Service</strong>.</p>
                    <p className="leading-tight text-sm">Boa tarde, seu último login foi</p>
                </div>

                <nav>
                    <ul className="flex flex-col gap-4">
                    {pathname === "/sysconfiguration"
                        ? activeMenu.map((item, idx) => (
                            <li 
                            key={item.label} 
                            className="transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#EC7D22]"
                            onClick={() => router.push(item.route)}
                            >
                                <span
                                    className="text-white font-bold hover:underline hover:decoration-[#EC7D22] cursor-pointer"
                                >
                                    {item.label}
                                </span>
                            </li>
                        ))
                        : activeMenu.map((item, idx) => (
                            <li 
                            key={item.label} 
                            className="transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#EC7D22]"
                            onClick={() => {
                                if (item.route && item.route !== "#") {
                                    router.push(item.route);
                                }
                            }}
                            >
                                <span
                                    onClick={() => {
                                        if (item.route && item.route !== "#") {
                                            router.push(item.route);
                                        }
                                    }}
                                    className="text-white font-bold hover:underline hover:decoration-[#EC7D22] cursor-pointer"
                                >
                                    {item.label}
                                </span>
                            </li>
                        ))}
                </ul>
                </nav>

                <div className="mt-auto pt-6 border-t border-white/20 flex flex-col gap-2">
                    <a href="#" className="text-[#FFA94D] transition-transform duration-300 ease-in-out hover:scale-105">Página Inicial</a>
                    <div className='flex items-center justify-between'>
                        <a href="#" className="text-[#FFA94D] transition-transform duration-300 ease-in-out hover:scale-105">Sair</a>
                        <span title='Sair' className='text-[#fff] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <IoMdExit />
                        </span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar;