

export const cartItemSelector = (state) => state.cart.items;
export const cartLoaderSelector = (state) => state.cart.loader;
export const cartErrorSelector = (state) => state.cart.error;

export const cartItemLengthSelector = (state) => state.cart.items?.length;