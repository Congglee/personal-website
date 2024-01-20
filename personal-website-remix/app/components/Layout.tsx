import { Menu } from "~/lib/type";
import SideBar from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
  menuData: Menu[];
};

export function Layout({ children, menuData }: LayoutProps) {
  return (
    <div>
      <SideBar menu={menuData} />
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1 w-full relative min-h-[90vh]">
          <div className="p-5 lg:p-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
