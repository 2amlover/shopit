import React from 'react';
import './category.css';
import BookImage from '../../Assets/Images/Book.jpg';
import AccessoriesImage from '../../Assets/Images/Accessories.jpg';
import DressesImage from '../../Assets/Images/Dresses.jpg';
import { useNavigate } from "react-router-dom";
import { FemaleCloth, GroupCloth } from '../../Assets/Images/Image';


  
  function Category  ()  {
    const navigate = useNavigate();
  return (
    <div className="category-Heading">
       <h2 className="category-heading">Categories</h2>
      <div className="category-container">
        <div className="category-row">
          <div className="category-column">
            <div className="category-card">
              <img src={GroupCloth} alt="Category 1"  onClick={() => navigate("/summerwear")}/>
              <h3>Summer Wear</h3>
            </div>
          </div>
          <div className="category-column">
            <div className="category-card">
              <img src={FemaleCloth} alt="Category 2" />
              <h3>Casual Wear</h3>
            </div>
          </div>
          <div className="category-column">
            <div className="category-card">
              <img src={BookImage} alt="Category 3" />
              <h3>Party Wear</h3>
            </div>
          </div>
        </div>
        <div className="category-row">
          <div className="category-column">
            <div className="category-card">
              <img src={BookImage} alt="Category 4" />
              <h3>Sweaters</h3>
            </div>
          </div>
          <div className="category-column">
            <div className="category-card">
              <img src={DressesImage} alt="Category 5" />
              <h3>Dresses</h3>
            </div>
          </div>
          <div className="category-column">
            <div className="category-card">
              <img src={AccessoriesImage} alt="Category 6" />
              <h3>Accessories</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
