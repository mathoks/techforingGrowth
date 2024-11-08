"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { ChevronUpIcon, CircleAlert, Minus, Check } from "lucide-react";
import { PriceView } from "./PricingTabdPreview";

const PriceTableScroll = forwardRef(
  (
    {
      activePlan,
      payMethod,
      singleProduct = {},
      setSingleProduct,
      selectedCurrency,
      setIsLoading,
      dynamicURL,
      tabId,
    },
    ref
  ) => {
    const [combine_product, setComBinedProduct] = useState({});
    console.log(dynamicURL, tabId, singleProduct, "here");

    useEffect(() => {
      const fetchData = async () => {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        try {
          const res = await fetch(
            `${baseUrl}/blog/products-pricing/products-packages-with-features-update?${dynamicURL}=${tabId}`
          );
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }

          const data = await res.json();
          if (dynamicURL === "combine_product") {
            setComBinedProduct(data);
          } else setSingleProduct(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false); // Set loading to false after fetching
        }
      };

      fetchData();
    }, [tabId, dynamicURL]);

    console.log(combine_product);
    const [Name, styledName] =
      Object.keys(singleProduct).length === 0
        ? []
        : singleProduct.name.split(" ");
    const [Name2, styledName2] =
      Object.keys(combine_product).length === 0
        ? ["", " "]
        : combine_product.name.split(" ", 3);

    return (
      <div ref={ref} className="main_container mb-4 ">
        <div className="text-center md:pt-16 md:pb-9">
          <h2 className="text-secondary-1 text-2xl md:text-4xl font-bold">
            Compare All Plans With{" "}
            <span className="text-primary">Full of Features</span>
          </h2>
        </div>
        <div className="w-full border-[#0F93B1] border-[0.5px] flex bg-[#EEF4FD] sticky top-[75px] z-40 ">
          <div className="w-[33.33%] flex flex-col text-center items-center justify-center border-r border-[#0F93B1] p-6">
            <h2 className="text-[#0F93B1] text-lg md:text-[28px] font-medium">
              {Name2}{" "}
              <span className="text-primary capitalize">{styledName2}</span>
            </h2>
            <h3 className="text-[#0F93B1] text-sm md:text-lg font-medium">
              Includes the Following
            </h3>
          </div>

          <div className="w-[66.66%] flex relative">
            {singleProduct?.product_packages?.map(
              ({ package: pack_, payment_methods }, id) => (
                <div
                  key={id}
                  className="flex-1 p-1 md:p-4 text-center flex flex-col items-center  border-r border-r-[#0F93B1]"
                >
                  <h3 className="text-xs md:text-lg font-medium text-[#0F93B1]">
                    {pack_}
                  </h3>
                  <p className="text-[10px] md:text-base font-medium text-[#0F93B1]">
                    <PriceView
                      paymentMethods={payment_methods}
                      currency={selectedCurrency}
                      method={payMethod}
                    />
                  </p>
                  <button className="mt-4 bg-primary md:text-sm text-[8px] hover:bg-white hover:text-primary hover:border hover:border-primary text-white py-1 md:py-2 px-2 md:px-4 rounded hover:bg-primary-dark">
                    Buy Now
                  </button>
                </div>
              )
            )}
          </div>
        </div>
        {Object.keys(singleProduct).length > 0 &&
        !Object.keys(singleProduct).includes("products") ? (
          <div>
            <div className="bg-[#EEF4FD] border-b-[0.8px] border-[#C1C1C1] border-t-2 border-t-white cursor-pointer mt-1 w-full text-center items-center flex justify-center sticky top-[213px] z-20">
              <div className="w-full flex ">
                <div className="flex  items-center gap-2 w-1/3 border-r border-[#C1C1C1] px-2 py-2">
                  <img
                    className="w-6 h-6"
                    alt="human"
                    src={
                      Object.keys(singleProduct).includes("products")
                        ? ""
                        : singleProduct?.images[
                            singleProduct?.images?.length - 1
                          ]
                    }
                  />
                  <span>{singleProduct?.name}</span>
                </div>
                <div className="w-2/3 flex justify-between items-center px-2">
                  {singleProduct?.short_description}
                  <div>
                    <ChevronUpIcon
                      className="w-[24px] h-[24px] text-dark-text-3"
                      height={"1em"}
                      width={"1em"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-gray-100">
              <div className="w-full overflow-auto">
                <table className="w-full bg-white overflow-hidden">
                  <tbody>
                    {singleProduct?.features?.map(
                      (
                        { feature, value, product_packages, product: prodId },
                        id
                      ) => (
                        <tr
                          key={id}
                          className="bg-[#FCFCFC] "
                          style={{
                            borderBottom: "0.5px  solid rgb(226, 226, 226)",
                          }}
                        >
                          <td className="px-4 w-full  py-3 text-sm font-medium text-dark-text-3 flex gap-2">
                            <div className="truncate ">{feature}</div>
                            <div className=" -mt-1 -ml-1 relative group">
                              <CircleAlert className="text-[#0F93B1] w-[12px] h-[13px]" />
                              <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#0F93B1] text-white text-xs p-1 rounded">
                                {value}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            {product_packages.find(
                              ({ product }) => product === prodId
                            ) ? (
                              <Check className="text-primary h-[1em] w-[1em]" />
                            ) : (
                              <Minus className="h-[1em] w-[1em] text-gray-400 text-2xl" />
                            )}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {product_packages.find(
                              ({ product }) => product === prodId
                            ) ? (
                              <Check className="text-primary h-[1em] w-[1em]" />
                            ) : (
                              <Minus className="h-[1em] w-[1em] text-gray-400 text-2xl" />
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (


          
          combine_product?.clone_products?.map(
            ({ features, images, name, short_description }, i) => (
              <div key={i}>
                <div className="bg-[#EEF4FD] border-b-[2px] border-t-[4px] border-white cursor-pointer mt-1 w-full text-center items-center flex justify-center sticky z-20 top-[213px]">
                  <div className="w-full flex ">
                    <div className="flex  items-center gap-2 w-1/3 border-r border-[#C1C1C1] px-2 py-2">
                      <img
                        className="w-6 h-6"
                        alt="human"
                        src={images[images.length - 1]}
                      />
                      <span>{name}</span>
                    </div>
                    <div className="w-2/3 flex justify-between items-center px-2">
                      {short_description}
                      <div>
                        <ChevronUpIcon
                          className="w-[24px] h-[24px] text-dark-text-3"
                          height={"1em"}
                          width={"1em"}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-gray-100 ">
                  <div className="w-full overflow-auto">
                    <table className="w-full bg-white overflow-hidden">
                      <tbody>
                        {features?.map(
                          (
                            {
                              feature,
                              value,
                              product_packages,
                              product: prodId,
                            },
                            id
                          ) => (
                            <tr
                              key={id}
                              className="bg-[#FCFCFC] "
                              style={{
                                borderBottom: "0.5px  solid rgb(226, 226, 226)",
                              }}
                            >
                              <td className="px-4 w-full   py-3 text-sm font-medium text-dark-text-3 flex gap-2 ">
                                <div className="truncate ">{feature}</div>
                                <div className=" -mt-1 -ml-1 relative group">
                                  <CircleAlert className="text-[#0F93B1] w-[12px] h-[13px]" />
                                  <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#0F93B1] text-white text-xs p-1 rounded">
                                    {value}
                                  </span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-center col-span-3">
                                {product_packages.find(
                                  ({ product }) => product === prodId
                                ) ? (
                                  <Check className="text-primary h-[1em] w-[1em]" />
                                ) : (
                                  <Minus className="h-[1em] w-[1em] text-gray-400 text-2xl" />
                                )}
                              </td>
                              <td className="px-4 py-3 text-center col-span-3">
                                {product_packages.find(
                                  ({ product }) => product === prodId
                                ) ? (
                                  <Check className="text-primary h-[1em] w-[1em]" />
                                ) : (
                                  <Minus className="h-[1em] w-[1em] text-gray-400 text-2xl" />
                                )}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    );
  }
);

export default PriceTableScroll;
