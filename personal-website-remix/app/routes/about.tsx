import { RichText } from "@graphcms/rich-text-react-renderer";
import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Link as LinkIcon } from "lucide-react";
import { Facebook, Github } from "~/components/Icon";
import { PAGE_QUERY } from "~/data/hygraph/pages/page";
import { hygraph } from "~/lib/hygraph.server";
import { PageData } from "~/lib/type";
import Profile from "../../public/profileimg.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Cong Le" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  const res: PageData = await hygraph.request(PAGE_QUERY("about"));
  const aboutPage = res?.page;

  if (!aboutPage) {
    throw new Response(null, { status: 404 });
  }

  return json({ aboutPage });
}

export default function About() {
  const { aboutPage } = useLoaderData<typeof loader>();
  const { heading, description, image } = aboutPage;

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-x-10">
      <div className="w-full lg:w-2/3">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-semibold tracking-normal lg:text-5xl text-center lg:text-left mt-6 lg:mt-0">
          {heading}
        </h1>
        <div className="prose prose-neutral dark:prose-invert mt-3">
          <RichText
            content={description.raw}
            renderers={{
              code_block: ({ children }) => {
                return (
                  <pre className="line-numbers language-javascript">
                    <code>{children}</code>
                  </pre>
                );
              },
              img: ({ src, altText, height, width }) => (
                <img
                  src={src}
                  alt={altText}
                  width={width}
                  height={height}
                  className="rounded-lg"
                />
              ),
              a: ({ children, openInNewTab, href, rel, ...rest }) => (
                <a
                  href={href}
                  target={openInNewTab ? "_blank" : "_self"}
                  {...rest}
                  className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
                >
                  {children}
                </a>
              ),
            }}
          />
        </div>
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
        src={image?.url}
        alt="Me"
        className="rounded-lg w-full lg:w-1/3 h-fit"
      />
    </div>
  );
}
