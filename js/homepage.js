sHeading = document.querySelector("#service-description > h3");
sDesc = document.querySelector("#service-description > div");
sImg = document.querySelector("#service-image");


document.querySelector("#service-menu-item-1").addEventListener('mouseover',()=>{
    sHeading.innerText = "Badminton Racket Stringing";
    sImg.src = "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide1.jpg";
    sDesc.innerHTML = `Some players prefer to have the comfort, power and flexibility to choose a combination of features on a single string. For this, few tennis brands offer Hybrid Strings, which have one string for Mains and a different string for Crosses. Now, YOU can also create your very own hybrid string!

    To avail of this service at Sportsjam.in, add your favourite racquet in your order, along with Tennis String for Mains and Tennis String for Crosses (Hybrid Stringing). Please note that a good understanding of string features are required to achieve an optimum balance between comfort, durability, control and power.`
})


document.querySelector("#service-menu-item-2").addEventListener('mouseover',()=>{
    sHeading.innerText = "Hybrid Racket Stringing";
    sImg.src = "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/BadmintonStringing.jpg";
    sDesc.innerHTML = `Intermediate and advanced rackets usually come in unstrung condition. We help you with stringing it with your choice of strings, to get your racket perform as per your playing style.

    At Sportsjam.in , we offer the best range of tennis and badminton rackets and strings of top brands. To avail this service, choose your favourite new racket, add Racket Stringing Service, mentioning your choice of string and tension in your order. Get your very own customised racket – ready to play!`
})

document.querySelector("#service-menu-item-3").addEventListener('mouseover',()=>{
    sHeading.innerText = "TT Bat Assembly";
    sImg.src = "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide5.jpg";
    sDesc.innerHTML = `Choose a ready-to-play Table Tennis bat from the best manufacturers or build your very own customized bat!

    We provide you a wide range of Rubbers and Blades from the best brands. Now you can make your desired combination across brands and according to your playing style. To avail this service at Sportsjam.in, add a blade, 2 rubbers (black and red) and the TT bat assembly service in your order.`
})

document.querySelector("#service-menu-item-4").addEventListener('mouseover',()=>{
    sHeading.innerText = "Cricket Bat Knocking In";
    sImg.src = "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide2.jpg";
    sDesc.innerHTML = `Buying your best suited Cricket Bat is the key to score those massive runs – true, yet the important process often ignored is getting your bat ready to play.

    Get your bat knocked-in to prepare the blade for optimum performance and longevity. In this, the bat goes through a process of oiling and hammer/ball knocks to make it ready to face the impact of high speed deliveries. To avail this service at Sportsjam.in, add your desired English willow bat along with the knocking-in service in your order.`
})
