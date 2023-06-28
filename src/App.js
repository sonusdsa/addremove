import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://185.252.234.162:8000/api_v1/store/public/getServiceListByStoreId?storeId=1')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} 
     
    </div>
  );
}

export default App;