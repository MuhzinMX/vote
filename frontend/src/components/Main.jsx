import { useState } from 'react';
import AllParties from './AllParties';
import Cards from './Cards';
import PartiesGraph from './PartiesGraph';
import PartiesMap from './PartiesMap';

const Main = () => {
  const [graphType, setGraphType] = useState('histogram');

  const handleGraphType = (event) => {
    setGraphType(event.target.value); // Use the selected value from the event
  };

  console.log(graphType);

  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-1 flex-col w-full gap-3">
        <Cards />
        <div className="relative mb-10">
          <select
            className="absolute right-0 shadow-lg px-4 py-2 focus:border-none focus:outline-none"
            onChange={handleGraphType} // Attach onChange here
            value={graphType} // Set the current value of the select
          >
            <option value="histogram">Histogram</option>
            <option value="map">Map</option>
          </select>
        </div>

        {graphType === 'histogram' && <PartiesGraph />}
        {graphType === 'map' && <PartiesMap />}
      </div>
      {/* Charts and Listing */}
      <div className="w-[400px] h-[200px]">
        <AllParties />
      </div>
    </div>
  );
};

export default Main;
