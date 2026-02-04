import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 justify-center mb-6'>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-2/3'
      />
      <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>Search</button>
    </form>
  );
}

export default SearchBar;
