import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
const SingleTable = ({ data }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };
    const isFeatureActivated = (feature, packageId) => {
        return feature.product_packages.some(pkg => pkg.id === packageId && pkg.activated);
    };

    return (
        <div >
            {/* Sticky Header */}
            <div className="relative w-full mt-[2px]  ">
                <div
                    className="w-full  bg-[#EEF4FD] border-b-[0.8px] border-[#C1C1C1] flex cursor-pointer sticky top-44 z-20 "
                    onClick={handleToggle}
                >
                    <div className="w-1/3 flex gap-[10px] py-3 px-[10px] border-r border-[#C1C1C1]">
                        <img
                            src={
                                data?.images?.length > 1
                                    ? data.images[1]
                                    : "/path/to/placeholder-image.png"
                            }
                            alt="TechForing CMS"
                            className="object-cover w-5 h-auto"
                        />
                        <h4 className="text-base font-medium text-dark-text-3">
                            {data?.name}
                        </h4>
                    </div>
                    <div className="w-4/6 flex items-center pl-[10px] relative">
                        <h2 className="text-sm text-dark-text-3 font-normal">
                            {data?.short_description}
                        </h2>
                        <div className="absolute top-3 right-2">
                            {isOpen ? (
                                <IoIosArrowUp className="w-[24px] h-[24px] text-dark-text-3" />
                            ) : (
                                <IoIosArrowDown className="w-[24px] h-[24px] text-dark-text-3" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Content */}
            {isOpen && (
                <div className="flex justify-center items-center bg-gray-100">
                    <div className="w-full overflow-auto">
                        <table className="w-full bg-white overflow-hidden">
                            {/* <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-4 py-2 text-left w-1/3">Features</th>
                                    {data.product_packages.map(pkg => (
                                        <th key={pkg.id} className="px-4 py-2 text-center">
                                            {pkg.package}
                                        </th>
                                    ))}
                                </tr>
                            </thead> */}
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
                                            <td className="px-4 w-1/3 py-3 text-sm font-medium text-dark-text-3">
                                                <div className="truncate">{feature.feature}</div>
                                            </td>
                                            {data?.product_packages?.map(pkg => (
                                                <td key={pkg.id} className="px-4 py-3 text-center">
                                                    {isFeatureActivated(feature, pkg.id) ? (
                                                        <IoCheckmarkSharp className="inline-block text-primary text-lg" />
                                                    ):<FaMinus className=" inline-block text-[#DCDCDC] text-lg"/>}
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
                                                    <td className="px-4 py-3 text-sm text-gray-600 pl-8 w-1/3">
                                                        <div className="truncate flex gap-1 items-center">
                                                            <GoDotFill className="text-primary w-2" />
                                                            {subFeature.sub_feature}
                                                        </div>
                                                    </td>
                                                    {data.product_packages.map(pkg => (
                                                        <td key={pkg.id} className="px-4 py-3 text-center">
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
        </div>
    );
};

export default SingleTable;