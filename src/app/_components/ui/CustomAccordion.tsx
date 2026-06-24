'use client'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { LuPlus, LuMinus } from "react-icons/lu";
import type {FaqItem} from '@/app/_types'
import Text from './Text';

type Props = {
    faq?: FaqItem[]
}

export default function CustomAccordion({faq}: Props) {
    const data = faq ?? []
  return (
    <>
            <Accordion
            activeIndex={0}
            pt={{
                root:{className:'test-root'},
                header:{className:'header-class'},
                // headerAction:{className:'headerAction-class'},
                // headerIcon:{className:'headerIcon-class'},
                // headerTitle:{className:'headerTitle-class'},
                // toggleableContent:{className:'toggleAble-class'},
                content:{className:'content-class'},
                transition:{className:'transition-class'}
            }}
            className="accord-ct"
            expandIcon={<Text as="span" className="icon-rounded icon-plus"><LuPlus /></Text>}
            collapseIcon={<Text as="span" className="icon-rounded icon-minus"><LuMinus /></Text>}
        >
            {data?.map(({id,title,desc})=> (
                <AccordionTab header={title} contentClassName='accord-ct-content' headerClassName='accord-ct-icon' key={id}>
                <p className="m-0">{desc}</p>
            </AccordionTab>
            ))}
        </Accordion>
    </>
  )
}