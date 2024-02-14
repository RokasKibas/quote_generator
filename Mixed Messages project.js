//quote section
let quotes = {
    quoteOne: [
        "Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you. - Mary Lou Retton",
        "Positive anything is better than negative nothing. - Elbert Hubbard",
        "The only time you fail is when you fall down and stay down. - Stephen Richards",
        "Happiness is an attitude. We either make ourselves miserable, or happy and strong. The amount of work is the same. - Francesca Reigler",
        "Its not whether you get knocked down, its whether you get up. - Vince Lombardi",
        "The struggle you are in today is developing the strength you need tomorrow. - Robert Tew"
    ],


    quoteTwo: [
        "Happiness is the only thing that multiplies when you share it. - Albert Schweitzer",
        "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
        "Once you replace negative thoughts with positive ones, you will start having positive results. - Willie Nelson",
        "Positive thinking will let you do everything better than negative thinking will. - Zig Ziglar",
        "The way I see it, if you want the rainbow, you gotta put up with the rain. - Dolly Parton",
        "The good life is a process, not a state of being. It is a direction, not a destination. - Carl Rogers"
    ],


    quoteThree: [
        "You are off to great places, today is your day. Your mountain is waiting, so get on your way. - Dr. Seuss",
        "Winning is fun, but those moments that you can touch someones life in a very positive way are better. - Tim Howard",
        "Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude. - Lou Holtz",
        "You are never too old to set another goal or dream a new dream. - Les Brown",
        "Every day may not be good… but there is something good in every day. - Alice Morse Earle",
        "Live life to the fullest and focus on the positive. - Matt Cameron"
    ],
    //randomizer
    randomQuote(quoteOne, quoteTwo, quoteThree) {
        let randQ1 = Math.floor(Math.random() * this.quoteOne.length);
        let randQ2 = Math.floor(Math.random() * this.quoteTwo.length);
        let randQ3 = Math.floor(Math.random() * this.quoteThree.length);
        return `Your three random quotes are:\n 
        ${quoteOne[randQ1]}\n
        ${quoteTwo[randQ2]}\n
        ${quoteThree[randQ3]}`
    },
    
}

console.log(quotes.randomQuote(quotes.quoteOne, quotes.quoteTwo, quotes.quoteThree))