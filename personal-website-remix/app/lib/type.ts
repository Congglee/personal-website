export type Menu = {
  id: string;
  title: string;
  link?: string;
  openNewTab?: boolean;
  position?: number;
};

export type Menus = {
  menus: Menu[];
};

export type Image = {
  url: string;
  size: number;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  overview: string;
  description: string;
  demoLink?: string;
  githubLink?: string;
  slug?: string;
  image?: Image;
};

export type ProjectList = {
  projects: Project[];
};

export type Stack = {
  id: string;
  title: string;
  description?: string;
  image?: Image;
};

export type StackList = {
  stacks: Stack[];
};

export type CollectionTab = {
  id: string;
  title: string;
  centerTitle: boolean;
  limitItems?: number;
  itemsPerRow?: number;
  itemsPerRowInTablet?: number;
  itemsPerRowInMobile?: number;
  description?: string;
  projects?: Project[];
  stacks?: Stack[];
};

export type PageDescription = {
  raw: {
    children: {
      type: string;
      children: {
        text: string;
      }[];
    }[];
  };
};

export type Page = {
  id: string;
  title: string;
  description?: any;
  heading?: string;
  slug: string;
  image?: Image;
  modules?: CollectionTab[];
};

export type PageData = {
  page: Page;
};
