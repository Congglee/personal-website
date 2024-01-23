import { Link, NavLink } from "@remix-run/react";
import { Fragment } from "react";
import { Menu } from "~/lib/type";
import { Footer } from "./Footer";
import { Menu as MenuIcon, menuIcons } from "./Icon";
import { SideBar, ThemeToggleButton } from "./SideBar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  SideMenuDialogContent,
} from "./ui/dialog";

type LayoutProps = {
  children: React.ReactNode;
  menuData: Menu[];
};

export function Layout({ children, menuData }: LayoutProps) {
  return (
    <div>
      <Dialog>
        <SideBar menu={menuData} />
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden flex justify-between items-center p-4 border-b bg-background">
            <Link to="/" className="text-xl sm:text-2xl font-bold">
              Cong Le
            </Link>
            <div className="flex gap-x-3">
              <ThemeToggleButton />
              <DialogTrigger asChild>
                <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                  <MenuIcon className="w-4 h-4" />
                </Button>
              </DialogTrigger>
            </div>
          </div>
          <main className="flex-1 w-full relative min-h-[90vh]">
            <div className="p-5 lg:p-10">{children}</div>
          </main>
          <Footer />
        </div>

        <SideMenuDialogContent>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {(
              menuData.sort(
                (a: any, b: any) =>
                  a.attributes.position - b.attributes.position
              ) || []
            ).map((item: Menu, index: number) => {
              const menuLink = item.attributes.link;
              const menuIcon = menuIcons[index].icon;
              return (
                <Fragment key={item.id}>
                  <NavLink
                    prefetch="intent"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-muted group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        : "hover:bg-muted hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    }
                    to={menuLink ? menuLink : "/"}
                    target={item.attributes.openNewTab ? "_blank" : "_self"}
                  >
                    {menuIcon}
                    {item.attributes.title}
                  </NavLink>

                  {item.attributes.position === 4 && (
                    <div className="py-3">
                      <div className="shrink-0 bg-border h-[1px] w-full"></div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </nav>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-5">
            <DialogClose className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Close
            </DialogClose>
          </div>
        </SideMenuDialogContent>
      </Dialog>
    </div>
  );
}
