'use client';

import Image from 'next/image';
import { usePathname,  useRouter} from 'next/navigation';
import { IoMdExit } from "react-icons/io";


const SideBar = () => {    
    const pathname = usePathname();   
    const router = useRouter();

   const menuItems = [
        { label: "Configuração", route: "/sysconfiguration" },
        { label: "Gravações", route: "testeee" },
        { label: "Relatórios", route: "#" },
        { label: "Monitoramento", route: "#" },
        { label: "Mailing & Estratégia", route: "#" },
        { label: "Bilhetagem", route: "#" },
        { label: "Alarme", route: "#" },
        { label: "Sessões", route: "#" },
        { label: "Email", route: "#" }
    ];

    const menuItems2 = [
        "Página Inicial",
        "Configurações Gerais",
        "Organizações",
        "Usuários",
        "Tabulações",
        "Pausas",
        "Campanhas",
        "Backup",
        "Infraestrutura",
        "Alarmes",
    ];
    const activeMenu = pathname === "/sysconfiguration" ? menuItems2 : menuItems;


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
                            <li key={item} className="transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#EC7D22]">
                                <span
                                    className="text-white font-bold hover:underline hover:decoration-[#EC7D22] cursor-pointer"
                                >
                                    {item}
                                </span>
                            </li>
                        ))
                        : activeMenu.map((item, idx) => (
                            <li key={item.label} className="transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#EC7D22]">
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