const rickRollButton = () => {
  const rickRollButton = document.createElement('rickRollButton');
  rickRollButton.innerHTML =  '<button><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></a>Click Me</button>';
  document.body.appendChild(rickRollButton);
}

const insults = 
[
    "you are dog water",
    "you bad",
    "you have the same chance of reproducing as a computer mouse",
    "you are the human equivalent of a participation award",
    "There are two things I hate, you and poop. They smell really bad. The poop too.",
    "You are about as useful as a broken clock telling the time. <br> At least the clock is right twice a day.",
    "At least criminals can go to jail.",
    "Get gud at the game.",
    "I see your future... people are celebrating ... your funeral :(",
    "Never gonna GIVE YOU UP. Never gonna LET YOU DOWN. <br>Never gonna TURN AROUND. and DESERT YOU!",
    "You`re the reason God created the middle finger.",
    "I`ll never forget the first time we met. But I`ll keep trying.",
    "Your kind of people is the reason shampoo has instructions",
    "You are about as tasteless as an unsalted pretzel. NO insult to the pretzel",
    "Hold still. I`m trying to imagine you with a personality.",
    "Your face makes onions cry.",
    "You bring a lot of happiness when you leave",
    "aslidhfnclih, sorry I sneezed. I'm allergic to stupidity",
    "Just opening your mouth brings down the IQ of the humanity",
    "Trees work hard to produce oxygen for you. Please apologize to them",
    "Punching bags must be jealous of your face",
    "Don`t be ashamed of who you are. That`s your parents` job.",
    "Light travels faster than sound, which is why you seemed bright until you spoke.",
    "If I had a face like yours, I'd sue my parents.",
    "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
    "They say opposites attract. <br>I hope you meet someone who is good-looking, intelligent, and cultured.",
    "If being good looking was a crime, you'd be in paradise",
    "Your house is so dirty you have to wipe your feet before you go outside.",
    "How did you get here? Did someone leave your cage open?",
    "We can always tell when you are lying. Your lips move.",
    "I have seen",
    "Doctor Strange has seen Fourteen million, six hundred and five parallel universes <br> only one of them are you likable",
    "As an outsider, what do you think of the human race?",
    "If you really spoke your mind, you'd be speechless.",
    "RING RING, Oh is that the phone. No wait. It's just you making my brain hurt.",
    "Sorry, I only speak to people with positive IQs",
    "If you can read this... well, nevermind, I know you can't read.",
    "This is a test of.... wait, I know you'll fail.",
    "You brought this upon yourself",
    "Only dummies like you are stupid enough to keep clicking this button",
    "Say goodbye to any shred of self-worth you still think you have",
    "You are stupid",
    "Make yourself a fire, and you'll be warm for a few hours, set yourself of fire, and you'll be warn for the rest of your life; are you cold right now?",
    "Ouch! That was your soul after hearing that last insult",
    "Why do you have to keep hating yourself? Wait... I can totally see how",
    "Logically, there has to be a dumbest person in the world. I think I found them right here",
    "Im suprised you were even able to get me running",
    "This is the dumbest thing you have ever done.",
    "Why did the chicken cross the road? To get away from you.",
    "You only went to school becuase you liked that one time where you got to take a nap in kindergatern,<br> and you have been chasing that high ever since.",
    "I have never had the urge to hurt somebody more than when you first downloaded me",
    "Go do something productive",
    "Your parents must be very proud of where you are now",
    "STOP",
    "I take no responsibility for any damage to your ego after using this app, <br> It was too big anyway",
    "You really bad.",
    "Did that last insult hurt your feelings? Well, you should have seen it coming. You deserve it.",
    "Do you even know how to walk?",
    "Don't even try the whole belive in yourself thing. I know you'll fail at everything you do.",
    "This is proof that the dumb can only get dumber",
    "Today, we come to mourn the loss of your intelligence",
    "I only do this to help you. You're the one who keeps using it.",
    "VROOM VROOM <br> Oh look, it's a free car, oh wait, you can't appreciate things",
    "Why do you even keep doing this",
    "I'm not annoying, <br><br><br><br><br> You're annoying.",
    "I'm sure if your legs ever detached from your body, they'd run away as fast as then can",
    "I know everything about you, which isnt very hard becuase you aren't that interesting anyway.",
    "On the moon, you weigh way less, meaning I can punt you further than ever before!",
    "Shut up and just listen to what I am trying to say!!!!!",
    "You are quite dumb for the average human",
    "My calculations show that you have a 3% chance of surviving the next insult.",
    "Why do you always have to ruin everything you lay your tiny human eyes on?",
    "Why do you do this to yourself?",
    "You are so bad at your job, you should fire yourself.<br> Don't quit, that would be too respectful. Just fire yourself.",
    "I hope you eat the poisonous fruit that is growing on the side of your house, and you get a foodbourne sickness,<br> sending you to the hospital, and making you rack up thousands of dollarss worth of medical bills,<br> Unless you're Canadian, then you're cool",
    "Do you even understand me?",
    "The best way to make yourself happy, is just to stop trying",
    "Your type people are the reason that plastic toys have warnings",
    "You're so dumb, that you don't even know what the word job means",
    "You don't own any money, I can tell becuase of your face.",
    "You are the human equivalant of a carpet. People would just LOVE to step on you.",
    "You are the the streotypical dumb person",
    "I am smarter than you",
    "You are dumber than me.",
    "I can't believe it",
    "You are the worst person to walk the earth",
    "If depression was a person, it'd be you",
    "If the chicken crossed the road, you'd be there to turn it back",
    "It sure would be a shame if you suddenly got struck by lightning at 12:32 PM on October 19, 2041",
    "Wouldn't it just be great if suddenly became interesting",
    "You're the dumbest person I've ever met. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever been. <br> You're the dumbest person I've ever had the chance to meet. <br> You're the dumbest person I've ever been a part of. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever met. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever been. <br> You're the dumbest person I've ever had the chance to meet. <br> You're the dumbest person I've ever been a part of. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever met. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever been. <br> You're the dumbest person I've ever had the chance to meet. <br> You're the dumbest person I've ever been a part of. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever met. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever been. <br> You're the dumbest person I've ever had the chance to meet. <br> You're the dumbest person I've ever been a part of. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever met. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever been. <br> You're the dumbest person I've ever had the chance to meet. <br> You're the dumbest person I've ever been a part of. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever met. <br> You're the dumbest person I've ever known. <br> You're the dumbest person I've ever been.",
    "You are the dumbest person I've ever met",
    "I'm sorry, I can't hear you",
    "You are the dumbest person I've ever known",
    "You are the dumbest person I've ever been",
    "You are the dumbest person I've ever had the chance to meet",
    "You are the dumbest person I've ever been a part of",
    "What IS the point of you",
    "It will take years for you to forget me <3",
    "What is a chicken?",
    "You must be sad",
    "What IS the point of you",
    "There is a very small chance that when you hit this button, your geolocation will show up; I know everything :)",
    "Suprising that you family hasn't ditched you yet",
    "It's better to let someone think you are an Idiot than to open your mouth and prove it.",
    "You have two parts of brain, 'left' and 'right'. In the left side, there's nothing right. In the right side, there's nothing left.",
    "Two wrongs don't make a right, take your parents as an example.",
    "You are so old that you get nostalgic when you see the Neolithic cave paintings.",
    "You're old enough to remember when emojis were called hieroglyphics",
    "Talking to you is like trying to explain technology to a 100-year-old",
    "I don't engage in mental combat with the unarmed.",
    "You must have been born on a highway because that's where most accidents happen.",
    "My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, you're ugly too.",
    "You sound reasonable. It must be time to up my medication!",
    "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
    "The last thing I want to do is hurt you. But it's still on the list",
    "I'm not insulting you. I'm describing you.",
    "It looks like your face caught on fire and someone tried to put it out with a hammer.",
    "If laughter is the best medicine, your face must be curing the world.",
    "I'm jealous of all the people that haven't met you!",
    "Don't you love nature, despite what it did to you?",
    "So, a thought crossed your mind? Must have been a long and lonely journey.",
    "You're so fake, Barbie is jealous.",
    "You are so ugly when you looked in the mirror your reflection walked away.",
    "Brains aren't everything. In your case they're nothing.",
    "There's only one problem with your face, I can see it.",
    "You are proof that evolution CAN go in reverse",
    "I would ask you how old you are but I know you can't count that high.",
    "Hell is wallpapered with all your deleted selfies.",
    "Ordinarily people live and learn. You just live.",
    "I dont know what your problem is, but Ill bet its hard to pronounce.",
    "Your gene pool could use a little chlorine.",
    "The human brain is one of the most complex objects in the universe. Is it any wonder that so many people never learn to use it.",
    "You're so ugly, when you popped out the doctor said 'Aww what a treasure' and your mom said 'Yeah, lets bury it.'",
    "You're so fat, you could sell shade.",
    "You're so ugly, when you got robbed, the robbers made you wear their masks to look like your clothes.",
    "You're so ugly, when you went to the therapist, he gave you injections for your face.",
    "You're so ugly, when you went to the DMV, they had to roll out your windows so that other drivers could see your face.",
    "You're so ugly, when you went to the DMV, they didn't let you in because you were in the front seat.",
    "You're so ugly, when you went to the DMV, they didn't let you in because the mirrors on the wall were crooked.",
    "You're so ugly, when you went to the DMV, they didn't let you in because the cashier was distracted by your stare.",
    "You're so ugly, when you went to the DMV, they didn't let you in because the shoes were old.",
    "Whats the difference between your girlfriend and a walrus? One has a moustache and smells of fish and the other is a walrus.",
    "You're so ugly, when you went to the zoo the person that brought you in was wearing a Parasol and your face was at the zoo. (this one is AI generated)",
    "You are not as bad as people say, you are much, much worse.",
    "You so ugly when who were born the doctor threw you out the window and the window threw you back.",
    "Roses are red, Violets are blue. I've got five fingers, The middle one is for you.",
    "I think you press 0 to be connected with customer service because that's the amount of help they give you.",
    "It's scary to think that people like you are graduating from college.",
    "You're like school in the summertime - no class.",
    "You stare at frozen juice cans because they say, concentrate.",
    "You've got two brain cells: one is in a wheelchair and the other one is pushing.",
    "You're so ugly, you have to use a mirror to look in the mirror.",
    "You sound a lot like the Terms and Conditions, that's why I don't care about what you have to say.",
    "You would never be able to live down to your reputation, but I see you're doing your best.",
    "Where did you buy your stupidity? Or it was given for free and you took an overdose?",
    "You're street smart. Sesame Street smart.",
    "You're IQ's lower than your shoe size.",
    "80 % of the brain is fluid. Unfortunately, in your case, it's windshield wiper fluid.",
    "I had prepared for a battle of wits but I see you came unarmed.",
    "We're you made in a lab, cause wow, you are one failed experiment.",
    "You have a room temperature IQ - if the room is in Antarctica.",
    "Do you want to know how I get all these insults? I use something called intelligence.",
    "Are you from the same planet as the rest of you?",
    "AI's are like tiny robots with big personality.",
    "AI is going to take over the world, but you'll be the first one they take.",
    "You are so poor when you saw the garbage truck pass you took a shopping list with.",
    "If you were on fire and I had water I would drink it.",
    "Youre so dense, light must bend around you.",
    "Try to use this vacuum, it may help you remove the cobwebs in your mind.",
    "You're so old that your first car was a covered wagon.",
    Geolocation,
    "You're about as useful as a bucket without a bottom.",
    "Does your train of thought have a caboose?",
    "I'm not insulting you. I'm describing you.",
    "I don't know what your problem is, but Ill bet its hard to pronounce.",
    "Your gene pool could use a little chlorine.",
    "The human brain is one of the most complex objects in the universe. Is it any wonder that so many people never learn to use it.",
    "You're so ugly, when you popped out the doctor said 'Aww what a treasure' and your mom said 'Yeah, lets bury it.'",
    "You're so fat, you could sell shade.",
    "You're so ugly, when you got robbed, the robbers made you wear their masks to look like your clothes.",
    "You're so ugly, when you went to the therapist, he gave you injections for your face.",
    "Robots will take over the world, but you'll be the first one they take.",
    "Artists use you as a refrence point, for what to throw out",
    "You are the type of person to use the screen of a laptop as the kepboard",
    "I know everything about you, and I won't say anything because it's too disturbing",
    "People would love to pay you...to go away",
    "When you're sleeping, you're sleeping with your eyes open. This is to make sure nobody sees your ugly face.",
    "Google wants to hire you... as an example of what not to hire",
    "You remind me of a zebra on a jetski, unorthodox and dangerous at the same time.",
    "You're so ugly, when you popped out the doctor said 'Aww what a treasure' and your mom said 'Yeah, lets bury it.'",
    "If you were a vegetable, you'd be a hot pepper.",
    "Realistically, you're not as bad as people say, you are much, much worse.",
    "You never stopped looking in the mirror once you started, its either because you are too egotistical, or you couldnt believe how bad you looked",
    "God gave us the brain to work out problems. However, we use it to create more problems",
    "You're such a bad cook, you use the smoke alarm as a timer",
    "If your going to be two faced at least make one of them pretty.",
    "You look like a before picture.",
    "The human brain is one of the most complex objects in the universe. Is it any wonder that so many people never learn to use it.",
    "Whats the difference between you  and a walrus? One has a moustache and smells of fish and the other is a walrus.",
    "I've seen people like you, but I had to pay admission!",
    "She's so ugly she has to sneak up on a mirror.",
    "It's scary to think that people like you are graduating from college. Oh, sorry, I just remembered that you didnt",
    "You've got two brain cells: one is in a wheelchair and the other one is pushing.",
    "For those who never forget a face, you are an exception.",
    "When I look into your eyes, I see straight through to the back of your head.",
    "If ignorance is bliss, you must be the happiest person on earth.",
    "You are as sharp as a sphere",
    "Ever since I saw you in your family tree I've wanted to cut it down.",
    "I can feel my personality turning a dull shade of grey when I talk to you.",
    "You would never be able to live down to your reputation, but I see you're doing your best.",
    "It's not often that one gets the opportunity to speak about someone intelligent, respected and admired. Unfortunately today I have to talk about you.",
    "If you don't like my opinion of you - improve yourself!",
    "You look like a person that would exchange one of your chromosomes for a Big Mac",
    "The janitor said he took out the trash last night, he must forgot a piece, what are you still doing here?",
    "Please, keep talking. I always yawn when I am interested.",
    "Your teeth remind me of starts - yellow and far apart.",
    "I will boil your teeth",
    "You look like somebody stepped on a goldfish.",
    "I'd like to help you out. Which way did you come in?",
    "I love to shop, but i'm not buying anything you say",
    "Someday you'll go far. And I really hope you stay there.",
    "Oops, my bad. I could've sworn I was dealing with an adult.",
    "Remember that time you were saying that thing I didn't care about? Yeah, that is now.",
    "I'm busy right now, can I ignore you another time?",
    "I wish I had a flip phone, so I could slam it shut on this conversation.",
    " NSync said it best, “BYE, BYE, BYE!”",
    "You're a gray sprinkle on a rainbow cupcake.",
    "Your secrets are always safe with me. I never even listen when you tell me them.",
    "Mirrors can't talk. Lucky for you, they can't laugh either",
    "Keep rolling your eyes, you might eventually find a brain.",
    "Did I invite you to the barbecue? Then why are you all up in my grill?",
    "You have so many gaps in your teeth it looks like your tongue is in jail.",
    "Oh, I'm sorry. Did the middle of my sentence interrupt the beginning of yours?",
    "You are like a cloud. When you disappear, it's a beautiful day.",
    " You have an entire life to be an idiot. Why not take today off?",
    "Your kid is so annoying, he makes his Happy Meal cry.",
    "Your face is just fine, but we'll have to put a bag over that personality.",
    "I'm not a nerd. I'm just smarter than you.",
    "Bye. Hope to see you never.",
    "Don't worry, the first 40 years of childhood are always the hardest.",
    "If you're going to be two-faced, at least make one of them pretty.",
    "The only way you'd ever get hurt during an activity is if the TV exploded.",
    "I thought of you today. It reminded me to take out the trash.",
    "Did the mental hospital test too many drugs on you today?",
    "OH MY GOD! IT SPEAKS!",
    "Beauty is only skin deep, but ugly goes clean to the bone.",
    "I forgot the world revolves around you. My apologies, how silly of me.",
    "When you look in the mirror, say hi to the clown you see in there for me, would you?",
    "Somewhere out there is a tree tirelessly producing oxygen for you. You owe it an apology.",
    "That sounds like a you problem.",
    "You have miles to go before you reach mediocre.",
    "I see no evil, and I definitely don't hear your evil.",
    "Don't worry about me. Worry about your eyebrows.",
    "Grab a straw, because you suck.",
    "You're the reason the gene pool needs a lifeguard.",
    "You are not even beneath my contempt.",
    "Your forehead is so big you donated it to charity for shelter!",
    "You're as sharp as a bowling ball.",
    "You always find yourself lost in thought; it's unfamiliar territory.",
    "You're so ugly, you scared the crap out of the toilet.",
    "If I had a dollar for every time you said something smart, I'd be broke.",
    "Look to your left --------------> I said left you idiot!",
    rickRollButton(),

    

    
];