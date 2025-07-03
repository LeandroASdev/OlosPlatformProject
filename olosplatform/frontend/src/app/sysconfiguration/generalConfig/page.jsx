import SideBar from "@/components/sidebar";

const GeneralConfig = () => {
    return(
        <div className="flex min-h-screen">
            <SideBar/>
            <main className="flex-1 p-8 bg-[#F5F5F5]">
                <h1 className="text-2xl font-bold">Configurações Gerais</h1>
                <p>Aqui você pode gerenciar as configurações gerais do sistema.</p>
            </main>
        </div>
    )
}

export default GeneralConfig;