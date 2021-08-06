import { ReactNode } from "react";

import { RiFileCopyLine } from "react-icons/ri";

import { Container } from "./styles";

interface PopoverProps {
  message: string;
  messageSize?: string;
  children: ReactNode;
}

export const Popover = ({
  message,
  messageSize = "Normal",
  children,
}: PopoverProps) => {
  return (
    <Container messageSize={messageSize}>
      {children}
      <span>
        <RiFileCopyLine />
        {message}
      </span>
    </Container>
  );
};
