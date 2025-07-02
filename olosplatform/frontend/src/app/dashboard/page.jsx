import SideBar from '@/components/sidebar';

const Dashboard = () => {

    return (
        <div className="flex min-h-screen">
            <SideBar/>
            <main className="flex-1 p-8 bg-[#F5F5F5]">
                {/* Coloque aqui o conteúdo principal da página */}
                <h1 className="text-2xl font-bold">Bem-vindo(a) ao Professional Service</h1>
                <p>Aqui você pode criar e modificar usuários e suas permissões de acesso, campanhas, organizações, 
                    tabulações, pausas, mailing, relatórios e outras informações do sistema.
                </p>
            </main>
        </div>
    )
}

export default Dashboard;