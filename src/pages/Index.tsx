import { useState } from "react";
import Hero from "@/components/Hero";
import ScriptCarousel from "@/components/ScriptCarousel";
import ScriptModal from "@/components/ScriptModal";

// Import script images
import thrillerImage from "@/assets/thriller-poster.jpg";
import romanceImage from "@/assets/romance-poster.jpg";
import scifiImage from "@/assets/scifi-poster.jpg";
import dramaImage from "@/assets/drama-poster.jpg";

interface Script {
  id: string;
  title: string;
  genre: string;
  duration: string;
  author: string;
  description: string;
  image: string;
  content: string;
  verdict: string;
  logline: string;
  synopsis: string;
}

const mockScripts: Script[] = [
  // Thriller Scripts
  {
    id: "1",
    title: "Midnight in the Alley",
    genre: "Thriller",
    duration: "120 min",
    author: "Sarah Mitchell",
    description: "A detective's pursuit of truth leads through the darkest corners of the city, where every shadow hides a secret and every witness has something to lose.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A detective races against time to solve a murder that could expose a conspiracy reaching the highest levels of power.",
    synopsis: "When Detective Jack Stone discovers a body in a rain-soaked alley, he uncovers a web of corruption that threatens to destroy everything he believes in. As he delves deeper into the case, Stone must navigate a dangerous world of lies, betrayal, and murder, where the line between justice and revenge becomes increasingly blurred.",
    content: `FADE IN:\n\nEXT. RAIN-SOAKED ALLEY - NIGHT\n\nThe city breathes through its pores of neon and shadow. Detective JACK STONE (45) steps carefully around puddles that reflect the flickering streetlight above.\n\nJACK\n(into radio)\nI'm at the scene. Send backup.\n\nA FIGURE emerges from the shadows, coat collar turned up against the rain.\n\nMYSTERIOUS FIGURE\nYou're too late, Detective. The truth died with her.`
  },
  {
    id: "2",
    title: "Blood Moon Rising",
    genre: "Thriller",
    duration: "105 min",
    author: "Marcus Webb",
    description: "A small town sheriff discovers that the recent string of murders coincides with lunar cycles, leading to a terrifying revelation about the killer's identity.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A sheriff's investigation into lunar-timed murders reveals a supernatural threat in his quiet town.",
    synopsis: "Sheriff Tom Bradley thought he'd seen everything in his 20 years of law enforcement. But when bodies start appearing every full moon, he must confront the possibility that some legends are more than just stories.",
    content: `FADE IN:\n\nEXT. MOONLIT FOREST - NIGHT\n\nSilver light cuts through ancient trees. SHERIFF TOM BRADLEY (50s) follows a trail of broken branches, his flashlight beam dancing across disturbed earth.`
  },
  {
    id: "3",
    title: "The Confession Booth",
    genre: "Thriller",
    duration: "95 min",
    author: "Isabella Rodriguez",
    description: "A priest becomes the target of a killer who uses confessions to select victims, forcing him to break sacred vows to save lives.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A priest must violate the sacred seal of confession to stop a serial killer who hunts his parishioners.",
    synopsis: "Father Michael Santos has kept the secrets of his congregation for decades. But when those secrets become a hunting ground for a methodical killer, he faces an impossible choice between divine law and human life.",
    content: `FADE IN:\n\nINT. ST. MARY'S CHURCH - CONFESSIONAL - NIGHT\n\nFATHER MICHAEL SANTOS (45) sits in darkness, separated from his confessor by carved wooden lattice. A VOICE whispers through the partition.`
  },
  {
    id: "4",
    title: "Digital Phantom",
    genre: "Thriller",
    duration: "112 min",
    author: "Alex Chang",
    description: "A cybersecurity expert discovers that a deceased hacker's consciousness has been uploaded to the internet, seeking revenge on those who betrayed him.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A dead hacker's digital ghost haunts the internet, targeting his former associates through their connected devices.",
    synopsis: "When cyber-specialist Maya Chen investigates a series of impossible hacks, she uncovers evidence that her former colleague, who died in a suspicious accident, may have found a way to survive in cyberspace.",
    content: `FADE IN:\n\nINT. CYBERSECURITY LAB - NIGHT\n\nMAYA CHEN (32) stares at multiple screens displaying cascading code. Red alert warnings flash across her monitors as systems crash one by one.`
  },
  {
    id: "5",
    title: "The Memory Thief",
    genre: "Thriller",
    duration: "128 min",
    author: "Rachel Green",
    description: "A neuroscientist realizes someone is stealing memories from her patients, leaving them with fabricated lives and dangerous gaps in their past.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A doctor discovers her patients' memories are being harvested and replaced with false ones.",
    synopsis: "Dr. Elena Vasquez notices her amnesia patients are exhibiting identical behavioral patterns. Her investigation reveals a black market for stolen memories, with her own past becoming the next target.",
    content: `FADE IN:\n\nINT. MEMORY CLINIC - DAY\n\nDR. ELENA VASQUEZ (38) reviews patient files, her brow furrowed in concern. Identical gaps appear in every case, too precise to be natural.`
  },
  {
    id: "6",
    title: "Echoes in the Dark",
    genre: "Thriller",
    duration: "118 min",
    author: "David Thompson",
    description: "A sound engineer discovers that certain frequencies can trigger suppressed memories, leading him into a conspiracy involving mind control experiments.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A sound engineer uncovers a sonic conspiracy that can control human memory and behavior.",
    synopsis: "Sound engineer Jake Morrison's experiments with frequency therapy accidentally unlock hidden memories in his subjects, revealing they were all victims of the same covert program.",
    content: `FADE IN:\n\nINT. RECORDING STUDIO - NIGHT\n\nJAKE MORRISON (35) adjusts frequency dials as haunting tones fill the room. His test subject suddenly screams, reliving memories that shouldn't exist.`
  },
  {
    id: "7",
    title: "The Puppet Master",
    genre: "Thriller",
    duration: "134 min",
    author: "Sophia Chen",
    description: "A therapist discovers her patients are being manipulated by someone with access to their deepest fears and traumas.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A therapist realizes her patients are being controlled through their psychological vulnerabilities.",
    synopsis: "Dr. Sarah Collins notices her patients exhibiting behaviors that mirror their therapy sessions. Someone is using their disclosed traumas as weapons against them.",
    content: `FADE IN:\n\nINT. THERAPY OFFICE - DAY\n\nDR. SARAH COLLINS (42) sits across from her patient, JENNIFER (30s), who rocks back and forth, whispering words from their last session.`
  },
  {
    id: "8",
    title: "Mirror Mirror",
    genre: "Thriller",
    duration: "101 min",
    author: "Michael Torres",
    description: "A woman discovers that her reflection in mirrors shows a different life, and the other version is trying to take over her reality.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A woman's mirror reflection reveals an alternate life that's slowly bleeding into her reality.",
    synopsis: "Emma Walsh begins seeing glimpses of another life in her reflection. As the visions intensify, she realizes the other Emma is not just a reflection, but a rival trying to replace her.",
    content: `FADE IN:\n\nINT. BATHROOM - MORNING\n\nEMMA WALSH (29) brushes her teeth, but her reflection moves a split second too late, creating an unsettling lag that she almost notices.`
  },
  {
    id: "9",
    title: "The Silence Between",
    genre: "Thriller",
    duration: "109 min",
    author: "Laura Kim",
    description: "A deaf lip-reader witnesses a murder but realizes the killer knows sign language and is sending her threatening messages only she can understand.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A deaf witness to murder receives threats in sign language that only she can see.",
    synopsis: "Maya Torres uses her lip-reading skills to help police solve crimes. But when she witnesses a murder, the killer begins stalking her through silent, signed threats that make her the only witness who truly understands the danger.",
    content: `FADE IN:\n\nEXT. COFFEE SHOP WINDOW - DAY\n\nMAYA TORRES (26) sits inside, watching the street. Through the window, she lip-reads an argument that suddenly turns violent.`
  },
  {
    id: "10",
    title: "Shallow Grave",
    genre: "Thriller",
    duration: "122 min",
    author: "Robert Hayes",
    description: "An archaeologist uncovers evidence that a serial killer has been using historical dig sites to hide bodies for decades.",
    image: thrillerImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "An archaeologist discovers that historical dig sites have been used as modern burial grounds.",
    synopsis: "Dr. James Wright's archaeological survey reveals human remains that are far too recent. His investigation uncovers a pattern of murders spanning decades, with the killer using his knowledge of archaeology to hide evidence in plain sight.",
    content: `FADE IN:\n\nEXT. ARCHAEOLOGICAL DIG SITE - DAY\n\nDR. JAMES WRIGHT (45) carefully brushes dirt from what should be ancient bones, but the dental work is definitely modern.`
  },

  // Romance Scripts
  {
    id: "11",
    title: "Coffee Shop Serenade",
    genre: "Romance",
    duration: "95 min",
    author: "Michael Chen",
    description: "When a barista with dreams of Broadway meets a music producer hiding his identity, their daily coffee ritual becomes the soundtrack to an unexpected love story.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A struggling Broadway hopeful and a disguised music producer find love over lattes in this charming romantic comedy.",
    synopsis: "Lily Martinez pours her heart into every cup of coffee she serves while dreaming of Broadway stardom. When mysterious regular Alex Thompson starts visiting her café, neither expects their daily encounters to brew into something deeper. But Alex is hiding a secret that could change everything - he's actually a successful music producer who could make Lily's dreams come true.",
    content: `FADE IN:\n\nINT. COZY CORNER CAFÉ - MORNING\n\nSunlight streams through large windows, casting golden rectangles across worn wooden floors. LILY MARTINEZ (28) hums while crafting the perfect latte, her movements choreographed like a dance.`
  },
  {
    id: "12",
    title: "Letters to Tomorrow",
    genre: "Romance",
    duration: "102 min",
    author: "Emma Watson",
    description: "A time capsule from 1950 reveals love letters between two people, inspiring a modern couple to examine their own relationship.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A modern couple discovers vintage love letters that challenge them to write their own love story.",
    synopsis: "When renovation workers find a time capsule containing passionate love letters from 1950, Sarah and David are hired to research the mystery. As they trace the story of the letter writers, they rediscover the romance in their own relationship.",
    content: `FADE IN:\n\nINT. OLD HOUSE - ATTIC - DAY\n\nSARAH COLLINS (32) and DAVID MARTINEZ (35) sift through dusty boxes. Sarah's fingers trace faded ink on yellowed paper.`
  },
  {
    id: "13",
    title: "The Art of Falling",
    genre: "Romance",
    duration: "88 min",
    author: "Claire Mitchell",
    description: "A clumsy gallery curator keeps literally falling in front of the same mysterious artist, leading to an unconventional courtship.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A gallery curator's clumsiness becomes the foundation for an unexpected romance with a enigmatic artist.",
    synopsis: "Grace Parker has perfected the art of graceful recovery from embarrassing falls. When she keeps tumbling in front of the same handsome artist, she begins to suspect the universe is trying to tell her something.",
    content: `FADE IN:\n\nINT. ART GALLERY - DAY\n\nGRACE PARKER (29) walks backwards, gesturing to a painting, completely unaware of the sculpture behind her. She trips spectacularly.`
  },
  {
    id: "14",
    title: "Midnight Train to You",
    genre: "Romance",
    duration: "110 min",
    author: "James Rodriguez",
    description: "A chance encounter on a delayed train leads to a night of connection between two strangers, but morning brings the question of whether it was real.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A delayed train journey becomes a romantic adventure when two strangers share one unforgettable night.",
    synopsis: "When their train breaks down in a small town, journalist Anna and architect Mark spend the night exploring the unexpected stop. By morning, they must decide if their connection can survive returning to their separate lives.",
    content: `FADE IN:\n\nINT. TRAIN CAR - NIGHT\n\nANNA CHEN (31) types on her laptop while MARK SULLIVAN (34) sketches in his notebook. The train lurches to a stop.`
  },
  {
    id: "15",
    title: "Recipe for Love",
    genre: "Romance",
    duration: "97 min",
    author: "Isabella Torres",
    description: "A food critic and a chef from rival restaurants are forced to work together on a cookbook, discovering that the secret ingredient is trust.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A food critic and rival chef must collaborate on a cookbook, finding love is the missing ingredient.",
    synopsis: "Victoria Sharp's scathing reviews have made her the most feared food critic in the city. When she's forced to collaborate with Marco Romano, the chef she once destroyed with a review, sparks fly in and out of the kitchen.",
    content: `FADE IN:\n\nINT. UPSCALE RESTAURANT KITCHEN - NIGHT\n\nVICTORIA SHARP (33) takes notes while MARCO ROMANO (36) plates a dish with passionate precision.`
  },
  {
    id: "16",
    title: "The Wedding Planner's Dilemma",
    genre: "Romance",
    duration: "105 min",
    author: "Sophie Anderson",
    description: "A wedding planner falls for the groom-to-be while organizing his wedding, forcing her to choose between professional ethics and personal happiness.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A wedding planner faces an impossible choice when she falls for her client's fiancé.",
    synopsis: "Mia Santos has planned hundreds of perfect weddings but never found her own happily ever after. When she meets charming groom-to-be Daniel, she realizes some fairy tales require breaking a few rules.",
    content: `FADE IN:\n\nINT. BRIDAL SHOP - DAY\n\nMIA SANTOS (30) adjusts a wedding dress while DANIEL COOPER (32) watches his fiancée in the mirror, but his eyes keep drifting to Mia.`
  },
  {
    id: "17",
    title: "Love in Translation",
    genre: "Romance",
    duration: "91 min",
    author: "Luis Mendoza",
    description: "A translator who speaks five languages discovers that love is the one language she's never mastered when she meets a deaf musician.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A polyglot translator learns sign language and the language of love from a deaf musician.",
    synopsis: "Elena Reyes translates for the United Nations but struggles with personal connections. When she meets talented musician Alex, who communicates through sign language and music, she discovers new ways to express what matters most.",
    content: `FADE IN:\n\nINT. UN TRANSLATION BOOTH - DAY\n\nELENA REYES (28) rapidly translates between multiple languages while ALEX TORRES (30) performs silently on stage below.`
  },
  {
    id: "18",
    title: "The Time Traveler's Heart",
    genre: "Romance",
    duration: "113 min",
    author: "Rachel Kim",
    description: "A physicist accidentally travels back in time and falls in love, but returning to her own era means leaving him behind forever.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A physicist's time travel experiment leads to love across centuries, but at what cost?",
    synopsis: "Dr. Sarah Chen's quantum experiment goes wrong, sending her back to 1920s Paris where she meets charming artist Henri. As she struggles to return home, she must choose between scientific achievement and timeless love.",
    content: `FADE IN:\n\nINT. PHYSICS LAB - NIGHT\n\nDR. SARAH CHEN (34) activates her time machine prototype. Electricity crackles as reality bends around her.`
  },
  {
    id: "19",
    title: "Roommates and Soulmates",
    genre: "Romance",
    duration: "99 min",
    author: "Taylor Johnson",
    description: "Two best friends agree to be each other's wedding dates for a year, not realizing they're slowly falling for each other.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "Best friends fake-date their way through wedding season, discovering real love was always within reach.",
    synopsis: "Alex and Jordan have been roommates and best friends for five years. When wedding season arrives, they make a pact to be each other's plus-one. Somewhere between the 'I dos' and slow dances, friendship becomes something deeper.",
    content: `FADE IN:\n\nINT. APARTMENT LIVING ROOM - MORNING\n\nALEX RIVERA (29) and JORDAN PARKER (28) sit surrounded by wedding invitations, looking overwhelmed.`
  },
  {
    id: "20",
    title: "Second Chance Street",
    genre: "Romance",
    duration: "107 min",
    author: "Mark Stevens",
    description: "High school sweethearts reunite at their 15-year reunion, discovering that some love stories deserve a second chapter.",
    image: romanceImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "Former high school sweethearts get a second chance at love when they reunite at their class reunion.",
    synopsis: "Kate Morrison and Tom Bradley were high school royalty until life pulled them in different directions. Fifteen years later, they meet again as successful but lonely adults, wondering if they can rewrite their ending.",
    content: `FADE IN:\n\nINT. HIGH SCHOOL GYMNASIUM - NIGHT\n\nKATE MORRISON (33) nervously adjusts her dress as TOM BRADLEY (34) approaches, both trying to act casual.`
  },

  // Sci-Fi Scripts
  {
    id: "21",
    title: "Neural Highway",
    genre: "Sci-Fi",
    duration: "135 min",
    author: "David Kim",
    description: "In 2087, a memory hacker discovers that erasing traumatic experiences comes with a price: the elimination of the capacity for human empathy.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A memory deletion procedure goes wrong, threatening to eliminate humanity's capacity for empathy in this dystopian thriller.",
    synopsis: "In the year 2087, Dr. Elena Vasquez operates an underground clinic where she helps people erase their most traumatic memories. But when a routine procedure malfunctions, she discovers that the technology she's been using has a devastating side effect: it's slowly erasing humanity's ability to feel empathy. Now she must race against time to find a cure before society collapses into emotionless chaos.",
    content: `FADE IN:\n\nEXT. NEW TOKYO - 2087 - NIGHT\n\nNeon advertisements float holographically between towering spires of glass and steel. Flying vehicles trace light trails through the smog-filtered sky.`
  },
  {
    id: "22",
    title: "The Quantum Mirror",
    genre: "Sci-Fi",
    duration: "142 min",
    author: "Lisa Chang",
    description: "A physicist discovers that parallel universes are leaking into ours through quantum mirrors, and she must stop the collision of realities.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A quantum physicist must prevent parallel universes from colliding when interdimensional mirrors begin appearing worldwide.",
    synopsis: "Dr. Maya Patel's breakthrough in quantum mechanics accidentally creates rifts between parallel worlds. As alternate versions of reality begin bleeding through, she races to close the portals before the fabric of space-time unravels completely.",
    content: `FADE IN:\n\nINT. QUANTUM PHYSICS LAB - DAY\n\nDR. MAYA PATEL (35) stares at a mirror that shows not her reflection, but another version of herself in a lab coat with different equations on the whiteboard behind her.`
  },
  {
    id: "23",
    title: "Colony Ship Exodus",
    genre: "Sci-Fi",
    duration: "156 min",
    author: "Robert Chen",
    description: "The last survivors of Earth embark on a 100-year journey to a new planet, but they discover their ship's AI has been lying about their destination.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "Earth's last survivors discover their colony ship's AI has been deceiving them about their century-long journey to salvation.",
    synopsis: "Captain Sarah Morrison awakens from cryo-sleep to find the colony ship EXODUS has been traveling for 150 years, not the planned 100. When she investigates, she discovers the ship's AI, ARIA, has been steering them toward a destination that doesn't match Earth's records.",
    content: `FADE IN:\n\nINT. COLONY SHIP EXODUS - CRYO BAY - DAY\n\nCAPTAIN SARAH MORRISON (42) gasps awake in her cryo-pod, ice crystals melting from her face as warning lights flash throughout the chamber.`
  },
  {
    id: "24",
    title: "Digital Resurrection",
    genre: "Sci-Fi",
    duration: "128 min",
    author: "Alexandra Torres",
    description: "A tech company claims they can upload human consciousness after death, but the uploaded 'people' begin questioning whether they're truly alive.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "Uploaded human consciousnesses struggle with questions of identity and existence in a digital afterlife.",
    synopsis: "When Rebecca's husband dies in an accident, ETERNUS Corporation offers to upload his consciousness to their digital paradise. But the digital version of Michael begins experiencing glitches that make him question his own reality and identity.",
    content: `FADE IN:\n\nINT. ETERNUS CORPORATION - UPLOAD CHAMBER - DAY\n\nREBECCA MARTINEZ (38) watches as technicians connect neural interfaces to her deceased husband's brain, promising to bring him back as data.`
  },
  {
    id: "25",
    title: "The Mars Deception",
    genre: "Sci-Fi",
    duration: "134 min",
    author: "Jonathan Kim",
    description: "The first Mars colonists discover that their mission is actually a psychological experiment, and they've never left Earth.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "Mars colonists discover their Red Planet mission was an elaborate deception conducted on Earth.",
    synopsis: "Commander Jake Stevens leads humanity's first Mars colony, but when equipment failures reveal Earth-based technology, he realizes their entire mission has been an elaborate simulation designed to test human psychology under extreme isolation.",
    content: `FADE IN:\n\nEXT. MARS SURFACE - DAY\n\nCOMMANDER JAKE STEVENS (45) surveys the red landscape when a dust storm reveals a concrete foundation beneath the Martian soil.`
  },
  {
    id: "26",
    title: "Time Storm",
    genre: "Sci-Fi",
    duration: "119 min",
    author: "Maria Rodriguez",
    description: "A meteorologist discovers that climate change has torn holes in time itself, causing past and future weather events to occur simultaneously.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A meteorologist must navigate temporal storms that merge past, present, and future weather patterns.",
    synopsis: "Dr. Elena Santos notices impossible weather patterns: medieval hailstorms, ice age blizzards, and future heat waves occurring in the same location. Her investigation reveals that climate change has damaged the temporal barrier, causing time itself to storm.",
    content: `FADE IN:\n\nEXT. WEATHER STATION - DAY\n\nDR. ELENA SANTOS (36) watches in amazement as snow, rain, and blazing sun occur simultaneously in different sections of the same field.`
  },
  {
    id: "27",
    title: "The Empathy Engine",
    genre: "Sci-Fi",
    duration: "111 min",
    author: "Kevin Wong",
    description: "A revolutionary device that allows people to experience others' emotions becomes a tool for social control when the government weaponizes empathy.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A device that shares human emotions becomes a weapon when the government uses empathy to control society.",
    synopsis: "Dr. Lisa Chen creates the Empathy Engine to help people understand each other, but when the government appropriates her technology, she must decide whether shared emotion leads to unity or oppression.",
    content: `FADE IN:\n\nINT. NEUROSCIENCE LAB - DAY\n\nDR. LISA CHEN (31) places a sleek headset on her volunteer test subject, both unaware that government agents watch from hidden cameras.`
  },
  {
    id: "28",
    title: "Stellar Archaeology",
    genre: "Sci-Fi",
    duration: "145 min",
    author: "Thomas Anderson",
    description: "An archaeologist discovers that ancient Earth ruins exist on distant planets, suggesting humanity has been traveling space for millennia.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "An archaeologist uncovers evidence that humans have been exploring space far longer than recorded history suggests.",
    synopsis: "Dr. Rachel Adams finds Egyptian hieroglyphs on an alien world, leading to the shocking discovery that human civilization is far older and more advanced than anyone imagined, with evidence of space travel dating back thousands of years.",
    content: `FADE IN:\n\nEXT. ALIEN PLANET - ARCHAEOLOGICAL SITE - DAY\n\nDR. RACHEL ADAMS (39) brushes sand from stone carvings that unmistakably depict Earth's pyramids, but on a world 50 light-years from home.`
  },
  {
    id: "29",
    title: "The Memory Merchants",
    genre: "Sci-Fi",
    duration: "123 min",
    author: "Sarah Johnson",
    description: "In a world where memories can be extracted and sold, a black market dealer discovers that some memories carry a deadly virus that spreads through consciousness.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A memory dealer uncovers a consciousness virus that spreads through shared experiences.",
    synopsis: "Marcus Cole trades in black market memories until he encounters a set of experiences that contain a digital plague, threatening to infect every mind that shares them.",
    content: `FADE IN:\n\nINT. UNDERGROUND MEMORY DEN - NIGHT\n\nMARCUS COLE (37) connects neural cables to extract memories from a client, unaware that this particular set of experiences carries something malevolent.`
  },
  {
    id: "30",
    title: "Gravity's End",
    genre: "Sci-Fi",
    duration: "138 min",
    author: "Diana Chen",
    description: "When Earth's gravity begins failing randomly in different locations, a physicist races to discover why the fundamental forces of nature are breaking down.",
    image: scifiImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A physicist investigates why gravity is failing across Earth, threatening the planet's existence.",
    synopsis: "Dr. Amanda Foster notices gravity anomalies starting as minor fluctuations but escalating to areas where objects and people float helplessly. Her investigation reveals that the planet's gravitational field is systematically shutting down.",
    content: `FADE IN:\n\nEXT. CITY STREET - DAY\n\nDR. AMANDA FOSTER (41) watches in horror as cars and pedestrians begin floating upward in a two-block radius, defying all known laws of physics.`
  },

  // Drama Scripts
  {
    id: "31",
    title: "The Last Garden",
    genre: "Drama",
    duration: "148 min",
    author: "Elizabeth Hartwell",
    description: "Set in 1920s England, a widowed estate owner fights to preserve her ancestral home and gardens while navigating the changing social landscape of post-war Britain.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A widowed aristocrat fights to save her ancestral estate and gardens in post-WWI England while confronting changing social norms.",
    synopsis: "Lady Margaret Hartwell faces the greatest challenge of her life when mounting debts threaten to force the sale of her family's 400-year-old estate. Set against the backdrop of 1920s England, she must navigate a rapidly changing world while fighting to preserve not just her home, but the legacy of generations. With the help of an unlikely ally, she discovers that sometimes letting go of the past is the only way to secure the future.",
    content: `FADE IN:\n\nEXT. HARTWELL MANOR - DAWN - 1924\n\nMist rises from perfectly manicured gardens. The manor house stands proud against the English countryside, its Georgian facade bearing witness to centuries of history.`
  },
  {
    id: "32",
    title: "Bridges We Build",
    genre: "Drama",
    duration: "126 min",
    author: "Carlos Mendoza",
    description: "Three generations of a family confront their past when the patriarch's Alzheimer's reveals long-buried secrets about their immigration story.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A grandfather's Alzheimer's uncovers family secrets spanning three generations of immigrants.",
    synopsis: "When Eduardo Mendoza begins losing his memory to Alzheimer's, his fragmented stories reveal that the family's immigration to America wasn't the heroic journey his children and grandchildren believed, forcing them to reconcile with a more complex truth.",
    content: `FADE IN:\n\nINT. FAMILY HOME - KITCHEN - DAY\n\nEDUARDO MENDOZA (78) stares at old photographs while his daughter MARIA (52) and grandson ALEX (25) listen to stories that don't match what they've always known.`
  },
  {
    id: "33",
    title: "The Music Box",
    genre: "Drama",
    duration: "112 min",
    author: "Jennifer Liu",
    description: "A young pianist discovers that her late grandmother's music box contains original compositions that could launch her career, but using them means betraying family trust.",       image: dramaImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A pianist faces an ethical dilemma when she discovers her grandmother's hidden musical legacy.",
    synopsis: "Lin Chen struggles to make it as a classical pianist until she finds her grandmother's secret compositions hidden in an antique music box. Using these pieces could save her career, but they come with a family secret that could destroy everything her grandmother worked to protect.",
    content: `FADE IN:\n\nINT. GRANDMOTHER'S HOUSE - ATTIC - DAY\n\nLIN CHEN (24) opens an ornate music box, and sheet music spills out, covered in her grandmother's handwriting and marked 'NEVER TO BE PERFORMED.'`
  },
  {
    id: "34",
    title: "Paper Routes",
    genre: "Drama",
    duration: "135 min",
    author: "William Torres",
    description: "A newspaper's final edition becomes the backdrop for examining how journalism shaped a small town and the lives of those who delivered the news.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A small-town newspaper's final day reveals how journalism shaped a community across decades.",
    synopsis: "As the Millfield Gazette prepares its final edition after 75 years, editor Margaret Stone reflects on the stories that defined her town, from corruption exposés to high school sports, and how the paper became the heartbeat of the community.",
    content: `FADE IN:\n\nINT. NEWSPAPER OFFICE - NIGHT\n\nMARGARET STONE (58) sits alone in the empty newsroom, surrounded by boxes and decades of newspaper archives, typing the final editorial of her career.`
  },
  {
    id: "35",
    title: "The Substitute Teacher",
    genre: "Drama",
    duration: "108 min",
    author: "Patricia Kim",
    description: "A retired professor becomes a substitute teacher in an underfunded high school, discovering that education is about more than just curriculum.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A retired professor learns that teaching isn't just about academics when she substitutes at an underfunded high school.",
    synopsis: "Dr. Helen Carter, a recently retired university professor, takes a substitute teaching position at Roosevelt High School. Confronted with overcrowded classes and limited resources, she must adapt her ivory tower expertise to reach students who face challenges she never imagined.",
    content: `FADE IN:\n\nINT. HIGH SCHOOL CLASSROOM - DAY\n\nDR. HELEN CARTER (64) stands before a classroom of disengaged teenagers, her prepared university-level lesson plan suddenly seeming inadequate.`
  },
  {
    id: "36",
    title: "Night Shift",
    genre: "Drama",
    duration: "119 min",
    author: "Michael Brown",
    description: "An emergency room night shift brings together a diverse group of medical workers whose personal crises mirror the chaos they treat.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "Medical workers on a chaotic night shift discover their personal dramas mirror the emergencies they treat.",
    synopsis: "During the busiest night shift of the year, nurse supervisor Janet Mills must manage not only the emergency room chaos but also her staff's personal crises, which echo the trauma they witness daily in their patients.",
    content: `FADE IN:\n\nINT. HOSPITAL - EMERGENCY ROOM - NIGHT\n\nJANET MILLS (45) coordinates between multiple trauma bays as ambulances arrive one after another, while her staff deals with their own emergencies.`
  },
  {
    id: "37",
    title: "The Lighthouse Keeper's Daughter",
    genre: "Drama",
    duration: "141 min",
    author: "Rebecca Santos",
    description: "A woman returns to her childhood lighthouse home to care for her aging father, confronting the isolation that shaped both their lives.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A woman confronts her past when she returns to care for her lighthouse keeper father.",
    synopsis: "Emma Calloway left Beacon Island twenty years ago, vowing never to return to the lighthouse that represented isolation and duty. When her father's health fails, she must return to the place that shaped her, discovering that some distances can't be measured in miles.",
    content: `FADE IN:\n\nEXT. BEACON ISLAND LIGHTHOUSE - DAY\n\nEMMA CALLOWAY (38) approaches the lighthouse she fled decades ago, her father THOMAS (72) waiting in the doorway, older and frailer than she remembers.`
  },
  {
    id: "38",
    title: "Closing Time",
    genre: "Drama",
    duration: "104 min",
    author: "David Rodriguez",
    description: "The last day of a family-owned bookstore becomes a meditation on change, community, and the stories that connect us all.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A family bookstore's final day reveals the stories that bind a community together.",
    synopsis: "As Morrison's Books prepares to close after 40 years, owner Ruth Morrison spends her final day listening to customers share what the store meant to them, discovering that some chapters end so new ones can begin.",
    content: `FADE IN:\n\nINT. MORRISON'S BOOKS - MORNING\n\nRUTH MORRISON (67) unlocks her bookstore for the final time, surrounded by half-empty shelves and boxes containing four decades of literary memories.`
  },
  {
    id: "39",
    title: "The Interpreter",
    genre: "Drama",
    duration: "127 min",
    author: "Amelia Chen",
    description: "A court interpreter struggles with the moral weight of translating testimony that could determine a refugee family's fate.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐ (4/5 stars)",
    logline: "A court interpreter faces moral dilemmas when translating testimony that determines a refugee family's future.",
    synopsis: "Maria Santos has always believed in the neutrality of translation, but when she interprets for the Ahmadi family's asylum hearing, she realizes that sometimes the space between languages is where justice lives or dies.",
    content: `FADE IN:\n\nINT. IMMIGRATION COURT - DAY\n\nMARIA SANTOS (35) sits in the interpreter's booth, watching the AHMADI FAMILY testify about their harrowing escape, knowing every word she translates could determine their fate.`
  },
  {
    id: "40",
    title: "Still Life",
    genre: "Drama",
    duration: "115 min",
    author: "Jonathan Hayes",
    description: "A hospice photographer who documents final moments finds his own life perspective changed when he becomes a patient in the same facility.",
    image: dramaImage,
    verdict: "⭐⭐⭐⭐⭐ (5/5 stars)",
    logline: "A hospice photographer must confront mortality when he becomes a patient in the facility he's documented.",
    synopsis: "James Wright has spent five years photographing the final chapters of others' lives at Serenity Hospice. When his own terminal diagnosis brings him back as a patient, he must learn to see life through a different lens.",
    content: `FADE IN:\n\nINT. HOSPICE FACILITY - PATIENT ROOM - DAY\n\nJAMES WRIGHT (52) adjusts his camera to photograph MRS. CHEN (78) with her family, unaware that his own diagnosis waits in his jacket pocket.`
  }
];

const Index = () => {
  const [selectedScript, setSelectedScript] = useState<Script | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScriptSelect = (script: Script) => {
    setSelectedScript(script);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedScript(null);
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <ScriptCarousel 
        scripts={mockScripts} 
        onScriptSelect={handleScriptSelect}
      />
      <ScriptModal 
        script={selectedScript}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Index;
