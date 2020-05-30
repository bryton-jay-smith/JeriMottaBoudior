function render() {

    var quotetemplate = document.getElementById('quotetemplate').innerHTML;
    document.getElementById('quotetarget').innerHTML = Mustache.render(quotetemplate, {
        "quotes": [{
                "quote": "Jeri made it so easy to be comfortable. I had never done a boudoir shoot before, but I instantly felt open and vulnerable with Jeri. She is the ultimate hype woman, and greatest supporter. My images were incredibly high quality and I’m not lying when I say that I stare at them every. single. day. Self love is an investment, and it was so worth it.",
                "name": "Maggie"
            },
            {
                "quote": "Jeri was so much fun and made us feel completely comfortable! Her energy was contagious. My fiancé and I had such a fun experience working with her! I would definitely recommend her to anyone!",
                "name": "Meagan & Deonte"
            },
            {
                "quote": "My shoots with Jeri honestly changed my life. She is one of the kindest and most knowledgeable people I’ve ever met, especially when it comes to boudoir. She makes you feel so comfortable and valued before you even walk through the door, and by the time you walk out, you feel like you have a friend and whole new sense of confidence in yourself. I truly could not recommend shooting with her enough.",
                "name": "Marie"
            },
            {
                "quote": "My experience with Jeri has never been anything but perfect. She’s funny, goofy and will HYPE YOU UP like you wouldn’t believe. One of the many things I love about her is she is so down to earth and she makes you feel so comfortable, like you’ve known her for years (hehe I have) but that’s besides the point. You will not regret doing a session with her she is AMAZING.",
                "name": "Shailyn"
            },
            {
                "quote": "Working with Jeri was nothing but an amazing time! I’ve never felt so beautiful and confident as I did when I got the chance to shoot with her. I instantly felt comfortable with Jeri because of her outgoing, fun personality. Her warmth and love for what she does. She made getting naked in front of a camera so easy and comfortable! I can’t wait til we shoot again.",
                "name": "Victoria"
            },
            {
                "quote": "Jeri is not only an amazing photographer, but an incredible human being! She knows how to bring out the best in women and helps them feel confident in their own skin. I have had 2 boudoir sessions with Jeri and she helped me feel confident &amp; happy. I have always been pleased with the outcome of the photos and blown away that I can look so good! I love Jeri&#039;s style so much because her boudoir is classy and tasteful. I highly recommend Jeri to any woman who wants to feel sexy, classy and confident.",
                "name": "Lexi"
            },
            {
                "quote": "What an incredible experience! From the very beginning Jeri is nothing but helpful! She gets to know what you like and don&#039;t like, and she is so so so kind! Jeri is attentive and quick to respond to any questions or concerns, she is also very comfortable to talk to! As much as she says it&#039;s a judgement free zone, she makes you feel it even more! She truly has you as her focus and her attention to detail is unmatched! She is everything I want in a boudoir photographer.",
                "name": "Kenzie"
            }
        ],
        "switch": function() {
            for (i = 0; i < 6; i++) {
                return this.quote + " " + this.name;
            }

        }
    });

    var headertemplate = document.getElementById('headertemplate').innerHTML;
    document.getElementById('headertarget').innerHTML = Mustache.render(headertemplate, {
        "title": "Jeri Motta Boudoir",
        "subtitle": "INTIMATE + BODY POSITIVE IMAGERY FOR THE CELEBRATION OF WOMEN"
    });

    var whyBoudior = document.getElementById('whyBoudior').innerHTML;
    document.getElementById('whyBoudiorTarget').innerHTML = Mustache.render(whyBoudior, {
        "title": "Why Boudoir?",
        "subtitle": "intimate and empowering photography of and for women.",
        "paragraphA": "Boudoir is a specialized service celebrating women, their femininity, and their self image. It is an intimate photography genre where women are clothed in lingerie or bedroom sheets. But above all, boudoir is empowerment, self love and celebration.",
        "paragraphB": "The message I want to convey in my brand as a whole is not only that women are beautiful but that no matter what shape or size they are, no matter how \"old\", no matter their past traumas and feeling about their bodies, they can love themselves completely and they can find power from being vulnerable. Women who work with me not only feel powerful in the moment but can reflect on that feeling time and time again."
    });
}