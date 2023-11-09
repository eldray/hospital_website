import React from 'react';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="mt-2">
      {searchResults.length > 0 ? (
        <div className="row">
          <div className="col-md-12">
            <h2>Search Results</h2>
            <ul>
              {searchResults.map(result => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12">
            <h2>No Results Found</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
