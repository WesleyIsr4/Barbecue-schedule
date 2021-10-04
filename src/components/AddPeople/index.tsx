import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import React from 'react';
import { useBarbecue } from '../../hooks/BarbecuesContext';
import IUsers from '../../interfaces/IUsers';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container, DrinkTypeContainer } from './styles';

interface Props {
  id: string;
}

export const AddPeople = ({ id }: Props): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { barbecues, setBarbecue } = useBarbecue();

  const handleSubmit = useCallback(
    async (data: IUsers) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          drink: Yup.boolean(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const updatedBarbecue = [...barbecues];

        const barbecue = updatedBarbecue.find(item => item.id === id);

        const contribution = checked
          ? barbecue?.valueWithDrinkIncluded
          : barbecue?.valueWithoutDrink;

        const people: IUsers = {
          id: String(uuidv4()),
          name: data.name,
          value: contribution,
          drink: checked,
        };

        if (barbecue) {
          barbecue?.users.push(people);
          setBarbecue(updatedBarbecue);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [checked, barbecues, id, setBarbecue],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Digite o nome da pessoa" />
        <DrinkTypeContainer>
          <input
            type="checkbox"
            name="drink"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span>Com bebida?</span>
        </DrinkTypeContainer>
        <Button type="submit">Adicionar pessoas</Button>
      </Form>
    </Container>
  );
};
