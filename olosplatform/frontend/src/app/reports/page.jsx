const { default: SideBar } = require("@/components/sidebar");

const Reports = () => {
  return (
    <div className="flex min-h-screen">
      <div className="transition-all duration-300 ease-in-out">
        <SideBar />
      </div>
      <main className="flex-1 p-8 bg-[#F5F5F5]">
        {/* Coloque aqui o conteúdo principal da página */}
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <p>Aqui você pode acessar e gerar relatórios do sistema.</p>
      </main>
    </div>
  );
};

export default Reports;
