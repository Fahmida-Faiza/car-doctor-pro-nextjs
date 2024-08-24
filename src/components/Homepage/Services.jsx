import React from 'react';
import {services} from '../../lib/services'
import ServiceCard from './ServiceCard';
const Services = () => {
    return (
        <div className='text-black min-h-screen '>
            
            <h2 className="card-title mx-auto ">our services</h2>
            <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>

          <div className=' mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
                        {
                            services.map((service) => (
                                <ServiceCard service={service} key={service._id} />
                            ))
                        }


         </div>

                    
                </div>
        
    );
};

export default Services;