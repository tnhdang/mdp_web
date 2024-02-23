import React from "react";
import { Col, Row, Carousel } from "antd";
import img1 from "../assets/HomePage/sustain.png";
import img2 from "../assets/HomePage/sustain2.png";



const Sustainability = () => {

    const dataSlider = [
        {
            key: "1",
            picture: img1,
            title: "Environmental Sustainability ",
            mintitle1: "Carbon Neutrality: ",
            mindescription1: "Commit to achieving carbon neutrality by reducing greenhouse gas emissions from operations and offsetting remaining emissions through renewable energy projects or carbon offset programs.",
            mintitle2: "Energy Efficiency: ",
            mindescription2: "Implement energy-saving measures such as upgrading to energy-efficient lighting, optimizing HVAC systems, and promoting employee awareness of energy conservation practices.",
            mintitle3: "Renewable Energy: ",
            mindescription3: "Increase the use of renewable energy sources such as solar or wind power for our operations, and explore opportunities to invest in renewable energy projects.",
            mintitle4: "Waste Reduction: ",
            mindescription4: "Implement waste reduction strategies such as reducing single-use plastics, increasing recycling rates, and minimizing food waste through composting or donation programs.",
            mintitle5: "Water Conservation: ",
            mindescription5: "Implement water-saving measures such as installing water-efficient fixtures, optimizing irrigation systems, and promoting water conservation practices among employees.",

        },
        {
            key: "2",
            picture: img2,
            title: "Social Responsibility",
            mintitle1: "Diversity and Inclusion: ",
            mindescription1: "Foster a diverse and inclusive workplace culture by implementing policies and programs that promote equal opportunities, diversity training, and employee resource groups.",
            mintitle2: "Employee Well-being: ",
            mindescription2: "Prioritize the health, safety, and well-being of employees through comprehensive health and wellness programs, mental health support services, and flexible work arrangements.",
            mintitle3: "Community Engagement: ",
            mindescription3: "Engage with local communities through volunteer programs, charitable donations, and community partnerships that address social needs and contribute to community development.",
            mintitle4: "Ethical Supply Chain: ",
            mindescription4: "Ensure ethical sourcing and procurement practices by partnering with suppliers that adhere to labor rights, environmental standards, and ethical business practices.",
            mintitle5: "Transparency and Accountability: ",
            mindescription5: "Maintain transparency and accountability in our sustainability efforts by regularly reporting on progress, performance, and impact to stakeholders.",

        },
        {
            key: "3",
            picture: img1,
            title: "Economic Sustainability",
            mintitle1: "Responsible Investment: ",
            mindescription1: "Evaluate investment decisions based on environmental, social, and governance (ESG) criteria, and prioritize investments in sustainable and socially responsible projects or initiatives.",
            mintitle2: "Long-term Planning: ",
            mindescription2: "Incorporate sustainability considerations into strategic planning processes, business decisions, and risk management practices to ensure long-term viability and resilience.",
            mintitle3: "Cost Efficiency: ",
            mindescription3: "Identify opportunities to reduce costs and improve efficiency through sustainable practices such as energy and resource conservation, waste reduction, and process optimization.",
            mintitle4: "Innovation and Collaboration: ",
            mindescription4: "Foster innovation and collaboration with stakeholders to develop sustainable solutions, products, and services that create shared value for customers, communities, and the environment.",
            mintitle5: "",
            mindescription5: "",

        },
        {
            key: "4",
            picture: img2,
            title: "Continuous Improvement",
            mintitle1: "Monitoring and Reporting: ",
            mindescription1: "Establish metrics, targets, and key performance indicators (KPIs) to measure progress and performance in achieving sustainability goals, and regularly report on results to stakeholders.",
            mintitle2: "Feedback and Engagement: ",
            mindescription2: "Solicit feedback and input from employees, customers, suppliers, and other stakeholders to identify areas for improvement, innovation, and collaboration.",
            mintitle3: "Learning and Development: ",
            mindescription3: "Invest in employee training and development on sustainability topics to build awareness, knowledge, and skills that support sustainability initiatives and goals.",
            mintitle4: "Waste Reduction: ",
            mindescription4: "Implement waste reduction strategies such as reducing single-use plastics, increasing recycling rates, and minimizing food waste through composting or donation programs.",
            mintitle5: "",
            mindescription5: "By implementing these initiatives and commitments, MDP can demonstrate its dedication to sustainability, social responsibility, and long-term value creation for stakeholders while contributing to a more sustainable and resilient future.",

        },

    ];


    return (
        <div className="EndSolutionContainer w-[100%] h-fit ">
            <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution">
                <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
                    <p className="text-white text-8xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                        Sustainability
                    </p>
                </div>
            </div>

            <div className="w-[100%] mx-auto pl-[8rem] pvmax:max-lg:pl-[2rem] py-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-start w-[80%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
                    MDP's plan and commitments for sustainability should encompass a holistic approach that addresses environmental, social, and
                    economic dimensions. Here's a comprehensive plan outlining key initiatives and commitments:

                </p>
            </div>

            <div className="w-full h-[100vh] pvmax:max-lg:h-fit flex flex-col justify-center">
                <div className="  w-full  mx-auto mb-10 py-10 ">
                    <Carousel effect="fade"  className="sustain-carousel pvmax:max-lg:pb-20">
                        {dataSlider.map((item, index) => {
                            return (
                                <div className="  w-full h-[90vh] pv:max-md:h-fit " key={item.key}>
                                    <p className="sustain-title text-[2.5rem] text-[#170F58] font-bold font ">{item.title}</p>

                                    <div className="w-full h-[70vh] mx-auto pt-10 pvmax:max-lg:pt-14  pb-20 grid grid-cols-2 md:max-xl:grid-cols-1 pv:max-md:grid-cols-1 pv:max-md:h-fit">


                                        <div className="h-[60vh] w-full pvmax:max-lg:h-[30vh] flex justify-center  ">
                                            <img className="w-[60%]" src={item.picture} alt=""/>
                                        </div>
                                        <div className="h-[70vh] w-full pvmax:max-lg:px-8 sustain-seedoflife ">
                                            <p className="sustain-des text-[0.9rem] text-start w-[80%] py-1 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
                                                <span className=" font-bold">{item.mintitle1}</span>
                                                {item.mindescription1}
                                            </p>
                                            <p className="sustain-des text-[0.9rem] text-start w-[80%] py-1 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
                                                <span className=" font-bold">{item.mintitle2}</span>
                                                {item.mindescription2}
                                            </p>
                                            <p className="sustain-des text-[0.9rem] text-start w-[80%] py-1 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
                                                <span className=" font-bold">{item.mintitle3}</span>
                                                {item.mindescription3}
                                            </p>
                                            <p className="sustain-des text-[0.9rem] text-start w-[80%] py-1 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
                                                <span className=" font-bold">{item.mintitle4}</span>
                                                {item.mindescription4}
                                            </p>
                                            <p className="sustain-des text-[0.9rem] text-start w-[80%] py-1 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
                                                <span className=" font-bold">{item.mintitle5}</span>
                                                {item.mindescription5}
                                            </p>
                                        </div>




                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>

            </div>
        </div>
    );
}
export default Sustainability;