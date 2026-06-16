import burgerImage from "./images/burger.webp";

const body = document.body;
export function LoadHomePage(){
    if(body)
    {
      const div = document.getElementById("content");
       const h1 = document.createElement("h1");
        h1.textContent = "Porto Flame Chicken";
       const p = document.createElement("p");
        p.textContent = "Craving a burger with real fire and flavor? At Porto Flame Chicken, we bring you Australian-style Portuguese chicken burgers packed with juicy flame-grilled chicken, smoky peri-peri sauce, fresh lettuce, creamy mayo, melted cheese, and soft toasted buns. Every bite is spicy, saucy, and satisfying — perfect for lunch, dinner, or late-night cravings. Come taste the burger that brings the heat, the crunch, and the flavor all in one.";
        const img =document.createElement("img");
        img.src = burgerImage;
        img.alt = "burger photo";
        img.height = 300;
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(img);
    }
}
