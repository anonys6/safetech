// "use client";

// import { Accordion, AccordionItem } from "@nextui-org/react";
// import styles from "@/styles/faq.module.css";

// export default function FAQ() {

//     return (
//         <div className={styles.container}>

//             <h2>Frequently Asked Questions (FAQs)</h2>

//             <Accordion isCompact>
//                 {faqArray.map((faq, index) => (
//                     <AccordionItem key={index} title={faq.title}>
//                         <div dangerouslySetInnerHTML={{ __html: faq.content }} />
//                     </AccordionItem>
//                 ))}
//             </Accordion>
//         </div>
//     );
// }


// import styles from "@/styles/faq.module.css";

// const faqArray: {
//     title: string
//     content: string
// }[] = [
//         {
//             title: "1. What products does Safe Tech offer?",
//             content: `Safe Tech offers a wide range of products, including <span style="color: #f60;"><a style="color: #f60;" href="https://safetechco.com/pwas-systems/">Proximity Warning Alert Systems (PWAS)</a></span>,<span style="color: #f60;"><a style="color: #f60;" href="https://safetechco.com/side-boom-lmi/"> Load Moment Indicators (LMI)</a>,</span> Driver Monitoring Systems (DMS), AI dash cameras, Smart Helmets, GPS systems, and fleet management systems.`
//         },
//         {
//             title: "2. What is the Proximity Warning Alert System (PWAS)?",
//             content: `Safe Tech's PWAS is an advanced system designed to detect objects and personnel around vehicles and equipment to prevent accidents, offering 360-degree coverage with AI-powered sensors and cameras.<br><br>There are three types pwas systems :<br><br><span style="color: #ff6600;">1: <a style="color: #ff6600;" href="https://safetechco.com/pwas-systems/">AI PWAS SYSTEMS 360 DEGREE</a></span><br><span style="color: #ff6600;">2: <a style="color: #ff6600;" href="https://safetechco.com/radar-sensor-pwas/">AI AND RADAR BASED PWAS SYSTEMS</a></span><br><span style="color: #ff6600;">3:<a style="color: #ff6600;" href="https://safetechco.com/pwas-system-using-multiple-sensor/"> MULTI-SENSOR PWAS SYSTEMS&nbsp;</a></span>`
//         },
//         {
//             title: "3. What is a Load Moment Indicator (LMI) system?",
//             content: `An <strong>LMI system</strong> monitors the load on <strong>cranes</strong> and other <strong>heavy machinery</strong> to ensure safe lifting operations by providing real-time data on <strong>load weight</strong>, boom angle, and capacity.<br><br><strong><span style="color: #ff6600;"><a style="color: #ff6600;" href="https://safetechco.com/side-boom-lmi/">Types of LMI SYSTEMS:</a></span></strong><br><span style="color: #333333;"><strong><a style="color: #333333;" href="https://safetechco.com/side-boom-lmi/">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A: Side Boom LMI Crane Safety Device</a></strong></span><br><strong><span style="color: #333333;"><a style="color: #333333;" href="https://safetechco.com/boom-truck-lmi/">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B: Mounted Crane LMI Safety Device</a></span></strong><br><strong><span style="color: #333333;"><a style="color: #333333;" href="https://safetechco.com/lmi-articulated/">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C: Knuckle Boom Crane LMI Safety Device</a></span></strong>`
//         },
//         {
//             title: "4: How does the Driver Monitoring System (DMS) work?",
//             content: `Safe Tech's <strong>DMS</strong> uses <strong>AI</strong> to monitor the driver's behavior, <strong>detecting signs of fatigue,</strong> distraction, or risky driving, and issuing alerts to ensure <strong>safety.</strong>`
//         },
//         {
//             title: "5: What is the Smart Helmet, and how does it improve safety?",
//             content: `<strong>Safe Tech's Smart Helmet</strong> is designed with advanced sensors to monitor the <strong>worker's environment</strong> and condition, providing alerts for hazardous situations and <strong>enhancing workplace safety.</strong>`
//         },
//         {
//             title: "6: Are Safe Tech products compliant with safety standards?",
//             content: `Yes,<strong> Safe Tech products</strong> meet various industry-specific safety standards. For example, the <strong>Load Moment Indicators</strong> are compliant with the <strong>ASMEB30.14 safety standard.</strong>`
//         },
//         {
//             title: "7: What industries benefit from using Safe Tech's products?",
//             content: `Industries such as <strong>construction</strong>, <strong>logistics, fleet management, oil and gas,</strong> and manufacturing benefit from Safe Tech's safety and monitoring products.`
//         },
//         {
//             title: "8: Does Safe Tech offer installation services for their products?",
//             content: `Yes, Safe Tech provides installation services to ensure correct setup and operation of products like <strong>PWAS</strong>, <strong>LMI</strong>, and <strong>DMS systems.</strong>`
//         },
//         {
//             title: "9: Does Safe Tech provide repair and support services?",
//             content: `Yes, Safe Tech offers both repair services and technical support to ensure continuous product functionality and longevity.`
//         },
//         {
//             title: "10: What kind of customization options does Safe Tech offer?",
//             content: `Safe Tech offers a wide range of customization options, including:<ul><li><strong>Sensor Configuration</strong>: Adjusting the number and type of sensors used in systems like PWAS to match specific site or vehicle requirements.</li><li><strong>Integration</strong>: Custom integration with existing machinery or fleet management systems to streamline operations.</li><li><strong>Feature Add-ons</strong>: Additional features such as wind speed monitoring for cranes or pressure tracking for articulated vehicles.</li><li><strong>Software Customization</strong>: Tailoring user interfaces, alarm settings, and report formats based on customer preferences.</li></ul>`
//         }
//     ];

// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"

// export function FAQ() {
//     return (
//         <div className={styles.container}>
//             <h2>Frequently Asked Questions (FAQs)</h2>

//             <Accordion type="single" collapsible className="w-full">
//                 {faqArray.map((faq, index) => (
//                     <AccordionItem key={index} value={`item-${index}`}>
//                         <AccordionTrigger className="hover:no-underline py-2 text-medium">{faq.title}</AccordionTrigger>
//                         <AccordionContent>
//                             <div dangerouslySetInnerHTML={{ __html: faq.content }} />
//                         </AccordionContent>
//                     </AccordionItem>
//                 ))}
//             </Accordion>
//         </div>
//     )
// }

// export default FAQ;


import styles from "@/styles/faq.module.css";

const faqArray: {
    title: string
    content: string
}[] = [
        {
            title: "1. What products does Safe Tech offer?",
            content: `Safe Tech offers a wide range of products, including <span style="color: #f60;"><a style="color: #f60;" href="https://safetechco.com/pwas-systems/">Proximity Warning Alert Systems (PWAS)</a></span>,<span style="color: #f60;"><a style="color: #f60;" href="https://safetechco.com/side-boom-lmi/"> Load Moment Indicators (LMI)</a>,</span> Driver Monitoring Systems (DMS), AI dash cameras, Smart Helmets, GPS systems, and fleet management systems.`
        },
        {
            title: "2. What is the Proximity Warning Alert System (PWAS)?",
            content: `Safe Tech's PWAS is an advanced system designed to detect objects and personnel around vehicles and equipment to prevent accidents, offering 360-degree coverage with AI-powered sensors and cameras.<br><br>There are three types pwas systems :<br><br><span style="color: #ff6600;">1: <a style="color: #ff6600;" href="https://safetechco.com/pwas-systems/">AI PWAS SYSTEMS 360 DEGREE</a></span><br><span style="color: #ff6600;">2: <a style="color: #ff6600;" href="https://safetechco.com/radar-sensor-pwas/">AI AND RADAR BASED PWAS SYSTEMS</a></span><br><span style="color: #ff6600;">3:<a style="color: #ff6600;" href="https://safetechco.com/pwas-system-using-multiple-sensor/"> MULTI-SENSOR PWAS SYSTEMS&nbsp;</a></span>`
        },
        {
            title: "3. What is a Load Moment Indicator (LMI) system?",
            content: `An <strong>LMI system</strong> monitors the load on <strong>cranes</strong> and other <strong>heavy machinery</strong> to ensure safe lifting operations by providing real-time data on <strong>load weight</strong>, boom angle, and capacity.<br><br><strong><span style="color: #ff6600;"><a style="color: #ff6600;" href="https://safetechco.com/side-boom-lmi/">Types of LMI SYSTEMS:</a></span></strong><br><span style="color: #333333;"><strong><a style="color: #333333;" href="https://safetechco.com/side-boom-lmi/">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A: Side Boom LMI Crane Safety Device</a></strong></span><br><strong><span style="color: #333333;"><a style="color: #333333;" href="https://safetechco.com/boom-truck-lmi/">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B: Mounted Crane LMI Safety Device</a></span></strong><br><strong><span style="color: #333333;"><a style="color: #333333;" href="https://safetechco.com/lmi-articulated/">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C: Knuckle Boom Crane LMI Safety Device</a></span></strong>`
        },
        {
            title: "4: How does the Driver Monitoring System (DMS) work?",
            content: `Safe Tech's <strong>DMS</strong> uses <strong>AI</strong> to monitor the driver's behavior, <strong>detecting signs of fatigue,</strong> distraction, or risky driving, and issuing alerts to ensure <strong>safety.</strong>`
        },
        {
            title: "5: What is the Smart Helmet, and how does it improve safety?",
            content: `<strong>Safe Tech's Smart Helmet</strong> is designed with advanced sensors to monitor the <strong>worker's environment</strong> and condition, providing alerts for hazardous situations and <strong>enhancing workplace safety.</strong>`
        },
        {
            title: "6: Are Safe Tech products compliant with safety standards?",
            content: `Yes,<strong> Safe Tech products</strong> meet various industry-specific safety standards. For example, the <strong>Load Moment Indicators</strong> are compliant with the <strong>ASMEB30.14 safety standard.</strong>`
        },
        {
            title: "7: What industries benefit from using Safe Tech's products?",
            content: `Industries such as <strong>construction</strong>, <strong>logistics, fleet management, oil and gas,</strong> and manufacturing benefit from Safe Tech's safety and monitoring products.`
        },
        {
            title: "8: Does Safe Tech offer installation services for their products?",
            content: `Yes, Safe Tech provides installation services to ensure correct setup and operation of products like <strong>PWAS</strong>, <strong>LMI</strong>, and <strong>DMS systems.</strong>`
        },
        {
            title: "9: Does Safe Tech provide repair and support services?",
            content: `Yes, Safe Tech offers both repair services and technical support to ensure continuous product functionality and longevity.`
        },
        {
            title: "10: What kind of customization options does Safe Tech offer?",
            content: `Safe Tech offers a wide range of customization options, including:<ul><li><strong>Sensor Configuration</strong>: Adjusting the number and type of sensors used in systems like PWAS to match specific site or vehicle requirements.</li><li><strong>Integration</strong>: Custom integration with existing machinery or fleet management systems to streamline operations.</li><li><strong>Feature Add-ons</strong>: Additional features such as wind speed monitoring for cranes or pressure tracking for articulated vehicles.</li><li><strong>Software Customization</strong>: Tailoring user interfaces, alarm settings, and report formats based on customer preferences.</li></ul>`
        }
    ];

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl";

export function FAQ() {
    const t = useTranslations("FAQ");

    return (
        <div className={styles.container}>
            <h2>{t("heading")}</h2>


            <Accordion type="single" collapsible className="w-full">
                {faqArray.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="hover:no-underline py-2 text-medium">{t(`faq${index + 1}_title`)}</AccordionTrigger>
                        <AccordionContent>
                            <div dangerouslySetInnerHTML={{ __html: t(`faq${index + 1}_content`) }} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FAQ;
