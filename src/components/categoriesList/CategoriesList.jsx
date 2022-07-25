import React from 'react';

const CategoriesList = () => {
  return (
    <>
      <main>
        <ul>
          <li>Їжа</li>
          <li>Різне</li>
        </ul>
        <form>
          <input type="text" placeholder="Нова категорія" />
          <button type="submit">+</button>
        </form>
      </main>
    </>
  );
};

export default CategoriesList;
