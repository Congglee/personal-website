import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
  json,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { StackList } from "~/components/stack";
import { PAGE_QUERY } from "~/data/pages/page";
import { strapi } from "~/lib/strapi.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Stack | Cong Le" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  const res: any = await strapi.request(PAGE_QUERY("stack"), {
    limit: 50,
  });

  const page = res?.pages?.data[0]?.attributes;

  if (!page) {
    throw new Response(null, { status: 404 });
  }

  return json({ page });
}

export default function Stack() {
  const { page } = useLoaderData<typeof loader>();

  const { heading, description, modules } = page;

  const developmentModule = modules?.find(
    (module: any) => module.title === "Development"
  );
  const productivityModule = modules?.find(
    (module: any) => module.title === "Productivity"
  );

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-semibold  tracking-normal lg:text-5xl">
        {heading}
      </h1>
      <p className="leading-7 text-muted-foreground mt-4">{description}</p>

      {developmentModule && (
        <>
          <StackList stackList={developmentModule} stackPage={true} />
        </>
      )}

      {productivityModule && (
        <StackList stackList={productivityModule} stackPage={true} />
      )}
    </div>
  );
}
