(function() {
    let body = document.querySelector("body");

    // navbar
    let navbar = document.createElement("section");
    let input = document.createElement("input")
    let searchButton = document.createElement("button")
    let SellingButton = document.createElement("button")
    navbar.classList.add("navbarSection")
    input.classList.add("navInput")
    input.setAttribute("placeholder", "Search Item,Zip code....")
    searchButton.classList.add("searchButton")
    SellingButton.classList.add("sellingButton")
    searchButton.innerText = "Search"
    SellingButton.innerText = "Start Selling Now";

    searchButton.addEventListener("click", function () {
        if (input.value.trim() == "") {
            alert("Please Enter Item Name")
            return
        }
        alert(`You are Searching for ${input.value.trim()}`)
    })

    navbar.appendChild(input)
    navbar.appendChild(searchButton)
    navbar.appendChild(SellingButton)
    body.appendChild(navbar)

    // detail view section
    let detailViewContainer = document.createElement("section");
    detailViewContainer.classList.add("detailViewContainer");
    let imageConatiner = document.createElement("section");
    imageConatiner.classList.add("imageConatiner");
    let productDetails = document.createElement("section");
    productDetails.classList.add("productDetails");

    //image section
    let imageDiv1 = document.createElement("div");
    imageDiv1.classList.add("imageDiv1");
    let imageDiv2 = document.createElement("div")
    imageDiv2.classList.add("imageDiv2");

    let imageContain1 = document.createElement("div")
    let imageContain2 = document.createElement("div")
    let imageContain3 = document.createElement("div")
    let imageContain4 = document.createElement("div")
    imageContain1.classList.add("imageContain1")
    imageContain2.classList.add("imageContain2")
    imageContain3.classList.add("imageContain3")
    imageContain4.classList.add("imageContain4")

    imageDiv1.appendChild(imageContain1);
    imageDiv2.appendChild(imageContain2);
    imageDiv1.appendChild(imageContain3);
    imageDiv1.appendChild(imageContain4);

    imageConatiner.appendChild(imageDiv1);
    imageConatiner.appendChild(imageDiv2);

    //product details
    let phoneHeading = document.createElement("h2")
    let phoneDiscription = document.createElement("div")
    let locationNviewDiv = document.createElement("div")
    let locationLogo = document.createElement("img")
    let location = document.createElement("h5")
    let viewLogo = document.createElement("img")
    let viewedPeople = document.createElement("h5")
    let pricetag = document.createElement("h3");
    let colorModel = document.createElement("span")
    let colorName = document.createElement("span")
    let radioContainer = document.createElement("div")
    let radioGrey = document.createElement("input")
    let radioRed = document.createElement("input")
    let radioBlack = document.createElement("input")
    let radioGreen = document.createElement("input")
    let deliveryTitle = document.createElement("span")
    let storePickupButton = document.createElement("button")
    let deliveryButton = document.createElement("button");
    let quantityText = document.createElement("div")
    let quantityManager = document.createElement("div")
    let subtractItem = document.createElement("button");
    let quantityOfItem = document.createElement("input");
    let addItem = document.createElement("button");
    let deliveryCharges = document.createElement("span")
    let deliveryDays = document.createElement("span")
    let buyNowButton = document.createElement("button");
    let makeAnOfferButton = document.createElement("button");

    phoneDiscription.classList.add("phoneDiscription")
    locationNviewDiv.classList.add("locationNviewDiv")
    locationLogo.classList.add("locationLogo")
    viewLogo.classList.add("viewLogo")
    colorModel.classList.add("colorModel")
    colorName.classList.add("colorName")
    radioContainer.classList.add("radioContainer")
    deliveryTitle.classList.add("deliveryTitle")
    radioGrey.setAttribute("type", "radio")
    radioGrey.setAttribute("name", "color")
    radioGrey.setAttribute("checked", "checked")
    radioRed.setAttribute("type", "radio")
    radioRed.setAttribute("name", "color")
    radioBlack.setAttribute("type", "radio")
    radioBlack.setAttribute("name", "color")
    radioGreen.setAttribute("type", "radio")
    radioGreen.setAttribute("name", "color")
    storePickupButton.classList.add("storePickupButton")
    deliveryButton.classList.add("deliveryButton")
    quantityText.classList.add("quantityText")
    subtractItem.classList.add("subtractItem")
    addItem.classList.add("addItem")
    quantityOfItem.classList.add("quantityOfItem")
    quantityManager.classList.add("quantityManager")
    deliveryCharges.classList.add("deliveryCharges")
    deliveryDays.classList.add("deliveryDays")
    makeAnOfferButton.classList.add("makeAnOfferButton")
    buyNowButton.classList.add("buyNowButton")

    let count = 0;
    phoneHeading.innerHTML = "Apple iphone 11 Pro Max";
    locationLogo.src = "./img/Location-PNG.png"
    location.innerText = `Sec-66 Mohali 5 . miles away`
    viewLogo.src = "./img/view.png"
    viewedPeople.innerText = "14,323 Viewed"
    phoneDiscription.innerText = "The biggest iPhone in Apple's lineup, the iPhone 11 Pro Max looks like an incremental upgrade over the iPhone XS Max but it brings some significant changes under the hood. There's a triple camera setup at the back now, letting you choose between the Wide, Ultra Wide, and Telephoto lenses."
    pricetag.innerText = "$1999.99";
    colorModel.innerText = "Color:";
    colorName.innerText = "grey";
    radioRed.style.accentColor = "red";
    radioRed.setAttribute("value", "red")
    radioBlack.style.accentColor = "black";
    radioBlack.setAttribute("value", "black")
    radioGrey.style.accentColor = "grey";
    radioGrey.setAttribute("value", "grey")
    radioGreen.style.accentColor = "green";
    radioGreen.setAttribute("value", "green")
    deliveryTitle.innerText = "Delivery";
    deliveryButton.innerText = "Delivery";
    storePickupButton.innerText = "Store Pickup";
    quantityText.innerText = "Quantity"
    subtractItem.innerHTML = "-"
    addItem.innerHTML = "+"
    quantityOfItem.value = count;
    deliveryCharges.innerText = "Delivery: $40";
    deliveryDays.innerText = "(2-3 bussiness days. $40 shipping)"
    buyNowButton.innerHTML = "Buy Now";
    makeAnOfferButton.innerHTML = "Make an Offer"

    addItem.addEventListener("click", function () {
        count++
        quantityOfItem.value = count
    })
    subtractItem.addEventListener("click", function () {
        if (count <= 0) {
            quantityOfItem.value = 0;
            return
        }
        count--
        quantityOfItem.value = count
    })
    makeAnOfferButton.addEventListener("click", function () {
        modal.style.display = "block";
    })

    buyNowButton.addEventListener("click", function () {
        buyNowButton.disabled="true"
    })

    productDetails.appendChild(phoneHeading);
    locationNviewDiv.appendChild(locationLogo);
    locationNviewDiv.appendChild(location);
    locationNviewDiv.appendChild(viewLogo);
    locationNviewDiv.appendChild(viewedPeople)
    productDetails.appendChild(locationNviewDiv)
    productDetails.appendChild(phoneDiscription);
    productDetails.appendChild(pricetag);
    productDetails.appendChild(colorModel);
    productDetails.appendChild(colorName);
    radioContainer.appendChild(radioGrey);
    radioContainer.appendChild(radioRed);
    radioContainer.appendChild(radioBlack);
    radioContainer.appendChild(radioGreen);
    productDetails.appendChild(radioContainer);
    productDetails.appendChild(deliveryTitle);
    productDetails.appendChild(storePickupButton);
    productDetails.appendChild(deliveryButton);
    productDetails.appendChild(quantityText);
    quantityManager.appendChild(subtractItem);
    quantityManager.appendChild(quantityOfItem);
    quantityManager.appendChild(addItem);
    productDetails.appendChild(quantityManager);
    productDetails.appendChild(deliveryCharges);
    productDetails.appendChild(deliveryDays);
    productDetails.appendChild(buyNowButton);
    productDetails.appendChild(makeAnOfferButton);

    detailViewContainer.appendChild(imageConatiner);
    detailViewContainer.appendChild(productDetails);
    body.appendChild(detailViewContainer);

    let radioButtons = document.querySelectorAll(`input[type="radio"]`)
    radioButtons.forEach((button) => {
        button.addEventListener("change", function () {
            if (button.value == "green") {
                console.log(button.value)
                colorName.innerText = `${button.value}`
                imageContain2.style.backgroundImage = `url("./img/greeniphone1.jfif")`
                imageContain1.style.backgroundImage = `url("./img/rectangle.jpg")`
                imageContain3.style.backgroundImage = `url("./img/rectangle-1.jpg")`
                imageContain4.style.backgroundImage = `url("./img/rectangle-2.jpg")`

            }
            if (button.value == "red") {
                console.log(button.value)
                colorName.innerText = `${button.value}`
                imageContain2.style.backgroundImage = `url("./img/rediphone.jfif")`
                imageContain1.style.backgroundImage = `url("./img/rectangle-1.jpg")`
                imageContain3.style.backgroundImage = `url("./img/rectangle-2.jpg")`
                imageContain4.style.backgroundImage = `url("./img/rectangle.jpg")`

            }
            if (button.value == "grey") {
                console.log(button.value)
                colorName.innerText = `${button.value}`
                imageContain2.style.backgroundImage = `url("./img/rectangle-4.jfif")`
                imageContain1.style.backgroundImage = `url("./img/rectangle-2.jpg")`
                imageContain3.style.backgroundImage = `url("./img/rectangle-1.jpg")`
                imageContain4.style.backgroundImage = `url("./img/rectangle.jpg")`
            }
            if (button.value == "black") {
                console.log(button.value)
                colorName.innerText = `${button.value}`
                imageContain2.style.backgroundImage = `url("./img/blackiphone1.jfif")`
                imageContain1.style.backgroundImage = `url("./img/rectangle-2.jpg")`
                imageContain3.style.backgroundImage = `url("./img/rectangle.jpg")`
                imageContain4.style.backgroundImage = `url("./img/rectangle-1.jpg")`

            }

        })
    })

    //modal section

    let modal = document.createElement("modal")
    let modalheaderContainer = document.createElement("div")
    let modalHeading = document.createElement("h4")
    let crossButton = document.createElement("img")
    let modalOfferInput = document.createElement("input")
    let modalDeliveryTitle = document.createElement("span")
    let modalStorePickupButton = document.createElement("button")
    let modalDeliveryButton = document.createElement("button");
    let deliveryTo = document.createElement("span")
    let modalAddressInput = document.createElement("input")
    // let modalInputLocationLogo=document.createElement("img")
    let modalDeliveryCharges = document.createElement("span")
    let modalDeliveryDays = document.createElement("span")
    let modalPayment = document.createElement("span")
    let modalOnlineButton = document.createElement("button")
    let modalPayInPersonButton = document.createElement("button")
    let modalSubmitButton = document.createElement("button")

    modal.classList.add("modal")
    modalHeading.classList.add("modalHeading")
    modalheaderContainer.classList.add("modalheaderContainer")
    crossButton.classList.add("crossButton")
    modalOfferInput.classList.add("modalOfferInput")
    modalOfferInput.setAttribute("placeholder", "Enter your Offer")
    modalDeliveryTitle.classList.add("modalDeliveryTitle")
    modalStorePickupButton.classList.add("modalStorePickupButton")
    modalDeliveryButton.classList.add("modalDeliveryButton")
    deliveryTo.classList.add("deliveryTo")
    modalAddressInput.classList.add("modalAddressInput")
    // modalInputLocationLogo.classList.add("modalInputLocationLogo")
    modalDeliveryCharges.classList.add("modalDeliveryCharges")
    modalDeliveryDays.classList.add("modalDeliveryDays")
    modalPayment.classList.add("modalPayment")
    modalOnlineButton.classList.add("modalOnlineButton")
    modalPayInPersonButton.classList.add("modalPayInPersonButton")
    modalSubmitButton.classList.add("modalSubmitButton")

    modalHeading.innerHTML = "Make Offer"
    crossButton.src = "./img/cross.png"
    modalDeliveryTitle.innerHTML = "Delivery"
    modalStorePickupButton.innerHTML = "Store Pickup"
    modalDeliveryButton.innerHTML = "Delivery"
    deliveryTo.innerHTML = "Delivery to"
    modalAddressInput.setAttribute("placeholder", "San Jose , CA 5 miles away")
    // modalInputLocationLogo.src="./img/Location-PNG.png"
    modalDeliveryCharges.innerText = "Delivery: $40";
    modalDeliveryDays.innerText = "(2-3 bussiness days. $40 shipping)"
    modalPayment.innerHTML = "Payment"
    modalPayInPersonButton.innerHTML = "Pay in Person"
    modalOnlineButton.innerHTML = "Online"
    modalSubmitButton.innerHTML = "Submit Offer"

    crossButton.addEventListener("click", function () {
        modal.style.display = "none"
    })

    modalSubmitButton.addEventListener("click", function () {
        alert("Price Range is Low")
    })


    modalheaderContainer.appendChild(modalHeading)
    modalheaderContainer.appendChild(crossButton)
    modal.appendChild(modalheaderContainer)
    modal.appendChild(modalOfferInput)
    modal.appendChild(modalDeliveryTitle)
    modal.appendChild(modalStorePickupButton)
    modal.appendChild(modalDeliveryButton)
    modal.appendChild(deliveryTo)
    // modalAddressInput.appendChild(modalInputLocationLogo)
    modal.appendChild(modalAddressInput)
    modal.appendChild(modalDeliveryCharges)
    modal.appendChild(modalDeliveryDays)
    modal.appendChild(modalPayment)
    modal.appendChild(modalOnlineButton)
    modal.appendChild(modalPayInPersonButton)
    modal.appendChild(modalSubmitButton)
    body.appendChild(modal)


    let hr = document.createElement("hr")
    hr.classList.add("hr")
    body.appendChild(hr)

    //seller details

    let aboutTheProductOption = document.createElement("span")
    let sellerDetails = document.createElement("span")
    let sellerDetailsContainer = document.createElement("div")
    let sellerImg = document.createElement("img")
    let sellerUserNameDiv = document.createElement("div")
    let sellerUserName = document.createElement("h4")
    let ratings = document.createElement("img")
    let review = document.createElement("span")
    let sellerLocation = document.createElement("div")
    let sellerLocationLogo = document.createElement("img")
    let sellerAddress = document.createElement("span")

    let saleDiv = document.createElement("div")
    let itemSale = document.createElement("h4")
    let itemForSale = document.createElement("span")
    let totalSaleDiv = document.createElement("div")
    let totalSaleNo = document.createElement("h4")
    let totalSale = document.createElement("span")
    let contactButton = document.createElement("button")
    let visitStore = document.createElement("button")

    aboutTheProductOption.classList.add("aboutTheProductOption")
    sellerDetails.classList.add("sellerDetails")
    sellerDetailsContainer.classList.add("sellerDetailsContainer")
    sellerImg.classList.add("sellerImg")
    sellerUserNameDiv.classList.add("sellerUserNameDiv")
    sellerUserName.classList.add("sellerUserName")
    ratings.classList.add("ratings")
    review.classList.add("review")
    sellerLocation.classList.add("sellerLocation")
    sellerLocationLogo.classList.add("sellerLocationLogo")
    sellerAddress.classList.add("sellerAddress")
    itemForSale.classList.add("itemForSale")
    saleDiv.classList.add("saleDiv")
    totalSaleDiv.classList.add("totalSaleDiv")
    totalSale.classList.add("itemForSale")
    contactButton.classList.add("contactButton")
    visitStore.classList.add("visitStore")

    aboutTheProductOption.innerHTML = "About the Product"
    sellerDetails.innerHTML = "Seller Details"
    sellerImg.src = "./img/seller.png"
    sellerUserName.innerHTML = "@store Name"
    ratings.src = "./img/star.png"
    review.innerText = "(14,565 Reviews)"
    sellerLocationLogo.src = "./img/Location-PNG.png"
    sellerAddress.innerHTML = "San Jose CA . 5 Miles Away"
    itemSale.innerText = "1,578";
    itemForSale.innerHTML = "Items for Sale";
    totalSaleNo.innerHTML = "15,165"
    totalSale.innerHTML = "Total Sale"
    contactButton.innerHTML = "Contact"
    visitStore.innerHTML = "Visit store"


    body.appendChild(aboutTheProductOption)
    body.appendChild(sellerDetails)
    sellerDetailsContainer.appendChild(sellerImg)
    sellerUserNameDiv.appendChild(sellerUserName)
    sellerUserNameDiv.appendChild(ratings)
    sellerUserNameDiv.appendChild(review)
    sellerLocation.appendChild(sellerLocationLogo);
    sellerLocation.appendChild(sellerAddress)
    sellerUserNameDiv.appendChild(sellerLocation)
    sellerDetailsContainer.appendChild(sellerUserNameDiv)


    saleDiv.appendChild(itemSale)
    saleDiv.appendChild(itemForSale)
    totalSaleDiv.appendChild(totalSaleNo)
    totalSaleDiv.appendChild(totalSale)
    sellerDetailsContainer.appendChild(saleDiv)
    sellerDetailsContainer.appendChild(totalSaleDiv)
    sellerDetailsContainer.appendChild(contactButton)
    sellerDetailsContainer.appendChild(visitStore)
    body.appendChild(sellerDetailsContainer)

    //similar Items

    let similarItemsTitle = document.createElement("h4")
    similarItemsTitle.classList.add("similarItemsTitle")
    similarItemsTitle.innerHTML = "Similar Items"
    body.appendChild(similarItemsTitle);


    let iphoneData = [
        {
            id: 1,
            name: "Apple iphone 11 Pro Max",
            price: "$1999.99",
            view:"11,436",
            img: "./img/reuse.jfif",
            des: "The biggest iPhone in Apple's lineup, the iPhone 11 Pro Max looks like an incremental upgrade over the iPhone XS Max but it brings some significant changes under the hood. There's a triple camera setup at the back now, letting you choose between the Wide, Ultra Wide, and Telephoto lenses."
        },
        {
            id: 2,
            name: "Apple iphone 12 Plus",
            price: "$992",
            view:"15,436",
            img: "./img/iphone1.jpg",
            des: "Apple iPhone 12 Pro Plus is the upcoming mobile that is a great combination of functionality and style. The phone is speculated to be launched in India on July 24, 2020 (Unofficial) at a starting price of Rs 124,990. You will be able to buy this lightweight, sleek and stylish phone in different color options."
        },
        {
            id: 3,
            name: "Apple iphone13",
            price: "$998",
            view: "18,436",
            img: "./img/iphone2.jpg",
            des: "The iPhone 13 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.40 centimetres / 6.06 inches diagonally (actual viewable area is less)."
        },
        {
            id: 4,
            name: "Apple iphone14",
            price: "$1002",
            view:"19,436",
            img: "./img/iphone3.jpg",
            des: "Apple iphone 14 looks identical to the iPhone 13, but there's a new 6.7-inch model called the iPhone 14 Plus. Under-the-hood improvements include 6GB of RAM, a 5-core GPU, Bluetooth 5.3, and multiple camera updates. Color options have been updated with (PRODUCT)RED, blue, purple, midnight, and starlight."
        },
        {
            id: 5,
            name: "Apple iphone14 Plus",
            price: "$999",
            view:"13,636",
            img: "./img/iphone4.jpg",
            des: "Apple iPhone 14 Plus is a perfect choice that is available at a starting price of Rs 89,900. The phone offers a slip-free grip as it is light in weight and is easy to carry.This stylish handset from Apple comes with a 6.7 inches (17.02 cm) display that has a resolution of 2778 x 1284 Pixels offering immersive and comfortable viewing"
        }
        ,
        {
            id: 6,
            name: "Apple iphone14 Pro Max",
            price: "$1008",
            view:"22,437",
            img: "./img/iphone5.jpg",
            des: "The iPhone 14 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 17.00 centimetres / 6.69 inches diagonally (actual viewable area is less)."
        }
        ,
        {
            id: 7,
            name: "Apple iphone SE(2022)",
            price: "$998",
            view:"17,937",
            img: "./img/iphone1.jpg",
            des: "Apple iphone SE(2022)is powered by an A15 Bionic chipset that gives you faster and lag-free performance. Moreover, the Apple smartphone is available in 64GB, 128GB, and 256GB storage variants in midnight, starlight, and (PRODUCT)RED color variants. Besides, the phone houses a Li-Ion mAh non-removable battery that supports fast charging."
        }
        ,
        {
            id: 8,
            name: "Apple iphone12 Mini",
            price: "$990",
            view:"14,236",
            img: "./img/iphone2.jpg",
            des: "The iPhone 12 mini display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches diagonally (actual viewable area is less)."
        },
        {
            id: 9,
            name: "Apple iphone4",
            price: "$880",
            view:"10,433",
            img: "./img/iphone3.jpg",
            des: "The iPhone 4 introduced a new hardware design to the iPhone family, which Apple's CEO Steve Jobs touted as the thinnest smartphone in the world at the time; it consisted of a stainless steel frame which doubled as an antenna, with internal components situated between two panels of aluminosilicate glass."
        },
        {
            id: 10,
            name: "Apple iphone4s",
            price: "$889",
            view:  "13,438",
            img: "./img/iphone4.jpg",
            des: "The iPhone 4s is the fifth generation of Apple’s smartphone. While no differences to the phone’s external characteristics were made, this version of the iPhone released a year later after its very successful predecessor introduced a few changes to the 4s version compared to the iPhone 4, including increased battery life, extended wireless connectivity and a more powerful dual­core processor."
        },
        {
            id: 11,
            name: "Apple iphone5",
            price: "$890",
            view:"19,336",
            img: "./img/iphone5.jpg",
            des: "The iPhone 5 is the sixth generation of the Apple smartphone. This version has introduced great design changes, including a lighter body and a taller screen. The iPhone 5 introduced features that were not presented on the iPhone’s previous generations, for instance, LTE support, Lightning and a new, more compact, version of the dock connector."
        },
        {
            id: 12,
            name: "Apple iphone6 Spotlight",
            price: "$899",
            view:"21,341",
            img: "./img/iphone1.jpg",
            des: "Fortunately your iPhone has an awesome search feature called Spotlight Search that makes things a lot easier. We will show you how to search your iPhone 6 with this tool in the guide below. Apple devices, such as the iPhone, iPad and Macbooks, have a helpful feature called Spotlight Search."
        } 
    ]
    //div
    let similarItemContainer = document.createElement("div")
    similarItemContainer.classList.add("similarItemContainer")

    iphoneData.forEach((model) => {
        let redivContainer = document.createElement("div")
        let redivContainerImg = document.createElement("img")
        let reModelName = document.createElement("span")
        let reLocationLogo = document.createElement("img")
        let reAddress = document.createElement("span")
        let reViewLogo = document.createElement("img")
        let reViews = document.createElement("span")
        let reRate = document.createElement("h3")

        redivContainer.classList.add("redivContainer")
        redivContainerImg.classList.add("redivContainerImg")
        reModelName.classList.add("reModelName")
        reLocationLogo.classList.add("relocationLogo")
        reAddress.classList.add("reAddress")
        reViewLogo.classList.add("reViewLogo")
        reViews.classList.add("reViews")
        reRate.classList.add("reRate")

        redivContainerImg.src = `${model.img}`
        reModelName.innerHTML = `${model.name}`
        reLocationLogo.src = "./img/Location-PNG.png"
        reAddress.innerHTML = "5 Miles Away"
        reViewLogo.src = "./img/view.png"
        reViews.innerHTML = `${model.view}`
        reRate.innerHTML = `${model.price}`

        redivContainer.appendChild(redivContainerImg)
        redivContainer.appendChild(reModelName)
        redivContainer.appendChild(reLocationLogo)
        redivContainer.appendChild(reAddress)
        redivContainer.appendChild(reViewLogo)
        redivContainer.appendChild(reViews)
        redivContainer.appendChild(reRate)
        similarItemContainer.appendChild(redivContainer)

        redivContainer.addEventListener("click", function () {
            let phoneHeading = document.querySelector("h2")
            let pricetag = document.querySelector("h3")
            let phoneDiscription = document.querySelector(".phoneDiscription")


            phoneHeading.innerHTML = reModelName.innerHTML
            pricetag.innerText = reRate.innerHTML
            phoneDiscription.innerHTML = `${model.des}`
            viewedPeople.innerText=`${model.view}`
            

        })

        redivContainer.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })

    })
    body.append(similarItemContainer)


    let lowerFooter = document.createElement("section")
    let conatinerServices = document.createElement("div")
    lowerFooter.classList.add("lowerFooter")
    conatinerServices.classList.add("conatinerServices")

    let services = [
        {
            image: "./img/delivery.png",
            name: "Fast and Free delivery",
            benifit: "Free delivery for all over $200"
        },
        {
            image: "./img/guarntee.png",
            name: "Money back guarantee",
            benifit: "We return Money Within 30 Days"
        },
        {
            image: "./img/247.png",
            name: "24/7 customer Support",
            benifit: "Friendly 24/7 customer support"
        }

    ]
    services.forEach((offer) => {
        let service = document.createElement("div")
        let serviceImage = document.createElement("img")
        let serviceName = document.createElement("div")
        let serviceNameBenifit = document.createElement("div")

        service.classList.add("service")
        serviceImage.classList.add("serviceImage")
        serviceName.classList.add("serviceName")
        serviceNameBenifit.classList.add("serviceNameBenifit")

        serviceImage.src = `${offer.image}`
        serviceName.innerHTML = `${offer.name}`
        serviceNameBenifit.innerHTML = `${offer.benifit}`


        service.appendChild(serviceImage)
        service.appendChild(serviceName)
        serviceName.appendChild(serviceNameBenifit)
        conatinerServices.appendChild(service)
    })
    lowerFooter.appendChild(conatinerServices)
    body.appendChild(lowerFooter)


    //online Shopping
    let stuff = document.createElement("div")
    stuff.classList.add("stuff")
    lowerFooter.appendChild(stuff)

    let onlineShopping = document.createElement("h4")
    onlineShopping.classList.add("onlineShopping")
    onlineShopping.innerHTML = "Online Shopping"
    stuff.appendChild(onlineShopping)

    let products = [
        {
            name: "Electronics"
        },
        {
            name: "Vancies"
        },
        {
            name: "Real State"
        },
        {
            name: "Vehicle"
        },
        {
            name: "Other Services"
        },
        {
            name: "Free Stuffs"
        },

    ]

    products.forEach((product) => {
        let li = document.createElement("li")
        li.innerHTML = `${product.name}`
        stuff.appendChild(li)
    })


    //useful Links

    let linkContainer = document.createElement("div")
    let usefulLink = document.createElement("h4")
    usefulLink.innerHTML = "Useful Links"

    linkContainer.classList.add("linkContainer")
    usefulLink.classList.add("usefulLink")
    linkContainer.appendChild(usefulLink)

    let links = [
        {
            linkName: "Home"
        },
        {
            linkName: "About Us"
        },
        {
            linkName: "Terms And Condition"
        },
        {
            linkName: "FAQ"
        },
        {
            linkName: "Privacy Policies"
        },
        {
            linkName: "Shiping & Return"
        },
        {
            linkName: "Contact Us"
        },

    ]
    links.forEach((link) => {
        let usefulLinkLi = document.createElement("li")
        usefulLinkLi.innerText = `${link.linkName}`
        linkContainer.appendChild(usefulLinkLi)
    })
    lowerFooter.appendChild(linkContainer)



    //footer
    let footer = document.createElement("div")
    let copyright = document.createElement("div")
    let socialLogo = document.createElement("div")
    let content = document.createElement("h4")
    let fbLogo = document.createElement("img")
    let twitter = document.createElement("img")
    let insta = document.createElement("img")
    let git = document.createElement("img")
    let linkdin = document.createElement("img")

    footer.classList.add("footer")
    content.classList.add("content")
    socialLogo.classList.add("socialLogo")
    fbLogo.classList.add("fbLogo")
    twitter.classList.add("fbLogo")
    insta.classList.add("fbLogo")
    git.classList.add("fbLogo")
    linkdin.classList.add("fbLogo")

    content.innerHTML = "silios.com copyright 2021. All right reserved"
    fbLogo.src = "./img/fb.png"
    twitter.src = "./img/twitter.png"
    insta.src = "./img/insta.png"
    git.src = "./img/git.png"
    linkdin.src = "./img/linkdin.png"

    socialLogo.appendChild(fbLogo)
    socialLogo.appendChild(twitter)
    socialLogo.appendChild(insta)
    socialLogo.appendChild(git)
    socialLogo.appendChild(linkdin)
    copyright.appendChild(content)
    footer.appendChild(copyright)
    footer.appendChild(socialLogo)
    body.appendChild(footer)

    let backTotop = document.createElement("button")
    backTotop.classList.add("backTotop")
    backTotop.innerHTML = "Back to top"
    lowerFooter.appendChild(backTotop)
    backTotop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

})()