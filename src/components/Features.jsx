import { useState } from "react";
import FeatureBox from "./FeatureBox";
function Features() {
    const [items, setItems] = useState([{
        icon:'icon-access-anywhere.svg',
        title:'Access Your File Anywhere',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.',
    },
    {
        icon: "icon-security.svg",
        title: "Security you can trust",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
        icon: "icon-collaboration.svg",
        title: "Real-time collaboration",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
        icon: "icon-any-file.svg",
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
