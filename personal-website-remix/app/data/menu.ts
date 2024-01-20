export const MENU_QUERY = `
  query Menu {
      menus(filters: {}, pagination: {}, sort: [], publicationState: LIVE) {
        data {
          id
          attributes {
            title
            link
            openNewTab
            position
            updatedAt
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
