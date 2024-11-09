"use client";
import React, { useState, memo, useEffect } from "react";
import TabHeaderSvg from "../../../../public/TabHeader.svg";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";
import CheckCircleIcon from "../../../../public/icons/CheckCircleIcon";
import BulbIconLigth from "../../../../public/icons/BulbIconLigth";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { paginationStyle } from "@/components/resources/customSliderRules";

import {
  paginationSliderOption,
  paginationStyle2,
} from "@/utils/sliderOptions";
import styles from "@/utils/sliderOptions";
import { useFooterCTA } from "@/utils/price";

const SeeMoreButton = ({ custom_colour, scrollfunc }) => (
  <button
    onClick={scrollfunc}
    className="text-sm ml-4"
    style={{
      color: custom_colour === "" ? "#0f93b1" : custom_colour,
    }}
  >
    &see more...
  </button>
);

export const PriceView = memo(
  ({ currency = "USD", paymentMethods = [], method = "Monthly" }) => {
    const item = paymentMethods.find((pm) => pm.payment_method === method);

    if (!item) return <div>No price available</div>;

    const priceDetails = item.payment_method_details.find(
      (pmd) => pmd.detail === currency
    );

    if (!priceDetails) return <div>No price available for {currency}</div>;

    const price = {
      Monthly: priceDetails.price + "/" + "mo",
      Yearly: priceDetails.price * 12 + "" + "/" + "year",
      Quarterly: priceDetails.price * 4,
    }[method];

    return <div className=" font-bold">{price}</div>;
  }
);

