import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import banner from '@/sanity_ecommerce/schemaTypes/banner';

const Home = ({products, bannerData }) => {
  return (
    <div>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller Product</h2>
        <p>Speakers There are many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return{
    props: {products, bannerData }
  }
} 
  

export default Home;