import * as React from 'react';

const ControlPanel = () => {
  return (
    <div className='absolute top-0 right-0 max-w-xs bg-white shadow-md px-5 py-3 text-gray-500'>
      <h3>Top 50 Most Populated US Cities</h3>
      <p className='py-3 text-xs'>
        Map showing top 50 most populated cities of the United States. Click on
        a marker to learn more.
      </p>
      <div className='text-xs'>
        Data source:{' '}
        <a href='https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population'>
          Wikipedia
        </a>
      </div>
    </div>
  );
};
const MemoizedControlPanel = React.memo(ControlPanel);
export default MemoizedControlPanel;
