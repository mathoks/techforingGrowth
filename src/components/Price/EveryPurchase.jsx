"use client";
import React, { memo, useEffect, useState } from "react";
import styles from "@/style/pricePurchase.module.css";

const CompHtml = memo(({ text }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
});
const EveryPurchase = memo(({ dynamicURL, tabId }) => {
  const [index, setIndex] = useState(0);
  const [html, setHtml] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      try {
        const res = await fetch(
          `${baseUrl}//blog/products-pricing/products-banner-content?category=Purchase Includes&${dynamicURL}=${tabId}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        if (data) {
          const filteredData = data.filter(({ activated }) => !activated);
          setHtml(filteredData);
          console.log(filteredData);
        }

        // if (dynamicURL === "combine_product") {
        //   setComBinedProduct(data);
        // } else setSingleProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };

    if (tabId && dynamicURL) {
      fetchData();
    }
  }, [tabId, dynamicURL]);

  return html.length > 0 ? (
    <div className="mt-24 lg:block hidden bg-[#EEF4FD] py-12">
      <div className="custom-container pb-11">
        <h1 className={styles.title}>
          With Every Purchase, 
          <span>You Will Get!</span>
        </h1>
        <div className="flex gap-6 mt-12">
          <div
            className="p-6 rounded flex flex-col gap-6 items-center justify-center w-[268px] relative bg-white"
            style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 12px 0px" }}
          >
            <ul>
              {html?.length > 0 &&
                html?.map(({ title }, id) => (
                  <li
                    value={id}
                    onClick={() => {
                      setIndex(id);
                    }}
                    key={id}
                    className={`mb-[20px]  before:content-[''] before:w-[4px] before:absolute before:bg-primary before:transition-all before:inset-x-[24px] top-4  before:h-[4rem]  ${
                      id === index ? "before:opacity-100" : "before:opacity-0"
                    } } `}
                    style={{ color: id === index ? "rgb(15, 147, 177)" : "" }}
                  >
                    <h3 className={styles.subTitle} style={{ color: id === index ? "rgb(15, 147, 177)" : "" }}> {title}</h3>
                  </li>
                ))}
            </ul>

            <div className={styles.horizontalLine}></div>
          </div>
          <div className={`${styles.content} flex justify-between`}>
            <div className="flex flex-col gap-6 ml-14 ">
              <CompHtml text={html[index]?.html_content} />
            </div>
            <div
              className="relative min-w-[317px] h-[299px] "
              style={{
                backgroundImage: `url(${html[index]?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(249, 249, 249) 0%, rgba(249, 249, 249, 0) 50%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center">No data available</div>
  );
});

export default EveryPurchase;
