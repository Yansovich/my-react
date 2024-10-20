import ListItem from '../ListItem/ListItem';
import './style.css'
import React, { useState } from 'react';

function List () {
  const [items] = useState([
    { id: 1, label: 'Главная'},
    { id: 2, label: 'Пациентам', subItems: ['Запись на приём', 'Консультация']},
    { id: 3, label: 'Отделения и службы', subItems: ['Хирургия', 'Терапия']},
    { id: 4, label: 'Платные услуги'},
    { id: 5, label: 'Одно окно'},
    { id: 6, label: 'Статьи'},
    { id: 7, label: 'Контакты'}
  ]);

  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;