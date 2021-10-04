import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import IBarbecue from '../interfaces/IBarbecue';

interface BarbecueProviderProps {
  children: ReactNode;
}

export interface DataProps extends IBarbecue {
  id: string;
}

interface RemoveProps {
  personId: string;
  barbecueId: string;
}

interface BarbecueContextdata {
  barbecues: DataProps[];
  createBarbecue: (barbecue: IBarbecue) => void;
  setBarbecue: (barbecue: DataProps[]) => void;
  removePerson: ({ barbecueId, personId }: RemoveProps) => void;
}

const BarbecueContext = createContext<BarbecueContextdata>(
  {} as BarbecueContextdata,
);

export const BarbecueProvider = ({ children }: BarbecueProviderProps) => {
  const dataKey = '@Trinca:barbecue';

  const [barbecues, setBarbecue] = useState<DataProps[]>(() => {
    const storageBarbecue = localStorage.getItem(dataKey);

    if (storageBarbecue) {
      return JSON.parse(storageBarbecue);
    }
    return [];
  });

  const prevBarbecueRef = useRef<DataProps[]>();

  useEffect(() => {
    prevBarbecueRef.current = barbecues;
  });

  const barbecuePreviousValue = prevBarbecueRef.current ?? barbecues;

  useEffect(() => {
    if (barbecuePreviousValue !== barbecues) {
      localStorage.setItem(dataKey, JSON.stringify(barbecues));
    }
  }, [barbecues, barbecuePreviousValue]);

  const createBarbecue = async ({
    reason,
    date,
    description,
    observation,
    valueWithDrinkIncluded,
    valueWithoutDrink,
    users,
  }: IBarbecue) => {
    const newBarbecue = {
      id: String(uuidv4()),
      reason,
      date,
      valueWithoutDrink,
      valueWithDrinkIncluded,
      description,
      observation,
      users,
    };

    try {
      const data = localStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newBarbecue];

      localStorage.setItem(dataKey, JSON.stringify(dataFormatted));
    } catch (error) {
      console.log(error);
    }
  };

  const removePerson = ({ barbecueId, personId }: RemoveProps) => {
    try {
      const updatedBarbecue = [...barbecues];

      const barbecueIndex = updatedBarbecue.find(
        item => item.id === barbecueId,
      );

      const personIndex = barbecueIndex?.users.findIndex(
        item => item.id === personId,
      );

      if (Number(personIndex) >= 0) {
        barbecueIndex?.users.splice(Number(personIndex), 1);
        setBarbecue(updatedBarbecue);
      }
    } catch (erro) {
      console.log(erro);
    }
  };

  return (
    <BarbecueContext.Provider
      value={{ barbecues, createBarbecue, removePerson, setBarbecue }}
    >
      {children}
    </BarbecueContext.Provider>
  );
};

export const useBarbecue = () => {
  const context = useContext(BarbecueContext);
  return context;
};
