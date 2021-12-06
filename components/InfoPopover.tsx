import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  Icon,
  Button,
  Box,
  Tooltip,
} from '@chakra-ui/react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

interface PopoverProps {
  header?: string;
  content: string;
  size?: number;
}

const InfoPopover = ({
  header = 'About',
  size = 14,
  content,
}: PopoverProps) => {
  return (
    <Tooltip hasArrow label={content}>
      <Box display="inline-flex" cursor="pointer" width={`${size}px`}>
        <AiOutlineQuestionCircle />
      </Box>
    </Tooltip>
    // <Popover>
    //   <PopoverTrigger>
    //     <Box position="relative" top="-4px" right="-4px">
    //       <AiOutlineQuestionCircle />
    //     </Box>
    //     {/* <Button variant="ghost">
    //     </Button> */}
    //   </PopoverTrigger>
    //   <PopoverContent>
    //     <PopoverArrow />
    //     <PopoverCloseButton />
    //     <PopoverHeader>{header}</PopoverHeader>
    //     <PopoverBody>{content}</PopoverBody>
    //   </PopoverContent>
    // </Popover>
  );
};

export default InfoPopover;
