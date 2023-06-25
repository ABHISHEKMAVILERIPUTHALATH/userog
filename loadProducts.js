                var db = firebase.firestore();
                var products = document.querySelector(".restaurant-list")

                function renderDocument(doc) {
                    let data = doc.data();
                    products.innerHTML+=`
                                    <div onclick="showPopup('${data.name}','${data.image}','${data.price}')" class="list-item">
                                        <div class="item-content">
                                            <div class="top-img">
                                                <img class="image-section" alt="product image" src="${data.image}" width="254" height="160">
                                            </div>
                                        
                                            <div class="place-name-div">
                                                <div class="name">${data.name}</div>
                                                <div class="food-items" title=" title=" italian,="" pizzas,="" fast="" food,="" mexican,="" desserts,="" beverages="">
                                                    ${data.product_desc}
                                                </div>
                                            </div>
                                            <div class="info-div">
                                                <div class="rating">
                                                    <span class="icon-star"><i class="fa-solid fa-star"></i></span>
                                                    <span>${data.rating}</span>
                                                </div>
                                                <div>•</div>
                                                <div class="delivery">${data.time}MINS</div>
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
                                    </div>`
                }

                var p=[]

                // Function to fetch and render all documents in the collection
                function fetchAndRenderDocuments() {
                    p=[]
                    db.collection('products').get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            renderDocument(doc);
                            p.push(doc)
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


                function search(){
                    products.innerHTML=""
                    let keyword =document.querySelector('.search-input').value;
                    if(keyword.length){
                        p.map((doc)=>{
                            if(doc.data().name.toLowerCase().search(keyword.toLowerCase())>=0){
                                renderDocument(doc)
                            }
                        })
                    }else{
                        p.forEach((doc)=>{
                            renderDocument(doc);
                        })
                    }
                }
                
                function deliverytime(){
                    p.sort((a,b)=>a.data().time-b.data().time);
                    products.innerHTML="",
                    p.forEach(e=>renderDocument(e));
                }

                function rating(){
                    p.sort((a,b)=>a.data().rating-b.data().rating);
                    products.innerHTML="",
                    p.forEach(e=>renderDocument(e));
                }
                function lowtohigh(){
                    p.sort((a,b)=>a.data().price-b.data().price);
                    products.innerHTML="",
                    p.forEach(e=>renderDocument(e));
                }
                function hightolow(){
                    p.sort((a,b)=>b.data().price-a.data().price);
                    products.innerHTML="",
                    p.forEach(e=>renderDocument(e));
                }
                let user = firebase.auth().currentUser;
                var selected=null;
                
                firebase.auth().onAuthStateChanged((user)=>{
                    if(user){
                        const usernameElement = document.getElementById('username');
                        usernameElement.innerHTML=user.displayName
                        document.getElementById('dp').src=user.photoURL;
                    }
                })
                function logout(){
                    firebase.auth().signOut()
                    .then(()=>{
                    alert("you are signing out");
                    window.location.href="index.html"
            })
            .catch(function(error) {
              console.log(error);
            });
        }

        function showPopup(name,image,price){
                    selected={name,price}
                    document.getElementById('popup').showModal();
                    document.getElementById('head').innerHTML=name
                    document.getElementById('product_img').src=image
                    document.getElementById('price').innerHTML=price
        
                }
                var db=firebase.firestore();
                function writeorder(count,seat,email) {
                    console.log(count);
                    db.collection('orders').doc().set({
                    item:selected.name,
                    price:selected.price,
                    count,
                    seat:seat.toUpperCase(),
                    email:email.email
        
                 });
        }