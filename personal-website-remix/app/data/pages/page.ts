import { MODULES } from "../modules";

export const PAGE_QUERY = (slug: string) => {
  return `
    query Page {
      pages(filters: {slug: {eq: "${slug}"}}, pagination: {}, sort: [], publicationState: LIVE) {
        data {
          id
          attributes {
            title
            description
            heading
            slug
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
        meta {
          pagination {
            page
            pageCount
            pageSize
            total
          }
        }
      }
    }
  `;
};
