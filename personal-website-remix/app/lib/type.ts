export type Menu = {
  id: string;
  attributes: {
    title: string;
    link: string;
    openNewTab: boolean;
    position: number;
    updatedAt: string;
  };
};

export type Menus = {
  data: Menu[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};

export type Project = {
  id: string;
  attributes: {
    title: string;
    overview: string;
    description: string;
    demoLink: string;
    githubLink: string;
    slug: string;
    image: {
      data: {
        id: string;
        attributes: {
          name: string;
          alternativeText: null;
          width: number;
          height: number;
          url: string;
        };
      };
    };
  };
};

export type ProjectList = {
  data: Project[];
};

export type Stack = {
  id: string;
  attributes: {
    title: string;
    image: {
      data: {
        id: string;
        attributes: {
          name: string;
          alternativeText: string | null;
          width: number;
          height: number;
          url: string;
        };
      };
    };
    description: string;
  };
};

export type StackList = {
  data: Stack[];
};

export type Module = {
  __typename: string;
  id: string;
  title: string;
  centerTitle: boolean;
  limitItems: number;
  itemsPerRow: number;
  itemsPerRowInTablet: number;
  itemsPerRowInMobile: number;
  projects: ProjectList[];
  stacks: StackList[];
};

const homePageData = {
  data: {
    homePage: {
      data: {
        id: "1",
        attributes: {
          title:
            "Embrace the elegance of simplicity in code, for in its clarity and efficiency, technology finds its true brilliance.",
          description:
            "In code, simplicity reigns supreme. Embrace elegance for clarity and efficiency, as true brilliance in technology emerges from the art of clean and straightforward solutions.",
          image: {
            data: null,
          },
          modules: [
            {
              __typename: "ComponentModulesCollectionTabs",
              id: "1",
              title: "Featured Project",
              centerTitle: false,
              limitItems: 2,
              itemsPerRow: 2,
              itemsPerRowInTablet: 1,
              itemsPerRowInMobile: 1,
              projects: {
                data: [
                  {
                    id: "1",
                    attributes: {
                      title:
                        "ReactJS E-Commerce TechShop Website with Stripe and TailwindCSS",
                      overview:
                        "A fullstack open source ecommerce application made with MongoDB, Express, React & Nodejs (MERN)",
                      description:
                        "A fullstack open source ecommerce application made with MongoDB, Express, React & Nodejs (MERN)",
                      demoLink: "ecommerce-techshop.vercel.app",
                      githubLink:
                        "https://github.com/Congglee/eCommerce-TechShop",
                      slug: "react-js-e-commerce-tech-shop-website-with-stripe-and-tailwind-css",
                      image: {
                        data: {
                          id: "1",
                          attributes: {
                            name: "Screenshot 2024-01-17 094044.png",
                            alternativeText: null,
                            width: 1896,
                            height: 918,
                            url: "/uploads/Screenshot_2024_01_17_094044_6dcca177fc.png",
                          },
                        },
                      },
                    },
                  },
                ],
              },
              stacks: {
                data: [],
              },
            },
            {
              __typename: "ComponentModulesCollectionTabs",
              id: "2",
              title: "My Stack",
              centerTitle: false,
              limitItems: 6,
              itemsPerRow: 3,
              itemsPerRowInTablet: 1,
              itemsPerRowInMobile: 1,
              projects: {
                data: [],
              },
              stacks: {
                data: [
                  {
                    id: "1",
                    attributes: {
                      title: "ReactJS",
                      image: {
                        data: {
                          id: "2",
                          attributes: {
                            name: "React-icon.svg.png",
                            alternativeText: null,
                            width: 2300,
                            height: 2000,
                            url: "/uploads/React_icon_svg_3f6d90966b.png",
                          },
                        },
                      },
                      description: "Library",
                    },
                  },
                  {
                    id: "5",
                    attributes: {
                      title: "TailwindCSS",
                      image: {
                        data: {
                          id: "11",
                          attributes: {
                            name: "Tailwind.webp",
                            alternativeText: null,
                            width: 146,
                            height: 146,
                            url: "/uploads/Tailwind_675fe16f0e.webp",
                          },
                        },
                      },
                      description: "Framework",
                    },
                  },
                  {
                    id: "6",
                    attributes: {
                      title: "Redux",
                      image: {
                        data: {
                          id: "7",
                          attributes: {
                            name: "redux.png",
                            alternativeText: null,
                            width: 512,
                            height: 512,
                            url: "/uploads/redux_87e4812b10.png",
                          },
                        },
                      },
                      description: "Library",
                    },
                  },
                  {
                    id: "7",
                    attributes: {
                      title: "TypeScript",
                      image: {
                        data: {
                          id: "8",
                          attributes: {
                            name: "typescript.png",
                            alternativeText: null,
                            width: 2048,
                            height: 2048,
                            url: "/uploads/typescript_2680add0d8.png",
                          },
                        },
                      },
                      description: "Programming Language",
                    },
                  },
                  {
                    id: "9",
                    attributes: {
                      title: "NextJS",
                      image: {
                        data: {
                          id: "10",
                          attributes: {
                            name: "Nextjs.webp",
                            alternativeText: null,
                            width: 144,
                            height: 144,
                            url: "/uploads/Nextjs_ea12dae3f6.webp",
                          },
                        },
                      },
                      description: "Framework",
                    },
                  },
                  {
                    id: "8",
                    attributes: {
                      title: "Remix",
                      image: {
                        data: {
                          id: "9",
                          attributes: {
                            name: "Remix.webp",
                            alternativeText: null,
                            width: 144,
                            height: 144,
                            url: "/uploads/Remix_280a7673a0.webp",
                          },
                        },
                      },
                      description: "Framework",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};

export type Image = {
  data: {
    id: string;
    attributes: {
      name: string;
      alternativeText: null;
      width: number;
      height: number;
      url: string;
    };
  };
};

export type HomePage = {
  title: string;
  description: string;
  image: Image;
  modules?: Module[];
};
