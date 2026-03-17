import React from 'react';
import { Image } from 'theme-ui';
import { BaseAccordion } from './base-accordion';
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from './shared';

export default function Accordion({ items, ...props }) {
  const openIcon = <Image src="/assets/accordion-arrow-e.svg" alt="open icon" />;
  const closeIcon = <Image src="/assets/accordion-arrow.svg" alt="close icon" />;
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props}
    >
      {({ openIndexes, handleItemClick }) => (
        <>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              isOpen={openIndexes.includes(index)}
            >
              <AccordionButton onClick={() => handleItemClick(index)}>
                <span>
                  {openIndexes.includes(index) ? openIcon : closeIcon}
                </span>
                {item.title}
              </AccordionButton>
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </>
      )}
    </BaseAccordion>
  );
}
