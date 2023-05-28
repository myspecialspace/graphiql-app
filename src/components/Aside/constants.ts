export const DOCS_ROOT_ITEM = {
  type: 'root',
  key: 'query',
  value: 'Query',
};

export type IDocItem = typeof DOCS_ROOT_ITEM;

export const isRootItem = (item: IDocItem): boolean =>
  item.type === DOCS_ROOT_ITEM.type;
