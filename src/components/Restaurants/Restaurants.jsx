import { Restaurant } from '@/components/Restaurant/Restaurant';
import { useState } from 'react';

let selectRestaurant

const Restaurants = ({ restaurants }) => {
  let [ activeRestaurantIndex, setActiveRestaurantIndex ] = useState(0);

  selectRestaurant = index => setActiveRestaurantIndex(index);

  return (
    <div>
      <div>
        {restaurants.map(({ name, id }, index) => (
          <button
            style={{ padding: '4px 8px', background: 'transparent', cursor: 'pointer', borderTop: `2px solid ${index === activeRestaurantIndex ? 'blue' : 'transparent'}`, borderRight: `2px solid ${index === activeRestaurantIndex ? 'blue' : 'transparent'}`, borderBottom: `2px solid ${index === activeRestaurantIndex ? 'transparent' : 'blue'}`, borderLeft: `2px solid ${index === activeRestaurantIndex ? 'blue' : 'transparent'}`, borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
            key={id}
            onClick={() => selectRestaurant(index)}
          >
            <span dangerouslySetInnerHTML={{__html: name}} />
          </button>
        ))}
      </div>
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};

export default Restaurants;
export { selectRestaurant };
