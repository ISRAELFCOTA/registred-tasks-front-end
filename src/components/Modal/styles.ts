import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.modalBackgroundColor};
  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-radius: 0.3rem;
  width: 40%;
`;

export const HeaderWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const Header = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 100ms linear;

  &:active {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundActive};
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const WrapperTask = styled.div`
  padding: 1rem;
`;

export const InputWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 3rem;
`;

export const InputHeaderWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 1rem;
`;

export const InputHeaderTitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 60%;
`;

export const ButtonSaveWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 2rem;
  border: none;
  cursor: pointer;
  border: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-radius: 0.3rem;
  transition: background-color 100ms linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightMain};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundActive};
  }
`;

export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 300;
`;
