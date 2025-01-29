import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { id } = useParams(); // Get category ID from URL

  return (
    <div>
      <h1>{id} Category</h1>
      <p>Showing products related to {id}</p>
    </div>
  );
};

export default CategoryPage;
