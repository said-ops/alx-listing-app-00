// pages/index.tsx

import { PROPERTYLISTINGSAMPLE } from '../constants';
import Layout from '../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Property Listings</h2>

        {/* Implement your filters here */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search properties"
            className="border p-2 w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <div key={property.name} className="border p-4 rounded-lg">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{property.name}</h3>
              <p className="text-gray-700">{property.address.city}</p>
              <p className="text-gray-500">{property.category.join(', ')}</p>
              <p className="font-bold">${property.price} / night</p>
              <p className="text-gray-400">{property.rating} ⭐</p>
              {property.discount && (
                <p className="text-red-500">Discount: {property.discount}%</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
