import React from 'react';
import FilterPanel from './FilterPanel';
import SearchResults from './SearchResults';
import usePropertySearch from './usePropertySearch';

const Body = () => {
  const { 
    properties,
    filters,
    loading,
    error,
    currentPage,
    totalPages,
    handleFilterChange,
    handlePageChange
  } = usePropertySearch();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <h1 id="Body_3" className="text-3xl font-bold text-gray-900 mb-8">Find Your Perfect Property</h1>
        
        <div id="Body_4" className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div id="Body_5" className="lg:col-span-1">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          <div id="Body_6" className="lg:col-span-3">
            {error && (
              <div id="Body_7" className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
                {error}
              </div>
            )}
            
            {loading ? (
              <div id="Body_8" className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <SearchResults 
                properties={properties}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;