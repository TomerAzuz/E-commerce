import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  const imageUrls = [
    "https://ee.co.uk/medias/iphone-15-pro-max-natural-titanium-desktop-detail-1-WebP-Format-488?context=bWFzdGVyfHJvb3R8Mjc4NTh8aW1hZ2Uvd2VicHxzeXMtbWFzdGVyL3Jvb3QvaDQ1L2gyYi8xMDA3MzgwNDcwMTcyNi9pcGhvbmUtMTUtcHJvLW1heC1uYXR1cmFsLXRpdGFuaXVtLWRlc2t0b3AtZGV0YWlsLTFfV2ViUC1Gb3JtYXQtNDg4fGFkN2Q0YWUwMDQ2NmIxYzg0ZGJjYTY2NTUwM2RjZWI4ZjUxYmJmOTM5NjI4OTEyNTVmY2ZiMDExYTE5NTFmYzg",
    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78976636?x=1800&y=1800&format=jpg&quality=80&sp=yes&strip=yes&ex=1800&ey=1800&align=center&resizesource&unsharp=1.5x1+0.7+0.02",
    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93658951?x=480&y=334&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=480&ey=334&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=480&cdy=334",
    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105056581?x=480&y=334&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=480&ey=334&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=480&cdy=334"
  ];

  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col  max-w-md">
          <h1 className="text-4xl font-semibold mb-4 ">
            Explore a wide selection of electronics.
          </h1>
          <p className="text-lg mb-6">
            Find the latest electronics in one place.
          </p>
          <ScrollLink
            to="categories-section"
            smooth={true}
            duration={500}
            offset={-80}
            className=" cursor-pointer self-start inline-block py-3 px-6 bg-red-500 text-white uppercase font-semibold rounded-lg text-lg hover-bg-primary-dark transition duration-400"
          >
            Explore Now
          </ScrollLink>
        </div>
        <div className="hidden mt-20 lg:block w-[400px] mx-auto transition duration-300">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
          >
            {imageUrls.map((imageUrl, index) => (
                <div key={index}>
                  <img 
                    src={imageUrl} 
                    alt={`Slide ${index}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}


export default Hero;