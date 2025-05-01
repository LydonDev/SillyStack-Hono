import { useEffect, useState } from 'react';

export default function App() {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const text = await res.text();
        setResponse(text);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">SillyStack</h1>
      <p className="text-2xl">The best way to learn new things</p>
      <p className="text-xl mt-4">{response}</p>
    </div>
  );
}
