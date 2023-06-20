import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import {
  ModalContainer,
  Header,
  Overlay,
  Content,
} from "components/Modal/styled";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ show, onClose, children, title }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => setIsBrowser(true), []);

  const modalContent = show ? (
    <Overlay>
      <ModalContainer>
        <Header>
          <Link href="#" onClick={handleClose}>
            <FaTimes />
          </Link>
        </Header>
        {title && <div>{title}</div>}
        <Content>{children}</Content>
      </ModalContainer>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root"),
    );
  } else {
    return null;
  }
}
