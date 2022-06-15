import React, { useState, createContext } from "react";

export const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('ReactJS');

  const getResults = async (type) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'IN',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      },
    });

    const data = await res.json();

    if (type.includes('/news')) {
      setResults(data.entries);
    }
    else if (type.includes('/image')) {
      setResults(data.image_results);
    }
    else {
      setResults(data.results);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider value={{getResults, setSearchTerm, searchTerm, isLoading, results}}>
      {children}
    </ResultContext.Provider>
  )
};
