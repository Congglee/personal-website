import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProjectCard } from "~/components/cards";
import { PROJECTS_QUERY } from "~/data/hygraph/project";
import { hygraph } from "~/lib/hygraph.server";
import { Project } from "~/lib/type";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Cong Le" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  const res: any = await hygraph.request(PROJECTS_QUERY);
  const projects: Project[] = res.projects;
  return json({ projects });
}

export default function Projects() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
