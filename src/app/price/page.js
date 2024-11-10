"use client";
import React, { useEffect, useRef, useState, } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/Price/HeroSlider";
import EveryPurchase from "@/components/Price/EveryPurchase";
// import PricingTabs from "@/components/Price/Tab/PricingTabs";
//  import PriceTable from "@/components/Price/PriceTable";
import MidCTA from "@/components/Price/MidCTA";
import OnPremisesSection from "@/components/Price/OnPremisesSection";
import FooterCTA from "@/components/Price/Tab/FooterCTA";
import Accordion_component from "@/components/Accordion_component/Accordion_component";
import { getPriceFaq } from "@/utils/price";
// import PriceTableMobile from "@/components/Price/PriceTableMobile";
// import PackegeTableForMobile from "@/components/Price/PackegeTableForMobile";
import PriceTableScroll from "@/components/Price/Tab/PriceTableScroll";
// import TestTable from "@/components/Price/Tab/TestTable";
import { Stack } from "@mui/system";
import { CircularProgress } from "@mui/material";
// import PricingTableTab from "@/components/Price/Tab/PriceTableScroll";
// import PackegeTableScroll from "@/components/Price/PackegeTableScroll";
import PricingTabPreview from "@/components/Price/Tab/PricingTabdPreview";
import PackegeTableScrollPreview from "@/components/Price/PackegeTableScrollPreview";
import Footer from "@/components/Footer";

function Page() {
  const [singleProduct, setSingleProduct] = useState({});
  const divRef = useRef(null);
  const [payMethod, setPayMethod] = useState("Monthly")
  const [activePlan, setActivePlan] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState();
  const [value, setValue] = useState(0);
  const [productData, setProductData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [faqLoading, setFaqLoading] = useState(true);
  const [faqError, setFaqError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
 

  

  const tabId =  singleProduct?.id ;
  const dynamicURL = singleProduct?.identifier
    ? "combine_product"
    : "product_id";

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      try {
        const res = await fetch(
          `${baseUrl}/blog/products-pricing/products-details-with-packages`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setProductData(data);
        
        setSingleProduct(data[currentIndex])
        setValue(tabId)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFaqData = async () => {
      if (!tabId) return;

      setFaqLoading(true);
      try {
        const data = await getPriceFaq(dynamicURL, tabId);
        setFaqData(data);
        // console.log('faq data',data);
        setFaqError(null);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
        setFaqError(error.message);
      } finally {
        setFaqLoading(false);
      }
    };

    fetchFaqData();
  }, [dynamicURL, tabId]);

  const scrollToDiv = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const availableProduct = productData.filter((item) => item.is_published);
  return (
    <div className="">
      <Header pathName={"/pricing"} />
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          {" "}
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            {/* <CircularProgress color="secondary" /> */}
            <CircularProgress size="5rem" sx={{ color: "#5BBC2E" }} />
            {/* <CircularProgress color="inherit" /> */}
          </Stack>
        </div>
      ) : (
        <>
          {productData ? (
            <HeroSlider dynamicURL={dynamicURL} tabId={tabId} />
          ) : (
            ""
          )}
          
            <h2 className="text-center text-secondary-1 text-3xl font-[500] my-16 ">
              What Do you Need? Always Choose The Best{" "}
            </h2>
          
          {productData ? (
            <PricingTabPreview
              setSingleProduct={setSingleProduct}
              scrollToDiv={scrollToDiv}
              productData={productData}
              value={value}
              setValue={setValue}
              payMethod={payMethod}
              setPayMethod={setPayMethod}
              dynamicURL={dynamicURL}
              tabId={tabId}
              activePlan={activePlan}
              setActivePlan={setActivePlan}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              availableProduct={availableProduct}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              
            />
          ) : (
            ""
          )}

          {productData ? (
            <EveryPurchase dynamicURL={dynamicURL} tabId={tabId} />
          ) : (
            ""
          )}
          {/* <PriceTable activePlan={activePlan} selectedCurrency={selectedCurrency} ref={divRef} dynamicURL={dynamicURL} tabId={tabId} /> */}
          {/* <PriceTableMobile activePlan={activePlan} selectedCurrency={selectedCurrency} ref={divRef} dynamicURL={dynamicURL} tabId={tabId} />
      <PackegeTableForMobile activePlan={activePlan} selectedCurrency={selectedCurrency} ref={divRef} dynamicURL={dynamicURL} tabId={tabId} /> */}
          {productData &&
            (isMobile ? (
              <PackegeTableScrollPreview
              setSingleProduct={setSingleProduct}
              scrollToDiv={scrollToDiv}
              productData={productData}
              value={value}
              setValue={setValue}
              dynamicURL={dynamicURL}
              payMethod={payMethod}
              tabId={tabId}
              activePlan={activePlan}
              setActivePlan={setActivePlan}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              availableProduct={availableProduct}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              ref={divRef}
              setIsLoading={setIsLoading}
              singleProduct= {singleProduct}
              />
            ) : (
              <div>
                <PriceTableScroll
                  activePlan={activePlan}
                  selectedCurrency={selectedCurrency}
                  ref={divRef}
                  dynamicURL={dynamicURL}
                  payMethod={payMethod}
                  tabId={tabId}
                  singleProduct={singleProduct}
                  setSingleProduct={setSingleProduct}
                  setIsLoading= {setIsLoading}
                />
              </div>
            ))}

          <MidCTA dynamicURL={dynamicURL} tabId={tabId} availableProduct={availableProduct} />
          {/* <PackegeTableForMobile
            dynamicURL={dynamicURL}
            tabId={tabId}
            activePlan={activePlan}
            selectedCurrency={selectedCurrency}
          /> */}

          <OnPremisesSection dynamicURL={dynamicURL} tabId={tabId} />
          <FooterCTA dynamicURL={dynamicURL} tabId={tabId} currentIndex = {currentIndex} />
          <div className="mt-[60px]">
            {faqLoading ? (
              <p>Loading FAQ...</p>
            ) : faqError ? (
              <p>Error loading FAQ: {faqError}</p>
            ) : (
              <Accordion_component accordion_list={faqData} tabId={value} />
            )}
          </div>
          {/* <Footer/> */}
        </>
      )}
    </div>
  );
}

