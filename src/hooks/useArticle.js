import { useState, useEffect } from 'react';

export function useArticle(loadData) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!loadData) return;
      const data = await loadData(1);
      setData(data);
    }
    fetchData();
  }, [loadData]);

  const handlePageChange = async (page) => {
    if (!loadData) return;
    const data = await loadData(page);
    setData(data);
  };

  return [data, handlePageChange];
}
