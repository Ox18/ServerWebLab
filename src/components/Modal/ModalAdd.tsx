import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ModalComponent } from ".";
import { useForm } from "../../hooks/useForm";
import { ICard } from "../../interfaces/ICard";
import { CardHandlerAction } from "../../redux/actions/Card/CardHandlerAction";

import { IState } from "../../redux/interfaces/IState";
import { InputComponent } from "../Input";
import { LabelComponent } from "../Label";
import { Textarea } from "../Textarea";
import { FormComp, FormGroupComp } from "./styles";

const cardHandlerAction = new CardHandlerAction();

export const ModalAdd = () => {
  const [formValues, handleInputChange, reset]: any = useForm({
    title: "",
    description: "",
  });

  const { title, description }: any = formValues;

  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state.card);

  const toggle = () => {
    dispatch(cardHandlerAction.setOpenModalAddCard(!state.modal.openAddCard));
  };

  const eventBtnCancel = () => {
    toggle();
  };

  const typeCard: string = state?.typeModal?.openAddCard;

  const senddata = () => {
    const card: ICard = {
      Id: 0,
      category: typeCard === "todo" ? 0 : typeCard === "inprocess" ? 1 : 2,
      Name: title,
      Description: description,
      created_at: "",
      updated_at: "",
    };
    dispatch(cardHandlerAction.startPostCardAddNew(card));
    reset();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    senddata();
  };

  return (
    <ModalComponent
      title="Add card"
      isShow={state.modal.openAddCard}
      toggle={toggle}
      showBtnCancel
      showBtnCreate
      eventBtnCancel={eventBtnCancel}
      eventBtnCreate={senddata}
    >
      <FormComp onSubmit={handleSubmit}>
        <FormGroupComp>
          <LabelComponent text="Title" />
          <InputComponent
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </FormGroupComp>
        <FormGroupComp>
          <LabelComponent text="Description" />
          <Textarea
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </FormGroupComp>
      </FormComp>
    </ModalComponent>
  );
};
