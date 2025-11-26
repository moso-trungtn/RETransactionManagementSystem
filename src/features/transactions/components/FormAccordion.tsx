import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

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
  return (
    <Accordion
      type={type}
      defaultValue={defaultValue as any}
      className={className}
    >
      {sections.map((section) => (
        <AccordionItem key={section.id} value={section.id}>
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent>
            {section.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
