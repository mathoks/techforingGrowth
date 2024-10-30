
import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
const PackegeTableScrollPreview = React.forwardRef(
    ({
        dynamicURL,
        activePlan,
        selectedCurrency,
        scrollToDiv,
        productData,
        setSingleProduct,
        tabId,

        setActivePlan,
        setSelectedCurrency,
        availableProduct,
        currentIndex,
        setCurrentIndex, }, ref) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [price, setPrice] = useState("");
        const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
        const [isMobile, setIsMobile] = useState(false);
        const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
        const [openProducts, setOpenProducts] = useState({});
        const [expandedTables, setExpandedTables] = useState(() => {
            if (dynamicURL === "combine_product") {
                return {};  // For combined products, start with all closed
            } else {
                return { single: true };  // For single product, start with open
            }
        });




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
                setPrice(currencyPrice ? currencyPrice.amount : "N/A");
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

        const getBgColor = (index) => {
            const colors = [
                "bg-green-50",
                "bg-blue-50",
                "bg-blue-100",
                "bg-blue-200",
                "bg-teal-100",
            ];
            return colors[index % colors.length];
        };

        const getRandomPastelColor = () => {
            const hue = Math.floor(Math.random() * 360);
            return `hsla(${hue}, 100%, 87%, 0.3)`;
        };

        const renderCell = (isActivated) => {
            const bgColor = getRandomPastelColor();
            return (
                <div
                    className="flex items-center justify-center border border-gray-[#0F93B1]  p-4 h-10 w-full  bg-[#EEF4FD]"
                // style={{ backgroundColor: bgColor }}
                >
                    {isActivated ? (
                        <span className="text-primary text-2xl"><IoCheckmarkSharp /></span>
                    ) : (
                        <span className="text-gray-400 text-2xl"><FaMinus /></span>
                    )}
                </div>
            );
        };
        console.log("data from combine_product", data);

        const toggleTable = (productId) => {
            setExpandedTables((prev) => ({
                ...prev,
                [productId]: !prev[productId],
            }));
        };
        useEffect(() => {
            if (data?.clone_products) {
                const initialOpenState = data.clone_products.reduce((acc, product) => {
                    acc[product.id] = true; // Initially open
                    return acc;
                }, {});
                setOpenProducts(initialOpenState);
            } else if (data) {
                setOpenProducts({ [data.id]: true }); // For single product
            }
        }, [data]);
        const handleToggle = (productId) => {
            setOpenProducts(prev => ({
                ...prev,
                [productId]: !prev[productId]
            }));
        };

        return (
            <div>
                <div ref={ref} className="flex justify-start mx-4 items-center overflow-x-auto sticky top-[42px] z-30 border-b-[0.5px] border-[#0F93B1] bg-white ">
                    {productData
                        .map((tab, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex-shrink-0 ${index === currentIndex ? "border-b-2 border-primary" : ""
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    border: "0.5px solid #0F93B1",
                                    borderBottom: "none",
                                    borderRadius: "20px 20px 0px 0px",
                                    background:
                                        index === currentIndex ? "#E4EDFC" : "transparent",
                                    minWidth: "fit-content",
                                    marginRight: index < productData.length - 1 ? "-1px" : "0", // Add this line
                                }}
                            >
                                {tab.images?.length ? (
                                    <img
                                        src={tab.images[0]}
                                        alt={`Tab ${index}`}
                                        className="w-[60px] sm:w-[80px] lg:w-[112px] h-[18px] sm:h-[24px] lg:h-[32px] object-contain"
                                    />
                                ) : (
                                    <div className="w-[60px] sm:w-[80px] lg:w-[112px] h-[18px] sm:h-[24px] lg:h-[32px] bg-gray-200"></div>
                                )}
                            </div>
                        ))}
                </div>

                {
                    dynamicURL === "combine_product" ? (<React.Fragment>
                        {data?.clone_products?.map((product, index) => (
                            <React.Fragment key={index}>

                                <div onClick={() => handleToggle(product.id)} className={`bg-[#EEF4FD] p-1 mx-4 border-b border-white flex items-center justify-between sticky z-30 ${index === 0 ? 'top-[78px]' : index === 1 ? 'top-[182px]' : index === 2 ? 'top-[300px]' : `top-[${78 + (index * 72)}px]`}`}>
                                    <div>
                                        <div className="flex items-center gap-2 px-3">
                                            {product?.images && product.images.length > 0 ? (
                                                <img
                                                    src={product.images[product.images.length - 1]}
                                                    alt={data?.name || "Product"}
                                                    className="w-10 h-10"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                            )}
                                            <h2 className="text-lg font-medium text-[#0F93B1]">
                                                {styleLastWord(data?.name || "Product Name")}
                                            </h2>
                                        </div>
                                        <div className="my-3 px-3">
                                            <h2 className="text-dark-text-3 text-base font-medium h-[30px]">
                                                {product?.short_description || "No description available"}
                                            </h2>
                                        </div>
                                    </div>
                                    <button >
                                        {openProducts[product.id] ? (
                                            <IoIosArrowUp className="text-[#0F93B1] text-xl" />
                                        ) : (
                                            <IoIosArrowDown className="text-[#0F93B1] text-xl" />
                                        )}
                                    </button>
                                </div>



                                {/* className={`sticky z-20 ${index === 0 ? 'top-[213px]' : index === 1 ? 'top-[257px]' : index === 2 ? 'top-[300px]' : `top-[${213 + (index * 44)}px]`}`} */}
                                {
                                    openProducts[product.id] && (
                                        <table className="w-full border-separate border-spacing-y-4 px-2 table-fixed">
                                            <thead className={`bg-white sticky z-20 ${index === 0 ? 'top-[180px]' : index === 1 ? 'top-[278px]' : index === 2 ? 'top-[300px]' : `top-[${213 + (index * 44)}px]`}`} >
                                                <tr>
                                                    {data?.product_packages.map((pkg) => (
                                                        <th key={pkg.id} className="p-2 text-center">
                                                            <div className="flex flex-col items-center border-[0.8px] border-[#0F93B1] rounded-sm p-2 h-40 ">
                                                                <div className="transform -rotate-90 h-full flex flex-col justify-center ">
                                                                    <h2 className="text-lg font-medium text-[#0F93B1] whitespace-nowrap w-auto">
                                                                        {pkg.package}
                                                                    </h2>
                                                                    <p
                                                                        className={`${isMobile
                                                                            ? "text-lg"
                                                                            : "text-[12px] md:text-base"
                                                                            } font-medium text-[#0F93B1] whitespace-nowrap w-auto`}
                                                                    >
                                                                        {currencyIcon}
                                                                        {parseInt(
                                                                            pkg?.payment_methods
                                                                                ?.find(
                                                                                    (p) => p.payment_method === activePlan
                                                                                )
                                                                                ?.payment_method_details.find(
                                                                                    (detail) =>
                                                                                        detail.detail === selectedCurrency
                                                                                )?.price
                                                                        ) || "N/A"}
                                                                        {planSuffix}
                                                                    </p>
                                                                </div>
                                                                <button className="bg-primary text-white px-3 py-1.5 rounded-md mt-2 text-xs w-auto">
                                                                    Buy
                                                                </button>
                                                            </div>
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {product?.features.map((feature, featureIndex) => (
                                                    <React.Fragment key={feature.id}>
                                                        <tr className="">
                                                            <th colSpan={data?.product_packages.length} className=" px-2  text-left">
                                                                <div className="flex items-center gap-[6px]">
                                                                    <span className="text-secondary-1 font-medium">{feature.feature}</span>
                                                                    <div className=" -mt-2 relative group z-10">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="12"
                                                                            height="13"
                                                                            viewBox="0 0 12 13"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                                                stroke="#0F93B1"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 " style={{ width: `${feature.value.length}ch` }}>
                                                                            {feature.value}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            {data?.product_packages.map((pkg) => (
                                                                <td key={pkg.id} className="px-2 text-center">
                                                                    {renderCell(
                                                                        isFeatureActivated(feature, pkg.id)
                                                                    )}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                        {feature.sub_features.map((subFeature) => (
                                                            <React.Fragment key={subFeature.id}>
                                                                <tr>
                                                                    <th colSpan={data?.product_packages.length} className="px-2 text-left">
                                                                        <div className="pl-4 flex gap-[6px] items-center">
                                                                            <GoDotFill className="text-primary text-[10px]" />
                                                                            <span className="text-secondary-1 font-medium">{subFeature.sub_feature}</span>
                                                                            <div className=" -mt-2 relative group">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="12"
                                                                                    height="13"
                                                                                    viewBox="0 0 12 13"
                                                                                    fill="none"
                                                                                >
                                                                                    <path
                                                                                        d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                                                        stroke="#0F93B1"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                    />
                                                                                </svg>
                                                                                <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 " style={{ width: `${subFeature.value.length}ch` }}>
                                                                                    {subFeature.value}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    {data?.product_packages.map((pkg) => (
                                                                        <td
                                                                            key={pkg.id}
                                                                            className="px-2 text-center"
                                                                        >
                                                                            {renderCell(
                                                                                isFeatureActivated(
                                                                                    subFeature,
                                                                                    pkg.id,
                                                                                    "sub"
                                                                                )
                                                                            )}
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                                {subFeature.sub_sub_features.map(
                                                                    (subSubFeature) => (
                                                                        <React.Fragment key={subSubFeature.id}>
                                                                            <tr>
                                                                                <th colSpan={data?.product_packages.length} className=" text-left">
                                                                                    <div className="pl-9 flex gap-[6px] items-center">
                                                                                        <GoDotFill className="text-primary text-[10px]" />
                                                                                        <span className="text-secondary-1 font-medium">{subSubFeature.sub_sub_feature}</span>
                                                                                        <div className="  -mt-2 relative group">
                                                                                            <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="12"
                                                                                                height="13"
                                                                                                viewBox="0 0 12 13"
                                                                                                fill="none"
                                                                                            >
                                                                                                <path
                                                                                                    d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                                                                    stroke="#0F93B1"
                                                                                                    stroke-linecap="round"
                                                                                                    stroke-linejoin="round"
                                                                                                />
                                                                                            </svg>
                                                                                            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 " style={{ width: `${subSubFeature.value.length}ch` }}>
                                                                                                {subSubFeature.value}
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                {data?.product_packages.map((pkg) => (
                                                                                    <td
                                                                                        key={pkg.id}
                                                                                        className="px-2 text-center"
                                                                                    >
                                                                                        {renderCell(
                                                                                            isFeatureActivated(
                                                                                                subSubFeature,
                                                                                                pkg.id,
                                                                                                "sub_sub"
                                                                                            )
                                                                                        )}
                                                                                    </td>
                                                                                ))}
                                                                            </tr>
                                                                        </React.Fragment>
                                                                    )
                                                                )}
                                                            </React.Fragment>
                                                        ))}
                                                    </React.Fragment>
                                                ))}
                                            </tbody>
                                        </table>

                                    )
                                }

                            </React.Fragment>
                        ))}

                    </React.Fragment>) : (<div className=" px-2">
                        <div onClick={() => handleToggle(data?.id)} className="bg-[#EEF4FD] p-1 flex items-center justify-between mx-2 pt-2 sticky top-[78px] z-30 ">
                            <div>
                                <div className="flex items-center gap-2 px-3">
                                    {data?.images && data.images.length > 1 ? (
                                        <img
                                            src={data.images[data.images.length - 1]}
                                            alt={data?.name || "Product"}
                                            className="w-5 h-5"
                                        />
                                    ) : (
                                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                                    )}
                                    <h2 className="text-base font-medium text-[#0F93B1]">
                                        {styleLastWord(data?.name || "Product Name")}
                                    </h2>
                                </div>
                                <h2 className=" text-xs md:text-lg  my-3 px-3">
                                    {data?.short_description || "No description available"}
                                </h2>
                            </div>
                            <button >
                                {openProducts[data?.id] ? (
                                    <IoIosArrowUp className="text-[#0F93B1] text-xl" />
                                ) : (
                                    <IoIosArrowDown className="text-[#0F93B1] text-xl" />
                                )}
                            </button>
                        </div>
                        {
                            openProducts[data?.id] && (<table className="w-full border-separate border-spacing-y-4 table-fixed ">
                                <thead className="sticky top-[150px] z-20 bg-white" >
                                    <tr>
                                        {data?.product_packages.map((pkg) => (
                                            <th key={pkg.id} className="p-2 text-center">
                                                <div className="flex flex-col items-center border-[0.8px] border-[#0F93B1] rounded-sm p-2 h-40 ">
                                                    <div className="transform -rotate-90 h-full flex flex-col justify-center ">
                                                        <h2 className="text-lg font-medium text-[#0F93B1] whitespace-nowrap w-auto">
                                                            {pkg.package}
                                                        </h2>
                                                        <p
                                                            className={`${isMobile
                                                                ? "text-lg"
                                                                : "text-[12px] md:text-base"
                                                                } font-medium text-[#0F93B1] whitespace-nowrap w-auto`}
                                                        >
                                                            {currencyIcon}
                                                            {parseInt(
                                                                pkg?.payment_methods
                                                                    ?.find(
                                                                        (p) => p.payment_method === activePlan
                                                                    )
                                                                    ?.payment_method_details.find(
                                                                        (detail) =>
                                                                            detail.detail === selectedCurrency
                                                                    )?.price
                                                            ) || "N/A"}
                                                            {planSuffix}
                                                        </p>
                                                    </div>
                                                    <button className="bg-primary text-white px-3 py-1.5 rounded-md mt-2 text-xs w-auto">
                                                        Buy
                                                    </button>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.features?.map((feature, featureIndex) => (
                                        <React.Fragment key={feature.id}>
                                            <tr className="">
                                                <th colSpan={data?.product_packages.length} className=" px-2 mt-2 text-left">
                                                    <div className="flex items-center gap-[6px]">
                                                        <span className="text-secondary-1 font-medium">{feature.feature}</span>
                                                        <div className=" -mt-2 relative group z-10">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="12"
                                                                height="13"
                                                                viewBox="0 0 12 13"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                                    stroke="#0F93B1"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </svg>
                                                            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 " style={{ width: `${feature.value.length}ch` }}>
                                                                {feature.value}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                {data?.product_packages.map((pkg) => (
                                                    <td
                                                        key={pkg.id}
                                                        className="px-2 text-left"
                                                    >
                                                        {renderCell(isFeatureActivated(feature, pkg.id))}
                                                    </td>
                                                ))}
                                            </tr>
                                            {feature.sub_features.map((subFeature) => (
                                                <React.Fragment key={subFeature.id}>
                                                    <tr>
                                                        <th colSpan={data?.product_packages.length} className="px-2 text-left">
                                                            <div className="pl-4 flex gap-[6px] items-center">
                                                                <GoDotFill className="text-primary text-[10px]" />
                                                                <span className="text-secondary-1 font-medium">{subFeature.sub_feature}</span>
                                                                <div className=" -mt-2 relative group">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="12"
                                                                        height="13"
                                                                        viewBox="0 0 12 13"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                                            stroke="#0F93B1"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        />
                                                                    </svg>
                                                                    <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 " style={{ width: `${subFeature.value.length}ch` }}>
                                                                        {subFeature.value}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        {data?.product_packages.map((pkg) => (
                                                            <td key={pkg.id} className="px-2 text-left">
                                                                {renderCell(isFeatureActivated(subFeature, pkg.id, "sub"))}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {subFeature.sub_sub_features.map((subSubFeature) => (
                                                        <React.Fragment key={subSubFeature.id}>
                                                            <tr>
                                                                <th colSpan={data?.product_packages.length} className=" text-left">
                                                                    <div className="pl-9 flex gap-[6px] items-center">
                                                                        <GoDotFill className="text-primary text-[10px]" />
                                                                        <span className="text-secondary-1 font-medium">{subSubFeature.sub_sub_feature}</span>
                                                                        <div className="  -mt-2 relative group">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="12"
                                                                                height="13"
                                                                                viewBox="0 0 12 13"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                                                    stroke="#0F93B1"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                />
                                                                            </svg>
                                                                            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 " style={{ width: `${subSubFeature.value.length}ch` }}>
                                                                                {subSubFeature.value}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                {data?.product_packages.map((pkg) => (
                                                                    <td key={pkg.id} className="px-2 text-left">
                                                                        {renderCell(isFeatureActivated(subSubFeature, pkg.id, "sub_sub"))}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        </React.Fragment>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                                {/* <div className="absolute left-5 top-[272px]">
                                    {data?.features.map((feature, featureIndex) => (
                                        <React.Fragment key={feature.id}>
                                            <div className="font-medium my-[72px] flex gap-2">
                                                {feature.feature}
                                                <div className=" -ml-1 relative group">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="13"
                                                        viewBox="0 0 12 13"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                            stroke="#0F93B1"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                    <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                        {feature.value}
                                                    </span>
                                                </div>
                                            </div>
                                            {feature.sub_features.map((subFeature) => (
                                                <React.Fragment key={subFeature.id}>
                                                    <div className="pl-4 my-[70px] flex gap-2">
                                                        <GoDotFill className="text-primary text-[10px] mt-[6px]" />
                                                        {subFeature.sub_feature}
                                                        <div className=" -ml-1 relative group">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="12"
                                                                height="13"
                                                                viewBox="0 0 12 13"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                                    stroke="#0F93B1"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </svg>
                                                            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                {subFeature.value}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {subFeature.sub_sub_features.map(
                                                        (subSubFeature) => (
                                                            <div
                                                                key={subSubFeature.id}
                                                                className="pl-8 my-[70px] flex gap-2"
                                                            >
                                                                <GoDotFill className="text-primary text-[10px] mt-[6px]" />
                                                                {subSubFeature.sub_sub_feature}
                                                                <div className=" -ml-1 relative group">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="12"
                                                                        height="13"
                                                                        viewBox="0 0 12 13"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M6.5 8.73193H6V6.73193H5.5M6 4.73193H6.005M10.5 6.73193C10.5 7.32288 10.3836 7.90804 10.1575 8.45401C9.93131 8.99997 9.59984 9.49605 9.18198 9.91391C8.76412 10.3318 8.26804 10.6632 7.72208 10.8894C7.17611 11.1155 6.59095 11.2319 6 11.2319C5.40905 11.2319 4.82389 11.1155 4.27792 10.8894C3.73196 10.6632 3.23588 10.3318 2.81802 9.91391C2.40016 9.49605 2.06869 8.99997 1.84254 8.45401C1.6164 7.90804 1.5 7.32288 1.5 6.73193C1.5 5.53846 1.97411 4.39387 2.81802 3.54995C3.66193 2.70604 4.80653 2.23193 6 2.23193C7.19347 2.23193 8.33807 2.70604 9.18198 3.54995C10.0259 4.39387 10.5 5.53846 10.5 6.73193Z"
                                                                            stroke="#0F93B1"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        />
                                                                    </svg>
                                                                    <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                        {subSubFeature.value}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div> */}
                            </table>)
                        }

                    </div>)
                }




            </div>
        );
    }
);

export default PackegeTableScrollPreview;