export const MODULE_COLLECTION_TABS = `
    id
    title
    centerTitle
    limitItems
    itemsPerRow
    itemsPerRowInTablet
    itemsPerRowInMobile
    description
    projects (
      filters: {}
      pagination: {limit: 30}
      sort: []
      publicationState: LIVE
    ) {
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
    stacks (
      filters: {}
      pagination: {limit: $limit}
      sort: []
      publicationState: LIVE
    ) {
      data {
        id
        attributes {
          title
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
          description
        }
      }
    }
`;
