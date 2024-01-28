import { MODULE_COLLECTION_TABS } from "./modules/collectionTabs";

export const MODULES = `
  __typename
  ...on CollectionTab {
    ${MODULE_COLLECTION_TABS}
  }
`;
