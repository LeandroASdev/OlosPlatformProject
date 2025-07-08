import SideBar from "@/components/sidebar";

const Session = () => {
  return (
    <div className="flex min-h-screen">
      <div className="transition-all duration-300 ease-in-out">
        <SideBar />
      </div>
      <main className="flex-1 p-8 bg-[#F5F5F5]">
        <h1 className="text-2xl font-bold">Mailing & Estratégia</h1>
      </main>
    </div>
  );
};

export default Session;
