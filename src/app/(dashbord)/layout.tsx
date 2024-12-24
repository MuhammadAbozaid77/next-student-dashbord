import Logo from "@/components/layouts/Logo";
import Menu from "@/components/layouts/Menu";
import Navbar from "@/components/Navbar";

export default function DashbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-[15%] md:w-[10%] lg:w-[15%] bg-white p-5 border-r overflow-y-auto">
          <Logo />
          <Menu />
        </div>
        <div className="w-[85%]  md:w-[90%] lg:w-[85%]  overflow-scroll bg-slate-100">
          <Navbar />
          <div className="p-2">{children}</div>
        </div>
      </div>
    </>
  );
}
