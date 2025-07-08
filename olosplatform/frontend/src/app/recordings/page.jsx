import SideBar from "@/components/sidebar";

const Recordings = () => {
  return (
    <div className="flex min-h-screen">
      <div className="transition-all duration-300 ease-in-out">
        <SideBar />
      </div>
      <main className="flex-1 p-8 bg-[#F5F5F5]">
        {/* Coloque aqui o conteúdo principal da página */}
        <h1 className="text-2xl font-bold">Gravações</h1>
        <p>Aqui você pode acessar e gerenciar as gravações do sistema.</p>
      </main>
    </div>
  );
};

export default Recordings;
