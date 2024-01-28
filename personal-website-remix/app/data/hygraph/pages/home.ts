import { MODULES } from "../modules";

export const HOME_PAGE = `
  query HomePage {
    page(where: {slug: "home"}) {
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
}
`;
