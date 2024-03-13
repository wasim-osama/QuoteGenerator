const masculineQuotes = [
    {
        name: "Andrew Tate",
        quote: "Life is not a spectator sport. If you’re watching, you’re losing."
    },
    {
        name: "Khabib Nurmagomedov",
        quote: "I never give up. Doesn't matter if I fight in the UFC or if I fight in life. I’m going to keep going, keep moving forward."
    },
    {
        name: "David Goggins",
        quote: "It’s not about how talented you are, it’s about how hard you work."
    },
    {
        name: "Marcus Aurelius",
        quote: "The best revenge is to be unlike him who performed the injury."
    },
    {
        name: "Mike Tyson",
        quote: "Fear is your best friend or your worst enemy. It's like fire. If you can control it, it can cook for you; it can heat your house. If you can't control it, it will burn everything around you and destroy you."
    },
    {
        name: "Jordan Peterson",
        quote: "Stand up straight with your shoulders back."
    },
    {
        name: "Arnold Schwarzenegger",
        quote: "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength."
    },
    {
        name: "Nietzsche",
        quote: "That which does not kill us makes us stronger."
    },
    {
        name: "Winston Churchill",
        quote: "If you're going through hell, keep going."
    },
    {
        name: "Theodore Roosevelt",
        quote: "Believe you can and you're halfway there."
    },
    {
        name: "Bruce Lee",
        quote: "Do not pray for an easy life, pray for the strength to endure a difficult one."
    },
    {
        name: "Miyamoto Musashi",
        quote: "You must understand that there is more than one path to the top of the mountain."
    },
    {
        name: "Joe Rogan",
        quote: "Be the hero of your own story."
    },
    {
        name: "Samuel Johnson",
        quote: "Great works are performed not by strength but by perseverance."
    },
    {
        name: "Vince Lombardi",
        quote: "The only place where success comes before work is in the dictionary."
    },
    {
        name: "Seneca",
        quote: "Luck is what happens when preparation meets opportunity."
    },
    {
        name: "Elon Musk",
        quote: "When something is important enough, you do it even if the odds are not in your favor."
    },
    {
        name: "Steve Jobs",
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
    },
    {
        name: "Sun Tzu",
        quote: "The supreme art of war is to subdue the enemy without fighting."
    },
    {
        name: "Ralph Waldo Emerson",
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us."
    },
    {
        name: "Marcus Luttrell",
        quote: "I will never quit. My nation expects me to be physically harder and mentally stronger than my enemies. If knocked down, I will get back up every time. I will draw on every remaining ounce of strength to protect my teammates and to accomplish our mission. I am never out of the fight."
    },
    {
        name: "Viktor Frankl",
        quote: "When we are no longer able to change a situation, we are challenged to change ourselves."
    },
    {
        name: "Jack Dempsey",
        quote: "A champion is someone who gets up when they can't."
    },
    {
        name: "Malcolm X",
        quote: "A man who stands for nothing will fall for anything."
    },
    {
        name: "The Rock (Dwayne Johnson)",
        quote: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come."
    },
    {
        name: "Jocko Willink",
        quote: "Discipline equals freedom."
    },
    {
        name: "Bear Grylls",
        quote: "The rules of survival never change, whether you're in a desert or in an arena."
    },
    {
        name: "Alexander the Great",
        quote: "There is nothing impossible to him who will try."
    },
    {
        name: "Frederick Douglass",
        quote: "If there is no struggle, there is no progress."
    },
    {
        name: "Babe Ruth",
        quote: "It's hard to beat a person who never gives up."
    },
    {
        name: "Ernest Hemingway",
        quote: "Courage is grace under pressure."
    },
    {
        name: "Stephen King",
        quote: "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work."
    },
    {
        name: "Napoleon Bonaparte",
        quote: "Victory belongs to the most persevering."
    },
    {
        name: "Rudyard Kipling",
        quote: "If you can keep your head when all about you are losing theirs and blaming it on you, if you can trust yourself when all men doubt you, but make allowance for their doubting too; if you can wait and not be tired by waiting, or being lied about, don't deal in lies, or being hated, don't give way to hating, and yet don't look too good, nor talk too wise."
    },
    {
        name: "Jesse Owens",
        quote: "We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort."
    },
    {
        name: "Muhammad Ali",
        quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'"
    },
    {
        name: "William Ernest Henley",
        quote: "I am the master of my fate, I am the captain of my soul."
    },
    {
        name: "Plato",
        quote: "Courage is knowing what not to fear."
    },
    {
        name: "Vin Diesel",
        quote: "It doesn't matter whether you win by an inch or a mile, winning is winning."
    },
    {
        name: "Yogi Berra",
        quote: "It ain't over till it's over."
    },
    {
        name: "Confucius",
        quote: "Our greatest glory is not in never falling, but in rising every time we fall."
    },
    {
        name: "Leonardo da Vinci",
        quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
    },
    {
        name: "John Wooden",
        quote: "Success is never final, failure is never fatal. It's courage that counts."
    },
    {
        name: "George S. Patton",
        quote: "Accept the challenges so that you can feel the exhilaration of victory."
    },
    {
        name: "Thomas Jefferson",
        quote: "I find that the harder I work, the more luck I seem to have."
    },
    {
        name: "Benjamin Franklin",
        quote: "Energy and persistence conquer all things."
    },
    {
        name: "Martin Luther King Jr.",
        quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy."
    },
    {
        name: "George Bernard Shaw",
        quote: "People are always blaming their circumstances for what they are. I don't believe in circumstances. The people who get on in this world are the people who get up and look for the circumstances they want, and if they can't find them, make them."
    },
    {
        name: "Les Brown",
        quote: "Shoot for the moon. Even if you miss it you will land among the stars."
    },
    {
        name: "Zig Ziglar",
        quote: "Your attitude, not your aptitude, will determine your altitude."
    },
    {
        name: "Frank Sinatra",
        quote: "The best revenge is massive success."
    },
    {
        name: "Jim Rohn",
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary."
    },
    {
        name: "Herman Melville",
        quote: "It is better to fail in originality than to succeed in imitation."
    },
    {
        name: "Denis Waitley",
        quote: "The winner's edge is not in a gifted birth, a high IQ, or in talent. The winner's edge is all in the attitude, not aptitude."
    },
    {
        name: "Tony Robbins",
        quote: "The only limit to your impact is your imagination and commitment."
    },
    {
        name: "Harvey Specter",
        quote: "I don't play the odds, I play the man."
    },
    {
        name: "Rocky Balboa",
        quote: "It ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward."
    },
    {
        name: "William James",
        quote: "Act as if what you do makes a difference. It does."
    },
    {
        name: "Bret Hart",
        quote: "Every man has a breaking point."
    },
    {
        name: "J.D. Salinger",
        quote: "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though."
    },
    {
        name: "Frank Underwood",
        quote: "For those of us climbing to the top of the food chain, there can be no mercy. There is but one rule: hunt or be hunted."
    },
    {
        name: "Vladimir Putin",
        quote: "Anyone who doesn't regret the passing of the Soviet Union has no heart. Anyone who wants it restored has no brains."
    },
    {
        name: "Julius Caesar",
        quote: "Experience is the teacher of all things."
    },
    {
        name: "Hunter S. Thompson",
        quote: "Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming 'Wow! What a Ride!'"
    },
    {
        name: "Samuel L. Jackson",
        quote: "I never understood the idea of sitting on your ass and waiting for someone to do something for you."
    },
    {
        name: "Clint Eastwood",
        quote: "Respect your efforts, respect yourself. Self-respect leads to self-discipline. When you have both firmly under your belt, that's real power."
    },
    {
        name: "George Washington",
        quote: "Associate with men of good quality if you esteem your own reputation; for it is better to be alone than in bad company."
    },
    {
        name: "Hannibal Barca",
        quote: "We will either find a way, or make one."
    },
    {
        name: "RZA",
        quote: "I believe the greatest gift I can conceive of having from anyone is to be seen by them, heard by them, to be understood and touched by them."
    },
    {
        name: "Daniel Craig",
        quote: "You've got to keep your composure. You've got to be patient. You've got to be ready to strike when the time is right."
    },
    {
        name: "Benjamin Disraeli",
        quote: "The secret of success is constancy to purpose."
    },
    {
        name: "Thomas Paine",
        quote: "The harder the conflict, the more glorious the triumph."
    },
    {
        name: "Jean-Paul Sartre",
        quote: "Freedom is what you do with what's been done to you."
    },
    {
        name: "Walt Whitman",
        quote: "Keep your face always toward the sunshine - and shadows will fall behind you."
    },
    {
        name: "Richard Nixon",
        quote: "The finest steel has to go through the hottest fire."
    },
    {
        name: "Nelson Mandela",
        quote: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear."
    },
    {
        name: "John D. Rockefeller",
        quote: "The secret of success is to do the common things uncommonly well."
    },
    {
        name: "Marcus Garvey",
        quote: "Liberate the minds of men and ultimately you will liberate the bodies of men."
    },
    {
        name: "John F. Kennedy",
        quote: "Efforts and courage are not enough without purpose and direction."
    },
    {
        name: "Teddy Roosevelt",
        quote: "It is hard to fail, but it is worse never to have tried to succeed."
    },
    {
        name: "Bob Marley",
        quote: "The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively."
    },
    {
        name: "J.R.R. Tolkien",
        quote: "Courage is found in unlikely places."
    },
    {
        name: "Barack Obama",
        quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."
    },
    {
        name: "John Milton",
        quote: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven."
    },
    {
        name: "Haruki Murakami",
        quote: "Pain is inevitable. Suffering is optional."
    },
    {
        name: "Harvey Dent (Two-Face)",
        quote: "You either die a hero, or you live long enough to see yourself become the villain."
    },
    {
        name: "John Wayne",
        quote: "Courage is being scared to death, but saddling up anyway."
    },
    {
        name: "Dale Carnegie",
        quote: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all."
    },
    {
        name: "Arthur Ashe",
        quote: "Start where you are. Use what you have. Do what you can."
    },
    {
        name: "Albert Camus",
        quote: "In the depth of winter, I finally learned that within me there lay an invincible summer."
    },
    {
        name: "Frank Herbert",
        quote: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."
    },
    {
        name: "William Shakespeare",
        quote: "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt."
    },
    {
        name: "Tupac Shakur",
        quote: "Reality is wrong. Dreams are for real."
    },
    {
        name: "Albert Einstein",
        quote: "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it."
    },
    {
        name: "Lao Tzu",
        quote: "The journey of a thousand miles begins with one step."
    },
    {
        name: "Socrates",
        quote: "The only true wisdom is in knowing you know nothing."
    },
    {
        name: "Neil Armstrong",
        quote: "That's one small step for man, one giant leap for mankind."
    },
    {
        name: "Brett McKay (The Art of Manliness)",
        quote: "Manliness is about being honorable. It's about doing the right thing, even when no one is watching."
    },
    {
        name: "Denzel Washington",
        quote: "At the end of the day, it's not about what you have or even what you've accomplished. It's about what you've done with those accomplishments. It's about who you've lifted up, who you've made better. It's about what you've given back."
    },
    {
        name: "Confucius",
        quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence."
    },
    {
        name: "Rafael Nadal",
        quote: "I have the belief that I can turn any match around."
    },
    {
        name: "Martin Luther",
        quote: "You are not only responsible for what you say, but also for what you do not say."
    },
    {
        name: "Jules Verne",
        quote: "As long as the heart beats, as long as body and soul keep together, I cannot admit that any creature endowed with a will has need to despair of life."
    },
    {
        name: "Jim Carrey",
        quote: "I learned many great lessons from my father, not the least of which was that you can fail at what you don't want, so you might as well take a chance on doing what you love."
    },
    {
        name: "Leonardo DiCaprio",
        quote: "If you can do what you do best and be happy, you're further along in life than most people."
    },
    {
        name: "Henry Ford",
        quote: "Whether you think you can, or you think you can't – you're right."
    },
    {
        name: "Dwayne Johnson",
        quote: "Success at anything will always come down to this: focus and effort. And we control both."
    },
    {
        name: "Anthony Bourdain",
        quote: "Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind."
    },
    {
        name: "William Gibson",
        quote: "Before you diagnose yourself with depression or low self-esteem, first make sure that you are not, in fact, just surrounded by assholes."
    },
    {
        name: "Ernest Hemingway",
        quote: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self."
    },
    {
        name: "George Orwell",
        quote: "Happiness can exist only in acceptance."
    },
    {
        name: "Albert Schweitzer",
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
    },
    {
        name: "Kurt Vonnegut",
        quote: "We are what we pretend to be, so we must be careful about what we pretend to be."
    },
    {
        name: "John Lennon",
        quote: "Count your age by friends, not years. Count your life by smiles, not tears."
    },
    {
        name: "David Bowie",
        quote: "Tomorrow belongs to those who can hear it coming."
    },
    {
        name: "Friedrich Nietzsche",
        quote: "And those who were seen dancing were thought to be insane by those who could not hear the music."
    },
    {
        name: "Terry Pratchett",
        quote: "The truth may be out there, but the lies are inside your head."
    },
    {
        name: "Hunter S. Thompson",
        quote: "Buy the ticket, take the ride."
    },
    {
        name: "Miyamoto Musashi",
        quote: "Today is victory over yourself of yesterday; tomorrow is your victory over lesser men."
    },
    {
        name: "Swami Sivananda",
        quote: "Put your heart, mind, and soul into even your smallest acts. This is the secret of success."
    },
    {
        name: "Winston Churchill",
        quote: "Continuous effort - not strength or intelligence - is the key to unlocking our potential."
    },
    {
        name: "John Wooden",
        quote: "Do not let what you cannot do interfere with what you can do."
    },
    {
        name: "Seneca",
        quote: "We suffer more often in imagination than in reality."
    },
    {
        name: "Marcus Aurelius",
        quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking."
    },
    {
        name: "Thomas Jefferson",
        quote: "In matters of style, swim with the current; in matters of principle, stand like a rock."
    },
    {
        name: "Franklin D. Roosevelt",
        quote: "The only limit to our realization of tomorrow will be our doubts of today."
    },
    {
        name: "John Lennon",
        quote: "Life is what happens when you're busy making other plans."
    },
    {
        name: "Steve Jobs",
        quote: "Your time is limited, don't waste it living someone else's life."
    },
    {
        name: "Elvis Presley",
        quote: "Ambition is a dream with a V8 engine."
    },
    {
        name: "Nelson Mandela",
        quote: "Education is the most powerful weapon which you can use to change the world."
    },
    {
        name: "Mother Teresa",
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
    },
    {
        name: "Oscar Wilde",
        quote: "To live is the rarest thing in the world. Most people exist, that is all."
    },
    {
        name: "George Carlin",
        quote: "The reason I talk to myself is because I’m the only one whose answers I accept."
    },
    {
        name: "Thomas Edison",
        quote: "I have not failed. I've just found 10,000 ways that won't work."
    },
    {
        name: "Ralph Waldo Emerson",
        quote: "What you do speaks so loudly that I cannot hear what you say."
    },
    {
        name: "Albert Einstein",
        quote: "The difference between stupidity and genius is that genius has its limits."
    },
    {
        name: "George Bernard Shaw",
        quote: "Life isn't about finding yourself. Life is about creating yourself."
    },
    {
        name: "Abraham Lincoln",
        quote: "The best way to predict the future is to create it."
    },
    {
        name: "Henry David Thoreau",
        quote: "Go confidently in the direction of your dreams. Live the life you have imagined."
    },
    {
        name: "Confucius",
        quote: "It does not matter how slowly you go as long as you do not stop."
    },
    {
        name: "C.S. Lewis",
        quote: "You are never too old to set another goal or to dream a new dream."
    },
    {
        name: "J.K. Rowling",
        quote: "It is our choices that show what we truly are, far more than our abilities."
    },
    {
        name: "Henry Ford",
        quote: "Failure is simply the opportunity to begin again, this time more intelligently."
    },
    {
        name: "Maya Angelou",
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
        name: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing."
    }
    
];
export default masculineQuotes;