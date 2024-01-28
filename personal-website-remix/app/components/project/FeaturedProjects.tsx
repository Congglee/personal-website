import { Link } from "@remix-run/react";
import { Project } from "~/lib/type";
import { Button } from "../ui/button";

export function FeaturedProjects({
  featuredProjects,
}: {
  featuredProjects: any;
}) {
  const { projects, title } = featuredProjects;
  return (
    <div className="mt-16">
      <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-base">
        {title}
      </label>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-3">
        {projects?.map((project: Project) => {
          return (
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
              key={project.id}
            >
              <img
                src={project.image?.url}
                alt="project thumbnail"
                className="rounded-t-lg lg:h-[300px] w-full object-cover"
              />
              <div className="items-center p-6 pt-0 flex gap-x-5 flex-col lg:flex-row justify-between mt-5">
                <div className="flex flex-col">
                  <h2 className="font-bold line-clamp-1">{project.title}</h2>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="w-full lg:w-auto"
                  prefetch="intent"
                >
                  <Button
                    variant="ghost"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full lg:w-fit mt-5 lg:mt-0"
                  >
                    View
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
