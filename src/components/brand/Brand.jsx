import React, { useState } from "react";
import BrandModal from "./BrandModal";
import { useQuery } from '@tanstack/react-query';
import { getPartners } from '../../Util/http';
import Slider from "react-slick";

const Brand = () => {

  const [openModal, setOpenModal] = useState(false);
  const [brand, setBrand] = useState({})

  const closeModal = () => setOpenModal(false);

  
  const { data: partners } = useQuery({
    queryKey: ['ourPartners'],
    queryFn: () => getPartners(1)
  });

  const onOpenModal = (brandObj) => {
    setOpenModal(true);
    setBrand(brandObj);
  }

  const settings = {
    dots: false,
    arrow: false,
    infinite: false,
    speed: 900,
    slidesToShow: 6,
    centerPadding: "40px",
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrow: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider_brand" style={{ "--bs-gutter-y": "2rem" }}>
        <Slider {...settings}>
          {partners && partners?.items.map((item, i) => (
            <div className="px-2" key={i} onClick={() => onOpenModal(item)}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay={(i * 100).toString()}
              >
                {/* <!--Partner Box--> */}
                <div
                  className="ptf-partner-box"
                  style={{
                    "--ptf-hover-background": '#fcf8f4',
                    "--ptf-image-height": '85px',
                  }}
                >
                  <div className="ptf-partner-box__image">
                    <img
                      src={item.logo}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <h6 className="ptf-partner-box__title">{item.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <BrandModal 
        show={openModal}
        onHide={closeModal}
        brand={brand}
      />
    </>
  );
};

export default Brand;
