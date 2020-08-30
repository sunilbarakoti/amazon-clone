import React from 'react';

import Product from '../Product/Product';
import ProductData from '../../Constants/products.json'
import './Home.css';


export default function Home() {
    return (
        <div className="home">
            <img
                className="home__bannerImage"
                alt=""
                src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_3000x1200_Final_en-CA_ENG_PVD5220._CB408290047_.jpg"
            />
            <div className="home__row">
                {
                    ProductData.map((val, err) => {
                        return (
                            <Product
                                id={val.id}
                                title={val.title}
                                price={val.price}
                                rating={val.rating}
                                image={val.image}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}
