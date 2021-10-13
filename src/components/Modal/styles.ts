import styled from "styled-components";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";

export const ModalComp = styled(Modal)`
  .modal-content {
    border-radius: 10px !important;
    border: none !important;
  }
  .content__title {
    font-size: 1.4rem;
    font-weight: 500 !important;
    color: #000 !important;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .content__title .modal-title {
    width: 100% !important;
  }

  .content__body {
    display: grid !important;
    grid-template-columns: 1fr;
    padding: 1rem !important;
  }

  border: none;
`;

export const ModalHeaderComp = styled(ModalHeader)`
  display: grid;
  grid-template-columns: 1fr;
  border: none;
`;

export const FormComp = styled.form``;

export const FormGroupComp = styled.div`
  margin-bottom: 1rem;
`;

export const ModalFooterComp = styled(ModalFooter)`
  background-color: #f8f7fb;
  border: none !important;
`;
