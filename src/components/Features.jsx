import { useState } from "react";
import FeatureBox from "./FeatureBox";
import IconOne from "../assets/images/icon-access-anywhere.svg";
import IconTwo from "../assets/images/icon-security.svg";
import IconThree from "../assets/images/icon-collaboration.svg";
import IconFour from "../assets/images/icon-any-file.svg";
function Features() {
    const [items, setItems] = useState([{
        icon: IconOne,
        title:'Access Your File Anywhere',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.',
    },
    {
        icon: IconTwo,
        title: "Security you can trust",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
        icon: IconThree,
        title: "Real-time collaboration",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
        icon: IconFour,
        title: "Store any type of file",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },

]);
    return (
        <>
            <section className="pb-[150px]">
                <div className="container">
                    <div className="columns-1 sm:columns-2 gap-[100px] w-[856px] max-w-full mx-auto">
                        {items.map((item) => (
                            <FeatureBox
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            desc={item.desc}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
