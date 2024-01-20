export const PROJECTS_QUERY = `
    query ProjectsPage {
      projects(filters: {}, pagination: {}, sort: [], publicationState: LIVE) {
        data {
          id
          attributes {
            title
            overview
            description
            demoLink
            githubLink
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

export const PROJECT_QUERY = (slug: string) => {
  return `
    query ProjectPage {
      projects(filters: {slug: {eq: "${slug}"}}, pagination: {}, sort: [], publicationState: LIVE) {
        data {
          id
          attributes {
            title
            overview
            description
            demoLink
            githubLink
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
          }
        }
      }
    }
  `;
};
