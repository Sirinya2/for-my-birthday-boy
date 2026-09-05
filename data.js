/**
 * ===================================================================
 * HIMANSHU'S BIRTHDAY MISSION - COMPREHENSIVE CONFIGURATION DATA
 * Theme: Dark Superhero Comic × Cinematic Novel × Mystery Mission
 * ===================================================================
 */

const BIRTHDAY_CONFIG = {
  // Hero Identity & Emotional Nickname Rules
  hero: {
    fullName: "Himanshu",
    mainNickname: "Pookie",
    nicknames: {
      serious: "Himanshu",   // Serious, emotional, important moments
      playful: "Pookie",     // Cute, playful, teasing moments
      romantic: "Babe",      // Romantic moments
      soft: "Baby",          // Soft, emotional moments
      teasing: "Cutieeee",   // Funny, teasing, adorable moments
      warm: "Sunshine",      // Warm, emotional, affectionate moments
      special: "Ansh"        // Special, meaningful moments & big reveals
    },
    daysCount: 261,
    minutesCount: "3,75,840",
    secondsCount: "2,25,50,400",
    birthdaySignoff: "Happy Birthday, Pookie. 🥹🖤"
  },

  // Page 01 — The Hero
  page01: {
    centerTitle: "my Superhero..!",
    bottomRightPrompt: "(ready for mission..?)"
  },

  // Page 02 — Mission Check
  page02: {
    greeting: "heyy baby..! What's up..?",
    question: "All set for today's mission..?",
    btnYesText: "YES ⚡",
    btnNoText: "NO 🙈",
    noReactionPopup: {
      title: "Omggg..!",
      message: "Such a cruel insaan you are !! 😾",
      subtext: "How could you say NO to your girl? Tap below to redeem yourself, superhero!",
      retryBtnText: "okay okay, I am ready! 🥺👉👈"
    },
    yesBlushCompliment: {
      title: "Awwww my hero! 🙈💗",
      message: "Look at you all set for the mission! You look extra handsome and brave today, Superhero! Let's unlock your briefing..."
    },
    unlockBannerText: "MISSION UNLOCKED 💥",
    unlockSubText: "INITIALIZING AGENT IDENTITY ARCHIVE..."
  },

  // Page 03 — Memory Check
  page03: {
    introPopup: {
      title: "how well do you remember our beginning?",
      subtitle: "Ready birthday boy?",
      btnYesText: "YES 💖",
      btnNoText: "NO 🙈",
      goBackModal: {
        title: "go back ☁️😾",
        message: "go back...don't make me angry on my special day..! 😾",
        retryBtnText: "Ready now, Babe! ⚡"
      },
      yesCompliment: {
        title: "That's my boy! 🥰✨",
        message: "Aww good boy! Let's see how sharp that superhero memory is, Pookie!"
      }
    },
    firstQuestion: {
      title: "ARCHIVE INTEL // QUERY 01",
      prompt: "where did we start talking..?",
      subPrompt: "Think carefully, Agent...",
      options: [
        {
          id: "instagram",
          text: "Instagram 📸",
          isCorrect: false,
          reactionTitle: "excuse me??? 😾",
          reactionMessage: "Instagram?! How could you forget where we really started talking?! Try again mister!",
          retryBtnText: "My bad, let me fix it! 🥺"
        },
        {
          id: "whatsapp",
          text: "WhatsApp 💬",
          isCorrect: true,
          successMessage: "yeahhh you remember 😭🖤",
          successSub: "Accessing the encrypted origin files..."
        }
      ]
    }
  },

  // CHAPTER 01 — THE ORIGIN
  chapter01: {
    title: "CHAPTER 01 — THE ORIGIN",
    subtitle: "Every story has a beginning...",
    narrativePhases: [
      {
        phase: "PHASE 01 // STRANGERS",
        tag: "THE RANDOM ONLINE GROUP",
        title: "A Hidden Gem in the Crowd",
        text: "That NEET prep group is the reason I found a true GEM like you. At first.. you were just a stranger to me. I had heard this once - sometimes there are things we can't tell anyone because we're scared that someone we know might judge us. And when we feel like sharing those things, somehow, it feels easier to tell a stranger. And that's exactly what happened with me. I started sharing my random thoughts with you...",
        stickyNote: "“And without even realizing, I started opening up to you more than anyone else... 💬🖤”",
        noteColor: "yellow"
      },
      {
        phase: "PHASE 02 // FRIENDS",
        tag: "UNFILTERED THOUGHTS",
        title: "Telling You Everything",
        text: "Then my life.. aani mg ashya ghosthi jya mi kadhich konala sangitlya nvatya... Ani without even realizing, I started telling you everything. Mazya sobat typing madhe ky zala, mala gharchyanni ky mahntla, mla radayla ka aala, maz maan ka dhukla, mla kontya mula ni ky mahtla... je pn mazya sobat zala sarv EVERYTHING..! But the funny part..? I never even noticed when that random stranger slowly got promoted to become one of the most special ani irreplaceable person of my life..!!",
        stickyNote: "“You listened to every single rant, every silly tear, and made me feel safe. 📌”",
        noteColor: "crimson"
      },
      {
        phase: "PHASE 03 // SOMEONE SPECIAL",
        tag: "THE SOFT GIRL ERA",
        title: "The Way You Changed Me",
        text: "It was all the little things. The way you listened. The way you explained things to me. And the most important.. The way you made me feel heard without making me feel judged. Sometimes I genuinely wondered, 'evdha cute shant mature ani emotionally available mula pn exist kartat ka..?' Because you changed my mentality I had carried for so long about boys. And you changed ME.",
        stickyNote: "“The girl who once guarded her heart so tightly somehow found her way back into her soft girl era because of you, Baby ❤️.”",
        noteColor: "pink"
      },
      {
        phase: "PHASE 04 // FOREVER ALLIANCE",
        tag: "MY POOKIE",
        title: "Some Beautiful Chapters Begin with 'Hello'",
        text: "You told me that I am special. I am unique. You made me see and believe in things that I couldn't see on my own. And somehow, the things I couldn't do for myself.. YOU DID THEM FOR ME!! It started with a random online group. Then two strangers. Then conversations. Then friendship. And somewhere between all those stupid talks, deep midnight thoughts, and cute little moments... you became MY FOREVER.. MY POOKIE..! Neither of us probably knew where this beginning was going to take us. But maybe.. some of the most beautiful chapters begin with the most random 'hello'.",
        stickyNote: "“To the boy who became my favorite reality, Ansh. ✨”",
        noteColor: "gold"
      }
    ],

    // MINI MISSION 01 (Cinematic Gamer Pop-up)
    miniMission01: {
      title: "How well do you remember the beginning?",
      subtitle: "Answer these 3 checkpoint queries, Pookie:",
      questions: [
        {
          id: 1,
          qMarathi: "Mla sang mi tula maza first pic kontya kurti madhe send kela hota..?",
          qEnglish: "Tell me, in which kurti did I send you my first pic?",
          options: [
            { text: "PURPLE 💜", correct: true, feedback: "mla mahiti ch hota tu correct answer deshil! 🥺✨" },
            { text: "BLUE 💙", correct: false, feedback: "Hawwww..badam kha tu bala 😾" }
          ]
        },
        {
          id: 2,
          qMarathi: "What did you think of me at first?",
          qEnglish: "What was your very first impression of me?",
          options: [
            { text: "SWEET GIRL 🌸", correct: true, feedback: "Heheeehee awwww pookieee 🥰💗" },
            { text: "CRUEL GIRL 😈", correct: false, feedback: "omgg babyyy..!! 😾" }
          ]
        },
        {
          id: 3,
          qMarathi: "Who proposed first..?",
          qEnglish: "Who made the first move to propose?",
          options: [
            { text: "YOU 🦸‍♂️", key: "you", feedback: "Nooo babeee 🙈" },
            { text: "ME 🌸", key: "me", feedback: "hawww..lier 😾" }
          ]
        }
      ],
      kittenHelp: {
        title: "I can help you..! 🐾",
        sub: "Agent Pookie, there's a condition: you have to fill my heart with pink colour to reveal the truth!",
        revealAnswer: "konich propose nahi kela aahe aata prynt 🤦‍♀️"
      },
      initialScoreNote: "(02/03) but birthday boy la sad nahi kru shakat aaj mahnun...",
      finalScoreGamerBox: {
        score: "03 / 03",
        note: "Awww Cutieee..You're besttttt..!"
      },
      gamingUnlockNotice: "🎮 AGENT ALERT: Before Chapter 02 can open, you must decode the encrypted security code in Puzzle 02!"
    }
  },

  // CHAPTER 02 — THE UNEXPECTED ALLY
  chapter02: {
    title: "CHAPTER 02 — THE UNEXPECTED ALLY",
    subtitle: "and you know what's that 261 means..?",
    narrativeIntro: "Babyyyyy... it's been 261 days.. yesss.. aaj aaplyala relationship la 261 days.. 375840 minutes.. 22550400 seconds zale aahet. and we are still together.. I seriously don't know tuzya sarka evdha cutu babyy kadhi mazya life madhe aala ani mazya life la evdha meaningful banvala.. babee hold my hand through the screen okayy..? I need you today, tomorrow and each passing day by my side..!",
    stats: {
      days: 261,
      minutes: "3,75,840",
      seconds: "2,25,50,400"
    },
    excitementGate: {
      prompt: "Agent Himanshu: Are you ready for the next level? Slide your excitement percentage meter to 100% to unlock Activity 03!",
      minPercentage: 100
    },
    treasureHunt: {
      title: "ACTIVITY 03: CAT RESCUE MISSION 🐾",
      desc: "Heavy rain has hit the city! Search and rescue all 3 shivering kittens to bring them safely to Chavan Niwas:",
      kittens: [
        { id: 1, name: "Shona", status: "Shivering near alleyway", action: "Give Cuddle 🥺", emoji: "🐱🌧️" },
        { id: 2, name: "Gobchi", status: "Hungry behind the gate", action: "Feed Krackjack Biscuit 🍪", emoji: "🐾🌧️" },
        { id: 3, name: "Boku", status: "Looking for warmth", action: "Give Hug 🫂", emoji: "😿🌧️" }
      ],
      winMessage: "ALL 3 KITTENS (SHONA, GOBCHI & BOKU) RESCUED & SAFE AT CHAVAN NIWAS! 🏠💖"
    }
  },

  // PUZZLE 02: CODE VAULT
  puzzle02: {
    title: "PUZZLE 02 — DECODE THE MESSAGE",
    instruction: "Agent Himanshu: Tap the cipher keys to decode the passcode before Chapter 02 can open:",
    hint: "INTEL CLUE: Your #1 nickname + our magical 261 days!",
    passcode: "POOKIE261",
    decodedQuotes: {
      line1: "You found the clue...",
      line2: "...but that's not the surprise."
    }
  },

  // CHAPTER 03 — A HERO'S DIARY (Cats & 8 Babies)
  chapter03: {
    title: "CHAPTER 03 — A HERO'S DIARY",
    subtitle: "A story of tenderness, rain, two cats, and eight little kittens.",
    diaryEntries: [
      {
        date: "DIARY ENTRY // CHAVAN NIWAS 🏡",
        title: "The Storm & The Gentle Caretaker 🌧️",
        text: "The thunder was loud, but inside Chavan Niwas, the sweetest boy was watching out for every helpless soul. When the mama cat needed shelter from the dark streets, you didn't hesitate for a single second. You opened your doors and heart to her.",
        badge: "SHELTER OF UNCONDITIONAL LOVE"
      },
      {
        date: "DIARY ENTRY // KRACKJACK FEAST 🍪",
        title: "Golden Biscuits & Soft Purrs",
        text: "Sitting quietly on the floor, breaking crispy golden Krackjack biscuits with gentle hands so she wouldn't be hungry. Wrapping her in warmth, stroking her fur, making sure her shivering stopped.",
        badge: "TENDER CARE & AFFECTION 💖"
      },
      {
        date: "DIARY ENTRY // 2 YEARS LATER & 8 BABIES! 🐾✨",
        title: "And After 2 Years... 8 Little Babies Arrived! 😻",
        text: "Time passed, and the bond only grew deeper. And then came the most magical miracle—after 2 years, her 8 tiny, adorable babies arrived! Watching you shower each little kitten with pure love, protection, and patience showed me the true depth of your heart. You are a true hero, Himanshu.",
        badge: "8 BABIES ARRIVED SAFELY 🍼🐾"
      }
    ],
    secretMessage: {
      title: "🤫 MY LITTLE SECRET REVEAL",
      body: "Even though we haven't met offline yet and I haven't seen your real smile in person, I know in my heart that you are the sweetest and kindest soul I have ever seen in my entire life, Himanshu. 🖤"
    },
    lovableAttackPrompt: "babyyy.. ready for my next lovable attack... 😈💖"
  },

  // RAPID FIRE — NO THINKING ("jaldi jaldi bataiye")
  quickFire: {
    title: "RAPID FIRE — NO THINKING ⚡",
    subtitle: "jaldi jaldi bataiye, Pookie! Instant instinct answers only!",
    questions: [
      {
        id: 1,
        q: "Me or sleep? 😭",
        options: [
          { text: "You, always! 💖", reaction: "Awww good boy! You passed the highest loyalty test! 🥹🖤" },
          { text: "Sleep... 😴", reaction: "Wow. Okay Pookie. I see how important I am. 😭 (Crying in the corner!)" }
        ]
      },
      {
        id: 2,
        q: "Call or text?",
        options: [
          { text: "Late night calls 📞", reaction: "isiliye aap call krte hai na hume! 🤨📞" },
          { text: "Spamming texts 💬", reaction: "babee..I'm dying to hear your voice 🥺📞" }
        ]
      },
      {
        id: 3,
        q: "Batman or Spider-Man?",
        options: [
          { text: "Batman 🦇", reaction: "Dark, broody, protective... definitely your vibe, Himanshu! 🖤" },
          { text: "Spider-Man 🕷️", reaction: "Playful, witty, and swings straight into my heart! Just like you Pookie! 🕸️" }
        ]
      },
      {
        id: 4,
        q: "One word for me?",
        options: [
          { text: "Precious 🥺✨", reaction: "You're making me blush, Baby! 🥹💖" },
          { text: "Troublemaker 😈", reaction: "Heyyy! I'm an angel Cutieeee! (Okay maybe 10% troublemaker 😜)" }
        ]
      },
      {
        id: 5,
        q: "Our best memory?",
        options: [
          { text: "Every single day with you 🌟", reaction: "My heart just melted... You're the sweetest Sunshine. 🥹" },
          { text: "The ones yet to come 🚀", reaction: "Yes! Here's to a million more adventures together, Ansh! 💫" }
        ]
      }
    ],
    giftBox: {
      line1: "Gift kya du..soch soch ke thak gayi",
      line2: "fhir yaad aaya..aapko toh mai allready pasand aa gayi..!! 🙈💗"
    },
    congratsNote: "congratulations.. you have successfully unlocked chapter 04 🎉"
  },

  // CHAPTER 04 — CLASSIFIED FILE
  chapter04: {
    title: "CLASSIFIED FILE: HIMANSHU",
    securityStatus: "TOP SECRET // CONFIDENTIAL",
    profile: {
      codename: "POOKIE // HERO-01",
      realName: "Himanshu",
      alias: "Babe / Baby / Cutieeee / Sunshine / Ansh",
      superpowers: [
        { power: "Virtual Comfort Shield", level: "MAX", desc: "Can comfort me across any distance and make my day 1000x brighter through a single text or call." },
        { power: "Unseen Smile Aura", level: "10,000+", desc: "Though I haven't seen his smile in person yet, the warmth of his words creates pure sunshine in my heart." },
        { power: "Sharpest Wit & Teasing", level: "GOD TIER", desc: "Master of goofy comebacks, adorable jokes, and making me laugh until my cheeks hurt." },
        { power: "Heart of Pure 24K Gold", level: "INFINITY", desc: "Gentle, emotionally available, caring, and truly one in 8 billion." }
      ],
      classifiedFacts: [
        "⚠️ STATUS: Long-distance allies — haven't met offline yet, but our bond is closer than anyone else.",
        "⚡ SPECIAL WEAPON: That adorable voice note and caring words that melt all my defenses.",
        "📜 MISSION RECORD: 261 days (3,75,840 minutes) of continuous virtual protection and boundless warmth."
      ]
    },
    hiddenClues: [
      { id: 1, symbol: "🕷️", name: "Spider Crest", hint: "Near the agent photo frame" },
      { id: 2, symbol: "⚡", name: "Lightning Core", hint: "Inside the superpower registry" },
      { id: 3, symbol: "🖤", name: "Dark Heart", hint: "Beside confidential observations" },
      { id: 4, symbol: "🔑", name: "Master Key", hint: "Tucked inside the Top Secret stamp" }
    ],
    revealLead: "ACCESS GRANTED.",
    revealMessage: "You found everything, Pookie... Every secret in this file belongs to you, Babe.",
    hugCard: {
      title: "VIRTUAL HUG TRANSMISSION 🫂💖",
      to: "For: Ansh",
      message: "Sending you the warmest, tightest virtual hug, Ansh... You mean the entire world to me. Now step forward into your final trial!"
    }
  },

  // CHAPTER 05 — THE FINAL MISSION
  chapter05: {
    title: "THE FINAL MISSION",
    subtitle: "The ultimate superhero trial before the classified reward is revealed.",
    stages: [
      {
        id: 1,
        missionTitle: "TRIAL 01: POWER GRID CALIBRATION ⚡",
        desc: "The city's power grid is down! Agent Himanshu must route emergency backup power to the love reactor. Choose the frequency:",
        options: [
          { text: "Frequency 261 MHz (Our Golden Bond) 🌟", correct: true, feedback: "Power surging at 100%! Reactor stable!" },
          { text: "Frequency 0 MHz (Power Off) 🔌", correct: false, feedback: "Error! Never turn off the spark, Pookie!" }
        ]
      },
      {
        id: 2,
        missionTitle: "TRIAL 02: DECRYPT HEART COORDINATES 🧭",
        desc: "Locate the exact coordinates where Agent Himanshu holds the highest clearance:",
        options: [
          { text: "Directly in her Heart & Mind (Infinite Radius) 💖", correct: true, feedback: "Coordinates locked! Unbreakable lock established!" },
          { text: "Somewhere in the North Pole ❄️", correct: false, feedback: "Brrr! Too cold! Choose where you belong, Baby!" }
        ]
      },
      {
        id: 3,
        missionTitle: "TRIAL 03: THE HERO'S ETERNAL PLEDGE 📜",
        desc: "Will you promise to keep smiling, stay gentle, and hold my hand through all our upcoming chapters?",
        options: [
          { text: "I promise, with all my heart! 🤝✨", correct: true, feedback: "Pledge recorded into the cosmic archives forever!" },
          { text: "Let me check my calendar... 🗓️", correct: false, feedback: "No excuses allowed, Cutieeee! Say yes! 😾" }
        ]
      }
    ],
    completeStatus: "MISSION STATUS: COMPLETE ✅"
  },

  // THE FAKE ENDING & DISTANCE ROSE CARD
  fakeEnding: {
    line1: "You thought that was the end?",
    line2: "Babyyy...Every mission has a reward...",
    line3: "And this one is yours, Ansh.",
    line4: "but before that there's one last thing I wanted to tell you.",
    roseCardText: "No matter how far apart we are...Distance may keep us miles away, but somehow our hearts have never felt far from each other. Not kidding but sometimes it feels like you're right here beside me..! And no matter how many miles comes between us, you'll always have a place in my heart that no one else could ever take. ❤️"
  },

  // FINAL SECRET CHAPTER
  finalLetter: {
    chapterTitle: "THE LAST CHAPTER",
    chapterSubtitle: "last chapter of this mission...but it's the actual beginning",
    salutation: "Pookie...",
    paragraphs: [
      "From the moment we started talking, you didn't just become a part of my routine—you quietly became the best part of my entire day. In a world that is often loud and overwhelming, you became my calm, my safe shelter, and my biggest source of joy.",
      "<strong class='name-serious'>Himanshu</strong>, I want you to know how deeply proud I am of the person you are. Your gentle heart, your resilience, your kindness, and the genuine way you care for the people around you is nothing short of heroic. Even though we haven't met offline yet and I haven't seen your real smile in person, your soul has touched mine more deeply than anyone ever has.",
      "<strong class='name-warm'>Sunshine</strong>, thank you for the 261 days of endless laughs, for listening to my silly rants, for comforting me without hesitation, and for filling my life with warmth and light even on the gloomiest days.",
      "<strong class='name-soft'>Baby</strong>, you are truly one of a kind. Every memory we've built is a treasure I hold close to my heart, and every dream for the future is so much brighter because you are in it.",
      "<strong class='name-romantic'>Babe</strong>, hold my hand through every chapter of our lives. You made me believe in soft love, in true companionship, and in someone who makes me feel deeply heard.",
      "<strong class='name-special'>Ansh</strong>, today is all about celebrating YOU—the boy who stole my heart, my favorite adventure, and my forever superhero.",
      "May this year bring you endless happiness, boundless success, good health, and all the dreams your heart desires."
    ],
    closing: "Happy Birthday, Pookie. 🥹🖤",
    signature: "Forever Your #1 Cheerleader & Sidekick 💖✨"
  },

  // Media Surprises (Integrated exact local media files)
  mediaSurprises: {
    voiceNote: {
      title: "🎧 Voice Note",
      sub: "A little something recorded specially for you, Baby.",
      audioSrc: "media/voice-note.mp3"
    },
    videoCard: {
      title: "🎬 Birthday Video",
      sub: "A special memory reel prepared for our superhero.",
      videoSrc: "media/birthday-video.mp4"
    }
  }
};
