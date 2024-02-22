import {AccordionItem} from "./Accordion";

export const CustomAccordion = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>
    )
}
