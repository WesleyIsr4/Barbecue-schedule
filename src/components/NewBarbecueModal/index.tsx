import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup';
import React from 'react';
import closeImg from '../../assets/close.svg';
import { useBarbecue } from '../../hooks/BarbecuesContext';
import IBarbecue from '../../interfaces/IBarbecue';
import { Button } from '../Button';
import { Input } from '../Input';
import { InputDate } from '../InputDate';
import { Textarea } from '../Textarea';
import { Container } from './styles';

interface NewBarbecueModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewBarbecueModal = ({
  isOpen,
  onRequestClose,
}: NewBarbecueModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const { createBarbecue } = useBarbecue();

  const handleSubmit = useCallback(
    async (data: IBarbecue) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          reason: Yup.string().required('Motivo obrigatório'),
          description: Yup.string().required('Descrição obrigatório'),
          observation: Yup.string().required('Observação obrigatório'),
          date: Yup.string().required('Data obrigatório'),
          valueWithoutDrink: Yup.string().required('Valor obrigatório'),
          valueWithDrinkIncluded: Yup.string().required('Valor obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        createBarbecue({
          reason: data.reason,
          date: data.date,
          description: data.description,
          observation: data.observation,
          valueWithDrinkIncluded: data.valueWithDrinkIncluded,
          valueWithoutDrink: data.valueWithoutDrink,
          users: [],
        });

        onRequestClose();
      } catch (err) {
        console.log(err);
      }
    },
    [createBarbecue, onRequestClose],
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar o modal" />
      </button>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h2>Criar um churros</h2>
          <Input name="reason" placeholder="Motivo" />
          <Textarea
            name="description"
            placeholder="Descrição para o participantes"
          />
          <Textarea name="observation" placeholder="Observações" />
          <InputDate name="date" />
          <div className="input-group">
            <Input name="valueWithoutDrink" placeholder="Valor sem bebidas" />
            <Input
              name="valueWithDrinkIncluded"
              placeholder="Valor com bebida incluso"
            />
          </div>
          <Button type="submit">Agendar churrasco</Button>
        </Form>
      </Container>
    </Modal>
  );
};
