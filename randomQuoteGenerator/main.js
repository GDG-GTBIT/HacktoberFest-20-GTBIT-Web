let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.” -Michael Scott',
    '"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
    '"It is during our darkest moments that we must focus to see the light." -Aristotle',
    '"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
    '"Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success." -Swami Vivekananda',
    

];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    output.innerHTML = randomQuote;
})