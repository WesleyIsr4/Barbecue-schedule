import React from 'react';
import IUsers from '../../interfaces/IUsers';
import trashIcon from '../../assets/trash.svg';
import { Container } from './styles';
import { useBarbecue } from '../../hooks/BarbecuesContext';

interface Props {
  data: IUsers[];
  barbecueId: string;
}

export const People = ({ data, barbecueId }: Props): JSX.Element => {
  const { removePerson } = useBarbecue();

  function handleRemovePerson(idPerson: string) {
    removePerson({ personId: idPerson, barbecueId });
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>C/Bebida?</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.drink ? 'C/bebida' : 'S/bebida'}</td>
              <td>{item.value}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleRemovePerson(item.id);
                  }}
                >
                  <img src={trashIcon} alt="Icone de remover pessoas" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
