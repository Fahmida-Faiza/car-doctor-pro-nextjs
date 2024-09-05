import React from 'react';

import ServiceCard from './ServiceCard';
// api thikh e 
import { getServices } from '../../../services/getServices';








const Services = async () => {

// load dataset
const {services} = await getServices()
// const data = await getServices()
// console.log(data.services)



    // ///
    return (
        <div className='text-black min-h-screen '>
            
            <h2 className="card-title mx-auto ">our services</h2>
            <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>

          <div className=' mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
                        {
                         services?.length > 0 &&   services?.map((service) => (
                                <ServiceCard service={service} key={service._id} />
                            ))
                        }


         </div>

                    
                </div>
        
    );
};

export default Services;