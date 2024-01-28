import { Stack } from "~/lib/type";

export function StackCard({ stack }: { stack: Stack }) {
  return (
    <div className="flex items-center gap-x-4 p-3 hover:bg-primary/10 rounded-lg">
      <img src={stack.image?.url} alt="" className="w-11 h-11 rounded-md" />
      <div>
        <h3 className="font-semibold">{stack.title}</h3>
        <p className="text-sm dark:text-[#858585] text-[#717171]">
          {stack.description}
        </p>
      </div>
    </div>
  );
}
