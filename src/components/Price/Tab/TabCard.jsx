import React from "react";
import CheckCircleGreen from "../../../../public/CheckCircleGreen.svg";
import LightBulbOutline from "../../../../public/LightBulbOutline.svg";
import CheckCircleYellow from "../../../../public/CheckCircleYellow.svg";
import { CheckCircle } from "@/SvgIcons";
import Image from "next/image";
import { useState } from "react";

const TabCard = ({ item, activePlan }) => {
    const { custom_colour } = item;
    const { payment_methods } = item || {};
    const detail = payment_methods?.[0]?.payment_method_details?.[0]?.detail || 'N/A';
    const { technical_features } = item;
    const { highlights } = item;

    const plan = payment_methods[0]?.payment_method || 'N/A';
    let currencyIcon = '';
    if (detail === 'USD') {
        currencyIcon = '$';
    } else if (detail === 'EUR') {
        currencyIcon = '€';
    } else if (detail === 'BDT') {
        currencyIcon = '৳';
    } else {
        currencyIcon = 'N/A';
    }
    let planSuffix = '';
    if (plan === 'Monthly') {
        planSuffix = '/mo';
    } else if (plan === 'Quarterly') {
        planSuffix = '/3mo';
    } else if (plan === 'Yearly') {
        planSuffix = '/yr';
    } else {
        planSuffix = '';
    }


    const coustomColorCode = () => {
        return custom_colour || "#0F93B1";
    };

    const colorCode = coustomColorCode();
    const [showAll, setShowAll] = useState(false);
    const [showAllHighlights, setShowAllHighlights] = useState(false);
    const displayedFeatures = showAll ? technical_features : technical_features.slice(0, 4);


    return (
        <>
            {item.is_most_popular ? (
                <div
                    className="rounded-xl inline-flex items-center gap-6 flex-col relative w-[280px] "
                    style={{
                        padding: "0px 12px 48px 12px",
                        boxShadow: "0px 2px 15px 0px rgba(91, 188, 46, 0.12)",
                        borderTop: `2.5px solid ${colorCode}`,
                        borderBottom: `2.5px solid ${colorCode}`,
                    }}
                >
                    <div className="flex absolute -top-2">
                        <div
                            className="flex justify-center items-center w-[180px] h-[40px] rounded-tl-[6px] py-1 px-5 "
                            style={{ boxShadow: "2px 0px 2px 0px rgba(0, 0, 0, 0.25)", backgroundColor: colorCode }}
                        >
                            <h2 className="text-white text-2xl font-medium">{item.package}</h2>
                        </div>
                        <div
                            className="w-1 h-2 rounded-tr-[6px] "
                            style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)", backgroundColor: colorCode }}
                        ></div>
                    </div>
                    <div className="flex flex-col justify-end items-center h-[60px] self-stretch pb-[6px]"
                        style={{ borderRadius: "0px 0px 100px 100px", background: "#EFF9EA" }}>
                        <h2 className=" text-center text-base font-normal"
                            style={{ color: colorCode }}
                        >
                            Most popular
                        </h2>
                    </div>
                    <h2 className="font-medium text-xl -mt-[10px] text-dark-text-3">{currencyIcon}{item?.payment_methods[0]?.payment_method_details[0]?.price}{planSuffix}</h2>
                    <h2
                        className=" text-sm font-medium px-4 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(157, 242, 117, 0.12)", color: colorCode }}
                    >
                        Billed {plan}
                    </h2>
                    <h2 className=" text-base font-bold"
                        style={{ color: colorCode }}
                    >{item.tag_line}</h2>
                    <hr className="w-full h-[2px] "
                        style={{ background: colorCode }} />
                    <h2 className="y text-base font-bold"
                        style={{ color: colorCode }}>Technical Features</h2>
                    <div className="flex-col items-start self-stretch gap-[6px]">
                        {["Up To 80 Users", "5 GB of storage", "Basic Security", "No Customization"].map(
                            (feature, index) => (
                                <div key={index} className="flex gap-3 items-center self-stretch mb-[6px]">
                                    <CheckCircle fillColor={custom_colour ? colorCode : "#0F93B1"} />
                                    <h2 className="text-dark-text-3 text-sm font-normal">{feature}</h2>
                                </div>
                            )
                        )}
                    </div>
                    <hr className="w-full h-[2px]  "
                        style={{ backgroundColor: colorCode }} />
                    <div className="flex-col items-start self-stretch gap-[6px] h-24">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex gap-3 items-center self-stretch mb-[6px]">
                                <Image src={LightBulbOutline} alt="feature" width={20} height={20} />
                                <h2 className="text-dark-text-3 text-sm font-normal">
                                    {highlight.highlight}
                                    {highlight.length > 4 && index === 3 && <span style={{ color: colorCode }}> & more...</span>}
                                </h2>
                            </div>
                        ))}
                    </div>
                    <button className="px-8 py-3 rounded-lg text-white" style={{ backgroundColor: colorCode }}>Maximize Performance</button>
                </div>
            ) : (
                <div
                    className="border inline-flex items-center gap-6 rounded-md flex-col relative w-[280px]"
                    style={{ borderColor: colorCode, padding: "48px 12px 24px 12px" }}
                >
                    <div className="flex absolute -top-2">
                        <div
                            className="flex justify-center items-center w-[180px] h-[40px] rounded-tl-[6px] py-1 px-5"
                            style={{ backgroundColor: colorCode, boxShadow: "2px 0px 2px 0px rgba(0, 0, 0, 0.25)" }}
                        >
                            <h2 className="text-white text-2xl font-medium">{item.package}</h2>
                        </div>
                        <div
                            className="w-1 h-2 rounded-tr-[6px]"
                            style={{ backgroundColor: colorCode, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)" }}
                        ></div>
                    </div>
                    <h2 className="font-medium text-xl text-dark-text-3">{currencyIcon}{item?.payment_methods[0]?.payment_method_details[0]?.price}{planSuffix}</h2>
                    <h2
                        className="text-sm font-medium px-4 py-1 rounded-full"
                        style={{ color: colorCode, backgroundColor: "rgba(117, 161, 242, 0.12)" }}
                    >
                        Billed {item.payment_methods[0]?.payment_method}
                    </h2>
                    <h2 className="text-base font-bold" style={{ color: custom_colour }}>
                        {item.tag_line}
                    </h2>
                    <hr className="w-full h-[2px]" style={{ backgroundColor: custom_colour }} />
                    <h2 className="text-base font-bold" style={{ color: custom_colour }}>
                        Technical Features
                    </h2>
                    <div className="flex-col items-start self-stretch gap-[6px] h-24">
                        {
                            displayedFeatures.map((technical_feature, index) => (
                                <div key={index} className="flex gap-3 items-center self-stretch mb-[6px]">
                                    <CheckCircle fillColor={custom_colour ? colorCode : "#0F93B1"} />
                                    <h2 className="text-dark-text-3 text-sm font-normal">{technical_feature.feature}</h2>
                                </div>
                            ))
                        }
                    </div>
                    <hr className="w-full h-[2px]" style={{ backgroundColor: custom_colour }} />
                    <div className="flex-col items-start self-stretch gap-[6px] h-24 ">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex gap-3 items-center self-stretch mb-[6px]">
                                <Image src={LightBulbOutline} alt="feature" width={20} height={20} />
                                <h2 className="text-dark-text-3 text-sm font-normal">
                                    {highlight.highlight}
                                    {highlight.length > 4 && index === 3 && <span style={{ color: colorCode }}> & more...</span>}
                                </h2>
                            </div>
                        ))}
                    </div>
                    <button className="px-8 py-3 rounded-lg text-white" style={{ backgroundColor: colorCode }}>
                        {item?.cta_text}
                    </button>
                </div>
            )}
        </>
    );
};

export default TabCard;