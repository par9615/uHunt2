export const SEARCH_USER = 'SEARCH_USER';

export const searchUsername = (name) => {
    return {
        type: SEARCH_USER,
        name
    }
}