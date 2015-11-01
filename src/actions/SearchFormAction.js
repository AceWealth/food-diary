export const ON_SEARCH = "ON_SEARCH";
export const ON_SEARCH_TERM_CHANGES = "ON_SEARCH_TERM_CHANGES";

export function onSearch(searchTerm) {
  return {
    type: ON_SEARCH,
    searchTerm
  }
};

export function onSearchTermChanges(searchTerm) {
  return {
    type: ON_SEARCH_TERM_CHANGES,
    searchTerm
  }
};
