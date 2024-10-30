import React, { useState, useEffect } from "react";
import TabHeaderShape from "../../../../public/TabHeader.svg";
import Image from "next/image";
import TabCards from "./TabCards";
import { fetchPrice } from "@/utils/price";

const PricingTabsPanel = ({ tabData, setSingleProduct, dynamicURL, tabId, activePlan, setActivePlan, selectedCurrency, setSelectedCurrency }) => {
    
    const [priceData, setPriceData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { all_payment_methods } = tabData;

    console.log('all payment method', all_payment_methods.details);

        console.log('tabdata',tabData);

    useEffect(() => {
        if (tabData) {
            setSingleProduct(tabData);
            setSelectedCurrency(null);
        }
    }, [tabData, setSingleProduct, setSelectedCurrency]);

    useEffect(() => {
        if (all_payment_methods && all_payment_methods.length > 0) {
            const defaultMethod = all_payment_methods[0].payment_method;
            setActivePlan(defaultMethod);
        }
    }, [all_payment_methods]);

    const paymentTenure = all_payment_methods?.find(method => method.payment_method === activePlan);

    let currencyKeys = [];
    if (paymentTenure) {
        currencyKeys = Object.keys(paymentTenure.details);
    }

    console.log('courency', currencyKeys);

    useEffect(() => {
        if (currencyKeys.length > 0 && !selectedCurrency) {
            setSelectedCurrency(currencyKeys.includes("USD") ? "USD" : currencyKeys[0]);
        }
    }, [currencyKeys, selectedCurrency, setSelectedCurrency]);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const togglePlan = (method) => {
        setActivePlan(method);
    };
    useEffect(() => {
        const fetchPriceData = async () => {
            if (activePlan && selectedCurrency && dynamicURL && tabId) {
                setIsLoading(true);
                setError(null);
                try {
                    const data = await fetchPrice(activePlan, selectedCurrency, dynamicURL, tabId);
                    setPriceData(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchPriceData();
    }, [activePlan, selectedCurrency, dynamicURL, tabId]);

    return (
        <div
            className="px-3 pt-3"
            style={{
                background: "linear-gradient(175deg, #E4EDFC 3.83%, rgba(228, 237, 252, 0.00) 46.93%)",
                borderTop:'1px solid #0F93B1'
            }}
        >
            <h2 className="mb-6">
                <span className="font-medium">About Product:</span> {tabData?.description}
            </h2>

            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center py-3">
                {/* Currency Selector */}
                {
                    currencyKeys.length > 1 && (<form className="w-full sm:w-auto">
                        <select
                            className="w-full bg-white py-2 rounded-md text-dark-text-3"
                            value={selectedCurrency}
                            onChange={handleCurrencyChange}
                        >
                            <option value="">Choose Currency</option>
                            {currencyKeys?.map((option, index) => (
                                <option
                                    className="bg-white hover:bg-white text-dark-text-3 border-b-2"
                                    key={index}
                                    value={option}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </form>)
                }
                <div className="flex flex-wrap gap-3 md:rounded-full md:border p-2 md:border-primary md:bg-white z-10 w-full sm:w-auto">
                    {all_payment_methods.map((method) => (
                        <button
                            key={method.payment_method}
                            onClick={() => togglePlan(method.payment_method)}
                            className={`text-base font-bold rounded-full px-4 py-[10px] w-full sm:w-auto ${
                                activePlan === method.payment_method
                                    ? "bg-primary text-white"
                                    : "bg-white text-primary"
                            }`}
                        >
                            {method.payment_method}
                        </button>
                    ))}
                </div>

                {/* Info section with Image */}
                <div className="relative z-1 -ml-0 sm:-ml-5 mt-4 sm:mt-0 w-full sm:w-auto">
                    <Image
                        src={TabHeaderShape}
                        alt="Tab Header Shape"
                        className="mx-auto sm:mx-0"
                    />
                    <p className="absolute inset-0 top-4 left-0 sm:left-6 flex items-center justify-center pl-2 font-normal text-[9px] md:text-base text-center">
                        Choose Yearly plans to save up to 20%
                    </p>
                </div>
            </div>

            {/* Render TabCards only when data is available */}
            {isLoading && (
                <div className="flex justify-center items-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
            )}
            {error && <p className="text-red-500 text-center py-4">Error loading data: {error}</p>}
            {!isLoading && !error && priceData && priceData.length > 0 && (
                <TabCards packages={priceData} activePlan={activePlan} />
            )}
        </div>
    );
};

export default PricingTabsPanel;