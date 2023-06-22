

  const sortLowToHighLink = document.getElementById("sort-low-to-high");

  // Add a click event listener to the sort link
  sortLowToHighLink.addEventListener("click", () => {
    // Get all the place elements
    const placeElements = document.querySelectorAll(".place");

    // Convert the NodeList to an array
    const places = Array.from(placeElements);

    // Sort the places based on the cost (assuming the cost is present in the info-div element)
    const sortedPlaces = places.sort((a, b) => {
      const costA = parseInt(a.querySelector(".info-div .price").textContent.replace(/\D/g, ""));
      const costB = parseInt(b.querySelector(".info-div .price").textContent.replace(/\D/g, ""));
      return costA - costB;
    });

    // Remove the existing places from the container
    const container = document.querySelector(".restaurant-list");
    container.innerHTML = "";

    // Append the sorted places back to the container
    sortedPlaces.forEach((place) => {
      container.appendChild(place);
    });

    // Scroll to the first item
    var drinksList = document.querySelector("#drinks .restaurant-list");
    drinksList.scrollIntoView({ behavior: "smooth" });
  });


// Function to sort items by cost (high to low)
function sortItemsByCostHighToLow() {
  // Get all the place elements
  const places = document.querySelectorAll('.place');

  // Convert NodeList to an array for easier manipulation
  const placesArray = Array.from(places);

  // Sort the array based on the cost in descending order
  placesArray.sort((a, b) => {
    const costA = parseInt(a.querySelector('.price').textContent.substring(1));
    const costB = parseInt(b.querySelector('.price').textContent.substring(1));

    return costB - costA;
  });

  // Clear the existing list
  const restaurantList = document.querySelector('#pizza .restaurant-list');
  restaurantList.innerHTML = '';

  // Append the sorted items back to the list
  placesArray.forEach(place => {
    restaurantList.appendChild(place);
  });
}

// Add event listener to the "Cost: High to Low" link
const sortHighToLowLink = document.querySelector('#sort-high-to-low');
sortHighToLowLink.addEventListener('click', sortItemsByCostHighToLow);







function sortItemsByRatingHighToLow() {
  const places = document.querySelectorAll('.place');
  const placesArray = Array.from(places);

  placesArray.sort((a, b) => {
    const ratingA = parseFloat(a.querySelector('.rating').textContent);
    const ratingB = parseFloat(b.querySelector('.rating').textContent);

    return ratingB - ratingA;
  });

  const restaurantList = document.querySelector('.restaurant-list');
  restaurantList.innerHTML = '';

  placesArray.forEach(place => {
    restaurantList.appendChild(place);
  });
}

const sortByRatingLink = document.getElementById('sort-by-rating');
sortByRatingLink.addEventListener('click', sortItemsByRatingHighToLow);

function sortItemsByDeliveryTimeLowToHigh() {
  const places = document.querySelectorAll('.place');
  const placesArray = Array.from(places);

  placesArray.sort((a, b) => {
    const deliveryTimeA = parseInt(a.querySelector('.delivery').textContent);
    const deliveryTimeB = parseInt(b.querySelector('.delivery').textContent);

    return deliveryTimeA - deliveryTimeB;
  });

  const restaurantList = document.querySelector('.restaurant-list');
  restaurantList.innerHTML = '';

  placesArray.forEach(place => {
    restaurantList.appendChild(place);
  });
}

const sortByDeliveryLink = document.getElementById('sort-by-delivery');
sortByDeliveryLink.addEventListener('click', sortItemsByDeliveryTimeLowToHigh);


var allPlaces = Array.from(document.querySelectorAll(".place"));
var container = document.querySelector(".restaurant-list");

function searchFoodItems() {
  var searchInput = document.querySelector(".search-input").value.toLowerCase();
  container.innerHTML = ""; // Clear the existing items in the container

  var matchingPlaces = allPlaces.filter(function(place) {
    var foodItemName = place.querySelector(".place-link .name").textContent.toLowerCase();
    return foodItemName.includes(searchInput) || searchInput === "";
  });

  matchingPlaces.forEach(function(place) {
    place.style.display = "inline-block"; // Set the display style to inline-block
    container.appendChild(place); // Append the matching item to the container
  });

  if (matchingPlaces.length > 0) {
    matchingPlaces[0].scrollIntoView({ behavior: "smooth" });
  }
}

var searchIcon = document.querySelector(".search-icon");
searchIcon.addEventListener("click", function(event) {
  event.preventDefault();
  searchFoodItems();
});

var searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", function() {
  searchFoodItems();
});



var imageLinks = document.querySelectorAll('.inspiration a');
imageLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var target = this.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'auto'
    });
  });
});




