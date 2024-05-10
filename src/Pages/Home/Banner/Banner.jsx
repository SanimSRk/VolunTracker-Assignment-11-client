import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90.00deg,rgb(21,21,21,0.4),rgba(21,21,21,0.4)100%),url(/pexels-julia-m-cameron-6994833.jpg)] ">
            <div className=" text-center lg:w-2/3 mx-auto md:w-2/3 md:mx-auto lg:mx-auto">
              <h2 className="text-white md:text-3xl text-2xl leading-normal md:leading-normal lg:leading-normal lg:text-4xl font-bold ">
                {' '}
                Responsible for organizing and managing volunteer activities,
                ensuring smooth operations and effective utilization of
                resources
              </h2>
              <button className="btn mt-7 bg-[#f26837] text-white border-none">
                View details
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90.00deg,rgb(21,21,21,0.4),rgba(21,21,21,0.4)100%),url(/pexels-rdne-6646906.jpg)] ">
            <div className=" text-center lg:w-2/3 mx-auto md:w-2/3 md:mx-auto lg:mx-auto">
              <h2 className="text-white md:text-3xl text-2xl leading-normal md:leading-normal lg:leading-normal lg:text-4xl font-bold ">
                {' '}
                Responsible for organizing and managing volunteer activities,
                ensuring smooth operations and effective utilization of
                resources
              </h2>
              <button className="btn mt-7 bg-[#f26837] text-white border-none">
                View details
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90.00deg,rgb(21,21,21,0.4),rgba(21,21,21,0.4)100%),url(/pexels-rdne-6647009.jpg)] ">
            <div className=" text-center lg:w-2/3 mx-auto md:w-2/3 md:mx-auto lg:mx-auto">
              <h2 className="text-white md:text-3xl text-2xl leading-normal md:leading-normal lg:leading-normal lg:text-4xl font-bold ">
                {' '}
                Responsible for organizing and managing volunteer activities,
                ensuring smooth operations and effective utilization of
                resources
              </h2>
              <button className="btn mt-7 bg-[#f26837] text-white border-none">
                View details
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90.00deg,rgb(21,21,21,0.4),rgba(21,21,21,0.4)100%),url(/pexels-shvetsa-5029859.jpg)] ">
            <div className=" text-center lg:w-2/3 mx-auto md:w-2/3 md:mx-auto lg:mx-auto">
              <h2 className="text-white md:text-3xl text-2xl leading-normal md:leading-normal lg:leading-normal lg:text-4xl font-bold ">
                {' '}
                Responsible for organizing and managing volunteer activities,
                ensuring smooth operations and effective utilization of
                resources
              </h2>
              <button className="btn mt-7 bg-[#f26837] text-white border-none">
                View details
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90.00deg,rgb(21,21,21,0.4),rgba(21,21,21,0.4)100%),url(/pexels-thirdman-7656742.jpg)] ">
            <div className=" text-center lg:w-2/3 mx-auto md:w-2/3 md:mx-auto lg:mx-auto">
              <h2 className="text-white md:text-3xl text-2xl leading-normal md:leading-normal lg:leading-normal lg:text-4xl font-bold ">
                {' '}
                Responsible for organizing and managing volunteer activities,
                ensuring smooth operations and effective utilization of
                resources
              </h2>
              <button className="btn mt-7 bg-[#f26837] text-white border-none">
                View details
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
