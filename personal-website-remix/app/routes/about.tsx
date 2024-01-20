import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Link as LinkIcon } from "lucide-react";
import Markdown from "markdown-to-jsx";
import { Facebook, Github } from "~/components/Icon";
import { PAGE_QUERY } from "~/data/pages/page";
import { strapi } from "~/lib/strapi.server";
import { strapiImage } from "~/lib/utils";
import Profile from "../../public/profileimg.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Cong Le" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  const res: any = await strapi.request(PAGE_QUERY("about"));

  const page = res?.pages?.data[0]?.attributes;

  if (!page) {
    throw new Response(null, { status: 404 });
  }

  return json({ page });
}

export default function About() {
  const { page } = useLoaderData<typeof loader>();
  const { heading, description, modules, image } = page;
  const profileImage = strapiImage(image?.data?.attributes);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-x-10">
      <div className="w-full lg:w-2/3">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-semibold tracking-normal lg:text-5xl text-center lg:text-left mt-6 lg:mt-0">
          {heading}
        </h1>
        <p className="prose prose-neutral dark:prose-invert mt-3">
          <Markdown>{description}</Markdown>
        </p>
        <div className="flex flex-col sm:flex-row gap-y-5 lg:gap-y-0 gap-x-8 mt-5">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm lg:w-1/2 w-full">
            <div className="space-y-1.5 p-6 flex flex-row relative">
              <div className="relative">
                <img
                  src={Profile}
                  alt="My Profile"
                  className="w-14 h-14 rounded-lg object-cover object-top"
                />
                <Facebook />
              </div>
              <div className="ml-4">
                <h2 className="scroll-m-20 text-lg font-medium tracking-tight transition-colors first:mt-0">
                  @Conggglee
                </h2>
                <p className="text-sm font-medium text-muted-foreground truncate">
                  35 Followers
                </p>
              </div>
              <Link
                to="https://www.facebook.com/profile.php?id=100032073532268"
                target="_blank"
                className="absolute top-2 right-2 hover:text-primary"
              >
                <LinkIcon className="lucide lucide-link w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm lg:w-1/2 w-full">
            <div className="space-y-1.5 p-6 flex flex-row relative">
              <div className="relative">
                <img
                  src={Profile}
                  alt="My Profile"
                  className="w-14 h-14 rounded-lg object-cover object-top"
                />
                <Github className="absolute -bottom-2 -right-2 bg-orange-500 p-1.5 w-7 rounded-full text-white h-7" />
              </div>
              <div className="ml-4">
                <h2 className="scroll-m-20 text-lg font-medium tracking-tight transition-colors first:mt-0">
                  @Conggglee
                </h2>
                <p className="text-sm font-medium text-muted-foreground truncate">
                  2 Followers
                </p>
              </div>
              <Link
                to="https://github.com/Congglee"
                target="_blank"
                className="absolute top-2 right-2 hover:text-primary"
              >
                <LinkIcon className="lucide lucide-link w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src={profileImage?.url}
        alt="Me"
        className="rounded-lg w-full lg:w-1/3 h-fit"
      />
    </div>
  );
}
