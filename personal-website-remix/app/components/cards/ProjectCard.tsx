import { Link } from "@remix-run/react";
import { Button } from "../ui/button";
import { Project } from "~/lib/type";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="w-full">
        <img
          src={project.image?.url}
          alt="lambo"
          className="w-full rounded-t-lg aspect-video object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium line-clamp-2">{project.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground leading-tight mt-1">
          {project.overview}
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
        <Link to={`/projects/${project.slug}`}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-5">
            See Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
