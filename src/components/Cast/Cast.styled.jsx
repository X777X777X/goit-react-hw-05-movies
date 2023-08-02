import styled from 'styled-components';

// Стилі для карточки актора
export const ActorsCard = styled('li')`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Стилі для списку акторів
export const ActorsList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

// Стилі для імені актора
export const ActorsName = styled('p')`
  color: #333;
  text-align: center;
  font-size: 18px;
`;

// Стилі для повідомлення про помилку
export const ActorsError = styled('p')`
  padding: 20px;
  text-align: center;
  font-size: 24px;
  color: #ff0000;
`;
