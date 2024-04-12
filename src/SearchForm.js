import React from 'react';
import './Search.css'; // Assuming you have a CSS file to apply styles

function SearchForm() {
  return (
    <div>
      <p>Centered inside a form with max-width:</p>
      <form className="example" action="/action_page.php" style={{margin: 'auto', maxWidth: '300px'}}>
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default SearchForm;
