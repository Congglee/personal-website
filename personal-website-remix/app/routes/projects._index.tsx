import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { School, Timer } from "lucide-react";
import { Button } from "~/components/ui/button";
import { PROJECTS_QUERY } from "~/data/project";
import { strapi } from "~/lib/strapi.server";
import { strapiImage } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Cong Le" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  const res: any = await strapi.request(PROJECTS_QUERY);

  const projects = res?.projects?.data;

  return json({ projects });
}

export default function Projects() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {projects?.map((project: any) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          key={project.id}
        >
          <div className="w-full relative">
            <img
              src={
                strapiImage(project?.attributes?.image?.data?.attributes)?.url
              }
              alt="lambo"
              className="w-full rounded-t-lg aspect-video object-cover"
            />
          </div>
          <div className="p-3">
            <h3 className="font-medium line-clamp-2">
              {project.attributes.title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground leading-tight mt-1">
              {project.attributes.overview}
            </p>
            {/* <div className="mt-2 flex items-center gap-x-5">
            <div className="flex items-center gap-x-2">
              <Timer className="w-6 h-6 p-1 rounded-md text-primary bg-primary/20" />
              <span className="text-sm text-muted-foreground leading-tight">
                2.13h
              </span>
            </div>

            <div className="flex items-center gap-x-2">
              <School className="w-6 h-6 p-1 rounded-md text-primary bg-primary/20" />
              <span className="text-sm text-muted-foreground leading-tight">
                Entry
              </span>
            </div>
            </div> */}
            <Link to={`/projects/${project.attributes.slug}`}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-5">
                See Now
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
