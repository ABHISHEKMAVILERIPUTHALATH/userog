                var db = firebase.firestore();
                // Retrieve documents from the collection and render them in the div
                // var documentsContainer = document.getElementById('addon');
                // var orderp = document.getElementById('op');
                var products = document.querySelector(".restaurant-list")

                // Function to render each document inside the div
                function renderDocument(doc) {
                    let data = doc.data();
                    console.log("hello");
                    console.log(data);
                products.innerHTML+=`
                                <div onclick="showPopup('${data.name}','${data.image}','${data.price}')" class="list-item">
                                    <div class="item-content">
                                        <div class="top-img">
                                            <img class="image-section" alt="product image" src="${data.image}" width="254" height="160">
                                        </div>
                                    
                                        <div class="place-name-div">
                                            <div class="name">${data.name}</div>
                                            <div class="food-items" title=" title=" italian,="" pizzas,="" fast="" food,="" mexican,="" desserts,="" beverages="">
                                                ${data.desc}
                                            </div>
                                        </div>
                                        <div class="info-div">
                                            <div class="rating">
                                                <span class="icon-star"><i class="fa-solid fa-star"></i></span>
                                                <span>${data.rating}</span>
                                            </div>
                                            <div>•</div>
                                            <div class="delivery">${data.deliverytime}MINS</div>
                                            <div>•</div>
                                            <div class="price">₹${data.price}FOR TWO</div>
                                        </div>
                                        <div class="offer-div">
                                            <span class="icon-offer-filled"><i class="fa-solid fa-tag"></i></span>
                                            <span class="offer-text">50% off | Use WELCOME50</span>
                                        </div>
                                    </div>
                                    <div class="quick-view">
                                        <span role="button" aria-label="Open" class="view-btn">BUY NOW</span>
                                    </div>
                                </div>
                            `
                }


                // Function to fetch and render all documents in the collection
                function fetchAndRenderDocuments() {
                    db.collection('products').get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            renderDocument(doc);
                        }
                    ) ;  
                })
                .catch(function(error) {
                        console.log("LLLLLLL");
                    // console.error('Error fetching documents: ', error);
                    });
                    }

                    // Call the function to fetch and render the documents when needed
                fetchAndRenderDocuments();