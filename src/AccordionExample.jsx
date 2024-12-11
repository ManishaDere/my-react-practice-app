import React from 'react';
import Accordion from "./common/Accordion";

const AccordionExample = () => {
    const accordionData = [{
        title: "Section 1",
        description: "Hey i am first section info"
      },
      {
        title: "Section 2",
        description: "Hey i am second section info"
      }];
      return (
        <div>
          {accordionData.map((item) => (
            <Accordion key={item.title} title={item.title} description={item.description} />
          ))}
          
        </div>
      );
}

export default AccordionExample
