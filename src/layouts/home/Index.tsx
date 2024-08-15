import BannerTaroLeaf from "src/assets/images/banner_daun_talas.png";
import Image from "src/components/Image";
import Menu from "src/assets/images/menu.jpg";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import React from "react";
import cx from "classnames";

interface IImages {
  src: string;
  title: string;
}

const images: IImages[] = [
  {
    src: BannerTaroLeaf,
    title: "COTO RINDU",
  },
  {
    src: Menu,
    title: "BUNDA REY",
  },
  {
    src: BannerTaroLeaf,
    title: "SMOKEBOB",
  },
  {
    src: Menu,
    title: "D'SENN",
  },
  {
    src: BannerTaroLeaf,
    title: "THE SECRET",
  },
  {
    src: Menu,
    title: "AMEL",
  },
  {
    src: BannerTaroLeaf,
    title: "G'G'",
  },
  {
    src: Menu,
    title: "ICHIBAN",
  },
  {
    src: BannerTaroLeaf,
    title: "HADIBA",
  },
  {
    src: Menu,
    title: "MARASA",
  },
];

const imagesSort = images.sort((a, b) => a.title.localeCompare(b.title));

const HomePage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef<SwiperRef>(null);
  const activeTitleRef = React.useRef<HTMLDivElement | null>(null);

  const goToSlide = (idx: number) => {
    swiperRef.current?.swiper.slideTo(idx);
  };

  React.useEffect(() => {
    activeTitleRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  return (
    <section>
      <Image
        src={BannerTaroLeaf}
        alt="Banner Daun Talas"
        className="my-2 shadow-md md:h-[20rem] md:w-screen md:object-cover"
      />

      <div className="px-2">
        <section className="flex overflow-x-auto gap-2 my-4 whitespace-nowrap hide-scrollbar">
          {imagesSort.map((image, idx) => (
            <div
              key={image.title}
              className={cx(
                "w-max px-2 py-1 rounded-md cursor-pointer",
                idx === activeIndex && "bg-secondary-dark text-white"
              )}
              onClick={() => goToSlide(idx)}
              ref={idx === activeIndex ? activeTitleRef : null}
            >
              {image.title}
            </div>
          ))}
        </section>

        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          draggable
        >
          {imagesSort.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img src={image.src} alt={image.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomePage;
