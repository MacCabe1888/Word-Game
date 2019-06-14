const gamesArr = [
  {
    name: "Hitchcock's Rope",
    description: "Are you a master of suspense? See if you can guess the names of these mystery Hitchcock films!",
    assetsDir: "0",
    imgSrc: "hitchcock-1024x686.jpg",
    guessesLeft: 3,
    validChars: [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ],
    words: [
      "THE-LODGER:-A-STORY-OF-THE-LONDON-FOG",
      "THE-39-STEPS",
      "THE-LADY-VANISHES",
      "REBECCA",
      "SABOTEUR",
      "SHADOW-OF-A-DOUBT",
      "AVENTURE-MALGACHE",
      "BON-VOYAGE",
      "LIFEBOAT",
      "SPELLBOUND",
      "NOTORIOUS",
      "ROPE",
      "STRANGERS-ON-A-TRAIN",
      "DIAL-M-FOR-MURDER",
      "REAR-WINDOW",
      "THE-TROUBLE-WITH-HARRY",
      "TO-CATCH-A-THIEF",
      "THE-MAN-WHO-KNEW-TOO-MUCH",
      "VERTIGO",
      "NORTH-BY-NORTHWEST",
      "PSYCHO",
      "THE-BIRDS",
      "MARNIE",
      "TORN-CURTAIN",
      "TOPAZ",
      "FAMILY-PLOT"
    ],
    themes: [
      "restored-version-of-hitchcock-classic-the-lodger-with-nitin-sawhney-score.mp3",
      "the-39-steps-hitchcock-1935-opening-title-sequence.mp3",
      "the-lady-vanishes-1938.mp3",
      "franz-waxman-theme-from-rebecca-1940.mp3",
      "saboteur-1942-opening-title-sequence.mp3",
      "shadow-of-a-doubt-1943-instrumental.mp3",
      "benjamin-frankel-music-from-alfred-hitchcocks-aventure-malgache-1944.mp3",
      "benjamin-frankel-music-from-alfred-hitchcocks-bon-voyage-1944.mp3",
      "alfred-hitchcock-lifeboat-extras.mp3",
      "miklos-rozsa-spellbound-main-theme.mp3",
      "notorious-1946-theatrical-trailer.mp3",
      "rope-1948-opening-title-sequence.mp3",
      "strangers-on-a-train-1951-opening-title-sequence.mp3",
      "dial-m-for-murder-theme.mp3",
      "rear-window-1954-opening-title-sequence.mp3",
      "bernard-herrmann-the-trouble-with-harry-suite-from-the-film-music-1955.mp3",
      "to-catch-a-thief-official-trailer-cary-grant-movie-1955.mp3",
      "music-composed-by-bernard-herrmann-man-who-knew-too-much-main-title-keith-lockhardt.mp3",
      "bernard-herrmann-vertigo-theme.mp3",
      "north-by-northwest-theme.mp3",
      "bernard-herrmann-psycho-theme.mp3",
      "the-birds-1963-title-sequence.mp3",
      "theme-from-marnie-bernard-herrmann-tippi-hedren-pictures-best-hd-quality.mp3",
      "john-addison-torn-curtain-main-title.mp3",
      "topaz-1969-intro.mp3",
      "john-williams-family-plot-end-credits-end-titles.mp3"
    ],
    images: [
      "The Lodger_ A Story of the London Fog.jpg",
      "The 39 Steps.jpg",
      "The Lady Vanishes.jpg",
      "Rebecca.jpg",
      "Saboteur.jpg",
      "Shadow of a Doubt.jpg",
      "Aventure Malgache.jpg",
      "Bon Voyage.jpg",
      "Lifeboat.jpg",
      "Spellbound.jpg",
      "Notorious.jpg",
      "Rope.jpg",
      "Strangers on a Train.jpg",
      "Dial M for Murder.jpg",
      "Rear Window.png",
      "The Trouble with Harry.jpg",
      "To Catch a Thief.jpg",
      "The Man Who Knew Too Much.jpg",
      "Vertigo.jpg",
      "North by Northwest.jpg",
      "Psycho.jpg",
      "The Birds.jpg",
      "Marnie.jpg",
      "Torn Curtain.jpg",
      "Topaz.jpg",
      "Family Plot.jpg"
    ]
  },
  {
    name: "Hangman",
    description: "Will you escape the hangman's noose? Put your knowledge of the wild west to the test by guessing the names of these classic Westerns!",
    assetsDir: "1",
    imgSrc: "GettyImages-74698944.jpg",
    guessesLeft: 5,
    validChars: [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ],
    words: [
      "STAGECOACH",
      "DESTRY-RIDES-AGAIN",
      "MY-DARLING-CLEMENTINE",
      "THE-TREASURE-OF-THE-SIERRA-MADRE",
      "SHE-WORE-A-YELLOW-RIBBON",
      "THE-GUNFIGHTER",
      "BEND-OF-THE-RIVER",
      "HIGH-NOON",
      "THE-NAKED-SPUR",
      "SHANE",
      "JOHNNY-GUITAR",
      "THE-INDIAN-FIGHTER",
      "THE-SEARCHERS",
      "MAN-OF-THE-WEST",
      "THE-HANGING-TREE",
      "RIDE-LONESOME",
      "RIO-BRAVO",
      "THE-MAGNIFICENT-SEVEN",
      "THE-COMANCHEROS",
      "THE-MAN-WHO-SHOT-LIBERTY-VALANCE",
      "HOW-THE-WEST-WAS-WON",
      "A-FISTFUL-OF-DOLLARS",
      "THE-SONS-OF-KATIE-ELDER",
      "FOR-A-FEW-DOLLARS-MORE",
      "THE-PROFESSIONALS",
      "EL-DORADO",
      "THE-GOOD,-THE-BAD-AND-THE-UGLY",
      "THE-BIG-GUNDOWN",
      "DAY-OF-ANGER",
      "WILL-PENNY",
      "THE-RUTHLESS-FOUR",
      "THE-GREAT-SILENCE",
      "ONCE-UPON-A-TIME-IN-THE-WEST",
      "THE-WILD-BUNCH",
      "BUTCH-CASSIDY-AND-THE-SUNDANCE-KID",
      "LITTLE-BIG-MAN",
      "VALDEZ-IS-COMING",
      "BIG-JAKE",
      "MCCABE-&-MRS.-MILLER",
      "JEREMIAH-JOHNSON",
      "HIGH-PLAINS-DRIFTER",
      "PAT-GARRETT-&-BILLY-THE-KID",
      "MY-NAME-IS-NOBODY",
      "THE-MISSOURI-BREAKS",
      "THE-OUTLAW-JOSEY-WALES",
      "PALE-RIDER",
      "SILVERADO",
      "UNFORGIVEN",
      "TOMBSTONE",
      "THE-QUICK-AND-THE-DEAD",
      "THE-MISSING",
      "3:10-TO-YUMA",
      "BONE-TOMAHAWK",
      "THE HATEFUL EIGHT"
    ],
    themes: [
      
    ],
    images: [
      
    ]
  }
];
