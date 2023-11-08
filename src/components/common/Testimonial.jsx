import { ImageLoader } from '@/components/common';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { displayMoney } from '@/helpers/utils';

const Testimonial = ({ product }) => {

  return (
    <div className='testimonials'>
      <div className="testimony" role="presentation">
         <p>I recently purchased a stunning diamond necklace from ChristaGold, and I couldn't be happier! The craftsmanship is impeccable, and the diamonds truly sparkle like no other. It's become my go-to accessory for special occasions. Thank you, ChristaGold, for creating such a masterpiece!</p>
          <h3><em>Emily Thompson</em></h3>

      </div>
      <div className="testimony" role="presentation">
         <p>I had the pleasure of working with ChristaGold's team to design a custom engagement ring for my now-fiancée. The entire process was seamless, and the result was beyond our wildest dreams. The attention to detail and the personal touch truly sets ChristaGold apart. Thank you for helping me create a moment we'll cherish forever.</p>
          <h3><em>Michael Rodriguez</em></h3>
      </div>
      <div className="testimony" role="presentation">
         <p>Every piece of jewelry I've purchased from ChristaGold has been nothing short of breathtaking. The combination of unique designs and top-notch quality is unbeatable. Whether it's a gift for a loved one or a treat for myself, I always turn to ChristaGold. Their jewelry has a special place in my heart.</p>
          <h3><em>Sarah Williams</em></h3>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  product: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    brand: PropType.string
  }).isRequired
};

export default Testimonial;
