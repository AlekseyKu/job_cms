import type { Struct, Schema } from '@strapi/strapi';

export interface TableTableRow extends Struct.ComponentSchema {
  collectionName: 'components_table_table_row_s';
  info: {
    displayName: 'TableRow ';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.String;
    answer: Schema.Attribute.Text;
  };
}

export interface ComponentsLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_logos';
  info: {
    displayName: 'headerLogo';
    icon: '';
    description: '';
  };
  attributes: {
    headerLogo: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ComponentsHeaderButton extends Struct.ComponentSchema {
  collectionName: 'components_components_header_buttons';
  info: {
    displayName: 'headerButton';
  };
  attributes: {
    user: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ComponentsFooterLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_logos';
  info: {
    displayName: 'footerLogo';
    description: '';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'table.table-row': TableTableRow;
      'components.logo': ComponentsLogo;
      'components.link': ComponentsLink;
      'components.header-button': ComponentsHeaderButton;
      'components.footer-logo': ComponentsFooterLogo;
    }
  }
}
