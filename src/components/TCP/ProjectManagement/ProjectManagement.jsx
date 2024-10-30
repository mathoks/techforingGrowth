import { SubTitle } from "@/components/Common/SubTitle";
import { Title } from "@/components/Common/Title";
import { AssignmentSVG, InitializationSVG, RealTimeProjectSVG } from "@/SvgIcons";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectManagementSection = () => {

    const [selected, setSelected] = useState(data[0]);
    const [imageOrder, setImageOrder] = useState(0);

    let animatedContent;


    useEffect(() => {
        if (selected.id === 2) {
            const interval = setInterval(() => {
                setImageOrder(prev => (prev >= 3 ? 0 : prev + 1));
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [selected.id]);

    if (selected.id == 1) {
        animatedContent = (
            <div className="image-wrapper">
                {selected.images.map((image, index) => (
                    <div key={index} className={`anim_${index}`}>
                        <Image src={image} alt={`image ${index + 1}`} fill className="object-contain"/>
                    </div>
                ))}
            </div>
        )
    } else if (selected.id == 2) {
        animatedContent = (
            <div className="image-wrapper">
                <Image src={data[1].images[imageOrder]} alt={`image`} fill className="object-contain" />
            </div>
        )
    } else {
        animatedContent = (
            <div className="image-wrapper">
                {selected.images.map((image, index) => (
                    <div key={index} className={`anim_${index} ${index == 1 && selected.id == 3 && '!mt-8'}`}>
                        <Image src={image} alt={`image ${index + 1}`} fill className="object-contain" />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="container pt-[56px] pb-12 lg:pb-0 px-4 lg:px-0">
            <Title text={"Efficient Project Management Simplified"} className={"text-blue"} />

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:pt-[55px]">

                <div className="image-container hidden lg:block">
                    {animatedContent}
                </div>


                {/* desktop view */}
                <div className="text-&-icons -mt-20 lg:-mt-0 hidden lg:block">
                    <div className="flex flex-col">
                        {
                            data.map((item) => (
                                <div key={item.id} className="flex items-center justify-start gap-3 cursor-pointer" onClick={() => setSelected(item)}>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <div className="icon w-[80px] h-[80px] rounded-full shadow-lg flex items-center justify-center gap-2 ">
                                                {item.icon}
                                            </div>
                                            <SubTitle text={item.text} className={'text-blue '} />
                                        </div>
                                        <div className="w-[3px] h-[30px] bg-blue relative left-10"></div>
                                        {selected.id === item.id && (
                                            <div>
                                                {selected.subText.map(text => (
                                                    <div key={text}>
                                                        <div className="flex items-center gap-[20px] ms-[33px] lg:ms-[30px]">
                                                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue/20 ">
                                                                <div className="w-3 h-3 rounded-full bg-blue shadow-blue">
                                                                </div>
                                                            </div>
                                                            <p className="text-[16px] font-light text-lightBlack">{text}</p>
                                                        </div>
                                                        <div className="w-[3px] h-[35px] lg:h-[30px] bg-blue relative left-10"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>


                                </div>
                            ))
                        }


                    </div>
                </div>

                {/* mobile view */}
                <div className="lg:hidden">
                    {
                        data.map((item) => (
                            <div key={item.id} className="flex items-center flex-col justify-start gap-4 cursor-pointer" >
                                <Image src={item.images[0]} alt="image" width={1000} height={1000} className="w-full h-full p-4 mx-auto mt-4" />
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <div className="icon w-[80px] h-[80px] rounded-full shadow-lg flex items-center justify-center gap-2 ">
                                            {item.icon}
                                        </div>
                                        <SubTitle text={item.text} className={'text-blue '} />
                                    </div>
                                    <div className="w-[3px] h-[30px] bg-blue relative left-10"></div>

                                    <div>
                                        {item.subText.map(text => (
                                            <div key={text}>
                                                <div className="flex items-center gap-[20px] ms-[33px] lg:ms-[30px]">
                                                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue/20 ">
                                                        <div className="w-3 h-3 rounded-full bg-blue shadow-blue">
                                                        </div>
                                                    </div>
                                                    <p className="text-[16px] font-light text-lightBlack">{text}</p>
                                                </div>
                                                <div className="w-[3px] h-[35px] lg:h-[30px] bg-blue relative left-10"></div>
                                            </div>
                                        ))}
                                    </div>

                                </div>


                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default ProjectManagementSection;


const data = [
    {
        id: 1,
        icon: <InitializationSVG />,
        text: "Project Initialization",
        subText: ['Effortlessly onboard clients and initiate projects.', 'Store all project-related information securely for each client.'],
        images: ['/TCP/project-management/image1.1.svg', '/TCP/project-management/image1.2.svg', '/TCP/project-management/image1.3.svg',]
    },
    {
        id: 2,
        icon: <AssignmentSVG />,
        text: "Project Assignment",
        subText: ['Assign projects to specific employees or departments.', 'Ensure the right team members are handling the right tasks.', 'Define clear deadlines to keep projects on track.', 'Prioritize tasks to manage workload effectively and meet critical deadlines.'],
        images: ['/TCP/project-management/image2.1.svg', '/TCP/project-management/image2.2.svg', '/TCP/project-management/image2.3.svg', '/TCP/project-management/image2.4.svg',]
    },
    {
        id: 3,
        icon: <RealTimeProjectSVG />,
        text: "Real-Time Project Updates",
        subText: ['Employees and departments can update project progress regularly.', 'Clients can monitor progress in real-time through their dashboard.'],
        images: ['/TCP/project-management/image3.1.svg', '/TCP/project-management/image3.2.svg',]
    }
]

