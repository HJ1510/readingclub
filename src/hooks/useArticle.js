import { useState, useEffect } from 'react';

export function useArticle(loadData) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!loadData) return;
      const data = await loadData();
      setData(data);
    }
    fetchData();
  }, [loadData]);

  return data;
}
