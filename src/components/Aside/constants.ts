//рутовый объект
export const DOCS_ROOT_ITEM = {
  type: 'root',
  key: 'query',
  value: 'Query',
};

export type IDocItem = typeof DOCS_ROOT_ITEM;

// если тип = рутовый элемент
export const isRootItem = (item: IDocItem): boolean =>
  item.type === DOCS_ROOT_ITEM.type;
