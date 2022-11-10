//object containing arrays of quotes depending on type selection on html page. These will be used to determine the quote to show when user selects the category

const quotes = {
    general: [
        'We cannot solve problems with the kind of thinking we employed when we came up with them. - Albert Einstein',
        'Learn as if you will live forever, live like you will die tomorrow. - Mahatma Gandhi',
        'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together. - Diane McLaren',
        'Success is not final; failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill',
        'It is better to fail in originality than to succeed in imitation. - Herman Melville'
    ],

    funny: [
        'People say nothing is impossible, but I do nothing every day. - Winnie the Pooh',
        'Life is like a sewer… what you get out of it depends on what you put into it. - Tom Lehrer',
        'Change is not a four letter word… but often your reaction to it is! - Jeffrey Gitomer',
        'If you think you are too small to make a difference, try sleeping with a mosquito. - Dali Lama'
    ],

    love: [
        `... it's a blessed thing to love and feel loved in return. - E.A Bucchianeri`,
        `Love is like a good cake; you never know when it's coming, but you'd better eat it when it does! - C. JayBell C`,
        `The most important thing in life is to learn how to give out love, and to let it come in - Morrie Schwartz`,
        `Love will find a way through paths where wolves fear to prey. - Lord Byron`
    ],

    religious: [
        `Relying on God has to start all over everyday, as if nothing has yet been done. C.S. Lewis`,
        `I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love. - Mother Teresa`,
        `Aim at heaven and you will get earth thrown in. Aim at earth and you get neither. - C.S. Lewis`,
        `Only when we are brave enough to explore the darkness will we discover the infinite power of our light. - Brene Brown`
    ]
};

//object containing paths to images
const dogImages = {
    images: [
        './images/dog1.jpg',
        './images/dog2.jpg',
        './images/dog3.jpg',
        './images/dog4.jpg'
    ]
};

//get buttons and required elements by id
//general button
const general = document.getElementById('general');
//funny button
const funny = document.getElementById('funny');
//love button
const love = document.getElementById('love');
//religious button
const religious = document.getElementById('religious');
//get quote button
const getQuote = document.getElementById('getQuote');
//secret message section
const secret = document.getElementById('secret');
//dog button
const dogButton = document.getElementById('dogButton');
//image select
const image = document.getElementById('image');


//function to select random quote depending on category
const quoteSelect = (category) => {
    //determine length of category selected
    const size = quotes[category].length;
    //select random quote
    const randPosition = Math.floor(Math.random() * size);
    //return quote from position
    return quotes[category][randPosition];
};

//function to select random image source for dog pictures which will be added if motivation boost button is pressed
const dogSelect = () => {
    //determine how many image src there are
    const size = dogImages.images.length;
    //select random image src
    const randPosition = Math.floor(Math.random() * size);
    //return image src
    return dogImages.images[randPosition];
}



//event listener for general button mousedown + mouseup
//general button
general.addEventListener('mousedown', function(){
    general.style.backgroundColor = 'blue';
})
general.addEventListener('mouseup', function(){
    general.style.backgroundColor = '#31a9be';
})

//funny button
funny.addEventListener('mousedown', function(){
    funny.style.backgroundColor = 'blue';
})
funny.addEventListener('mouseup', function(){
    funny.style.backgroundColor = '#31a9be';
})

//love button
love.addEventListener('mousedown', function(){
    love.style.backgroundColor = 'blue';
})
love.addEventListener('mouseup', function(){
    love.style.backgroundColor = '#31a9be';
})

//religious button
religious.addEventListener('mousedown', function(){
    religious.style.backgroundColor = 'blue';
})
religious.addEventListener('mouseup', function(){
    religious.style.backgroundColor = '#31a9be';
})

//dog button
dogButton.addEventListener('mousedown', function(){
    dogButton.style.backgroundColor = 'blue';
})
dogButton.addEventListener('mouseup', function(){
    dogButton.style.backgroundColor = '#31a9be';
})

//event listeners to hide other buttons once category selected. It will also add quote to screen as well as dog button. Event listener will then be removed.
//for general button
general.addEventListener('click', function() {
    general.style.display = 'none';
    funny.style.display = 'none';
    love.style.display = 'none';
    religious.style.display = 'none';
    //reveal quote
    quoteReveal.innerHTML = "<span id='chosenQuote'>" + quoteSelect('general') + "</span>";
    //reveal dog options for extra boost
    dogButton.style.display = 'inline';
})

//for love button
love.addEventListener('click', function() {
    general.style.display = 'none';
    funny.style.display = 'none';
    love.style.display = 'none';
    religious.style.display = 'none';
    //reveal quote
    quoteReveal.innerHTML = "<span id='chosenQuote'>" + quoteSelect('love') + "</span>";
    //reveal dog options for extra boost
    dogButton.style.display = 'inline';
})
//for funny button
funny.addEventListener('click', function() {
    general.style.display = 'none';
    funny.style.display = 'none';
    love.style.display = 'none';
    religious.style.display = 'none';
    //reveal quote
    quoteReveal.innerHTML = "<span id='chosenQuote'>" + quoteSelect('funny') + "</span>";
    //reveal dog options for extra boost
    dogButton.style.display = 'inline';
})
//for religious button
religious.addEventListener('click', function() {
    general.style.display = 'none';
    funny.style.display = 'none';
    love.style.display = 'none';
    religious.style.display = 'none';
    //reveal quote
    quoteReveal.innerHTML = "<span id='chosenQuote'>" + quoteSelect('religious') + "</span>";
    //reveal dog options for extra boost
    dogButton.style.display = 'inline';
})

//add event listener to dog button to reveal pic of dog and hide boost button
dogButton.addEventListener('click', function() {
    image.src = dogSelect();
    dogButton.style.display = 'none';
});