const PricingTabPreview = ({
  scrollToDiv,
  setSingleProduct,
  availableProduct,
  productData,
  value,
  setValue,
  dynamicURL,
  tabId,
  activePlan,
  setActivePlan,
  selectedCurrency,
  setSelectedCurrency,
  currentIndex,
  setCurrentIndex,
  payMethod,
  setPayMethod,
}) => {
  const [AvailaPaymentOptions, setAvailiableOptions] = useState([]);

  useEffect(() => {
    setSingleProduct(productData[currentIndex]);

    setAvailiableOptions(
      availableProduct[
        currentIndex
      ]?.product_packages[0]?.payment_methods?.filter(
        ({ activated }) => activated === true
      )
    );

    const currency = availableProduct[currentIndex]?.product_packages.map(
      ({ payment_methods }) =>
        payment_methods.find(({ payment_method_details }) =>
          payment_method_details.some(
            ({ detail, activated }) =>
              (detail === "USD" || detail === "BDT") && activated
          )
        )
    )[0].payment_method_details[0]?.detail;
    setSelectedCurrency(currency);
  }, [currentIndex]);

  function selectTab(index) {
    setCurrentIndex(index);
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div className="overflow-hidden">
      <div className="w-full max-w-screen-xl   mx-auto px-2 sm:px-4 md:px-6">
        <div className="flex justify-start items-center">
          {Array.isArray(availableProduct) && availableProduct.length > 0
            ? availableProduct.map(({ images, id }, i) => (
                <div
                  className="cursor-pointer px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex-shrink-0 border-b-2 border-primary"
                  style={{
                    borderTop: "0.5px solid rgb(15, 147, 177)",
                    borderRight: "0.5px solid rgb(15, 147, 177)",
                    borderBottom: "none",
                    borderLeft: "0.5px solid rgb(15, 147, 177)",
                    borderImage: "initial",
                    borderRadius: "20px 20px 0px 0px",
                    background:
                      currentIndex !== i ? "inherit" : "rgb(228, 237, 252)",
                    minWidth: "fit-content",
                    marginRight: "-1px",
                  }}
                  key={i}
                  onClick={() => selectTab(i)}
                >
                  <img
                    className="w-[60px] sm:w-[80px] lg:w-[112px] h-[18px] sm:h-[24px] lg:h-[32px] object-contain"
                    src={images[0]}
                  />
                </div>
              ))
            : "loading.."}
        </div>
        <div className=" border-t-[0.5px] border-[#0F93B1] ">
          <div
            className="p-3  border-t border-[#0993B1]  flex flex-col justify-center  space-y-8"
            style={{
              background:
                "linear-gradient(175deg, rgb(228, 237, 252) 3.83%, rgba(228, 237, 252, 0) 46.93%)",
              borderTop: "1px solid rgb(15, 147, 177)",
            }}
          >
            <h2 className="mb-6">
              <span className="font-bold">About Product:</span>{" "}
              <span className="">
                {availableProduct[currentIndex]?.description}
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center py-3 ">
              {AvailaPaymentOptions?.length > 1 && (
                <div className="w-full sm:w-auto">
                  <select
                    value={selectedCurrency}
                    onChange={handleChange}
                    className="w-full bg-white py-2 rounded-md text-dark-text-3"
                  >
                    <option>Choose Currency</option>
                    {[
                      ...new Set(
                        availableProduct[currentIndex]?.all_payment_methods
                          ?.map(({ details }) =>
                            Object.entries(details).map((k) => k[0])
                          )
                          .flat()
                      ),
                    ].map((option) => (
                      <option
                        value={option}
                        className="bg-white hover:bg-white text-dark-text-3 border-b-2"
                        key={option}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex flex-wrap gap-3 md:rounded-full md:border p-2 md:border-primary md:bg-white z-10 w-full sm:w-auto">
                {AvailaPaymentOptions?.filter(
                  (option) => option?.activated
                ).map((option) => (
                  <button
                    key={option.payment_method}
                    onClick={() => setPayMethod(option.payment_method)}
                    className={`text-base font-bold rounded-full px-4 py-[10px] w-full sm:w-auto ${
                      payMethod === option.payment_method
                        ? "bg-primary text-white"
                        : "bg-white"
                    } text-primary `}
                  >
                    {option.payment_method}
                  </button>
                ))}
              </div>

              <div className="relative z-1 -ml-0 sm:-ml-5 mt-4 sm:mt-0 w-full sm:w-auto">
                <Image className="mx-auto" src={TabHeaderSvg} />
                <p className="absolute inset-0 top-4 left-0 sm:left-6 flex items-center justify-center pl-2 font-normal text-[9px] md:text-base text-center">
                  Choose Yearly plans to save up to 20%
                </p>
              </div>
            </div>
            <div className=" hide-scrollbar mx-auto o px-4 md:px-0  w-[100%]">
              <div className="relative py-4 mb-4 flex-col w-full mx-auto justify-center">
                {/* <div className="  max-w-[1240px]  mx-auto px-20 xs:px-2.5 lg:px-0 ls:px-20 sp:px-10  sm:px-0 h-fit relative"> */}
                {/* <div className=" hide-scrollbar"> */}
                  <Splide
                    options={{
                    
                      omitEnd: true,
            
                      ...paginationSliderOption,
                      pagination: {
                        className: "flex justify-center mb-4",
                        pageClassName: "w-2 h-2 bg-green-500 rounded-full",
                        activeClassName: "bg-blue-500",
                      },
                    }}
                    style={{ ...paginationStyle2 }}
                    onMoved={(_, newIndex) => setActiveIndex(newIndex)}
                    onDragged={(_, newIndex) => setActiveIndex(newIndex)}
                    className=" hide-scrollbar  justify-center md:px-4  mx-auto  mb-4 md:mb-0 "
                  >
                    {/* <div className="splide__arrows">
                      <div className="splide__arrow splide__arrow--prev rotate-90 flex items-center rounded-none -inset-x-12 w-32 bg-orange-400 justify-between ">
                        <span>
                          <ArrowUp />
                        </span>
                        <h2>show more</h2>
                        <span>
                          <ArrowUp />
                        </span>
                      </div>
                      <div className="splide__arrow splide__arrow--next rotate-90 flex items-center   rounded-none  w-32 bg-orange-400 justify-between -right-8 ">
                        <span>
                          <ArrowUp />
                        </span>
                        <h2>show more</h2>
                        <span>
                          <ArrowUp />
                        </span>
                      </div>
                    </div> */}

                    {availableProduct[currentIndex]?.product_packages.map(
                      (
                        {
                          cta_text,
                          is_most_popular,
                          package: pack_,
                          id,
                          highlights,
                          tag_line,
                          technical_features,
                          custom_colour,
                          payment_methods,
                        },
                        index
                      ) => (
                        <SplideSlide
                          // style={{display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none', scrollSnapType: 'x mandatory'}}
                          // className="border-2   space-y-5 flex flex-col justify-center items-center "
                          key={index}
                          className={` border inline-flex items-center space-y-4 rounded-md flex-col grow-0 shrink min-w-[240px] w-[calc(25%-2px)]  pt-20 justify-center px-2 py-4 mt-5 max-w-sm md:w-[calc(25%-16px)] ${
                            index % 2 === 0
                              ? "even:h-[40rem]  even:mt-10"
                              : "odd:h-[45rem]"
                          } `}
                          style={{
                            scrollSnapAlign: "start",
                            borderColor:
                              custom_colour === "" ? "#0f93b1" : custom_colour,
                            // padding: "48px 12px 24px",
                          }}
                        >
                          <div className=" flex  absolute -top-2 ">
                            <div
                              className=" flex-col justify-center items-center w-[180px] h-[40px] rounded-tl-[6px] py-1 px-5 "
                              style={{
                                backgroundColor:
                                  custom_colour === ""
                                    ? "#0f93b1"
                                    : custom_colour,
                                boxShadow: `${
                                  custom_colour === ""
                                    ? "#0f93b1"
                                    : custom_colour
                                } 2px 0px 2px 0px`,
                                boxShadow:
                                  "rgba(0, 0, 0, 0.25) 2px 0px 2px 0px",
                              }}
                            >
                              <h2 className="text-white text-2xl font-medium text-center">
                                {pack_}
                              </h2>
                              {is_most_popular && (
                                <div
                                  className="flex flex-col justify-end items-center h-[40px]  self-stretch -ml-5 pb-[2px] mt-1 w-[180px]"
                                  style={{
                                    borderRadius: "0px 0px 100px 100px",
                                    background: "rgb(239, 249, 234)",
                                  }}
                                >
                                  <h2
                                    className=" text-center text-base font-normal"
                                    style={{
                                      color:
                                        custom_colour === ""
                                          ? "#0f93b1"
                                          : custom_colour,
                                    }}
                                  >
                                    Most popular
                                  </h2>
                                </div>
                              )}
                            </div>
                            <div
                              className="w-1 h-2 rounded-tr-[6px]"
                              style={{
                                backgroundColor: "rgb(15, 147, 177)",
                                boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 8px",
                              }}
                            ></div>
                          </div>

                          <h2 className="font-medium text-xl text-dark-text-3">
                            <PriceView
                              paymentMethods={payment_methods}
                              method={payMethod}
                              currency={selectedCurrency}
                            />
                          </h2>
                          <h2
                            className='text-sm font-medium px-4 py-1 rounded-full text-["#0f93b1"]   '
                            style={{
                              color:
                                custom_colour === ""
                                  ? "#0f93b1"
                                  : custom_colour,
                              backgroundColor: "#ecf2fd",
                            }}
                          >
                            Billed {payMethod}
                          </h2>
                          <h2
                            className="text-base font-bold"
                            style={{
                              color:
                                custom_colour === ""
                                  ? "#0f93b1"
                                  : custom_colour,
                            }}
                          >
                            {tag_line}
                          </h2>
                          <hr
                            className={`w-full h-[2px] divider`}
                            style={{
                              backgroundColor:
                                custom_colour === ""
                                  ? "#0f93b1"
                                  : custom_colour,
                            }}
                          />
                          <h2
                            className="text-base font-bold"
                            style={{
                              color:
                                custom_colour === ""
                                  ? "#0f93b1"
                                  : custom_colour,
                            }}
                          >
                            Technical Features
                          </h2>
                          <div className="flex-col items-start self-stretch gap-[6px] h-24 mb-4">
                            {technical_features.map(({ feature, id }) => (
                              <div
                                key={id}
                                className="flex gap-3 items-center self-stretch mb-[6px]"
                              >
                                <CheckCircleIcon
                                  col={
                                    custom_colour !== ""
                                      ? custom_colour
                                      : "#0f93b1"
                                  }
                                />
                                <h2 className="text-dark-text-3 text-sm font-normal line-clamp-1">
                                  {feature}
                                </h2>
                              </div>
                            ))}
                          </div>
                          <hr
                            className="w-full h-[2px]"
                            style={{
                              backgroundColor:
                                custom_colour === ""
                                  ? "#0f93b1"
                                  : custom_colour,
                            }}
                          />
                          <div className="flex-col items-start self-stretch gap-[6px] h-24 mb-4">
                            {highlights.slice(0, 4).map(({ highlight }, i) => (
                              <div
                                key={i}
                                className="flex gap-3 items-center self-stretch mb-[6px]"
                              >
                                <BulbIconLigth />
                                <h2 className="text-dark-text-3 text-sm font-normal line-clamp-1">
                                  {i === 3 ? (
                                    <>
                                      {highlight}
                                      <SeeMoreButton
                                        custom_colour={custom_colour}
                                        scrollfunc={scrollToDiv}
                                      />
                                    </>
                                  ) : (
                                    highlight
                                  )}
                                </h2>
                              </div>
                            ))}
                          </div>
                          <button
                            className="px-8 py-3 rounded-lg text-white mt-10"
                            style={{
                              backgroundColor:
                                custom_colour === ""
                                  ? "#0f93b1"
                                  : custom_colour,
                            }}
                          >
                            {cta_text}
                          </button>
                        </SplideSlide>
                      )
                    )}
                  </Splide>

                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 mb-4 md:hidden">
                    {availableProduct[currentIndex]?.product_packages.map(
                      (_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full hover:bg-primary transition-all duration-300 ${
                            index === activeIndex
                              ? "opacity-100 bg-primary"
                              : " bg-neutral-300"
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 flex items-center justify-center">
          <button
            onClick={scrollToDiv}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-bold flex justify-center items-center gap-2 text-primary"
            style={{
              borderRadius: "8px",
              borderBottom: "1.75px solid #62bc2e",
            }}
          >
            Compare Full Plan{" "}
            <span>
              <ArrowDown />
            </span>
          </button>
        </div>
        {/* </div> */}
      </div>
    // </div>
  );
};

export default PricingTabPreview;
