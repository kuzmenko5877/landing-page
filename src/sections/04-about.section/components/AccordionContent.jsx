import { Description } from "../../../components/ui/description/Description";

export const AccordionContent = ({ hiddenText }) => {
  return (
      <Description
          description={hiddenText}
          margin="mb-5"
          size="text-base"
          color="text-gray-700"
      />
  )
}
