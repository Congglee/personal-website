import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Globe2 } from "lucide-react";
import invariant from "tiny-invariant";
import { Github } from "~/components/Icon";
import { Button } from "~/components/ui/button";
import { PROJECT_QUERY } from "~/data/hygraph/project";
import { hygraph } from "~/lib/hygraph.server";
import { Project as ProjectType } from "~/lib/type";

export const meta: MetaFunction = () => {
  return [
    { title: "Cong Le" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ params, request, context }: LoaderFunctionArgs) {
  const { projectHandle } = params;

  invariant(projectHandle, "Missing projectHandle param");

  const res: any = await hygraph.request(PROJECT_QUERY(projectHandle));
  const project: ProjectType = res?.project;

  if (!project) {
    throw new Response(null, { status: 404 });
  }

  return json({ project });
}

export default function Project() {
  const { project } = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto relative flex flex-col items-center lg:w-2/3">
      <img
        src={project.image?.url}
        alt="Project Image"
        className="w-full lg:h-[400px] h-[250px] rounded-lg"
      />
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8 w-full">
        <div className="p-6 pt-3">
          <h1 className="scroll-m-20 text-2xl font-semibold lg:text-4xl lg:font-extrabold tracking-tight">
            {project.title}
          </h1>
          <p className="pt-1 prose prose-base dark:prose-invert">
            {project.description}
          </p>
        </div>
        <div className="items-center p-6 pt-0 gap-x-7 flex flex-col md:flex-row gap-y-5">
          <Link
            to={project.githubLink as string}
            target="_blank"
            className="w-full"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
              <Github className="mr-2 w-4 h-4" />
              Github Repository
            </Button>
          </Link>
          <Link
            to={project.demoLink as string}
            target="_blank"
            className="w-full"
          >
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full">
              <Globe2 className="mr-2 w-4 h-4" />
              Demo Website
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
