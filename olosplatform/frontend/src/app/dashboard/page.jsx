import SideBar from "@/components/sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="transition-all duration-300 ease-in-out">
        <SideBar />
      </div>
      <main className="flex-1 p-8 bg-[#F5F5F5] overflow-auto">
        {/* Coloque aqui o conteúdo principal da página */}
        <h1 className="text-2xl font-bold">
          Bem-vindo(a) ao Professional Service
        </h1>
        <p>
          Aqui você pode criar e modificar usuários e suas permissões de acesso,
          campanhas, organizações, tabulações, pausas, mailing, relatórios e
          outras informações do sistema.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
