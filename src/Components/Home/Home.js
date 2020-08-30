/* 
    - This is one of the main component and is reponsible for the home screen.
    - Botstrap carousel has been used in the banner to give the slideshow effect.
    - ProductData.json provides the data and those data are passed as prop to the child
      component Product to create a dyanmic component which holds the each product information
      and displays in the home page.
*/

import React from 'react';
import { Carousel } from 'react-bootstrap';
import Product from '../Product/Product';
import ProductData from '../../Constants/products.json'
import './Home.css';


export default function Home() {
    return (
        <div className="home">

            <Carousel indicators={false} prevLabel={false} nextLabel={false}>
                <Carousel.Item>
                    <img
                        className=" d-block w-100 home__bannerImage"
                        alt=""
                        src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_3000x1200_Final_en-CA_ENG_PVD5220._CB408290047_.jpg"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 home__bannerImage"
                        alt=""
                        src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/tahoe/gateway/CA_Ryans-World-Launch_FTU_GW-banners-Desk-3000x1200-photo-H1._CB410430289_.jpg"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 home__bannerImage"
                        alt=""
                        src="https://images-na.ssl-images-amazon.com/images/G/15/AMAZON_FASHION/2020/SUMMER/GW/XCM_Manual_1236044_1245894_CA_ca_shoes_summer_heros_3216306_3000x1200_fr_CA._CB409815697_.jpg"
                    />

                </Carousel.Item>
            </Carousel>
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
