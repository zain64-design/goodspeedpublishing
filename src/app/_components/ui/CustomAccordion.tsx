"use client";
import { Fragment } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { LuPlus, LuMinus } from "react-icons/lu";
import type { AccordionItem, AccordionPoint } from "@/app/_types";
import Text from "./Text";

type Props = {
  values?: AccordionItem[];
  activeIndex?: number;
};

function renderDesc(desc: React.ReactNode | AccordionPoint[]) {
  if (Array.isArray(desc)) {
    return (
      <>
        {desc.map((point, i) => (
          <Fragment key={i}>
            <Text className="py-2">{point.text}</Text>
            {point.subPoints && point.subPoints.length > 0 && (
              <Text as="ul" className="mt-2 list-disc pl-5">
                {point.subPoints.map((sub, j) => (
                  <Text as="li" key={j}>
                    {sub}
                  </Text>
                ))}
              </Text>
            )}
          </Fragment>
        ))}
      </>
    );
  }

  return <Text className="p-0">{desc}</Text>;
}

export default function CustomAccordion({ values, activeIndex = 0 }: Props) {
  const data = values ?? [];
  return (
    <>
      <Accordion
        activeIndex={activeIndex}
        className="accord-ct"
        expandIcon={
          <Text as="span" className="icon-rounded icon-plus">
            <LuPlus />
          </Text>
        }
        collapseIcon={
          <Text as="span" className="icon-rounded icon-minus">
            <LuMinus />
          </Text>
        }
      >
        {data?.map(({ id, title, desc }) => (
          <AccordionTab
            header={title}
            contentClassName="accord-ct-content"
            headerClassName="accord-ct-icon"
            key={id}
          >
            {renderDesc(desc)}
          </AccordionTab>
        ))}
      </Accordion>
    </>
  );
}
