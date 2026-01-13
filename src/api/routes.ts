export const ROUTES = {
  categories: {
    add: "/categories/",
    list: "/categories/",
  },
  products: {
    add: "/products/",
    list: "/products/",
    export: "/products/export/",
    import: "/products/import/",
  },
  sales: {
    list: "/sales/",
    edit: (sale_id: number) => `/sales/${sale_id}/`,
    export: "/sales/export/",
  },
};
