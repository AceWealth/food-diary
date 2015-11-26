import SearchService from './SearchService';

export const ON_SEARCH_TERM_CHANGES = "ON_SEARCH_TERM_CHANGES";
export const ON_SEARCH = "ON_SEARCH";
export const ON_SEARCH_COMPLETED = "ON_SEARCH_COMPLETED";
export const ON_SEARCH_FAILED = "ON_SEARCH_FAILED";

export function onSearch(searchTerm) {
  return (dispatch) => {
    return SearchService.getSearchResult(searchTerm)
      .then((searchResults) => dispatch(onSearchCompleted(searchResults)),
            () => dispatch(onSearchFailed()));
  };
};

export function onSearchCompleted(searchResults) {
  return {
    type: ON_SEARCH_COMPLETED,
    searchResults
  }
};

export function onSearchFailed() {
  return {
    type: ON_SEARCH_FAILED
  }
};

export function onSearchTermChanges(searchTerm) {
  return {
    type: ON_SEARCH_TERM_CHANGES,
    searchTerm
  }
};

