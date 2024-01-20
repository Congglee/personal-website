import { Link, NavLink } from "@remix-run/react";
import { Moon, Sun } from "lucide-react";
import { Fragment } from "react";
import { Theme, useTheme } from "remix-themes";
import { Menu } from "~/lib/type";
import Profile from "../../public/profile.jpg";
import { menuIcons } from "./Icon";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type SideBarProps = {
  menu: Menu[];
};

const SideBar = ({ menu }: SideBarProps) => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 border-r-[1.5px]">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex p-4 bg-background h-[9.9vh]">
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center justify-between">
                <ProfileLink />
                <ThemeToggleButton />
              </div>
            </div>
          </div>
          <div className="shrink-0 bg-border h-[1px] w-full"></div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {(
              menu.sort(
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
        </div>
        <div className="shrink-0 bg-border h-[1px] w-full"></div>
        <div className="flex-shrink-0 flex p-4 bg-background h-[9.9vh]">
          <div className="flex-shrink-0 items-center h-full flex w-full group"></div>
        </div>
      </div>
    </div>
  );
};

const ProfileLink = () => (
  <Link to="/about" className="flex items-center">
    <div>
      <Avatar>
        <AvatarImage src={Profile} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium">Công Lê</p>
      <p className="text-xs font-medium text-primary group-hover:text-primary/85">
        View profile
      </p>
    </div>
  </Link>
);

const ThemeToggleButton = () => {
  const [theme, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SideBar;
