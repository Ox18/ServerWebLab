import React from "react";
import { Button, ModalHeader, ModalFooter } from "reactstrap";
import { AiOutlineInbox } from "react-icons/ai";

import { ModalComp, ModalFooterComp, ModalHeaderComp } from "./styles";

interface IModalComponent {
  isShow: boolean;
  toggle: () => void;
  children: React.ReactNode;
  title?: string;
  showBtnCancel?: boolean;
  showBtnCreate?: boolean;
  showBtnDelete?: boolean;
  showBtnEdit?: boolean;
  eventBtnCancel?: () => void;
  eventBtnCreate?: () => void;
  eventBtnDelete?: () => void;
  eventBtnEdit?: () => void;
}

export const ModalComponent: React.FC<IModalComponent> = ({
  isShow: modal,
  toggle,
  children,
  title,
  showBtnCancel,
  showBtnCreate,
  showBtnDelete,
  showBtnEdit,
  eventBtnCancel,
  eventBtnCreate,
  eventBtnDelete,
  eventBtnEdit,
}) => {
  return (
    <>
      <ModalComp isOpen={modal} toggle={toggle}>
        <ModalHeaderComp>
          <div className="content__body">
            <div className="content__title">
              {title}
              <AiOutlineInbox color="#a4a3a3" size={26} />
            </div>
            {children}
          </div>
        </ModalHeaderComp>
        <ModalFooterComp>
          {showBtnCancel && (
            <Button
              className="opacity btn__white btn__content shadow-sm"
              color="primary"
              onClick={eventBtnCancel}
            >
              Cancel
            </Button>
          )}
          {showBtnCreate && (
            <Button
              type="submit"
              className="opacity btn__content shadow-sm btn__primary"
              color="secondary"
              onClick={eventBtnCreate}
            >
              Create
            </Button>
          )}
          {showBtnEdit && (
            <Button
              type="submit"
              className="opacity btn__content shadow-sm btn__update"
              color="secondary"
              onClick={eventBtnEdit}
            >
              Update
            </Button>
          )}
          {showBtnDelete && (
            <Button
              type="submit"
              className="opacity btn__content shadow-sm btn__delete"
              color="secondary"
              onClick={eventBtnDelete}
            >
              Delete
            </Button>
          )}
        </ModalFooterComp>
      </ModalComp>
    </>
  );
};
