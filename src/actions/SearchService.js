import jquery from 'jquery';

const SearchService = {
  getSearchResult: function(searchTerm){
    return jquery.get('https://test.holmusk.com/food/search?q=' + searchTerm);
  }
};

export default SearchService;

