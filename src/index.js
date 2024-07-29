import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Cars.
    </h1>
    <div className="cars">
      <img
        src="https://media.ed.edmunds-media.com/ford/mustang/2024/oem/2024_ford_mustang_coupe_dark-horse_fq_oem_1_1600.jpg"
        alt="image 1"
      ></img>
      <img
        src="https://www.bmwbloomfieldhills.com/blogs/1573/wp-content/uploads/2023/08/2023-BMW-M3.webp"
        alt="image 2"
      />
      <img
        src="https://cdn.bmwblog.com/wp-content/uploads/2024/01/BMW-M5-F90-by-Manhart-19-scaled.jpg"
        alt="image 3"
      />
    </div>
  </div>,
  document.getElementById("root")
);
