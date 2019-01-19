import React from 'react';
import s from './AuthorList.module.css';

const getItemStyles = (id, activeId) =>
  id === activeId ? s.activeItem : s.item;

const AuthorList = ({ authors, activeAuthor, activeAuthorId }) =>
  authors.length > 0 ? (
    <ul className={s.list}>
      {authors.map(author => (
        <li key={author.id} className={getItemStyles(author.id, activeAuthor)}>
          <img src={author.image} alt="" width="80" />
          <p className={s.name}>{author.name}</p>
          <button
            className={s.button}
            type="button"
            onClick={() => activeAuthorId(author.id)}
          >
            <i className={s.icon} />
          </button>
        </li>
      ))}
    </ul>
  ) : null;

export default AuthorList;
