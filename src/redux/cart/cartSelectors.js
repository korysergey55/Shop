

export const cartItemSelector = (state) => state.cart.items;
export const modalSelector = (state) => state.cart.isModalOpen;
export const cartTotalPricelSelector = (state) => state.cart.total;
export const cartOrderSelector = (state) => state.cart.order;
export const cartLoaderSelector = (state) => state.cart.loader;
export const cartErrorSelector = (state) => state.cart.error;


export const cartItemLengthSelector = (state) => state.cart.items?.length;