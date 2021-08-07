import { ReactNode } from "react";

import { RiFileCopyLine } from "react-icons/ri";

import { Container } from "./styles";

interface PopoverProps {
  message: string;
  messageSize?: string;
  withIcon?: boolean;
  children: ReactNode;
}

export const Popover = ({
  message,
  messageSize = "Normal",
  children,
  withIcon = false,
}: PopoverProps) => {
  return (
    <Container messageSize={messageSize}>
      {children}
      <span>
        {withIcon && <RiFileCopyLine />}
        {message}
      </span>
    </Container>
  );
};
