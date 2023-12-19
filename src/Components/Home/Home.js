import React from 'react'
import Intro from './Intro';
import Whyus from './Whyus';
import Coversection from './Coversection';
// import Gallery from './Gallery';
import coverImage1 from './Images/cover-image-1.jpg';
import coverImage2 from './Images/cover-image-2.jpg';
import coverImage3 from './Images/cover-image-3.jpg';
import BlogPost from './BlogPost';

export default function Home() {
     const coverSectionItems = [
          {
               backgroundColor:'bg-secondary-subtle',
               imageOrder: 'order-sm-1',
               image: coverImage1,
               descriptionOrder: 'order-sm-2',
               heading: ['Plan Your Adventure', <br/>, 'with us'],
               description: `Embark on a journey of discovery with our unparalleled traveling site! 
               Immerse yourself in a world of wanderlust as we curate unforgettable experiences, 
               from hidden gems to iconic landmarks. Navigate through a treasure trove of destination guides, 
               travel tips, and captivating narratives that will fuel your adventurous spirit. 
               Whether you crave the thrill of exotic landscapes, cultural escapades, 
               or simply the joy of a relaxing getaway, our traveling site is your compass 
               to a world full of possibilities. Unpack inspiration, explore the extraordinary, 
               and let your wanderlust take flight!`,
               buttonTitle: 'Plan your Journey'
          },
          {
               backgroundColor:'bg-transparent',
               imageOrder: 'order-sm-2',
               image: coverImage2,
               descriptionOrder: 'order-sm-1',
               heading: ['Explore the world', <br/>, 'through Activities'],
               description: `Dive into a world of adrenaline-fueled excitement with our collection of thrilling 
               activities! Unleash your inner daredevil as we guide you through heart-pounding 
               adventures that redefine the meaning of exhilaration. From soaring heights to 
               uncharted depths, immerse yourself in an array of pulse-quickening experiences. 
               Whether it's defying gravity with skydiving, conquering rapids on a wild river 
               rafting expedition, or exploring mystical caves, our thrilling activities 
               guarantee an unforgettable journey for the fearless explorer in you. 
               Get ready to elevate your travel experience and make every moment 
               an adventure to remember!`,
               buttonTitle: 'Explore the Adventures'
          },
          {
               backgroundColor:'bg-secondary-subtle',
               imageOrder: 'order-sm-1',
               image: coverImage3,
               descriptionOrder: 'order-sm-2',
               heading: ['Get together and', <br/>, 'make Memories'],
               description: `Create timeless moments that linger in the heart with our travel 
               experiences designed for memory-making. Immerse yourself in a symphony 
               of unforgettable adventures, captivating landscapes, and cultural 
               treasures. From sun-kissed beaches to ancient wonders, every destination 
               becomes a canvas for crafting cherished memories. Whether it's the laughter 
               shared with newfound friends, the awe-inspiring views that take your breath 
               away, or the flavors that linger on your palate, our traveling site 
               is your gateway to a tapestry of moments waiting to be woven into the 
               story of a lifetime. Pack your bags and let's turn your 
               journey into a masterpiece of memories!`,
               buttonTitle: 'Get started'
          }
     ]
     return (
     <>
          <Intro/>
          <Whyus/>
          {coverSectionItems.map((element)=> {
               return <Coversection
                    backgroundColor = {element.backgroundColor}
                    imageOrder = {element.imageOrder}
                    image = {element.image}
                    descriptionOrder = {element.descriptionOrder}
                    heading = {element.heading}
                    description = {element.description}
                    buttonTitle = {element.buttonTitle}
               />
          })}
          <BlogPost/>
          {/* <Gallery/> */}
     </>
     )
}
