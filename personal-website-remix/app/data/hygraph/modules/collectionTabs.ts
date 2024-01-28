export const MODULE_COLLECTION_TABS = `
        id
        title
        centerTitle
        limitItems
        itemsPerRow
        itemsPerRowInTablet
        itemsPerRowInMobile
        description
        projects(first: 30) {
          id
          title
          overview
          description
          demoLink
          githubLink
          slug
          image {
            url
            size
            width
            height
          }
        }
        stacks(first: 30) {
          id
          title
          description
   				image {
            url
            size
            width
            height
          }
        }
`;
