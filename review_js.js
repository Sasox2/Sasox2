//load the dom before
document.addEventListener("DOMContentLoaded", function() {


//local reviwe data
const reviews =[
    {photo: "Images/chris-johnson.jpg",
     author: "Christ Johnson", 
     profession: "Used for 1 Year",
     opinion: "A full year with the Fluffernutter Whizbang and every day feels like the first! Whenever someone asks me about the secret to my happiness, I just point them to www.FunkyFluffernutterWhizbang.com. This product is the epitome of 'Don't judge a book by its cover' (or name)!",  
    },
    {
    image: "Images/emily-roberts.jpg",
    author:"Emily Roberts",
    usetime: "Used for 6 Hours",
    opinion: "Okay, so I've only had the Fluffernutter Whizbang for a few hours, but I HAD to leave a review. It's already making waves in my day-to-day routine. If you haven't been to www.FunkyFluffernutterWhizbang.com yet, you are missing out. Big time.", 
    },
    {
    image: "Images/jake-miller.jpg",    
    author:"Jake Miller",
    usetime: "Used for 2 Months",
    opinion: "It's been two months with my Fluffernutter Whizbang, and honestly, I can't remember life before it. It's that essential. The name might sound silly, but the benefits are profoundly serious. www.FunkyFluffernutterWhizbang.com, you've got a lifelong customer!",
    },
    {
    image: "Images/sarah-thompson.jpg",
    author: "Sarah Thompson",
    usetime:"Used for 3 Days",
    opinion: "Only three days and I'm sold! At first, I chuckled at the name - Fluffernutter Whizbang? But the results? Absolutely no joke. My mornings have been transformed. Thank you, www.FunkyFluffernutterWhizbang.com for this little miracle!",
    },
    {
    image: "Images/mike-jefferson.jpg",
    author: "Mike Jefferson:",
    usetime:"Used for 1 Week",
    opinion:"Oh, man! When I first heard about Fluffernutter Whizbang! from www.FunkyFluffernutterWhizbang.com, I thought it was a joke. But just one week in and my life is already on a new trajectory. I can't believe how much joy this product brings me every day. Can't recommend it enough!",
    },
    {
    photo: "Images/melisa-williams.jpg",
    author: "Melisa Williams",
    usetime: "Used for 5 Days",
    opinion: "Just five days in, and I'm already wondering how I ever managed without the Fluffernutter Whizbang. I was skeptical given the quirky name, but it's safe to say I'm now a huge fan! For anyone on the fence, just visit www.FunkyFluffernutterWhizbang.com and take the leap. Life-changing, to say the least!",
    }
]

//selec items
const photo= document.getElementById("photo")
const author= document.getElementById("name")
const usetime= document.getElementById("usetime")
const opinion= document.getElementById("opinion")

const lefbtn= document.querySelector(".lef-btn")
const rigbtn= document.querySelector(".rig-btn")
const randombtn= document.querySelector(".randombtn")

//set starting item global parameter
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoad", function(){
    showPerson(currentItem)
})

//show person base on item

function showPerson(person){
    const item = reviews[person];
    photo.scr= item.image;
    author.textContent= item.author;
    usetime.textContent = item.usetime;
    opinion.textContent = item.opinion;
}

//show next person 

rigbtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
})
//show next person
lefbtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
})
//random btn
randombtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem)
})



});