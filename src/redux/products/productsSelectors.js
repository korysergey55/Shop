
export const getPhonesSelector = (state) => state.products.items.phones;
export const getLaptopsSelector = (state) => state.products.items.laptops;
export const getIpadsSelector = (state) => state.products.items.ipads;
export const getAppleWatchesSelector = (state) => state.products.items.appleWatches;
export const getAirPodsSelector = (state) => state.products.items.airPods;
export const getProductWithIdSelector = (state) => state.products.productWithId;
export const getLoaderSelector = (state) => state.products.loader;

export const getProductsFilterSelector = (state, category ="phones") =>
 state.products.items[category].filter((product) =>
  product.name.toLowerCase().includes(state.filter.filter.toLowerCase())
 );
