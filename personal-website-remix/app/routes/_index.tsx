import { RichText } from "@graphcms/rich-text-react-renderer";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, defer, useLoaderData } from "@remix-run/react";
import { PersonStanding, Projector } from "lucide-react";
import { FeaturedProjects } from "~/components/project";
import { StackList } from "~/components/stack";
import { Button } from "~/components/ui/button";
import { HOME_PAGE } from "~/data/hygraph/pages/home";
import { hygraph } from "~/lib/hygraph.server";
import { PageData } from "~/lib/type";

export const meta: MetaFunction = () => {
  return [
    { title: "Cong Le" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ params, context }: LoaderFunctionArgs) {
  const res: PageData = await hygraph.request(HOME_PAGE);
  const homeData = res?.page;

  return defer({ homeData });
}

export default function Index() {
  const { homeData } = useLoaderData<typeof loader>();
  const featuredProjectsModule = homeData.modules?.find(
    (module) => module.title === "Featured Project"
  );
  const stacksModule = homeData.modules?.find(
    (module) => module.title === "My Stack"
  );

  if (!homeData) {
    return (
      <p className="text-center py-20">
        Homepage content are empty. Please add data from Strapi CMS
      </p>
    );
  }

  return (
    <>
      <div className="">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-normal lg:text-5xl">
          {homeData.heading}
        </h1>
        <div className="leading-7 text-muted-foreground mt-4">
          <RichText content={homeData.description.raw} />
        </div>

        <div className="gap-x-5 flex mt-5">
          <Link to="/about" prefetch="intent">
            <Button
              variant="ghost"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              <PersonStanding className="mr-2 h-4 w-4" />
              About Me
            </Button>
          </Link>

          <Link to="/projects" prefetch="intent">
            <Button
              variant="ghost"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
            >
              <Projector className="mr-2 h-4 w-4" />
              Projects
            </Button>
          </Link>
        </div>
      </div>

      {featuredProjectsModule && (
        <FeaturedProjects featuredProjects={featuredProjectsModule} />
      )}

      {stacksModule && <StackList stackList={stacksModule} />}
    </>
  );
}
