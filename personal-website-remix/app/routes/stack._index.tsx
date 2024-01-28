import { RichText } from "@graphcms/rich-text-react-renderer";
import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { StackList } from "~/components/stack";
import { PAGE_QUERY } from "~/data/hygraph/pages/page";
import { hygraph } from "~/lib/hygraph.server";
import { CollectionTab, PageData } from "~/lib/type";

export const meta: MetaFunction = () => {
  return [
    { title: "Stack | Cong Le" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  const res: PageData = await hygraph.request(PAGE_QUERY("stack"));
  const stackPage = res?.page;

  if (!stackPage) {
    throw new Response(null, { status: 404 });
  }

  return json({ stackPage });
}

export default function Stack() {
  const { stackPage } = useLoaderData<typeof loader>();

  const { heading, description, modules } = stackPage;

  const developmentModule = modules?.find(
    (module: CollectionTab) => module.title === "Development"
  );
  const productivityModule = modules?.find(
    (module: CollectionTab) => module.title === "Productivity"
  );

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-semibold  tracking-normal lg:text-5xl">
        {heading}
      </h1>
      <div className="leading-7 text-muted-foreground mt-4">
        <RichText content={description.raw} />
      </div>

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
