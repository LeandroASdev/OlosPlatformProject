import SideBar from "@/components/sidebar";

const Customers = () => {
  return (
    <div className="flex min-h-screen">
      <div className="transition-all duration-300 ease-in-out">
        <SideBar />
      </div>
      <main></main>
    </div>
  );
};

export default Customers;
