import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface AccordionSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

type FormAccordionSingleProps = {
  sections: AccordionSection[];
  type?: 'single';
  defaultValue?: string;
  className?: string;
};

type FormAccordionMultipleProps = {
  sections: AccordionSection[];
  type: 'multiple';
  defaultValue?: string[];
  className?: string;
};

type FormAccordionProps = FormAccordionSingleProps | FormAccordionMultipleProps;

export function FormAccordion({
  sections,
  type = 'single',
  defaultValue,
  className = ''
}: FormAccordionProps) {
  const accordionContent = sections.map((section) => (
    <AccordionItem key={section.id} value={section.id}>
      <AccordionTrigger>{section.title}</AccordionTrigger>
      <AccordionContent>
        {section.content}
      </AccordionContent>
    </AccordionItem>
  ));

  if (type === 'multiple') {
    return (
      <Accordion
        type="multiple"
        defaultValue={defaultValue as string[]}
        className={className}
      >
        {accordionContent}
      </Accordion>
    );
  }

  return (
    <Accordion
      type="single"
      defaultValue={defaultValue as string}
      className={className}
    >
      {accordionContent}
    </Accordion>
  );
}
