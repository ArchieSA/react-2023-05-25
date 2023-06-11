'use client';

/* eslint-disable react/jsx-key */
import { Restaurant } from '@/components/Restaurant/Restaurant';
import { SearchForm } from '@/SearchForm/SearchForm';
import { useDebounce } from '@/utils/hooks';
import { filteredByName } from '@/utils/utils';
import { useEffect, useState } from 'react';

export const Restaurants = ({ restaurants }) => {
  let [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([...restaurants]);

  const onChange = evt => {
    setSearchQuery(evt.target.value);
  };

  const debounce = useDebounce(searchQuery);

  useEffect(() => {
    if (debounce) {
      const filtered = filteredByName(restaurants, searchQuery);
      setResults([...filtered]);
    }
  }, [activeRestaurantIndex, debounce, restaurants, searchQuery]);

  return (
    <div>
      <div>
        <SearchForm
          handler={onChange}
          value={searchQuery}
          labelText={'Введите название ресторана:'}
        />
        {results.map(({ name }, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveRestaurantIndex(index);
            }}
          >
            {name}
          </button>
        ))}
        <Restaurant restaurant={results[activeRestaurantIndex]} />
      </div>
    </div>
  );
};
