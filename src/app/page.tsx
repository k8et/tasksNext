"use client"

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import SelectSliderContent from "@/components/commons/SelectSliderContent";
import AutocompleteSliderContent from "@/components/commons/AutocompleteSliderContent";
import CheckboxesSliderContent from "@/components/commons/CheckboxesSliderContent";
import InputsSliderContent from "@/components/commons/InputsSliderContent";
import ButtonsSliderContent from "@/components/commons/ButtonsSliderContent";

import {Pagination, Navigation} from 'swiper/modules';

const Home = () => {
    return (
        <div className={"flex items-center justify-center w-full"}>
            <div className="h-full max-w-[1536px] px-6 max-md:px-3 w-full">
                <Swiper
                    className="h-[300px] max-md:h-[400px] rounded-lg"
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    modules={[Pagination, Navigation]}
                    pagination={{clickable: true}}
                    loop
                >
                    <SwiperSlide>
                        <div className={"h-full w-full bg-white/10 flex items-center "}>
                            <ButtonsSliderContent/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={"h-full w-full bg-white/10 overflow-auto py-[30px] flex items-center "}>
                            <InputsSliderContent/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={"h-full w-full bg-white/10 flex items-center "}>
                            <CheckboxesSliderContent/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={"h-full w-full bg-white/10 flex items-center "}>
                            <SelectSliderContent/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"h-full w-full bg-white/10 flex items-center "}>
                            <AutocompleteSliderContent/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;
