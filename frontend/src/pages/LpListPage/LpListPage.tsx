import { useEffect, useState } from 'react';

import { API_PATH } from '@constants/path';

const LpListPage = () => {
  const [lpList, setLpList] = useState<
    {
      id: number;
      name: string;
      description: string;
    }[]
  >([]);

  useEffect(() => {
    const getLpList = async () => {
      const response = await fetch(API_PATH.lp.list);
      const data = await response.json();
      setLpList(data.lps);
    };

    getLpList();
  }, []);
  return (
    <div>
      <h1>LP List</h1>
      <ul>
        {lpList.map((lp) => (
          <li key={lp.id}>
            <h2>{lp.name}</h2>
            <p>{lp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LpListPage;
