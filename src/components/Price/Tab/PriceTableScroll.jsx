import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const PriceTableScroll = React.forwardRef(({ dynamicURL, tabId, activePlan, selectedCurrency }, ref) => {
    // console.log('Price Table Data:', tabId);
    // console.log('Price Table Dynamic URL:', dynamicURL);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [price, setPrice] = useState(''); // State to hold the price

    const [openProducts, setOpenProducts] = useState({});

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

    // console.log('Active Plan from Table:', activePlan);
    // console.log('Currency from Table:', selectedCurrency);
    let currencyIcon = '';
    if (selectedCurrency === 'USD') {
        currencyIcon = '$';
    } else if (selectedCurrency === 'EUR') {
        currencyIcon = '€';
    } else if (selectedCurrency === 'BDT') {
        currencyIcon = '৳';
    } else {
        currencyIcon = 'N/A';
    }
    let planSuffix = '';
    if (activePlan === 'Monthly') {
        planSuffix = '/mo';
    } else if (activePlan === 'Quarterly') {
        planSuffix = '/3mo';
    } else if (activePlan === 'Yearly') {
        planSuffix = '/yr';
    } else {
        planSuffix = '';
    }
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            if (!dynamicURL || !tabId) return;

            const endPoint = `${baseUrl}/blog/products-pricing/products-packages-with-features-update?${dynamicURL}=${tabId}`;
            // console.log('API Endpoint:', endPoint);

            try {
                const response = await fetch(endPoint);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const result = await response.json();
                console.log('Fetched Data:', result);
                setData(result); // Update data state
                updatePrice(result, activePlan, selectedCurrency); // Update the price based on fetched data
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message); // Set error state
            } finally {
                setLoading(false); // Set loading state to false
            }
        };

        fetchData();
    }, [dynamicURL, tabId, activePlan, selectedCurrency]);

    // Function to update the price based on activePlan and selectedCurrency
    const updatePrice = (data, activePlan, selectedCurrency) => {
        if (!data || !activePlan || !selectedCurrency) return;

        const activePackage = data.product_packages?.find(
            (pkg) => pkg.package.toLowerCase() === activePlan.toLowerCase()
        );

        if (activePackage) {
            const currencyPrice = activePackage.prices?.find(
                (price) => price.currency.toLowerCase() === selectedCurrency.toLowerCase()
            );
            setPrice(currencyPrice ? currencyPrice.amount : 'N/A'); // Set price or display N/A
        }
    };

    const isFeatureActivated = (feature, packageId, level = "main") => {
        return feature.product_packages.some(
            (pkg) => pkg.id === packageId && pkg.activated
        );
    };


    const styleLastWord = (text) => {
        if (!text) return '';
        const words = text.split(' ');
        const lastWord = words.pop();
        return (
            <>
                {words.join(' ')} <span className='text-primary capitalize'>{lastWord}</span>
            </>
        );
    };
    const headerRef = useRef(null);
    const [headerTop, setHeaderTop] = useState(0);
    const [isAbsolute, setIsAbsolute] = useState(false);

    useEffect(() => {
        const calculateHeaderTop = () => {
            if (headerRef.current) {
                const headerRect = headerRef.current.getBoundingClientRect();
                setHeaderTop(headerRect.top);
                setIsAbsolute(headerRect.top == 80);
            }
        };

        calculateHeaderTop();
        window.addEventListener('scroll', calculateHeaderTop);
        window.addEventListener('resize', calculateHeaderTop);

        return () => {
            window.removeEventListener('scroll', calculateHeaderTop);
            window.removeEventListener('resize', calculateHeaderTop);
        };
    }, []);
    console.log('isabsulate', isAbsolute)

    return (
        <div className='main_container mb-4 '>
            <div ref={ref} className='text-center md:pt-16 md:pb-9'>
                <h2 className='text-secondary-1 text-2xl md:text-4xl font-bold'>
                    Compare All Plans With <span className='text-primary'>Full of Features</span>
                </h2>
            </div>

            <div className='w-full border-[#0F93B1] border-[0.5px] flex bg-[#EEF4FD] sticky top-[75px] z-40 '>
                <div className='w-[33.33%] flex flex-col text-center items-center justify-center border-r border-[#0F93B1] p-6'>
                    <h2 className='text-[#0F93B1] text-lg md:text-[28px] font-medium'>
                        {styleLastWord(data?.name)}
                    </h2>
                    <h3 className='text-[#0F93B1] text-sm md:text-lg font-medium'>Includes the Following</h3>
                </div>

                <div className='w-[66.66%] flex relative'>
                    {data?.product_packages?.map((item, index) => (
                        <div
                            key={index}
                            className={`flex-1 p-1 md:p-4 text-center flex flex-col items-center  ${index !== data.product_packages.length - 1 ? 'border-r border-r-[#0F93B1]' : ''
                                }`}
                        >
                            <h3 className='text-xs md:text-lg font-medium text-[#0F93B1]'>{item.package}</h3>
                            <p className='text-[10px] md:text-base font-medium text-[#0F93B1]'>
                                {currencyIcon}{parseInt(
                                    item?.payment_methods?.find((p) => p.payment_method === activePlan)
                                        ?.payment_method_details.find(detail => detail.detail === selectedCurrency)?.price
                                ) || 'N/A'}{planSuffix}
                            </p>

                            <button className="mt-4 bg-primary md:text-sm text-[8px] hover:bg-white hover:text-primary hover:border hover:border-primary text-white py-1 md:py-2 px-2 md:px-4 rounded hover:bg-primary-dark">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {
                dynamicURL === 'combine_product' ? (
                    <>
                        {data?.clone_products?.map((product, index) => (
                            <React.Fragment key={product.id}>
                                <div className={`bg-[#EEF4FD] border-b-[2px] border-t-[4px] border-white cursor-pointer mt-1 w-full text-center items-center flex justify-center sticky z-20 ${index === 0 ? 'top-[213px]' : index === 1 ? 'top-[257px]' : index === 2 ? 'top-[300px]' : `top-[${213 + (index * 44)}px]`}`}>
                                    <div className='w-full flex ' onClick={() => handleToggle(product.id)}>
                                        <div className='flex  items-center gap-2 w-1/3 border-r border-[#C1C1C1] px-2 py-2' >
                                            {product?.images && product.images.length > 0 && (
                                                <img src={product.images[product.images.length - 1]} alt="" className='w-6 h-6' />
                                            )}
                                            {product?.name}
                                        </div>
                                        <div className='w-2/3 flex justify-between items-center px-2'>
                                            {product?.short_description}
                                            <div className="">
                                                {openProducts[product.id] ? (
                                                    <IoIosArrowUp className="w-[24px] h-[24px] text-dark-text-3" />
                                                ) : (
                                                    <IoIosArrowDown className="w-[24px] h-[24px] text-dark-text-3" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {openProducts[product.id] && (
                                    <div className="flex justify-center items-center bg-gray-100">
                                        <div className="w-full overflow-auto">
                                            <table className="w-full bg-white overflow-hidden">
                                                <tbody>
                                                    {product?.features?.map((feature, featureIndex) => (
                                                        <React.Fragment key={feature.id}>
                                                            {/* Main Feature Row */}
                                                            <tr
                                                                className={
                                                                    featureIndex % 2 === 0
                                                                        ? "bg-[#FCFCFC]"
                                                                        : "bg-white w-full"
                                                                }
                                                                style={{ borderBottom: "0.5px solid #E2E2E2" }}
                                                            >
                                                                <td className="px-4 w-full  py-3 text-sm font-medium text-dark-text-3 flex gap-2">
                                                                    <div className="truncate ">{feature.feature}</div>
                                                                    <div className=" -mt-1 -ml-1 relative group">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            strokeWidth={1.5}
                                                                            stroke="currentColor"
                                                                            className="w-4 h-4 cursor-pointer text-[#0F93B1]"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                                            />
                                                                        </svg>
                                                                        <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#0F93B1] text-white text-xs p-1 rounded">
                                                                            {feature.value}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                {data?.product_packages?.map(pkg => (
                                                                    <td key={pkg.id} className="px-4 py-3 text-center" style={{ width: `${66.66 / data.product_packages.length}%` }}>
                                                                        {isFeatureActivated(feature, pkg.id) ? (
                                                                            <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                                        ) : <FaMinus className=" inline-block text-[#DCDCDC] text-lg" />}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                            {/* Sub-Features */}
                                                            {feature.sub_features?.length > 0 &&
                                                                feature.sub_features.map((subFeature, subFeatureIndex) => (
                                                                    <tr
                                                                        key={`subfeature-${subFeature.id}`}
                                                                        className={
                                                                            subFeatureIndex % 2 === 0
                                                                                ? "bg-gray-100"
                                                                                : "bg-white"
                                                                        }
                                                                        style={{ borderBottom: "0.5px solid #E2E2E2" }}
                                                                    >
                                                                        <td className="px-4 w-full  py-3 text-sm font-medium text-dark-text-3 flex gap-2">
                                                                            <div className="truncate ">{subFeature.sub_feature}</div>
                                                                            <div className=" -mt-1 -ml-1 relative group">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={1.5}
                                                                                    stroke="currentColor"
                                                                                    className="w-4 h-4 cursor-pointer text-[#0F93B1]"
                                                                                >
                                                                                    <path
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                                                    />
                                                                                </svg>
                                                                                <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#0F93B1] text-white text-xs p-1 rounded">
                                                                                    {subFeature.value}
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        {data?.product_packages?.map(pkg => (
                                                                            <td key={pkg.id} className="px-4 py-3 text-center" style={{ width: `${66.66 / data.product_packages.length}%` }}>
                                                                                {isFeatureActivated(subFeature, pkg.id) && (
                                                                                    <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                                                )}
                                                                            </td>
                                                                        ))}
                                                                    </tr>
                                                                ))}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </>
                ) : (
                    <>
                        <div className='bg-[#EEF4FD] border-b-[0.8px] border-[#C1C1C1] border-t-2 border-t-white cursor-pointer mt-1 w-full text-center items-center flex justify-center sticky top-[213px] z-20' >
                            <div className='w-full flex ' onClick={() => handleToggle(data?.id)}>
                                <div className='flex  items-center gap-2 w-1/3 border-r border-[#C1C1C1] px-2 py-2' >
                                    {data?.images && data.images.length > 0 && (
                                        <img src={data.images[data.images.length - 1]} alt="" className='w-6 h-6' />
                                    )}
                                    {data?.name}
                                </div>
                                <div className='w-2/3 flex justify-between items-center px-2'>
                                    {data?.short_description}
                                    <div className="">
                                        {openProducts[data?.id] ? (
                                            <IoIosArrowUp className="w-[24px] h-[24px] text-dark-text-3" />
                                        ) : (
                                            <IoIosArrowDown className="w-[24px] h-[24px] text-dark-text-3" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {openProducts[data?.id] && (
                            <div className="flex justify-center items-center bg-gray-100">
                                <div className="w-full overflow-auto">
                                    <table className="w-full bg-white overflow-hidden">
                                        <tbody>
                                            {data?.features?.map((feature, featureIndex) => (
                                                <React.Fragment key={feature.id}>
                                                    {/* Main Feature Row */}
                                                    <tr
                                                        className={
                                                            featureIndex % 2 === 0
                                                                ? "bg-[#FCFCFC]"
                                                                : "bg-white w-full"
                                                        }
                                                        style={{ borderBottom: "0.5px solid #E2E2E2" }}
                                                    >
                                                        <td className="px-4 w-full  py-3 text-sm font-medium text-dark-text-3 flex gap-2">
                                                            <div className="truncate ">{feature.feature}</div>
                                                            <div className=" -mt-1 -ml-1 relative group">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={1.5}
                                                                    stroke="currentColor"
                                                                    className="w-4 h-4 cursor-pointer text-[#0F93B1]"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                                    />
                                                                </svg>
                                                                <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#0F93B1] text-white text-xs p-1 rounded">
                                                                    {feature.value}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        {data?.product_packages?.map(pkg => (
                                                            <td key={pkg.id} className="px-4 py-3 text-center" style={{ width: `${66.66 / data.product_packages.length}%` }}>
                                                                {isFeatureActivated(feature, pkg.id) ? (
                                                                    <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                                ) : <FaMinus className=" inline-block text-[#DCDCDC] text-lg" />}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {/* Sub-Features */}
                                                    {feature.sub_features?.length > 0 &&
                                                        feature.sub_features.map((subFeature, subFeatureIndex) => (
                                                            <tr
                                                                key={`subfeature-${subFeature.id}`}
                                                                className={
                                                                    subFeatureIndex % 2 === 0
                                                                        ? "bg-gray-100"
                                                                        : "bg-white"
                                                                }
                                                                style={{ borderBottom: "0.5px solid #E2E2E2" }}
                                                            >
                                                                {/* <td className="px-4 py-3 text-sm text-gray-600 pl-8 w-[33.33%]">
                                                                    <div className="truncate flex gap-2 items-center">
                                                                        <GoDotFill className="text-primary w-2" />
                                                                        {subFeature.sub_feature}
                                                                        <div className=" -mt-1 -ml-1 relative group">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                strokeWidth={1.5}
                                                                                stroke="currentColor"
                                                                                className="w-4 h-4 cursor-pointer text-[#0F93B1]"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                                                />
                                                                            </svg>
                                                                            <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#0F93B1] text-white text-xs p-1 rounded">
                                                                                {subFeature.value}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td> */}
                                                                <td className="px-4 w-full  py-3 text-sm font-medium text-dark-text-3 flex gap-2">
                                                                    <div className="truncate ">{subFeature.sub_feature}</div>
                                                                    <div className=" -mt-1 -ml-1 relative group">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            strokeWidth={1.5}
                                                                            stroke="currentColor"
                                                                            className="w-4 h-4 cursor-pointer text-[#0F93B1]"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                                            />
                                                                        </svg>
                                                                        <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#0F93B1] text-white text-xs p-1 rounded">
                                                                            {subFeature.value}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                {data?.product_packages?.map(pkg => (
                                                                    <td key={pkg.id} className="px-4 py-3 text-center" style={{ width: `${66.66 / data.product_packages.length}%` }}>
                                                                        {isFeatureActivated(subFeature, pkg.id) && (
                                                                            <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                                        )}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </>
                )
            }

        </div>
    );
});

export default PriceTableScroll;