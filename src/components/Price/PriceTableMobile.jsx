import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PriceTableMobile = React.forwardRef(
    ({ dynamicURL, tabId, activePlan, selectedCurrency }, ref) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [price, setPrice] = useState("");
        const [expandedTables, setExpandedTables] = useState({});

        const isFeatureActivated = (feature, packageId, level = "main") => {
            if (level === "main") {
                return feature.product_packages.some(
                    (pkg) => pkg.id === packageId && pkg.activated
                );
            } else if (level === "sub") {
                return feature.product_packages.some(
                    (pkg) => pkg.id === packageId && pkg.activated
                );
            } else if (level === "sub_sub") {
                return feature.product_packages.some(
                    (pkg) => pkg.id === packageId && pkg.activated
                );
            }
            return false;
        };

        let currencyIcon = "";
        if (selectedCurrency === "USD") {
            currencyIcon = "$";
        } else if (selectedCurrency === "EUR") {
            currencyIcon = "€";
        } else if (selectedCurrency === "BDT") {
            currencyIcon = "৳";
        } else {
            currencyIcon = "N/A";
        }

        let planSuffix = "";
        if (activePlan === "Monthly") {
            planSuffix = "/mo";
        } else if (activePlan === "Quarterly") {
            planSuffix = "/3mo";
        } else if (activePlan === "Yearly") {
            planSuffix = "/yr";
        } else {
            planSuffix = "";
        }

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        useEffect(() => {
            const fetchData = async () => {
                if (!dynamicURL || !tabId) return;

                const endPoint = `${baseUrl}/blog/products-pricing/products-packages-with-features-update?${dynamicURL}=${tabId}`;
                try {
                    const response = await fetch(endPoint);
                    if (!response.ok) {
                        throw new Error(
                            `Network response was not ok: ${response.statusText}`
                        );
                    }
                    const result = await response.json();
                    setData(result);
                    updatePrice(result, activePlan, selectedCurrency);
                } catch (err) {
                    console.error("Error fetching data:", err);
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, [dynamicURL, tabId, activePlan, selectedCurrency]);

        const updatePrice = (data, activePlan, selectedCurrency) => {
            if (!data || !activePlan || !selectedCurrency) return;

            const activePackage = data.product_packages?.find(
                (pkg) => pkg.package.toLowerCase() === activePlan.toLowerCase()
            );

            if (activePackage) {
                const currencyPrice = activePackage.prices?.find(
                    (price) =>
                        price.currency.toLowerCase() === selectedCurrency.toLowerCase()
                );
                setPrice(currencyPrice ? currencyPrice.amount : "N/A"); // Set price or display N/A
            }
        };

        const styleLastWord = (text) => {
            if (!text) return "";
            const words = text.split(" ");
            const lastWord = words.pop();
            return (
                <>
                    {words.join(" ")}{" "}
                    <span className="text-primary capitalize">{lastWord}</span>
                </>
            );
        };
        let colorToggle = true;
        const getColorClass = () => {
            colorToggle = !colorToggle;
            return colorToggle ? "bg-blue-100" : "bg-gray-100";
        };

        useEffect(() => {
            if (data?.clone_products) {
                const initialExpandedState = data.clone_products.reduce((acc, product) => {
                    acc[product.id] = true;
                    return acc;
                }, {});
                setExpandedTables(initialExpandedState);
            } else if (data?.id) {
                setExpandedTables({ [data.id]: true });
            }
        }, [data]);

        const toggleDescriptionAndTable = (productId) => {
            setExpandedTables(prev => ({
                ...prev,
                [productId]: !prev[productId]
            }));
        };

        return (
            <>
                <div className="main_container mb-3 px-2 sticky">
                    <div ref={ref} className="text-center md:pt-16 md:pb-9">
                        <h2 className="text-secondary-1 text-xl md:text-4xl font-bold py-2">
                            Compare All Plans With{" "}
                            <span className="text-primary">Full of Features</span>
                        </h2>
                    </div>
                    <div className="w-full md:w-full flex ">
                        <div className="md:w-1/3 w-[60%]">
                            <div className="flex flex-col justify-center items-center border-[#0F93B1] border-[0.5px] h-36">
                                <h2 className="text-[#0F93B1] text-lg md:text-[28px] font-medium">
                                    {styleLastWord(data?.name)}
                                </h2>
                                <h3 className="text-[#0F93B1] text-sm md:text-lg font-medium">
                                    Includes the Following
                                </h3>
                            </div>
                            {dynamicURL === "combine_product" &&
                                Array.isArray(data?.clone_products) ? (
                                data.clone_products.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <div
                                            className="bg-[#EEF4FD] flex gap-[10px] py-3 px-[10px] border-r h-12 border-[#C1C1C1] mt-1 cursor-pointer "
                                            style={{ borderBottom: "0.8px solid #E2E2E2" }}
                                            onClick={() => toggleDescriptionAndTable(item.id)}
                                        >
                                            <img
                                                src={
                                                    item.images?.length > 0
                                                        ? item.images[item.images.length - 1]
                                                        : "/path/to/placeholder-image.png"
                                                }
                                                alt={item.name}
                                                className="object-cover w-5 h-auto"
                                            />
                                            <h4 className="text-base font-medium text-dark-text-3">
                                                {item.name}
  
                                            </h4>
                                        </div>
                                        {expandedTables[item.id] && (
                                            <div className="w-full">
                                                <table className="w-full">
                                                    <tbody>
                                                        {item.features?.map((feature) => (
                                                            <React.Fragment key={feature.id}>
                                                                {/* Main Feature Row */}
                                                                <tr
                                                                    className={`border-b border-gray-300 ${getColorClass()}`}
                                                                >
                                                                    <td className="p-2 text-sm text-dark-text-3 flex items-center gap-2">

                                                                        {feature?.feature}
                                                                        <div className="-mt-2 -ml-1 relative group">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                                                <path d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z" stroke="#0F93B1" stroke-linecap="round" stroke-linejoin="round" />
                                                                            </svg>
                                                                            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                                {feature.value}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                {/* Sub-features for each feature */}
                                                                {feature?.sub_features?.map((sub_feature) => (
                                                                    <React.Fragment key={sub_feature.id}>
                                                                        <tr className={`border-b border-gray-300 ${getColorClass()}`}>
                                                                            <td className="p-2 pl-6 text-sm flex items-center gap-2">
                                                                                {/* <img src={Tooltip} alt="" className="w-5 h-5" /> */}
                                                                                <GoDotFill className="text-primary text-[10px]" />
                                                                                {sub_feature?.sub_feature}
                                                                                <div className="-mt-2 -ml-1 relative group">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                                                        <path d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z" stroke="#0F93B1" stroke-linecap="round" stroke-linejoin="round" />
                                                                                    </svg>
                                                                                    <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                                        {sub_feature.value}
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        {/* Sub-Sub-Features for each sub-feature */}
                                                                        {sub_feature?.sub_sub_features?.map(
                                                                            (sub_sub_feature) => (
                                                                                <tr
                                                                                    key={sub_sub_feature.id}
                                                                                    className={`border-b border-gray-300 ${getColorClass()}`}
                                                                                >
                                                                                    <td className="p-2 pl-10 text-sm flex items-center gap-2">
                                                                                        <GoDotFill className="text-primary text-[10px]" />{sub_sub_feature?.sub_sub_feature}
                                                                                        <div className="-mt-2 -ml-1 relative group">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                                                                <path d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z" stroke="#0F93B1" stroke-linecap="round" stroke-linejoin="round" />
                                                                                            </svg>
                                                                                            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                                                {sub_sub_feature.value}
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </React.Fragment>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))
                            ) : (
                                <>
                                    <div
                                        className="bg-[#EEF4FD] flex gap-[10px] py-3 px-[10px] border-r h-12 border-[#C1C1C1] mt-1 cursor-pointer "
                                        style={{ borderBottom: "0.8px solid #E2E2E2" }}
                                        onClick={() => toggleDescriptionAndTable(data?.id)}
                                    >
                                        <img
                                            src={
                                                data?.images?.length > 1
                                                    ? data.images[1]
                                                    : "/path/to/placeholder-image.png"
                                            }
                                            alt={data?.name}
                                            className="object-cover w-5 h-auto"
                                        />
                                        <h4 className="text-base font-medium text-dark-text-3">
                                            {data?.name}
                                        </h4>
                                    </div>
                                    {expandedTables[data?.id] && (
                                        <div className="w-full">
                                            <table className="w-full">
                                                <tbody>
                                                    {data?.features?.map((feature) => (
                                                        <React.Fragment key={feature.id}>
                                                            {/* Main Feature Row */}
                                                            <tr
                                                                className={`border-b border-gray-300 ${getColorClass()}`}
                                                            >
                                                                <td className="p-2 text-sm text-dark-text-3 flex items-center gap-2">


                                                                    {feature?.feature}
                                                                    <div className="-mt-2 -ml-1 relative group">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                                            <path d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z" stroke="#0F93B1" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                        <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                            {feature.value}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            {/* Sub-features for each feature */}
                                                            {feature?.sub_features?.map((sub_feature) => (
                                                                <React.Fragment key={sub_feature.id}>
                                                                    <tr
                                                                        className={`border-b border-gray-300 ${getColorClass()}`}
                                                                    >
                                                                        <td className="p-2 pl-6 text-sm flex items-center gap-2">
                                                                            <GoDotFill className="text-primary text-[10px]" />{sub_feature?.sub_feature}
                                                                            <div className="-mt-2 -ml-1 relative group">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                                                    <path d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z" stroke="#0F93B1" stroke-linecap="round" stroke-linejoin="round" />
                                                                                </svg>
                                                                                <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                                    {sub_feature.value}
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    {/* Sub-Sub-Features for each sub-feature */}
                                                                    {sub_feature?.sub_sub_features?.map(
                                                                        (sub_sub_feature) => (
                                                                            <tr
                                                                                key={sub_sub_feature.id}
                                                                                className={`border-b border-gray-300 ${getColorClass()}`}
                                                                            >
                                                                                <td className="p-2 pl-10 text-sm flex items-center gap-2">
                                                                                    <GoDotFill className="text-primary text-[10px]" />{sub_sub_feature?.sub_sub_feature}
                                                                                    <div className="-mt-2 -ml-1 relative group">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                                                            <path d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z" stroke="#0F93B1" stroke-linecap="round" stroke-linejoin="round" />
                                                                                        </svg>
                                                                                        <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                                            {sub_sub_feature.value}
                                                                                        </span>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="md:w-2/3 w-[40%] overflow-x-auto relative">
                            <div className="flex h-36 w-full border-r border-[#0F93B1]">
                                {data?.product_packages?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 p-1 md:p-4 text-center flex flex-col items-center justify-center border-t border-b border-r border-[#0F93B1]"
                                    >
                                        <h3
                                            className={`text-xs md:text-lg font-medium text-[#0F93B1]`}
                                        >
                                            {item.package}
                                        </h3>
                                        <p
                                            className={`text-[10px] md:text-base font-medium text-[#0F93B1]`}
                                        >
                                            {currencyIcon}
                                            {parseInt(
                                                item?.payment_methods
                                                    ?.find((p) => p.payment_method === activePlan)
                                                    ?.payment_method_details.find(
                                                        (detail) => detail.detail === selectedCurrency
                                                    )?.price
                                            ) || "N/A"}
                                            {planSuffix}
                                        </p>
                                        <button
                                            className={`mt-4 bg-primary hover:bg-white hover:text-primary hover:border hover:border-primary text-white rounded hover:bg-primary-dark
                                        text-[8px] md:text-sm py-1 md:py-2 px-2 md:px-4`}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                            {dynamicURL === "combine_product" ? (
                                data?.clone_products?.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div
                                            className="flex items-center justify-between pl-[10px] pr-[10px] mt-1 bg-[#EEF4FD] relative w-full h-12 cursor-pointer"
                                            style={{ borderBottom: "0.8px solid #E2E2E2" }}
                                            onClick={() => toggleDescriptionAndTable(item.id)}
                                        >
                                            <h2
                                                className={`text-sm text-dark-text-3 font-normal  ${expandedTables[item.id] ? "" : "truncate"
                                                    }`}
                                            >
                                                {item?.short_description}
                                            </h2>
                                            <div className="flex flex-col">
                                                <button className="text-dark-text-3 hover:text-primary-dark mb-1">
                                                    {expandedTables[item.id] ? (
                                                        <IoIosArrowUp className="h-6 w-6" />
                                                    ) : (
                                                        <IoIosArrowDown className="h-6 w-6" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {expandedTables[item.id] && (
                                            <div className="w-full">
                                                <table className="w-full">
                                                    <tbody>
                                                        {item?.features?.map((feature) => (
                                                            <React.Fragment key={feature.id}>
                                                                <tr
                                                                    className={`border-b border-gray-300 ${getColorClass()}`}
                                                                >
                                                                    {data?.product_packages?.map(
                                                                        (pkg, pkgIndex) => (
                                                                            <td
                                                                                key={pkg.id}
                                                                                className="px-4 py-[6px] text-center"
                                                                            >
                                                                                {isFeatureActivated(
                                                                                    feature,
                                                                                    pkg.id,
                                                                                    "main"
                                                                                ) ? (
                                                                                    <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                                                ) : (
                                                                                    <FaMinus className="inline-block text-[#DCDCDC] text-lg" />
                                                                                )}
                                                                            </td>
                                                                        )
                                                                    )}
                                                                </tr>
                                                                {feature?.sub_features?.map((sub_feature) => (
                                                                    <React.Fragment key={sub_feature.id}>
                                                                        <tr
                                                                            className={`border-b border-gray-300 ${getColorClass()}`}
                                                                        >
                                                                            {data?.product_packages?.map(
                                                                                (pkg, pkgIndex) => (
                                                                                    <td
                                                                                        key={pkg.id}
                                                                                        className="px-4 py-[6px] text-center"
                                                                                    >
                                                                                        {isFeatureActivated(
                                                                                            sub_feature,
                                                                                            pkg.id,
                                                                                            "sub"
                                                                                        ) ? (
                                                                                            <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                                                        ) : (
                                                                                            <FaMinus className="inline-block text-[#DCDCDC] text-lg" />
                                                                                        )}
                                                                                    </td>
                                                                                )
                                                                            )}
                                                                        </tr>
                                                                        {sub_feature?.sub_sub_features?.map(
                                                                            (sub_sub_feature) => (
                                                                                <tr
                                                                                    key={sub_sub_feature.id}
                                                                                    className={`border-b border-gray-300 ${getColorClass()}`}
                                                                                >
                                                                                    {data?.product_packages?.map(
                                                                                        (pkg, pkgIndex) => (
                                                                                            <td
                                                                                                key={pkg.id}
                                                                                                className="px-4 py-[6px] text-center"
                                                                                            >
                                                                                                {isFeatureActivated(
                                                                                                    sub_sub_feature,
                                                                                                    pkg.id,
                                                                                                    "sub_sub"
                                                                                                ) ? (
                                                                                                    <IoCheckmarkSharp className="inline-block text-primary" />
                                                                                                ) : (
                                                                                                    <FaMinus className="inline-block text-[#DCDCDC]" />
                                                                                                )}
                                                                                            </td>
                                                                                        )
                                                                                    )}
                                                                                </tr>
                                                                            )
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </React.Fragment>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))
                            ) : (
                                <>
                                    <div
                                        className="flex items-center justify-between pl-[10px] pr-[10px] mt-1 bg-[#EEF4FD] relative w-full h-12 cursor-pointer"
                                        style={{ borderBottom: "0.8px solid #E2E2E2" }}
                                        onClick={() => toggleDescriptionAndTable(data?.id)}
                                    >
                                        <h2
                                            className={`text-sm text-dark-text-3 font-normal ${expandedTables[data?.id] ? "" : "truncate"
                                                }`}
                                        >
                                            {data?.short_description}
                                        </h2>
                                        <div className="flex flex-col">
                                            <button className="text-dark-text-3 hover:text-primary-dark mb-1">
                                                {expandedTables[data?.id] ? (
                                                    <IoIosArrowUp className="h-6 w-6" />
                                                ) : (
                                                    <IoIosArrowDown className="h-6 w-6" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    {expandedTables[data?.id] && (
                                        <div className="w-full">
                                            <table className="w-full">
                                                <tbody>
                                                    {data?.features?.map((feature) => (
                                                        <React.Fragment key={feature.id}>
                                                            <tr
                                                                className={`border-b border-gray-300 ${getColorClass()}`}
                                                            >
                                                                {data?.product_packages?.map(
                                                                    (pkg, pkgIndex) => (
                                                                        <td
                                                                            key={pkg.id}
                                                                            className="px-4 py-[6px] text-center"
                                                                        >
                                                                            {isFeatureActivated(
                                                                                feature,
                                                                                pkg.id,
                                                                                "main"
                                                                            ) ? (
                                                                                <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                                            ) : (
                                                                                <FaMinus className="inline-block text-[#DCDCDC] text-lg" />
                                                                            )}
                                                                        </td>
                                                                    )
                                                                )}
                                                            </tr>
                                                            {feature?.sub_features?.map((sub_feature) => (
                                                                <React.Fragment key={sub_feature.id}>
                                                                    <tr
                                                                        className={`border-b border-gray-300 ${getColorClass()}`}
                                                                    >
                                                                        {data?.product_packages?.map(
                                                                            (pkg, pkgIndex) => (
                                                                                <td
                                                                                    key={pkg.id}
                                                                                    className="px-4 py-[6px] text-center"
                                                                                >
                                                                                    {isFeatureActivated(
                                                                                        sub_feature,
                                                                                        pkg.id,
                                                                                        "sub"
                                                                                    ) ? (
                                                                                        <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                                                    ) : (
                                                                                        <FaMinus className="inline-block text-[#DCDCDC] text-lg" />
                                                                                    )}
                                                                                </td>
                                                                            )
                                                                        )}
                                                                    </tr>
                                                                    {sub_feature?.sub_sub_features?.map(
                                                                        (sub_sub_feature) => (
                                                                            <tr
                                                                                key={sub_sub_feature.id}
                                                                                className={`border-b border-gray-300 ${getColorClass()}`}
                                                                            >
                                                                                {data?.product_packages?.map(
                                                                                    (pkg, pkgIndex) => (
                                                                                        <td
                                                                                            key={pkg.id}
                                                                                            className="px-4 py-[6px] text-center"
                                                                                        >
                                                                                            {isFeatureActivated(
                                                                                                sub_sub_feature,
                                                                                                pkg.id,
                                                                                                "sub_sub"
                                                                                            ) ? (
                                                                                                <IoCheckmarkSharp className="inline-block text-primary" />
                                                                                            ) : (
                                                                                                <FaMinus className="inline-block text-[#DCDCDC]" />
                                                                                            )}
                                                                                        </td>
                                                                                    )
                                                                                )}
                                                                            </tr>
                                                                        )
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
);

export default PriceTableMobile;