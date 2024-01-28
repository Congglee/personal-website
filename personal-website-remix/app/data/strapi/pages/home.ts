import { MODULES } from "../modules";

export const HOME_PAGE = `
  query HomePage($limit: Int) {
  homePage(publicationState: LIVE) {
    data {
      id
      attributes {
        title
        description
        image {
          data {
            id
            attributes {
              name
              alternativeText
              width
              height
              url
            }
          }
        }
        modules {
          ${MODULES}
        }
      }
    }
  }
}
`;
