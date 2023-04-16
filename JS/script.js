// Refreshing the page
const refresh = document.getElementsByTagName("a")[0];

refresh.addEventListener('click', () => {
    location.reload();
})

// Quote Array
const quotes = [
    {
        quote: "Patience is the fruit of faith, and whoever has faith has patience.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "The best deed of a great man is to forgive and forget.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "Do not let your difficulties fill you with anxiety, after all, it is only in the darkest nights that stars shine more brightly.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "The strongest among you is the one who controls his anger.",
        reference: "Al-Kafi"
    },
    {
        quote: "The best way to defeat your enemy is to make him your friend.",
        reference: "Ghurar al-Hikam"
    },
    {
        quote: "He who trusts the world, the world betrays him.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "Silence is the best reply to a fool.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "Knowledge is power, and it can command obedience. A man of knowledge during his lifetime can make people obey and follow him, and he is praised and venerated after his death.",
        reference: "Ghurar al-Hikam"
    },
    {
        quote: "A man's worth depends upon the nobility of his aspirations.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "Life consists of two days, one for you one against you. So when it's for you don't be proud or reckless, and when it's against you be patient, for both days are test for you.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "Tears only dry up as a result of hardness of the heart, and the hearts only harden as a result of frequent sinning.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "Do not feel ashamed if the amount of charity is small because to refuse the needy is an act of greater shame.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "The best people are those who are useful to others.",
        reference: "Nahjul Balagha"
    },
    {
        quote: "The greatest wealth is the richness of the soul.",
        reference: "Ghurar al-Hikam"
    },
    {
        quote: "He who has a thousand friends has not a friend to spare, And he who has one enemy will meet him everywhere.",
        reference: "Nahjul Balagha"
    }
];

// function to generate random quote
function generateQoute() {
    const randomIndex = Math.round(Math.random() * 15);
    const quote = quotes[randomIndex].quote;
    const reference = quotes[randomIndex].reference;

    // making changes in body
    document.querySelector(".quote h2").innerHTML = quote;
    document.querySelector(".reference h2").innerHTML = reference;
}

// adding onload function
window.addEventListener('load', generateQoute)
