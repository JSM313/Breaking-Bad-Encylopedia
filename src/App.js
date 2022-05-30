import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';
import './App.css';
import Header from './components/UI/Header';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      // console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const handleQuery = (searchedValue) => {
    setQuery(searchedValue);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={handleQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
