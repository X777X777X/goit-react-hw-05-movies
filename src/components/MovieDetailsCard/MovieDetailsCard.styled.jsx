import styled from 'styled-components';

// Стилі для карточки деталей фільму
export const MovieDetailsCard = styled('div')`
  display: flex;
  padding: 20px;
  gap: 50px;
  justify-content: center;
  background-color: #f0f0f0;
`;

// Стилі для зображення фільму
export const MovieDetailsImg = styled('img')`
  display: block;
`;

// Стилі для блоку з детальною інформацією про фільм
export const MovieDetailsAbout = styled('div')`
  padding: 20px;
  border: 2px solid #f0f0f0;
  width: 600px;
  background-color: white;
`;

// Стилі для заголовка детальної інформації про фільм
export const MovieDetailsTitle = styled('h2')`
  text-align: center;
  font-size: 32px;
`;

// Стилі для рейтингу фільму
export const MovieDetailsScore = styled('p')`
  font-size: 24px;
`;

// Стилі для опису фільму
export const MovieDetailsOverview = styled('h3')`
  font-size: 24px;
`;

// Стилі для тексту опису фільму
export const MovieDetailsOverviewText = styled('p')`
  font-size: 20px;
`;

// Стилі для жанрів фільму
export const MovieDetailsGenres = styled('h3')`
  font-size: 24px;
`;

// Стилі для тексту жанрів фільму
export const MovieDetailsGenresText = styled('p')`
  font-size: 24px;
`;
