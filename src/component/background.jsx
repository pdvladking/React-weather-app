function Background({ condition }) {
  const backgrounds = {
    Clear: 'bg-gradient-to-r from yellow-400 to-orange-500',
    Clouds: 'bg-gradient-to-r from-gray-400 to-blue-500',
    Rain: 'bg-gradient-to-r from-blue-700 to-gray-600',
  };

  return <div className={`min-h-screen ${backgrounds[condition] || 'bg-blue-200'}`}></div>;
}
export default Background;
