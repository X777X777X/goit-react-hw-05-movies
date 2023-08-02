import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// Стилі для спільних компонентів
export const LinkItem = styled(Link)`
  /* Стилі для посилань */
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #555;
  }
`;

export const MoviesList = styled('div')`
  /* Стилі для списку фільмів */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieTitle = styled('h2')`
  /* Стилі для назви фільму */
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const LinkButton = styled(Link)`
  /* Стилі для кнопок-посилань */
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

// Стилі для сторінки фільмів
export const MoviesSearchButton = styled('button')`
  /* Стилі для кнопки пошуку */
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

export const MoviesForm = styled('form')`
  /* Стилі для форми пошуку фільмів */
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const MoviesInput = styled('input')`
  /* Стилі для поля вводу пошуку фільмів */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Стилі для домашньої сторінки
export const TrendingTitle = styled('h1')`
  /* Стилі для заголовка трендових фільмів */
  font-size: 32px;
  font-weight: bold;
  color: #333;
`;

// Стилі для додаткової інформації про фільм
export const MovieDetailsAdditional = styled('div')`
  /* Стилі для блоку з додатковою інформацією */
  padding: 20px;
`;

export const MovieDetailsAdditionalTitle = styled('h3')`
  /* Стилі для заголовка додаткової інформації */
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const NavItem = styled(NavLink)`
  /* Стилі для пунктів навігації */
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;

export const LinkBox = styled('div')`
  /* Стилі для блоку з посиланнями */
  padding: 20px;
`;

// Стилі для сторінки 404
export const NotFoundBlock = styled('div')`
  /* Стилі для блоку з повідомленням про помилку 404 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundText = styled('p')`
  /* Стилі для тексту повідомлення про помилку 404 */
  font-size: 36px;
  color: #333;
`;

export const NotFoundLink = styled(Link)`
  /* Стилі для посилання на головну сторінку */
  font-size: 24px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