export default Page;

// {productData ? <HeroSlider dynamicURL={dynamicURL} tabId={tabId} /> : ""}
//       {availableProduct.length > 0 ? (
//         <h2 className="text-center text-secondary-1 text-3xl font-[500] my-16 ">
//           What Do you Need? Always Choose The Best{" "}
//         </h2>
//       ) : (
//         ""
//       )}
//       {productData ? (
//         <PricingTabs
//           setSingleProduct={setSingleProduct}
//           scrollToDiv={scrollToDiv}
//           productData={productData}
//           value={value}
//           setValue={setValue}
//           dynamicURL={dynamicURL}
//           tabId={tabId}
//           activePlan={activePlan}
//           setActivePlan={setActivePlan}
//           selectedCurrency={selectedCurrency}
//           setSelectedCurrency={setSelectedCurrency}
//           availableProduct={availableProduct}
//         />
//       ) : (
//         ""
//       )}

//       {
//         productData ? (<EveryPurchase dynamicURL={dynamicURL} tabId={tabId} />): ''
//       }
//       {/* <PriceTable activePlan={activePlan} selectedCurrency={selectedCurrency} ref={divRef} dynamicURL={dynamicURL} tabId={tabId} /> */}
//       {/* <PriceTableMobile activePlan={activePlan} selectedCurrency={selectedCurrency} ref={divRef} dynamicURL={dynamicURL} tabId={tabId} />
//       <PackegeTableForMobile activePlan={activePlan} selectedCurrency={selectedCurrency} ref={divRef} dynamicURL={dynamicURL} tabId={tabId} /> */}
//      {productData && (
//        isMobile ? (
//          <PackegeTableForMobile
//            activePlan={activePlan}
//            selectedCurrency={selectedCurrency}
//            ref={divRef}
//            dynamicURL={dynamicURL}
//            tabId={tabId}
//          />
//        ) : (
//          <div>
//            <PriceTableScroll
//              activePlan={activePlan}
//              selectedCurrency={selectedCurrency}
//              ref={divRef}
//              dynamicURL={dynamicURL}
//              tabId={tabId}
//            />
//          </div>
//        )
//      )}
//       <MidCTA dynamicURL={dynamicURL} tabId={tabId} />
//       <OnPremisesSection dynamicURL={dynamicURL} tabId={tabId} />
//       <FooterCTA dynamicURL={dynamicURL} tabId={tabId} />
//       <div className="mt-[60px]">
//         {faqLoading ? (
//           <p>Loading FAQ...</p>
//         ) : faqError ? (
//           <p>Error loading FAQ: {faqError}</p>
//         ) : (
//           <Accordion_component accordion_list={faqData} tabId={value} />
//         )}
//       </div>
