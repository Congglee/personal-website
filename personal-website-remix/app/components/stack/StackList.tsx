import { Link } from "@remix-run/react";
import { strapiImage } from "~/lib/utils";
import { Button } from "../ui/button";
import clsx from "clsx";

export function StackList({
  stackList,
  stackPage,
}: {
  stackList: any;
  stackPage?: boolean;
}) {
  const { title, stacks, description } = stackList;

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full mt-10">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div
        className={clsx(
          "p-6 grid grid-cols-1 pt-0 gap-y-10 gap-x-5 lg:grid-cols-3",
          { "md:grid-cols-2": stackPage }
        )}
      >
        {stacks?.data?.map((stack: any) => (
          <div
            className="flex items-center gap-x-4 p-3 hover:bg-primary/10 rounded-lg"
            key={stack.id}
          >
            <img
              src={strapiImage(stack?.attributes?.image?.data?.attributes)?.url}
              alt=""
              className="w-11 h-11 rounded-md"
            />
            <div>
              <h3 className="font-semibold">{stack.attributes.title}</h3>
              <p className="text-sm dark:text-[#858585] text-[#717171]">
                {stack.attributes.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!stackPage && (
        <div className="flex items-center p-6 pt-0 w-full">
          <Link to="/stack" className="w-full" prefetch="intent">
            <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
              View More
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
