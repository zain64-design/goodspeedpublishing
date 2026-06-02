'use client'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { LuPlus, LuMinus } from "react-icons/lu";
import { CgChevronDown } from "react-icons/cg"

type Props = {}

export default function CustomAccordion({}: Props) {
  return (
    <>
            <Accordion
            activeIndex={0}
            className="accord-ct mt-[32px]"
            expandIcon={<LuPlus className="text-(--text-black) text-2xl" />}
            collapseIcon={<LuMinus className="text-(--text-black) text-2xl" />}
        >
            <AccordionTab header="Lorem ipsum dolor sit amet" contentClassName='accord-ct-content' headerClassName='accord-ct-icon'>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </AccordionTab>
            <AccordionTab header="Lorem ipsum dolor sit amet" contentClassName='accord-ct-content' headerClassName='accord-ct-icon'>
                <p className="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
            </AccordionTab>
            <AccordionTab header="Lorem ipsum dolor sit amet" contentClassName='accord-ct-content' headerClassName='accord-ct-icon'>
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
                </p>
            </AccordionTab>
            <AccordionTab header="Lorem ipsum dolor sit amet" contentClassName='accord-ct-content' headerClassName='accord-ct-icon'>
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
                </p>
            </AccordionTab>
            <AccordionTab header="Lorem ipsum dolor sit amet" contentClassName='accord-ct-content' headerClassName='accord-ct-icon'>
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
                </p>
            </AccordionTab>
        </Accordion>
    </>
  )
}