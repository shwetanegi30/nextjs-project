import Head from 'next/head';
import { useEffect, useState } from 'react';

function Index() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../content.json');
      const data = await response.json();
      setContent(data);
    };

    fetchData();
  }, []);

  if (content.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Article Page</title>
      </Head>

      <h1>Article Page</h1>

      {/* Render the content */}
      
      {content.map((item, index) => (
        <div key={index}>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Index;
