import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <div className="w-full min-h-[10vh] border-t lg:items-center flex flex-col px-5 lg:px-10 py-5 gap-y-4 lg:flex-row lg:justify-between text-sm">
      <p>© 2024 Cong Le. All rights reserved.</p>
      <ul className="flex gap-4 flex-col lg:flex-row">
        <li className="duration-150 text-muted-foreground hover:text-primary hover:underline">
          <Link to="/">Terms of Service</Link>
        </li>
        <li className="duration-150 text-muted-foreground hover:text-primary hover:underline">
          <Link to="/">Privacy Policy</Link>
        </li>
        <li className="duration-150 text-muted-foreground hover:text-primary hover:underline">
          <Link to="mailto:congldqn888@gmail.com">Contact</Link>
        </li>
        <li className="duration-150 text-muted-foreground hover:text-primary hover:underline">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
