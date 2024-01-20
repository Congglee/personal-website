import type { Schema, Attribute } from '@strapi/strapi';

export interface ModulesCollectionTabs extends Schema.Component {
  collectionName: 'components_modules_collection_tabs';
  info: {
    displayName: 'CollectionTabs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    centerTitle: Attribute.Boolean;
    limitItems: Attribute.BigInteger;
    itemsPerRow: Attribute.BigInteger;
    itemsPerRowInTablet: Attribute.BigInteger;
    itemsPerRowInMobile: Attribute.BigInteger;
    stacks: Attribute.Relation<
      'modules.collection-tabs',
      'oneToMany',
      'api::stack.stack'
    >;
    projects: Attribute.Relation<
      'modules.collection-tabs',
      'oneToMany',
      'api::project.project'
    >;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'modules.collection-tabs': ModulesCollectionTabs;
    }
  }
}
