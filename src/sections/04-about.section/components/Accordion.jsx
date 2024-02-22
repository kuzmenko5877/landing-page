import { useState } from "react";
import { AccordionButton } from "./AccordionButton";
import { AccordionContent } from "./AccordionContent";

export const Accordion = ({ children }) => {
    return <>{children}</>;
};

export const AccordionItem = ({ hiddenText, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {children}
            { open && <AccordionContent hiddenText={ hiddenText } /> }
            { !open && <AccordionButton onClick={() => setOpen(!open)} /> }
        </>
    );
};
