import React from 'react'

const Menu = () => {
  return (
    <div>
      <div className="menu">
  <div className="menuIntro">
    {/* img tile system */}
    <img src="https://i.ibb.co/QCxY7FT/michael-discenza-Mxfcoxyc-H-Y-unsplash.jpg" />
    <img src="https://i.ibb.co/cNrYC6S/izabela-rutkowski-Nme6-Tb-Wu-Vp-A-unsplash.jpg" />
  </div>
  {/* menu layout*/}
  <section id="home-menu">
    <h2>DRINK MENU</h2>
    <h3> Sprits, wine, and beer</h3>
    <ul>
      <li>
        <span className="dish">Vodka 1oz</span>
        <span className="Price">$6</span>
        <span className="Description">VODKA and choice of juice or soda.</span>
      </li>
      <li>
        <span className="dish">Rum 1oz.</span>
        <span className="Price">$6</span>
        <span className="Description">RUM and choice of juice or soda.</span>
      </li>
      <li>
        <span className="dish">Whisky 1oz.</span>
        <span className="Price">$6</span>
        <span className="Description">Whisky and choice of juice or soda.</span>
      </li>
      <li>
        <span className="dish">Tequila 1oz.</span>
        <span className="Price">$6</span>
        <span className="Description">Tequila served with juice or soda.</span>
      </li>
      <li>
        <span className="dish">Red wine.</span>
        <span className="Price">$8</span>
        <span className="Description">
          8oz Red wine, ask server for our wine selection.{" "}
        </span>
      </li>
      <li>
        <span className="dish">White wine.</span>
        <span className="Price">$8</span>
        <span className="Description">
          8oz white wine, ask server for our wine selection.
        </span>
      </li>
      <li>
        <span className="dish">Sparkling wine .</span>
        <span className="Price">$12</span>
        <span className="Description">
          8oz sparking wine glass of your choice.
        </span>
      </li>
      <li>
        <span className="dish">Domestic and foreign beer .</span>
        <span className="Price">$6 - $8</span>
        <span className="Description">
          Domestic and foreign beer of you choice
        </span>
      </li>
    </ul>
  </section>
</div>
{/* food menu */}
<section id="home-menu">
  <h2>FOOD MENU</h2>
  <h3> Entrees, mains, and handhelds</h3>
  <ul>
    <li>
      <span className="dish">Nachos</span>
      <span className="Price">$12</span>
      <span className="Description">cheese, onions, tomotoes.</span>
    </li>
    <li>
      <span className="dish">Tacos.</span>
      <span className="Price">$12</span>
      <span className="Description">
        chicken or beef with your choice of side.
      </span>
    </li>
    <li>
      <span className="dish">Chicken rice bowl.</span>
      <span className="Price">$16</span>
      <span className="Description">
        brown rice, and veggies, served with choice or sauce
      </span>
    </li>
    <li>
      <span className="dish">Grilled chicken</span>
      <span className="Price">$15</span>
      <span className="Description">
        Juicy grilled chicken served with choice of sauce.
      </span>
    </li>
    <li>
      <span className="dish">Steak and fired beans.</span>
      <span className="Price">$15</span>
      <span className="Description">Steak and your choice of side.</span>
    </li>
    <li>
      <span className="dish">burrito.</span>
      <span className="Price">$12</span>
      <span className="Description">Your choice of beef or chicken.</span>
    </li>
  </ul>
</section>
{ /* desert menu */}
<section id="home-menu">
  <h2>DESERT MENU</h2>
  <h3> Deserts and sweets</h3>
  <ul>
    <li>
      <span className="dish">Chocolate cake .</span>
      <span className="Price">$7</span>
      <span className="Description">
        Loaded Chocolate cake with fudge topping.
      </span>
    </li>
    <li>
      <span className="dish">NY cheesecake.</span>
      <span className="Price">$12</span>
      <span className="Description">
        NY cheesecake toped with strawberry topping.
      </span>
    </li>
    <li>
      <span className="dish">Apple pie.</span>
      <span className="Price">$6</span>
      <span className="Description">Warm apple pie tooped with icecream.</span>
    </li>
    <li>
      <span className="dish">Churros.</span>
      <span className="Price">$7</span>
      <span className="Description">
        pancake mix, water, oil, sugar, cinnamon.
      </span>
    </li>
    <li>
      <span className="dish">Sopaipillas</span>
      <span className="Price">$7</span>
      <span className="Description">
        Light, crispy pastry puffs, sopaipillas are a sweet way to round out a
        spicy meal.
      </span>
    </li>
    <li>
      <span className="dish">Creamy Caramel Flan.</span>
      <span className="Price">$12</span>
      <span className="Description">
        A small slice of this impressively rich, creamy, caramel flan dessert
        goes a long way.
      </span>
    </li>
    <li>
      <span className="dish">Shortcut Tres Leches Cake</span>
      <span className="Price">$12</span>
      <span className="Description">
        My mom's favorite cake is tres leches, a butter cake soaked in three
        kinds of milk.{" "}
      </span>
    </li>
    <li>
      <span className="dish">Pressure-Cooker Pumpkin Flans</span>
      <span className="Price">$14</span>
      <span className="Description">
        This silky, smooth dessert captures the essence and elegance of fall.{" "}
      </span>
    </li>
  </ul>
</section>
    </div>
  )
}
export default Menu
