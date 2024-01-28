import { MODULES } from "../modules";

export const PAGE_QUERY = (slug: string) => {
  return `
  query Page {
    page(where: {slug: "${slug}"}) {
      id
      title
      description {
        raw
      }
      heading
      slug
      image {
        url
        size
        width
        height
      }
      modules {
        ${MODULES}
      }
    }
  }`;
};
