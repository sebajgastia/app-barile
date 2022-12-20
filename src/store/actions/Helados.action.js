export const SELECTED_HELADOS = 'SELECTED_HELADOS'
export const FILTERED_HELADOS = 'FILTERED_HELADOS'

export const selectedHelados = (id) => ({
    type: SELECTED_HELADOS,
    heladosID:id,
});

export const filteredHelados = (id) => ({
    type: FILTERED_HELADOS,
    categoryID:id,
});