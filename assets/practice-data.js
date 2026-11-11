/* Practice content for Sprechen! — grammar chapters, gap texts, tables, quiz and exam items.
   Gap syntax: [answer] or [answer|alternative]. Several gaps per sentence are allowed. */
window.PRACTICE_DATA = (() => {
  const P = ["ich", "du", "er / sie / es", "wir", "ihr", "sie / Sie"];

  /* ---------------------------------------------------------------- Grammar chapters */
  const grammar = [
    {
      id: "sein-haben", icon: "🙋", level: "A1", title: "Personalpronomen, sein & haben",
      summary: "Every sentence needs a subject and a verb that matches it. <b>sein</b> (to be) and <b>haben</b> (to have) are irregular — learn them by heart first.",
      sections: [
        { h: "The subject pronouns", p: "German has three words for <i>you</i>: <b>du</b> (one friend, family, children), <b>ihr</b> (several friends) and <b>Sie</b> (formal, one or many people — always with a capital S). <b>sie</b> can mean <i>she</i> or <i>they</i>: the verb ending tells you which one.",
          table: { head: ["Pronomen", "English", "sein", "haben"], rows: [["ich", "I", "bin", "habe"], ["du", "you (informal)", "bist", "hast"], ["er / sie / es", "he / she / it", "ist", "hat"], ["wir", "we", "sind", "haben"], ["ihr", "you all", "seid", "habt"], ["sie / Sie", "they / you (formal)", "sind", "haben"]] } },
        { h: "When do I use which?", p: "<b>sein</b> describes <i>who</i> or <i>how</i> something is: name, job, origin, feelings, adjectives. <b>haben</b> describes possession and many fixed expressions: Zeit, Hunger, Durst, Geburtstag, Kinder, Fieber.",
          examples: [["Ich bin Motia. Ich bin müde.", "I am Motia. I am tired."], ["Bist du Lehrerin?", "Are you a teacher?"], ["Wir haben heute keine Zeit.", "We don't have time today."], ["Hast du Hunger?", "Are you hungry?"], ["Sie hat am Montag Geburtstag.", "Her birthday is on Monday."]] }
      ],
      mistakes: [["Ich bin 30 Jahre.", "Ich bin 30 Jahre alt.", "Age needs alt at the end (or just: Ich bin 30)."], ["Ich bin Hunger.", "Ich habe Hunger.", "Hunger, Durst, Zeit and Angst go with haben."], ["Sie ist Lehrerin? (formal)", "Sind Sie Lehrerin?", "Formal Sie always takes the plural verb form."]],
      tip: "Learn the six forms as a little song: <i>bin – bist – ist – sind – seid – sind</i>.",
      practice: { gaps: "sein-haben", table: "sein-haben" }
    },
    {
      id: "praesens", icon: "🔁", level: "A1", title: "Präsens: regelmäßige Verben",
      summary: "Take the infinitive (lern<b>en</b>), remove <b>-en</b>, and add the ending that matches the subject.",
      sections: [
        { h: "The ending pattern", p: "The stem stays the same; only the ending changes. The <b>wir</b> and <b>sie/Sie</b> forms always look like the infinitive.",
          table: { head: ["Person", "Ending", "wohnen", "lernen", "arbeiten*"], rows: [["ich", "-e", "wohne", "lerne", "arbeite"], ["du", "-st", "wohnst", "lernst", "arbeitest"], ["er / sie / es", "-t", "wohnt", "lernt", "arbeitet"], ["wir", "-en", "wohnen", "lernen", "arbeiten"], ["ihr", "-t", "wohnt", "lernt", "arbeitet"], ["sie / Sie", "-en", "wohnen", "lernen", "arbeiten"]] } },
        { h: "Two small spelling rules", p: "* If the stem ends in <b>-t</b> or <b>-d</b> (arbeit-, find-), add an extra <b>-e-</b> so you can pronounce it: du arbeit<b>e</b>st, er find<b>e</b>t. If the stem ends in <b>-s, -ß, -z</b> (heiß-, tanz-), the du-form only adds <b>-t</b>: du heißt, du tanzt.",
          examples: [["Wo wohnst du? – Ich wohne in Haifa.", "Where do you live? – I live in Haifa."], ["Er arbeitet in Tel Aviv.", "He works in Tel Aviv."], ["Wie heißt du?", "What's your name?"], ["Wir lernen zusammen Deutsch.", "We learn German together."]] },
        { h: "Present = now and future", p: "German uses the present tense for the future too, usually with a time word: <i>Morgen fahre ich nach Berlin.</i> At A1 you rarely need werden for the future." }
      ],
      mistakes: [["Du arbeitst.", "Du arbeitest.", "Stem ends in -t → add -e-."], ["Du heißst.", "Du heißt.", "Stem ends in -ß → only -t."], ["Ich lernen Deutsch.", "Ich lerne Deutsch.", "ich always ends in -e."]],
      tip: "Memory hook for the endings: <b>e – st – t – en – t – en</b>.",
      practice: { gaps: "praesens", table: "regelmaessig" }
    },
    {
      id: "vokalwechsel", icon: "🔀", level: "A1", title: "Verbs with a vowel change",
      summary: "Some very common verbs change their vowel — but <b>only</b> in the <b>du</b> and <b>er/sie/es</b> forms.",
      sections: [
        { h: "Three types", p: "<b>e → i</b>: sprechen, essen, geben, nehmen, helfen, treffen · <b>e → ie</b>: lesen, sehen · <b>a → ä / au → äu</b>: fahren, schlafen, tragen, laufen.",
          table: { head: ["Person", "sprechen", "lesen", "fahren", "nehmen"], rows: [["ich", "spreche", "lese", "fahre", "nehme"], ["du", "sprichst", "liest", "fährst", "nimmst"], ["er / sie / es", "spricht", "liest", "fährt", "nimmt"], ["wir", "sprechen", "lesen", "fahren", "nehmen"], ["ihr", "sprecht", "lest", "fahrt", "nehmt"], ["sie / Sie", "sprechen", "lesen", "fahren", "nehmen"]] } },
        { h: "Special verbs", p: "<b>nehmen</b> also changes consonants: du ni<b>mm</b>st. <b>essen</b>: du isst, er isst. <b>wissen</b> (to know a fact) is irregular in the whole singular: ich weiß, du weißt, er weiß.",
          examples: [["Sprichst du Englisch?", "Do you speak English?"], ["Er isst gern Pizza.", "He likes eating pizza."], ["Was nimmst du?", "What are you having?"], ["Sie fährt mit dem Bus.", "She takes the bus."], ["Ich weiß es nicht.", "I don't know."]] }
      ],
      mistakes: [["Ich spreche → ich sprichst", "ich spreche", "The ich-form never changes the vowel."], ["Wir fähren.", "Wir fahren.", "Plural forms keep the original vowel."], ["Du nehmst.", "Du nimmst.", "nehmen changes to nimm-."]],
      tip: "When you learn a new verb, learn three forms: <i>fahren – du fährst – er fährt</i>.",
      practice: { gaps: "vokalwechsel", table: "vokalwechsel" }
    },
    {
      id: "satzbau", icon: "🧱", level: "A1", title: "Satzbau: Verb auf Position 2",
      summary: "The conjugated verb is the anchor of a German sentence. In statements and W-questions it is always the <b>second element</b>.",
      sections: [
        { h: "Statements", p: "Position 1 can be the subject, a time, a place or an object — but the verb stays in position 2. If something else comes first, the subject moves <b>behind</b> the verb.",
          table: { head: ["Position 1", "Position 2 (Verb)", "Rest"], rows: [["Ich", "lerne", "heute Deutsch."], ["Heute", "lerne", "ich Deutsch."], ["Deutsch", "lerne", "ich heute."], ["Am Montag", "habe", "ich Zeit."]] } },
        { h: "Questions", p: "<b>W-questions</b>: question word + verb + subject. <b>Yes/no questions</b>: the verb comes first.",
          table: { head: ["Type", "Example", "English"], rows: [["W-Frage", "Wo wohnst du?", "Where do you live?"], ["W-Frage", "Was machst du am Wochenende?", "What are you doing at the weekend?"], ["Ja/Nein-Frage", "Wohnst du in Haifa?", "Do you live in Haifa?"], ["Ja/Nein-Frage", "Hast du heute Zeit?", "Do you have time today?"]] } },
        { h: "The verb bracket (Satzklammer)", p: "When a sentence has two verb parts, the conjugated part stays in position 2 and the second part goes to the <b>very end</b>: modal verb + infinitive, separable verb + prefix, haben/sein + participle.",
          examples: [["Ich muss heute arbeiten.", "I have to work today."], ["Ich stehe um sieben Uhr auf.", "I get up at seven."], ["Ich habe gestern Deutsch gelernt.", "I learned German yesterday."]] },
        { h: "The W-words", p: "<b>wer</b> who · <b>was</b> what · <b>wo</b> where · <b>woher</b> where from · <b>wohin</b> where to · <b>wann</b> when · <b>wie</b> how · <b>wie viel</b> how much · <b>wie alt</b> how old · <b>warum</b> why · <b>welche/r/s</b> which." }
      ],
      mistakes: [["Heute ich lerne Deutsch.", "Heute lerne ich Deutsch.", "Verb in position 2 — the subject moves behind it."], ["Wo du wohnst?", "Wo wohnst du?", "In questions the verb comes before the subject."], ["Ich muss arbeiten heute.", "Ich muss heute arbeiten.", "The infinitive closes the sentence."]],
      tip: "Count the <i>elements</i>, not the words: <i>Am Montag</i> is one element, so the verb comes right after it.",
      practice: { gaps: "w-fragen" }
    },
    {
      id: "artikel", icon: "🏷️", level: "A1", title: "Artikel: der, die, das & ein, kein",
      summary: "Every noun has a gender: <b>der</b> (masculine), <b>die</b> (feminine) or <b>das</b> (neuter). In the plural it is always <b>die</b>. Always learn a noun together with its article.",
      sections: [
        { h: "Definite and indefinite articles (Nominativ)", p: "<b>der/die/das</b> = <i>the</i>. <b>ein/eine</b> = <i>a</i>. <b>kein/keine</b> = <i>no / not a</i>. There is no plural of <i>ein</i> — you just use the noun: <i>Kinder</i>.",
          table: { head: ["", "maskulin", "feminin", "neutral", "Plural"], rows: [["bestimmt", "der Tisch", "die Lampe", "das Buch", "die Bücher"], ["unbestimmt", "ein Tisch", "eine Lampe", "ein Buch", "– Bücher"], ["negativ", "kein Tisch", "keine Lampe", "kein Buch", "keine Bücher"]] } },
        { h: "Clues for the gender", p: "These endings are reliable helpers: <b>die</b>: -ung, -heit, -keit, -schaft, -tion, -tät, most nouns in -e (die Lampe) · <b>das</b>: -chen, -lein, -um, -ment · <b>der</b>: days, months, seasons, -er for people (der Lehrer), -ling, -ismus. In compound nouns, the <b>last</b> word decides: das Haus + die Tür → <b>die</b> Haustür.",
          examples: [["die Wohnung, die Freiheit, die Information", "feminine endings"], ["das Mädchen, das Brötchen, das Museum", "neuter endings"], ["der Montag, der Mai, der Sommer", "days, months and seasons are masculine"]] },
        { h: "Plural forms", p: "There are five main plural patterns: <b>-e</b> (der Tag → die Tage), <b>-¨e</b> (die Stadt → die Städte), <b>-er / -¨er</b> (das Kind → die Kinder, das Buch → die Bücher), <b>-(e)n</b> (die Frau → die Frauen), <b>-s</b> (das Auto → die Autos), and no ending (der Lehrer → die Lehrer). Learn the plural with the noun." }
      ],
      mistakes: [["Das ist ein Lampe.", "Das ist eine Lampe.", "die-nouns take eine."], ["Ich habe nicht Auto.", "Ich habe kein Auto.", "Negate a noun with kein, not nicht."], ["die Mädchen (singular)", "das Mädchen", "-chen is always neuter."]],
      tip: "Use colours on your flashcards: der = blue, die = red, das = green. The Karten section does this for you.",
      practice: { gaps: "nominativ", table: "artikel-def", artikel: true }
    },
    {
      id: "akkusativ", icon: "🎯", level: "A1", title: "Nominative & accusative",
      summary: "The <b>subject</b> (who does it?) is in the Nominativ. The <b>direct object</b> (whom/what?) is in the Akkusativ. Good news: only <b>masculine</b> words change.",
      sections: [
        { h: "Only der → den", p: "In the Akkusativ, masculine <b>der → den</b>, <b>ein → einen</b>, <b>kein → keinen</b>, <b>mein → meinen</b>. Feminine, neuter and plural stay exactly the same as in the Nominativ.",
          table: { head: ["", "maskulin", "feminin", "neutral", "Plural"], rows: [["Nominativ", "der / ein / kein", "die / eine / keine", "das / ein / kein", "die / – / keine"], ["Akkusativ", "<b>den / einen / keinen</b>", "die / eine / keine", "das / ein / kein", "die / – / keine"]] } },
        { h: "Find the Akkusativ", p: "Ask <b>Wen?</b> or <b>Was?</b> after the verb: <i>Ich kaufe … was? → einen Apfel</i>. Very common Akkusativ verbs: <b>haben, brauchen, kaufen, möchten, nehmen, sehen, suchen, besuchen, essen, trinken, kennen, lieben</b> and <b>es gibt</b>.",
          examples: [["Der Mann kauft einen Apfel.", "The man buys an apple."], ["Ich habe einen Bruder und eine Schwester.", "I have a brother and a sister."], ["Ich möchte einen Kaffee, bitte.", "I'd like a coffee, please."], ["Es gibt hier keinen Supermarkt.", "There's no supermarket here."], ["Ich besuche meinen Vater.", "I'm visiting my father."]] },
        { h: "Pronouns in the Akkusativ", p: "Pronouns change too: ich → <b>mich</b>, du → <b>dich</b>, er → <b>ihn</b>, sie → sie, es → es, wir → <b>uns</b>, ihr → <b>euch</b>, sie/Sie → sie/Sie.",
          examples: [["Ich liebe dich.", "I love you."], ["Kennst du ihn?", "Do you know him?"], ["Ich rufe Sie morgen an.", "I'll call you tomorrow."]] },
        { h: "Watch out: sein", p: "After <b>sein</b> and <b>heißen</b> there is no object — both sides are Nominativ: <i>Das ist <b>der</b> Mann. Er ist <b>mein</b> Bruder.</i>" }
      ],
      mistakes: [["Ich habe ein Bruder.", "Ich habe einen Bruder.", "Bruder is masculine and the object of haben."], ["Ich möchte einen Cola.", "Ich möchte eine Cola.", "Only masculine nouns change: die Cola → eine Cola."], ["Das ist meinen Bruder.", "Das ist mein Bruder.", "After sein: Nominativ."]],
      tip: "Say <i>einen</i> with a little stress at first: <i>Ich möchte EINEN Kaffee</i> — it trains your ear.",
      practice: { gaps: "akkusativ", table: "artikel-ein" }
    },
    {
      id: "dativ", icon: "🎁", level: "A1", title: "Dativ: mit, bei, zu & mir, dir",
      summary: "At A1 you mostly meet the Dativ after certain <b>prepositions</b> and in fixed phrases like <i>Wie geht es dir?</i>",
      sections: [
        { h: "The Dativ forms", p: "Every gender changes. Plural nouns also get an extra <b>-n</b>: mit den Kinder<b>n</b>.",
          table: { head: ["", "maskulin", "feminin", "neutral", "Plural"], rows: [["Nominativ", "der / ein", "die / eine", "das / ein", "die / –"], ["Dativ", "<b>dem / einem</b>", "<b>der / einer</b>", "<b>dem / einem</b>", "<b>den / – (+n)</b>"]] } },
        { h: "Prepositions that always take the Dativ", p: "<b>aus, bei, mit, nach, seit, von, zu</b> (+ gegenüber). Memory trick: <i>aus-bei-mit-nach-seit-von-zu</i> sounds like a little rhyme — say it ten times. Short forms: zu + dem = <b>zum</b>, zu + der = <b>zur</b>, bei + dem = <b>beim</b>, von + dem = <b>vom</b>.",
          examples: [["Ich fahre mit dem Bus.", "I go by bus."], ["Ich gehe zum Arzt.", "I'm going to the doctor."], ["Wir gehen zur Post.", "We're going to the post office."], ["Ich wohne bei meiner Mutter.", "I live with my mother."], ["Ich lerne seit einem Jahr Deutsch.", "I've been learning German for a year."]] },
        { h: "Dativ pronouns", p: "ich → <b>mir</b>, du → <b>dir</b>, er/es → <b>ihm</b>, sie → <b>ihr</b>, wir → <b>uns</b>, ihr → <b>euch</b>, sie → <b>ihnen</b>, Sie → <b>Ihnen</b>. Verbs like <b>helfen, danken, gefallen, gehören, schmecken</b> and <b>Wie geht es …?</b> use the Dativ.",
          examples: [["Wie geht es Ihnen?", "How are you? (formal)"], ["Kannst du mir helfen?", "Can you help me?"], ["Das Kleid gefällt mir.", "I like the dress."], ["Gehört das Buch dir?", "Does the book belong to you?"]] },
        { h: "Wo? or Wohin? (two-way prepositions)", p: "<b>in, an, auf, neben, hinter, vor, über, unter, zwischen</b>: <b>Wo?</b> (location) → Dativ: <i>Ich bin <b>in der</b> Küche.</i> <b>Wohin?</b> (movement to a goal) → Akkusativ: <i>Ich gehe <b>in die</b> Küche.</i>" }
      ],
      mistakes: [["Ich fahre mit der Bus.", "Ich fahre mit dem Bus.", "der Bus is masculine → dem."], ["Wie geht es du?", "Wie geht es dir?", "Fixed phrase with Dativ."], ["Ich helfe dich.", "Ich helfe dir.", "helfen takes the Dativ."]],
      tip: "Learn chunks, not rules: <i>mit dem Bus, mit der Bahn, zum Arzt, zur Arbeit, nach Hause, zu Hause</i>.",
      practice: { gaps: "dativ", table: "pronomen" }
    },
    {
      id: "possessiv", icon: "👪", level: "A1", title: "Possessivartikel: mein, dein, sein …",
      summary: "Possessive articles (my, your, his …) take the <b>same endings as ein/kein</b>.",
      sections: [
        { h: "Who owns it?", p: "The stem shows the owner. The ending shows the gender and case of the <i>thing</i> that is owned.",
          table: { head: ["Person", "Possessiv", "English"], rows: [["ich", "mein", "my"], ["du", "dein", "your"], ["er / es", "sein", "his / its"], ["sie", "ihr", "her"], ["wir", "unser", "our"], ["ihr", "euer (eure)", "your (pl.)"], ["sie", "ihr", "their"], ["Sie", "Ihr", "your (formal)"]] } },
        { h: "The endings", p: "Exactly like <i>kein</i>: no ending for masculine/neuter Nominativ, <b>-e</b> for feminine and plural, <b>-en</b> for masculine Akkusativ.",
          table: { head: ["", "maskulin", "feminin", "neutral", "Plural"], rows: [["Nominativ", "mein Bruder", "meine Schwester", "mein Kind", "meine Eltern"], ["Akkusativ", "<b>meinen</b> Bruder", "meine Schwester", "mein Kind", "meine Eltern"], ["Dativ", "meinem Bruder", "meiner Schwester", "meinem Kind", "meinen Eltern"]] },
          examples: [["Das ist meine Familie.", "This is my family."], ["Wie heißt dein Bruder?", "What's your brother's name?"], ["Maya und ihr Mann wohnen in Berlin.", "Maya and her husband live in Berlin."], ["Wie ist Ihr Name?", "What is your name? (formal)"]] }
      ],
      mistakes: [["Das ist mein Schwester.", "Das ist meine Schwester.", "die Schwester → meine."], ["Maya und sein Mann", "Maya und ihr Mann", "Maya is female → ihr."], ["Ich besuche mein Vater.", "Ich besuche meinen Vater.", "Masculine Akkusativ → meinen."]],
      tip: "<i>sein</i> or <i>ihr</i>? Look at the owner: a man → sein, a woman → ihr.",
      practice: { gaps: "possessiv", table: "possessiv" }
    },
    {
      id: "negation", icon: "🚫", level: "A1", title: "Verneinung: nicht oder kein?",
      summary: "<b>kein</b> negates a noun that would have <i>ein</i> or no article. <b>nicht</b> negates everything else: verbs, adjectives, names, nouns with der/die/das.",
      sections: [
        { h: "Quick decision", p: "Ask: is there an <i>ein/eine</i> or no article in front of the noun? → <b>kein</b>. Otherwise → <b>nicht</b>.",
          table: { head: ["Positive", "Negative", "Why"], rows: [["Ich habe ein Auto.", "Ich habe <b>kein</b> Auto.", "ein + noun"], ["Ich habe Zeit.", "Ich habe <b>keine</b> Zeit.", "noun without article"], ["Ich arbeite heute.", "Ich arbeite heute <b>nicht</b>.", "verb"], ["Das ist richtig.", "Das ist <b>nicht</b> richtig.", "adjective"], ["Das ist der Bus.", "Das ist <b>nicht</b> der Bus.", "der/die/das"]] } },
        { h: "Where does nicht go?", p: "Usually at the end of the sentence (<i>Ich verstehe das nicht.</i>) but <b>before</b> adjectives, places and the second verb part: <i>Ich komme nicht aus Berlin. Ich kann heute nicht kommen.</i>" },
        { h: "Answering with doch", p: "To contradict a negative question, answer <b>Doch!</b> instead of Ja: <i>Hast du keine Zeit? – Doch, ich habe Zeit.</i>" }
      ],
      mistakes: [["Ich habe nicht Geschwister.", "Ich habe keine Geschwister.", "Noun without article → kein."], ["Ich nicht verstehe.", "Ich verstehe nicht.", "The verb stays in position 2."], ["Das ist kein richtig.", "Das ist nicht richtig.", "Adjective → nicht."]],
      practice: { gaps: "negation", table: "artikel-kein" }
    },
    {
      id: "modalverben", icon: "💪", level: "A1", title: "Modal verbs",
      summary: "können, müssen, wollen, dürfen, sollen and möchten change the meaning of another verb. The modal is in position 2, the <b>infinitive goes to the end</b>.",
      sections: [
        { h: "Meaning", p: "<b>können</b> can / be able · <b>müssen</b> must / have to · <b>wollen</b> want · <b>dürfen</b> may / be allowed · <b>sollen</b> should (someone else wants it) · <b>möchten</b> would like (polite).",
          table: { head: ["Person", "können", "müssen", "wollen", "dürfen", "möchten"], rows: [["ich", "kann", "muss", "will", "darf", "möchte"], ["du", "kannst", "musst", "willst", "darfst", "möchtest"], ["er / sie / es", "kann", "muss", "will", "darf", "möchte"], ["wir", "können", "müssen", "wollen", "dürfen", "möchten"], ["ihr", "könnt", "müsst", "wollt", "dürft", "möchtet"], ["sie / Sie", "können", "müssen", "wollen", "dürfen", "möchten"]] } },
        { h: "Two rules to remember", p: "1. <b>ich</b> and <b>er/sie/es</b> have the same form and no ending: ich kann, er kann. 2. The second verb is an <b>infinitive at the end</b>.",
          examples: [["Ich kann gut kochen.", "I can cook well."], ["Wir müssen jetzt gehen.", "We have to go now."], ["Kannst du mir helfen?", "Can you help me?"], ["Hier darf man nicht rauchen.", "You're not allowed to smoke here."], ["Ich möchte einen Termin machen.", "I'd like to make an appointment."]] }
      ],
      mistakes: [["Er kannt schwimmen.", "Er kann schwimmen.", "No ending in the er-form."], ["Ich muss arbeite.", "Ich muss arbeiten.", "The second verb stays an infinitive."], ["Ich will einen Kaffee. (in a café)", "Ich möchte einen Kaffee.", "will sounds demanding; möchte is polite."]],
      tip: "<i>Ich möchte …</i> and <i>Können Sie …?</i> are the two most useful phrases in the A1 speaking exam.",
      practice: { gaps: "modalverben", table: "modalverben" }
    },
    {
      id: "trennbar", icon: "✂️", level: "A1", title: "Trennbare Verben",
      summary: "Verbs like <b>auf</b>stehen or <b>ein</b>kaufen split in a main clause: the prefix jumps to the <b>end</b>.",
      sections: [
        { h: "How they split", p: "Common separable prefixes: <b>ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, fern-, zurück-</b>. The prefix is stressed: <i>AUFstehen, EINkaufen</i>.",
          table: { head: ["Infinitiv", "Satz"], rows: [["aufstehen", "Ich <b>stehe</b> um sieben Uhr <b>auf</b>."], ["einkaufen", "Wir <b>kaufen</b> im Supermarkt <b>ein</b>."], ["anrufen", "<b>Rufst</b> du mich morgen <b>an</b>?"], ["fernsehen", "Er <b>sieht</b> am Abend <b>fern</b>."], ["mitkommen", "<b>Kommst</b> du <b>mit</b>?"]] } },
        { h: "When they stay together", p: "With a modal verb the separable verb is an infinitive at the end — so it stays in one piece: <i>Ich muss früh <b>aufstehen</b>.</i> In the Perfekt, <b>ge</b> goes in the middle: auf<b>ge</b>standen, ein<b>ge</b>kauft, an<b>ge</b>rufen.",
          examples: [["Ich muss morgen früh aufstehen.", "I have to get up early tomorrow."], ["Ich habe gestern eingekauft.", "I went shopping yesterday."], ["Wann kommt der Zug an?", "When does the train arrive?"]] }
      ],
      mistakes: [["Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "The prefix goes to the end."], ["Ich muss früh stehe auf.", "Ich muss früh aufstehen.", "With a modal: infinitive in one piece."], ["Ich habe geeinkauft.", "Ich habe eingekauft.", "ge- goes between prefix and stem."]],
      practice: { gaps: "trennbar" }
    },
    {
      id: "praepositionen", icon: "🧭", level: "A1", title: "Präpositionen: Zeit & Ort",
      summary: "Time and place prepositions are best learned as <b>fixed chunks</b>: um 8 Uhr, am Montag, im Mai, nach Berlin, zu Hause.",
      sections: [
        { h: "Time", table: { head: ["Präposition", "Wofür?", "Beispiel"], rows: [["um", "clock time", "um acht Uhr"], ["am", "days, dates, parts of the day", "am Montag, am 3. Mai, am Abend"], ["in der", "night", "in der Nacht"], ["im", "months, seasons", "im Mai, im Sommer"], ["von … bis", "from … to", "von neun bis fünf"], ["ab", "from (starting)", "ab Montag"], ["vor / nach", "before / after", "vor dem Essen, nach der Arbeit"]] },
          p: "Exception to remember: <b>am</b> Abend, <b>am</b> Morgen — but <b>in der</b> Nacht. And <b>am</b> Wochenende." },
        { h: "Place: where from, where, where to", table: { head: ["Frage", "Präposition", "Beispiel"], rows: [["Woher?", "aus", "Ich komme aus Israel / aus der Türkei."], ["Wo?", "in", "Ich wohne in Haifa / in der Schweiz."], ["Wo?", "bei", "Ich bin bei Anna / beim Arzt."], ["Wohin? (cities, countries)", "nach", "Ich fahre nach Berlin."], ["Wohin? (people, places)", "zu", "Ich gehe zum Arzt / zur Bank / zu Maya."], ["Wohin? (buildings, with article)", "in", "Ich gehe in die Stadt / ins Kino."]] },
          p: "Home is special: <b>zu Hause</b> = at home (Wo?), <b>nach Hause</b> = (to) home (Wohin?)." }
      ],
      mistakes: [["Ich komme um Montag.", "Ich komme am Montag.", "Days → am."], ["Ich fahre zu Berlin.", "Ich fahre nach Berlin.", "Cities and countries without article → nach."], ["Ich bin nach Hause.", "Ich bin zu Hause.", "Location → zu Hause."]],
      tip: "Make two lists in your notebook: <i>Wo?</i> chunks and <i>Wohin?</i> chunks.",
      practice: { gaps: "praepositionen" }
    },
    {
      id: "perfekt", icon: "🕰️", level: "A1", title: "Perfekt: über gestern sprechen",
      summary: "To talk about the past in conversation, use <b>haben</b> or <b>sein</b> (position 2) + the <b>Partizip II</b> (at the end).",
      sections: [
        { h: "Building the Partizip II", table: { head: ["Type", "Rule", "Beispiele"], rows: [["regular", "ge- + Stamm + -t", "machen → gemacht, lernen → gelernt, arbeiten → gearbeitet"], ["irregular", "ge- + (new vowel) + -en", "essen → gegessen, schlafen → geschlafen, trinken → getrunken"], ["separable", "prefix + ge + …", "einkaufen → eingekauft, aufstehen → aufgestanden"], ["no ge-", "be-, ver-, -ieren", "bezahlen → bezahlt, verstehen → verstanden, telefonieren → telefoniert"]] } },
        { h: "haben or sein?", p: "Most verbs use <b>haben</b>. Use <b>sein</b> for movement from A to B (gehen, fahren, fliegen, kommen, laufen), change of state (aufstehen, einschlafen) and the verbs <b>sein</b> and <b>bleiben</b>.",
          examples: [["Ich habe gestern Fußball gespielt.", "I played football yesterday."], ["Was hast du am Wochenende gemacht?", "What did you do at the weekend?"], ["Wir sind nach Berlin gefahren.", "We went to Berlin."], ["Ich bin um sieben Uhr aufgestanden.", "I got up at seven."], ["Sie ist zu Hause geblieben.", "She stayed at home."]] },
        { h: "war and hatte", p: "For <b>sein</b> and <b>haben</b>, Germans prefer the Präteritum even when speaking: ich <b>war</b>, du <b>warst</b>, er <b>war</b>, wir <b>waren</b> · ich <b>hatte</b>, du <b>hattest</b>, er <b>hatte</b>, wir <b>hatten</b>.",
          examples: [["Gestern war ich am Meer.", "Yesterday I was at the sea."], ["Ich hatte keine Zeit.", "I didn't have time."]] }
      ],
      mistakes: [["Ich habe nach Berlin gefahren.", "Ich bin nach Berlin gefahren.", "Movement → sein."], ["Ich habe gemacht das.", "Ich habe das gemacht.", "Participle at the end."], ["Ich habe gebezahlt.", "Ich habe bezahlt.", "be- verbs take no ge-."]],
      tip: "Learn new verbs in three parts: <i>fahren – fährt – ist gefahren</i>. The flashcard deck “Perfect tense: past participles” trains exactly this.",
      practice: { gaps: "perfekt", table: "perfekt" }
    },
    {
      id: "imperativ", icon: "📣", level: "A1", title: "Imperativ: Bitten & Anweisungen",
      summary: "Commands put the verb <b>first</b>. Add <b>bitte</b> to sound polite.",
      sections: [
        { h: "Three forms", table: { head: ["Form", "How", "kommen", "nehmen", "aufstehen"], rows: [["du", "du-form without -st (and without du)", "Komm!", "Nimm!", "Steh auf!"], ["ihr", "ihr-form without ihr", "Kommt!", "Nehmt!", "Steht auf!"], ["Sie", "Verb + Sie", "Kommen Sie!", "Nehmen Sie!", "Stehen Sie auf!"]] },
          p: "The du-form keeps the e → i change (<i>Nimm! Lies! Sprich!</i>) but <b>not</b> the a → ä change (<i>Fahr!</i>, not <s>Fähr!</s>). <b>sein</b>: Sei! Seid! Seien Sie!" },
        { h: "Polite requests", p: "In the A1 exam (Sprechen Teil 3) you make requests. The friendliest way is a question with a modal: <i>Können Sie bitte das Fenster öffnen?</i> The imperative with bitte is also fine: <i>Öffnen Sie bitte das Fenster.</i>",
          examples: [["Komm bitte her!", "Please come here!"], ["Nehmen Sie den Bus Nummer 5.", "Take bus number 5."], ["Sprechen Sie bitte langsam.", "Please speak slowly."], ["Können Sie mir bitte helfen?", "Could you please help me?"]] }
      ],
      mistakes: [["Kommst bitte!", "Komm bitte!", "Drop -st in the du-form."], ["Fähr langsam!", "Fahr langsam!", "No umlaut in the du-imperative."], ["Sie kommen bitte!", "Kommen Sie bitte!", "Verb first."]],
      practice: { gaps: "imperativ", table: "imperativ" }
    },
    {
      id: "zahlen-zeit", icon: "🕗", level: "A1", title: "Zahlen, Uhrzeit & Datum",
      summary: "Numbers appear in every part of the A1 exam: prices, phone numbers, times, dates. German says the <b>ones before the tens</b>.",
      sections: [
        { h: "Numbers", p: "21 = <b>einundzwanzig</b> (one-and-twenty), 35 = fünfunddreißig, 99 = neunundneunzig. Irregular: <b>sechzehn, siebzehn, sechzig, siebzig, dreißig</b>. 100 = hundert, 1000 = tausend. Prices: 2,50 € = <i>zwei Euro fünfzig</i>.",
          examples: [["einundzwanzig", "21"], ["siebenundvierzig", "47"], ["dreihundertzwölf", "312"], ["Das kostet neun Euro neunzig.", "That costs €9.90."]] },
        { h: "Telling the time", table: { head: ["Uhr", "offiziell", "informell"], rows: [["8:00", "acht Uhr", "acht"], ["8:15", "acht Uhr fünfzehn", "Viertel nach acht"], ["8:30", "acht Uhr dreißig", "<b>halb neun</b>"], ["8:45", "acht Uhr fünfundvierzig", "Viertel vor neun"], ["8:50", "acht Uhr fünfzig", "zehn vor neun"], ["20:00", "zwanzig Uhr", "acht (abends)"]] },
          p: "Careful: <b>halb neun</b> means <i>half <u>to</u> nine</i> = 8:30! Ask: <i>Wie spät ist es?</i> / <i>Wann …? – Um …</i>" },
        { h: "Dates", p: "Ordinal numbers: 1–19 add <b>-te</b>, 20+ add <b>-ste</b>. Irregular: der <b>erste</b>, <b>dritte</b>, <b>siebte</b>. With <i>am</i> the ending is <b>-en</b>: <i>am ersten Mai, am zwanzigsten Juni</i>.",
          examples: [["Heute ist der dritte Oktober.", "Today is the 3rd of October."], ["Mein Geburtstag ist am siebten Juli.", "My birthday is on the 7th of July."], ["Ich bin am 12.03.1994 geboren.", "I was born on 12 March 1994."]] }
      ],
      mistakes: [["zwanzigeins", "einundzwanzig", "Ones before tens."], ["halb neun = 9:30", "halb neun = 8:30", "halb points to the next hour."], ["am drei Mai", "am dritten Mai", "Dates use ordinals."]],
      practice: { gaps: "zahlen" }
    },
    {
      id: "konnektoren", icon: "🔗", level: "A1", title: "Sätze verbinden: und, aber, oder, denn",
      summary: "<b>und, aber, oder, denn</b> connect two main clauses <b>without</b> changing the word order. They stand at “position 0”.",
      sections: [
        { h: "Position 0 connectors", table: { head: ["Konnektor", "Bedeutung", "Beispiel"], rows: [["und", "and", "Ich wohne in Haifa und ich arbeite in Tel Aviv."], ["aber", "but", "Ich trinke Kaffee, aber ich trinke keinen Tee."], ["oder", "or", "Kommst du heute oder kommst du morgen?"], ["denn", "because", "Ich lerne Deutsch, denn ich will in Berlin arbeiten."]] } },
        { h: "Coming next (A2): deshalb, weil, dass", p: "<b>deshalb</b> counts as position 1 → verb right after it: <i>Ich bin krank, <b>deshalb bleibe</b> ich zu Hause.</i> After <b>weil</b> and <b>dass</b> the verb goes to the <b>end</b>: <i>…, weil ich krank <b>bin</b>.</i>" },
        { h: "Sequence words", p: "To tell a story or describe your day: <b>zuerst</b> – <b>dann</b> – <b>danach</b> – <b>zum Schluss</b>. These are position 1, so the verb follows directly: <i>Dann <b>frühstücke</b> ich.</i>" }
      ],
      mistakes: [["Ich gehe, denn bin ich müde.", "Ich gehe, denn ich bin müde.", "denn does not move the verb."], ["Dann ich frühstücke.", "Dann frühstücke ich.", "dann is position 1 → verb next."], ["…, weil ich bin krank.", "…, weil ich krank bin.", "weil sends the verb to the end."]],
      practice: { gaps: "konnektoren" }
    }
  ];

  /* ---------------------------------------------------------------- Gap texts (typed) */
  const gaps = [
    { id: "sein-haben", title: "sein & haben", icon: "🙋", items: [
      ["Ich [bin] Motia.", "sein"], ["Du [bist] sehr nett.", "sein"], ["Wir [haben] heute Zeit.", "haben"], ["[Hast] du Geschwister?", "haben"],
      ["Er [ist] Lehrer von Beruf.", "sein"], ["Ihr [seid] zu spät!", "sein"], ["Meine Eltern [haben] zwei Autos.", "haben"], ["[Sind] Sie Frau Müller?", "sein"],
      ["Maya [hat] am Montag Geburtstag.", "haben"], ["Ihr [habt] ein schönes Haus.", "haben"], ["Ich [habe] Hunger.", "haben"], ["Das [ist] meine Schwester.", "sein"]
    ]},
    { id: "praesens", title: "Präsens (regelmäßig)", icon: "🔁", items: [
      ["Ich [wohne] in Haifa.", "wohnen"], ["Wo [wohnst] du?", "wohnen"], ["Er [lernt] Deutsch.", "lernen"], ["Wir [kommen] aus Israel.", "kommen"],
      ["Ihr [spielt] gern Fußball.", "spielen"], ["Was [machst] du am Wochenende?", "machen"], ["Sie [arbeitet] in Tel Aviv.", "arbeiten"], ["Du [arbeitest] sehr viel.", "arbeiten"],
      ["Wie [heißt] du?", "heißen"], ["Wann [beginnt] der Kurs?", "beginnen"], ["Wir [kaufen] Brot und Käse.", "kaufen"], ["[Trinkst] du gern Kaffee?", "trinken"]
    ]},
    { id: "vokalwechsel", title: "Verbs with a vowel change", icon: "🔀", items: [
      ["[Sprichst] du Englisch?", "sprechen"], ["Er [isst] gern Pizza.", "essen"], ["Sie [liest] ein Buch.", "lesen"], ["Du [fährst] mit dem Bus.", "fahren"],
      ["Was [nimmst] du?", "nehmen"], ["Mein Bruder [schläft] lange.", "schlafen"], ["[Siehst] du das Haus?", "sehen"], ["Sie [gibt] mir das Buch.", "geben"],
      ["Er [läuft] jeden Morgen.", "laufen"], ["Ich [weiß] das nicht.", "wissen"], ["Anna [hilft] ihrer Mutter.", "helfen"], ["Wir [sprechen] Deutsch.", "sprechen"]
    ]},
    { id: "nominativ", title: "Artikel im Nominativ", icon: "🏷️", items: [
      ["Das ist [ein] Tisch.", "ein / eine"], ["Das ist [eine] Lampe.", "ein / eine"], ["[Die] Wohnung ist groß.", "der / die / das"], ["[Das] Kind spielt im Garten.", "der / die / das"],
      ["[Der] Kaffee ist heiß.", "der / die / das"], ["Hier ist [ein] Buch.", "ein / eine"], ["[Die] Kinder sind im Park.", "der / die / das · Plural"], ["Wo ist [der] Bahnhof?", "der / die / das"],
      ["[Das] Zimmer ist klein.", "der / die / das"], ["Das ist [eine] gute Idee.", "ein / eine"], ["[Die] Straße ist lang.", "der / die / das"], ["[Das] Brötchen ist frisch.", "der / die / das"]
    ]},
    { id: "akkusativ", title: "Akkusativ", icon: "🎯", items: [
      ["Ich habe [einen] Bruder.", "ein"], ["Ich kaufe [den] Tisch.", "der"], ["Wir brauchen [eine] Wohnung.", "ein"], ["Ich möchte [einen] Kaffee, bitte.", "ein"],
      ["Er sieht [den] Mann.", "der"], ["Hast du [ein] Auto?", "ein"], ["Ich habe [keinen] Hunger.", "kein"], ["Sie hat [keine] Zeit.", "kein"],
      ["Ich besuche [meinen] Vater.", "mein"], ["Kennst du [meine] Schwester?", "mein"], ["Es gibt hier [einen] Supermarkt.", "ein"], ["Ich liebe [dich].", "du"],
      ["Ich rufe [ihn] morgen an.", "er"], ["Nimmst du [den] Bus?", "der"]
    ]},
    { id: "dativ", title: "Dativ", icon: "🎁", items: [
      ["Ich fahre mit [dem] Bus.", "der"], ["Ich wohne bei [meiner] Mutter.", "meine"], ["Er kommt aus [der] Türkei.", "die"], ["Ich gehe [zum] Arzt.", "zu + der Arzt"],
      ["Wir gehen [zur] Post.", "zu + die Post"], ["Das Buch gehört [mir].", "ich"], ["Kannst du [mir] helfen?", "ich"], ["Wie geht es [dir]?", "du"],
      ["Ich helfe [ihm].", "er"], ["Ich spiele mit [den] Kindern.", "die Kinder"], ["Nach [dem] Essen trinke ich Tee.", "das Essen"], ["Ich lerne seit [einem] Jahr Deutsch.", "ein Jahr"],
      ["Wie geht es [Ihnen]?", "Sie"], ["Ich bin in [der] Küche.", "die Küche · Wo?"]
    ]},
    { id: "possessiv", title: "Possessivartikel", icon: "👪", items: [
      ["Das ist [mein] Bruder.", "ich"], ["Ist das [dein] Handy?", "du"], ["Maya und [ihr] Mann wohnen in Berlin.", "sie (Maya)"], ["Tim und [seine] Frau kommen heute.", "er (Tim)"],
      ["Wir besuchen [unsere] Eltern.", "wir"], ["Wie ist [Ihr] Name?", "Sie"], ["Wo ist [eure] Wohnung?", "ihr"], ["Das ist [unser] Haus.", "wir"],
      ["Ich suche [meinen] Schlüssel.", "ich · Akkusativ"], ["Tim, wie heißt [deine] Schwester?", "du"], ["Er wohnt bei [seinen] Eltern.", "er · Dativ Plural"]
    ]},
    { id: "negation", title: "nicht oder kein?", icon: "🚫", items: [
      ["Ich habe [kein] Auto.", "nicht / kein"], ["Ich arbeite heute [nicht].", "nicht / kein"], ["Das ist [nicht] richtig.", "nicht / kein"], ["Er hat [keine] Geschwister.", "nicht / kein"],
      ["Wir haben [keinen] Hund.", "nicht / kein"], ["Ich trinke [keinen] Kaffee.", "nicht / kein"], ["Sie kommt [nicht] aus Berlin.", "nicht / kein"], ["Das ist [kein] Problem.", "nicht / kein"],
      ["Ich verstehe das [nicht].", "nicht / kein"], ["Ich habe heute [keine] Zeit.", "nicht / kein"], ["Hast du keinen Hunger? – [Doch], ich habe Hunger.", "Ja / Nein / Doch"]
    ]},
    { id: "modalverben", title: "Modal verbs", icon: "💪", items: [
      ["Ich [kann] gut schwimmen.", "können"], ["[Kannst] du mir helfen?", "können"], ["Wir [müssen] jetzt gehen.", "müssen"], ["Er [muss] heute arbeiten.", "müssen"],
      ["Ich [möchte] einen Tee.", "möchten"], ["[Möchtest] du etwas trinken?", "möchten"], ["Hier [darf] man nicht rauchen.", "dürfen"], ["Sie [will] Ärztin werden.", "wollen"],
      ["[Wollt] ihr ins Kino gehen?", "wollen"], ["Du [sollst] mehr Wasser trinken.", "sollen"], ["Ich kann heute nicht [kommen].", "kommen"], ["Wir müssen morgen früh [aufstehen].", "aufstehen"]
    ]},
    { id: "trennbar", title: "Trennbare Verben", icon: "✂️", items: [
      ["Ich [stehe] um sieben Uhr [auf].", "aufstehen"], ["Wann [kommt] der Zug [an]?", "ankommen"], ["Wir [kaufen] im Supermarkt [ein].", "einkaufen"], ["[Rufst] du mich morgen [an]?", "anrufen"],
      ["Er [sieht] am Abend [fern].", "fernsehen"], ["Der Bus [fährt] um acht Uhr [ab].", "abfahren"], ["Ich [lade] dich zum Geburtstag [ein].", "einladen"], ["[Kommst] du [mit]?", "mitkommen"],
      ["Sie [macht] das Fenster [auf].", "aufmachen"], ["Ich möchte dich [einladen].", "einladen · mit Modalverb"]
    ]},
    { id: "perfekt", title: "Perfekt", icon: "🕰️", items: [
      ["Ich [habe] gestern Fußball [gespielt].", "spielen"], ["Wir [sind] nach Berlin [gefahren].", "fahren"], ["Was [hast] du am Wochenende [gemacht]?", "machen"], ["Er [hat] eine Pizza [gegessen].", "essen"],
      ["[Bist] du gestern ins Kino [gegangen]?", "gehen"], ["Sie [hat] bis zehn Uhr [geschlafen].", "schlafen"], ["Ich [bin] um sieben Uhr [aufgestanden].", "aufstehen"], ["Wir [haben] im Supermarkt [eingekauft].", "einkaufen"],
      ["Hast du die Rechnung [bezahlt]?", "bezahlen"], ["Ich habe das nicht [verstanden].", "verstehen"], ["Sie [ist] zu Hause [geblieben].", "bleiben"], ["Er hat mit seiner Mutter [telefoniert].", "telefonieren"],
      ["Gestern [war] ich am Meer.", "sein · Präteritum"], ["Ich [hatte] keine Zeit.", "haben · Präteritum"]
    ]},
    { id: "praepositionen", title: "Präpositionen: Zeit & Ort", icon: "🧭", items: [
      ["Der Kurs beginnt [um] neun Uhr.", "Uhrzeit"], ["Ich habe [am] Montag Zeit.", "Tag"], ["[Im] Sommer fahre ich ans Meer.", "Jahreszeit"], ["Mein Geburtstag ist [im] Mai.", "Monat"],
      ["Ich arbeite [von] neun [bis] fünf.", "from … to"], ["Ich komme [aus] Israel.", "Woher?"], ["Ich fahre [nach] Berlin.", "Wohin? · Stadt"], ["Ich wohne [in] Haifa.", "Wo?"],
      ["Ich gehe heute [zum] Arzt.", "Wohin? · Person"], ["Am Abend gehe ich [nach] Hause.", "Wohin?"], ["Ich bin heute [zu] Hause.", "Wo?"], ["Wir treffen uns [am] Wochenende.", "Wochenende"],
      ["[In] der Nacht schlafe ich.", "Nacht"]
    ]},
    { id: "w-fragen", title: "W-Fragen", icon: "❓", items: [
      ["[Wie] heißt du?", "— Ich heiße Motia."], ["[Woher] kommst du?", "— Aus Israel."], ["[Wo] wohnst du?", "— In Haifa."], ["[Wie] alt bist du?", "— Dreißig."],
      ["[Wann] beginnt der Film?", "— Um acht Uhr."], ["[Was] machst du gern?", "— Ich lese gern."], ["[Wer] ist das?", "— Das ist meine Schwester."], ["[Wohin] fährst du?", "— Nach München."],
      ["[Wie] viel kostet das?", "— Drei Euro."], ["[Warum] lernst du Deutsch?", "— Weil ich in Berlin arbeiten möchte."], ["[Welche] Sprachen sprichst du?", "— Hebräisch und Englisch."]
    ]},
    { id: "imperativ", title: "Imperative (commands)", icon: "📣", items: [
      ["[Komm] bitte her!", "kommen · du"], ["[Nimm] den Bus!", "nehmen · du"], ["[Lies] den Text!", "lesen · du"], ["[Kommen] Sie bitte herein!", "kommen · Sie"],
      ["[Wartet] hier!", "warten · ihr"], ["[Sei] bitte leise!", "sein · du"], ["[Sprechen] Sie bitte langsam!", "sprechen · Sie"], ["[Mach|Mache] das Fenster [auf]!", "aufmachen · du"],
      ["[Fahr|Fahre] vorsichtig!", "fahren · du"]
    ]},
    { id: "zahlen", title: "Zahlen & Uhrzeit", icon: "🕗", items: [
      ["21 = [einundzwanzig]", "Zahl"], ["35 = [fünfunddreißig]", "Zahl"], ["16 = [sechzehn]", "Zahl"], ["70 = [siebzig]", "Zahl"],
      ["8:30 = halb [neun]", "informell"], ["7:15 = Viertel [nach] sieben", "informell"], ["9:45 = Viertel [vor] zehn", "informell"], ["Mein Geburtstag ist am [ersten] Mai.", "1."],
      ["Heute ist der [dritte] Oktober.", "3."], ["Das kostet zwei Euro [fünfzig].", "2,50 €"]
    ]},
    { id: "konnektoren", title: "und, aber, oder, denn", icon: "🔗", items: [
      ["Ich trinke Kaffee, [aber] ich trinke keinen Tee.", "Kontrast"], ["Kommst du heute [oder] morgen?", "Alternative"], ["Ich lerne Deutsch, [denn] ich will in Berlin leben.", "Grund"], ["Ich wohne in Haifa [und] arbeite in Tel Aviv.", "Addition"],
      ["[Zuerst] frühstücke ich, dann gehe ich zur Arbeit.", "first"], ["Ich stehe auf. [Dann] dusche ich.", "then"], ["Ich bin krank, [deshalb] bleibe ich zu Hause.", "that's why"]
    ]}
  ];

  /* ---------------------------------------------------------------- Fill-in tables */
  const tables = [
    { id: "artikel-def", group: "Kasus", title: "der / die / das", note: "The definite article (the) in the nominative, accusative and dative.",
      head: ["", "maskulin", "feminin", "neutral", "Plural"], rows: [["Nominativ", "der", "die", "das", "die"], ["Akkusativ", "den", "die", "das", "die"], ["Dativ", "dem", "der", "dem", "den"]] },
    { id: "artikel-ein", group: "Kasus", title: "ein / eine", note: "The indefinite article (a / an). The plural has no “ein”.",
      head: ["", "maskulin", "feminin", "neutral"], rows: [["Nominativ", "ein", "eine", "ein"], ["Akkusativ", "einen", "eine", "ein"], ["Dativ", "einem", "einer", "einem"]] },
    { id: "artikel-kein", group: "Kasus", title: "kein / keine", note: "The negative article (no / not a) — same endings as ein, plus a plural.",
      head: ["", "maskulin", "feminin", "neutral", "Plural"], rows: [["Nominativ", "kein", "keine", "kein", "keine"], ["Akkusativ", "keinen", "keine", "kein", "keine"], ["Dativ", "keinem", "keiner", "keinem", "keinen"]] },
    { id: "possessiv", group: "Kasus", title: "mein / meine", note: "The possessive article (my) — same endings as kein.",
      head: ["", "maskulin", "feminin", "neutral", "Plural"], rows: [["Nominativ", "mein", "meine", "mein", "meine"], ["Akkusativ", "meinen", "meine", "mein", "meine"], ["Dativ", "meinem", "meiner", "meinem", "meinen"]] },
    { id: "possessiv-person", group: "Kasus", title: "Who owns it?", note: "Which possessive article matches each person? (nominative, masculine)",
      head: ["Person", "Possessiv"], rows: [["ich", "mein"], ["du", "dein"], ["er", "sein"], ["sie (she)", "ihr"], ["es", "sein"], ["wir", "unser"], ["ihr", "euer"], ["sie (they)", "ihr"], ["Sie", "Ihr"]] },
    { id: "pronomen", group: "Kasus", title: "Personal pronouns", note: "Nominative, accusative and dative.",
      head: ["", "Nominativ", "Akkusativ", "Dativ"], rows: [["I", "ich", "mich", "mir"], ["you", "du", "dich", "dir"], ["he", "er", "ihn", "ihm"], ["she", "sie", "sie", "ihr"], ["it", "es", "es", "ihm"], ["we", "wir", "uns", "uns"], ["you all", "ihr", "euch", "euch"], ["they", "sie", "sie", "ihnen"], ["you (formal)", "Sie", "Sie", "Ihnen"]] },
    { id: "sein-haben", group: "Konjugation", title: "sein · haben · werden", note: "The most important irregular verbs.",
      head: ["", "sein", "haben", "werden"], rows: [[P[0], "bin", "habe", "werde"], [P[1], "bist", "hast", "wirst"], [P[2], "ist", "hat", "wird"], [P[3], "sind", "haben", "werden"], [P[4], "seid", "habt", "werdet"], [P[5], "sind", "haben", "werden"]] },
    { id: "regelmaessig", group: "Konjugation", title: "Regular verbs", note: "Endings: -e, -st, -t, -en, -t, -en. Watch out for arbeiten and heißen!",
      head: ["", "wohnen", "lernen", "arbeiten", "heißen"], rows: [[P[0], "wohne", "lerne", "arbeite", "heiße"], [P[1], "wohnst", "lernst", "arbeitest", "heißt"], [P[2], "wohnt", "lernt", "arbeitet", "heißt"], [P[3], "wohnen", "lernen", "arbeiten", "heißen"], [P[4], "wohnt", "lernt", "arbeitet", "heißt"], [P[5], "wohnen", "lernen", "arbeiten", "heißen"]] },
    { id: "vokalwechsel", group: "Konjugation", title: "Verbs with a vowel change", note: "Only du and er/sie/es change the vowel.",
      head: ["", "sprechen", "essen", "lesen", "fahren", "nehmen"], rows: [[P[0], "spreche", "esse", "lese", "fahre", "nehme"], [P[1], "sprichst", "isst", "liest", "fährst", "nimmst"], [P[2], "spricht", "isst", "liest", "fährt", "nimmt"], [P[3], "sprechen", "essen", "lesen", "fahren", "nehmen"], [P[4], "sprecht", "esst", "lest", "fahrt", "nehmt"], [P[5], "sprechen", "essen", "lesen", "fahren", "nehmen"]] },
    { id: "modalverben", group: "Konjugation", title: "Modal verbs", note: "ich and er/sie/es have the same form — with no ending.",
      head: ["", "können", "müssen", "wollen", "dürfen", "möchten"], rows: [[P[0], "kann", "muss", "will", "darf", "möchte"], [P[1], "kannst", "musst", "willst", "darfst", "möchtest"], [P[2], "kann", "muss", "will", "darf", "möchte"], [P[3], "können", "müssen", "wollen", "dürfen", "möchten"], [P[4], "könnt", "müsst", "wollt", "dürft", "möchtet"], [P[5], "können", "müssen", "wollen", "dürfen", "möchten"]] },
    { id: "wissen-moegen", group: "Konjugation", title: "wissen · mögen · sollen", note: "More important A1 verbs.",
      head: ["", "wissen", "mögen", "sollen"], rows: [[P[0], "weiß", "mag", "soll"], [P[1], "weißt", "magst", "sollst"], [P[2], "weiß", "mag", "soll"], [P[3], "wissen", "mögen", "sollen"], [P[4], "wisst", "mögt", "sollt"], [P[5], "wissen", "mögen", "sollen"]] },
    { id: "praeteritum", group: "Konjugation", title: "war · hatte", note: "Simple past of sein and haben.",
      head: ["", "sein", "haben"], rows: [[P[0], "war", "hatte"], [P[1], "warst", "hattest"], [P[2], "war", "hatte"], [P[3], "waren", "hatten"], [P[4], "wart", "hattet"], [P[5], "waren", "hatten"]] },
    { id: "perfekt", group: "Konjugation", title: "Perfect tense: helper verb + past participle", note: "hat or ist? And what is the past participle?",
      head: ["Infinitiv", "Hilfsverb", "Partizip II"], rows: [["machen", "hat", "gemacht"], ["lernen", "hat", "gelernt"], ["arbeiten", "hat", "gearbeitet"], ["kaufen", "hat", "gekauft"], ["spielen", "hat", "gespielt"], ["essen", "hat", "gegessen"], ["trinken", "hat", "getrunken"], ["schlafen", "hat", "geschlafen"], ["sehen", "hat", "gesehen"], ["lesen", "hat", "gelesen"], ["schreiben", "hat", "geschrieben"], ["sprechen", "hat", "gesprochen"], ["treffen", "hat", "getroffen"], ["fahren", "ist", "gefahren"], ["gehen", "ist", "gegangen"], ["kommen", "ist", "gekommen"], ["fliegen", "ist", "geflogen"], ["bleiben", "ist", "geblieben"], ["aufstehen", "ist", "aufgestanden"], ["einkaufen", "hat", "eingekauft"], ["anrufen", "hat", "angerufen"], ["bezahlen", "hat", "bezahlt"], ["verstehen", "hat", "verstanden"], ["telefonieren", "hat", "telefoniert"]] },
    { id: "imperativ", group: "Konjugation", title: "Imperative (commands)", note: "du-form without -st, ihr-form like the present tense, Sie-form with Sie.",
      head: ["Infinitiv", "du", "ihr", "Sie"], rows: [["kommen", "komm", "kommt", "kommen Sie"], ["nehmen", "nimm", "nehmt", "nehmen Sie"], ["lesen", "lies", "lest", "lesen Sie"], ["sprechen", "sprich", "sprecht", "sprechen Sie"], ["fahren", "fahr|fahre", "fahrt", "fahren Sie"], ["warten", "warte", "wartet", "warten Sie"], ["aufstehen", "steh auf|stehe auf", "steht auf", "stehen Sie auf"], ["sein", "sei", "seid", "seien Sie"]] }
  ];

  /* ---------------------------------------------------------------- Extra nouns for the article trainer */
  const nouns = [
    ["der", "Bruder", "brother"], ["die", "Schwester", "sister"], ["das", "Handy", "mobile phone"], ["der", "Schlüssel", "key"], ["die", "Lampe", "lamp"],
    ["das", "Fenster", "window"], ["das", "Bett", "bed"], ["der", "Schrank", "wardrobe"], ["die", "Uhr", "clock / watch"], ["das", "Buch", "book"],
    ["der", "Kuchen", "cake"], ["die", "Butter", "butter"], ["das", "Ei", "egg"], ["die", "Kartoffel", "potato"], ["der", "Saft", "juice"],
    ["das", "Fleisch", "meat"], ["der", "Fisch", "fish"], ["die", "Banane", "banana"], ["das", "Glas", "glass"], ["die", "Flasche", "bottle"],
    ["der", "Beruf", "job"], ["die", "Arbeit", "work"], ["das", "Büro", "office"], ["der", "Urlaub", "holiday"], ["die", "Reise", "trip"],
    ["das", "Hotel", "hotel"], ["der", "Flughafen", "airport"], ["das", "Flugzeug", "plane"], ["die", "Fahrkarte", "ticket"], ["das", "Fahrrad", "bicycle"],
    ["die", "Post", "post office"], ["die", "Bank", "bank"], ["das", "Kino", "cinema"], ["das", "Restaurant", "restaurant"], ["der", "Name", "name"],
    ["die", "Adresse", "address"], ["die", "Telefonnummer", "phone number"], ["das", "Wetter", "weather"], ["der", "Regen", "rain"], ["die", "Sonne", "sun"],
    ["der", "Sommer", "summer"], ["der", "Winter", "winter"], ["der", "Monat", "month"], ["das", "Jahr", "year"], ["der", "Geburtstag", "birthday"],
    ["das", "Mädchen", "girl"], ["der", "Junge", "boy"], ["die", "Zeitung", "newspaper"], ["das", "Wörterbuch", "dictionary"], ["die", "Hausaufgabe", "homework"],
    ["der", "Kühlschrank", "fridge"], ["die", "Dusche", "shower"], ["der", "Garten", "garden"], ["das", "Wochenende", "weekend"], ["die", "Lehrerin", "female teacher"],
    ["der", "Lehrer", "male teacher"], ["das", "Auto", "car"], ["die", "Wohnung", "apartment"], ["der", "Bus", "bus"], ["die", "Rechnung", "bill"]
  ];

  /* ---------------------------------------------------------------- Multiple choice grammar & vocab (unit = 0-based 4-lesson unit) */
  const mc = [
    { unit: 0, q: "___ heißt du?", o: ["Wie", "Was", "Wer", "Wo"], x: "Wie heißt du? is the fixed question for a name." },
    { unit: 0, q: "Ich ___ Motia.", o: ["bin", "ist", "bist", "sind"], x: "sein: ich bin." },
    { unit: 0, q: "Wie geht es ___?", o: ["dir", "du", "dich", "dein"], x: "Fixed Dativ phrase: Wie geht es dir?" },
    { unit: 0, q: "You didn't understand. You say:", o: ["Noch einmal, bitte.", "Bis bald!", "Freut mich.", "Gute Nacht."], x: "Noch einmal, bitte = once again, please." },
    { unit: 0, q: "Woher kommst du? – Ich komme ___ Israel.", o: ["aus", "in", "nach", "von"], x: "Origin: aus + country." },
    { unit: 0, q: "Wie alt bist du? – Ich bin dreißig ___.", o: ["Jahre alt", "Jahre", "alt Jahre", "Jahr alt"], x: "Ich bin dreißig Jahre alt." },
    { unit: 0, q: "Du ___ Deutsch.", o: ["lernst", "lerne", "lernt", "lernen"], x: "du → -st." },
    { unit: 1, q: "Das ist ___ Schwester.", o: ["meine", "mein", "meinen", "meiner"], x: "die Schwester → meine (Nominativ)." },
    { unit: 1, q: "Ich habe ___ Bruder.", o: ["einen", "ein", "eine", "einem"], x: "der Bruder → Akkusativ einen." },
    { unit: 1, q: "Ich stehe um sieben Uhr ___.", o: ["auf", "an", "ein", "aus"], x: "aufstehen: the prefix goes to the end." },
    { unit: 1, q: "Was ___ du gern?", o: ["isst", "esst", "esse", "essen"], x: "essen: du isst." },
    { unit: 1, q: "8:30 heißt informell:", o: ["halb neun", "halb acht", "Viertel nach acht", "acht halb"], x: "halb neun = half (way) to nine." },
    { unit: 1, q: "Wo ist ___ Supermarkt?", o: ["der", "die", "das", "den"], x: "der Supermarkt — Nominativ after sein." },
    { unit: 1, q: "Gehen Sie geradeaus und dann ___ links.", o: ["die zweite Straße", "der zweite Straße", "die zwei Straße", "das zweite Straße"], x: "die Straße → die zweite Straße." },
    { unit: 2, q: "Die Küche ist sehr klein, ___ sie ist schön.", o: ["aber", "oder", "denn", "und"], x: "Contrast → aber." },
    { unit: 2, q: "Heute ___ es und es ist kalt.", o: ["regnet", "regnen", "Regen", "regnest"], x: "es regnet." },
    { unit: 2, q: "Ich möchte ein Kilo ___.", o: ["Äpfel", "Apfel", "Äpfeln", "Apfels"], x: "Plural: der Apfel → die Äpfel." },
    { unit: 2, q: "Was ___ das?", o: ["kostet", "kosten", "kostest", "koste"], x: "das → er/sie/es form: kostet." },
    { unit: 2, q: "Ich fahre ___ Bus.", o: ["mit dem", "mit der", "mit den", "mit das"], x: "mit + Dativ, der Bus → dem." },
    { unit: 2, q: "Eine Fahrkarte ___ Berlin, bitte.", o: ["nach", "zu", "in", "bei"], x: "Cities → nach." },
    { unit: 3, q: "Mein Geburtstag ist ___ Mai.", o: ["im", "am", "um", "in"], x: "Months → im." },
    { unit: 3, q: "Wann hast du Geburtstag? – Am ___ Juli.", o: ["siebten", "sieben", "siebte", "siebenten"], x: "am + ordinal + -en: am siebten Juli." },
    { unit: 3, q: "___ du am Samstag Zeit?", o: ["Hast", "Bist", "Habt", "Hat"], x: "Zeit haben: du hast." },
    { unit: 3, q: "Ich ___ leider nicht kommen.", o: ["kann", "kannst", "könne", "können"], x: "können: ich kann (no ending)." },
    { unit: 3, q: "Hast du keine Zeit? – ___, ich habe Zeit!", o: ["Doch", "Ja", "Nein", "Nicht"], x: "Doch contradicts a negative question." },
    { unit: 3, q: "Ich ___ gestern ins Kino gegangen.", o: ["bin", "habe", "hat", "ist"], x: "gehen (movement) → sein: ich bin gegangen." },
    { unit: 4, q: "Ich brauche ___ Termin.", o: ["einen", "ein", "eine", "einem"], x: "der Termin → Akkusativ einen." },
    { unit: 4, q: "Für mich ___ Kaffee, bitte.", o: ["einen", "ein", "eine", "einer"], x: "der Kaffee → Akkusativ einen." },
    { unit: 4, q: "Kann ich das ___?", o: ["anprobieren", "probiere an", "angeprobiert", "anprobiere"], x: "Modal + infinitive in one piece at the end." },
    { unit: 4, q: "Das Kleid gefällt ___.", o: ["mir", "mich", "ich", "mein"], x: "gefallen + Dativ: mir." },
    { unit: 4, q: "Was hast du am Wochenende ___?", o: ["gemacht", "macht", "machen", "gemachen"], x: "machen → gemacht." },
    { unit: 4, q: "Ich ___ einen Kaffee, bitte. (polite)", o: ["möchte", "will", "muss", "darf"], x: "möchte is the polite way to order." },
    { unit: 4, q: "Wann ___ der Zug ___?", o: ["kommt … an", "ankommt … –", "kommen … an", "kommt … ein"], x: "ankommen: kommt … an." },
    { unit: 4, q: "Wir treffen uns ___ Wochenende.", o: ["am", "im", "um", "in"], x: "am Wochenende." },
    { unit: 4, q: "Ich habe die Rechnung schon ___.", o: ["bezahlt", "gebezahlt", "bezahlen", "bezahlte"], x: "be-verbs: no ge-." },
    { unit: 4, q: "Er wohnt bei ___ Eltern.", o: ["seinen", "seine", "seiner", "sein"], x: "bei + Dativ Plural → seinen." }
  ];

  /* ---------------------------------------------------------------- A1 exam style material */
  const lesen = [
    { title: "E-Mail", text: "Liebe Maya,\nich bin jetzt in Hamburg! Meine Wohnung ist klein, aber schön. Sie hat zwei Zimmer und einen Balkon. Am Samstag mache ich eine Party. Kommst du? Die Party beginnt um 19 Uhr. Bring bitte etwas zu trinken mit.\nLiebe Grüße\nAnna",
      q: [["Anna wohnt jetzt in Hamburg.", true], ["Die Wohnung hat drei Zimmer.", false], ["Die Party ist am Sonntag.", false], ["Maya soll Getränke mitbringen.", true]] },
    { title: "Schild an der Tür", text: "Praxis Dr. Weber\nSprechzeiten: Mo–Fr 8–12 Uhr\nDi und Do auch 15–18 Uhr\nMittwochnachmittag geschlossen.\nTermine nur nach telefonischer Vereinbarung: 0431 55 67 89",
      q: [["Am Dienstagnachmittag ist die Praxis offen.", true], ["Am Mittwoch um 16 Uhr kann man zum Arzt gehen.", false], ["Man muss vorher anrufen.", true]] },
    { title: "Anzeige", text: "Fahrrad zu verkaufen!\nFast neu, blau, 28 Zoll. Nur 120 Euro.\nBitte am Abend anrufen: 0176 123 456 (Jonas)",
      q: [["Das Fahrrad ist alt.", false], ["Das Fahrrad kostet 120 Euro.", true], ["Man soll Jonas am Morgen anrufen.", false]] },
    { title: "SMS", text: "Hallo Tim, ich kann heute leider nicht ins Kino kommen. Ich bin krank und habe Fieber. Gehen wir nächste Woche zusammen? Vielleicht am Freitag? Viele Grüße, Lena",
      q: [["Lena geht heute ins Kino.", false], ["Lena ist krank.", true], ["Lena möchte vielleicht am Freitag ins Kino gehen.", true]] },
    { title: "Am Bahnhof", text: "Achtung! Wegen Bauarbeiten fahren vom 3. bis 10. Juni keine Züge zwischen Köln und Bonn. Bitte nehmen Sie den Bus. Die Busse fahren alle 20 Minuten vor dem Bahnhof ab.",
      q: [["Im Juni fahren zwei Wochen keine Züge.", false], ["Man kann mit dem Bus nach Bonn fahren.", true], ["Der Bus fährt jede Stunde.", false]] },
    { title: "Kursangebot", text: "Volkshochschule Mitte – Deutsch A1\nMontag und Mittwoch, 18:00–19:30 Uhr\nBeginn: 4. September · 12 Wochen · 160 Euro\nAnmeldung im Büro (Raum 102) oder online.",
      q: [["Der Kurs ist zweimal pro Woche.", true], ["Der Kurs ist am Vormittag.", false], ["Man kann sich im Internet anmelden.", true]] }
  ];

  const hoeren = [
    { s: "Achtung an Gleis sieben: Der ICE nach München fährt heute nicht von Gleis sieben, sondern von Gleis neun ab.", q: "Von welchem Gleis fährt der Zug nach München?", o: ["Gleis 9", "Gleis 7", "Gleis 19"] },
    { s: "Hallo, hier ist Paul. Wir treffen uns morgen nicht um sieben, sondern um halb acht vor dem Kino. Bis morgen!", q: "Wann treffen sie sich?", o: ["um 7:30 Uhr", "um 7:00 Uhr", "um 8:30 Uhr"] },
    { s: "Liebe Kundinnen und Kunden, heute im Angebot: ein Kilo Äpfel für nur zwei Euro fünfzig.", q: "Was kostet ein Kilo Äpfel?", o: ["2,50 €", "2,15 €", "5,20 €"] },
    { s: "Guten Tag, hier ist die Praxis Doktor Klein. Ihr Termin ist am Donnerstag um zehn Uhr. Auf Wiederhören.", q: "Wann ist der Termin?", o: ["Donnerstag, 10 Uhr", "Dienstag, 10 Uhr", "Donnerstag, 12 Uhr"] },
    { s: "Entschuldigung, wo ist hier die Post? – Gehen Sie hier geradeaus und dann die zweite Straße links.", q: "Wie kommt man zur Post?", o: ["geradeaus, dann die 2. Straße links", "geradeaus, dann die 2. Straße rechts", "die 1. Straße links"] },
    { s: "Meine Handynummer ist: null eins sieben sechs, zweiundvierzig, achtzehn, fünfunddreißig.", q: "Wie ist die Nummer?", o: ["0176 42 18 35", "0176 24 18 53", "0176 42 80 35"] },
    { s: "Ich heiße Sabine Kowalski. Kowalski schreibt man K, O, W, A, L, S, K, I.", q: "Wie schreibt man den Nachnamen?", o: ["Kowalski", "Kovalski", "Kowalsky"] },
    { s: "Und jetzt das Wetter für das Wochenende: Am Samstag regnet es, aber am Sonntag scheint die Sonne. Es wird warm, bis vierundzwanzig Grad.", q: "Wie ist das Wetter am Sonntag?", o: ["sonnig und warm", "Regen", "kalt und windig"] },
    { s: "Hallo Mama, ich komme heute später nach Hause. Ich muss noch arbeiten. Ich bin um neun Uhr da.", q: "Wann kommt die Person nach Hause?", o: ["um 21 Uhr", "um 19 Uhr", "um 22 Uhr"] },
    { s: "Ich hätte gern zwei Brötchen und einen Kaffee. – Gern. Das macht drei Euro zwanzig.", q: "Wie viel muss die Person bezahlen?", o: ["3,20 €", "2,30 €", "3,12 €"] }
  ];

  const schreiben = {
    intro: "Read the text and fill in the form. — Ihre Freundin Maria Rossi möchte einen Deutschkurs machen. Sie ist 34 Jahre alt, kommt aus Italien und wohnt jetzt in der Gartenstraße 12 in 10115 Berlin. Sie spricht Italienisch und Englisch. Sie möchte am Abend lernen und bezahlt bar. Füllen Sie das Formular für Maria aus.",
    fields: [
      { label: "Familienname", a: ["Rossi"] },
      { label: "Alter", a: ["34", "vierunddreißig", "34 Jahre"] },
      { label: "Herkunftsland", a: ["Italien"] },
      { label: "Wohnort (Stadt)", a: ["Berlin", "10115 Berlin"] },
      { label: "Hausnummer", a: ["12"] },
      { label: "Sprachen", contains: ["italienisch", "englisch"], a: ["Italienisch, Englisch"] },
      { label: "Kurszeit (morgens / abends)", a: ["abends", "am Abend", "Abend"] },
      { label: "Zahlung (bar / Karte)", a: ["bar"] }
    ],
    letter: {
      task: "Task (as in the exam, in German): Sie haben am Freitag einen Termin beim Arzt, aber Sie können nicht kommen. Schreiben Sie eine E-Mail an die Praxis (ca. 30 Wörter): Entschuldigen Sie sich. Nennen Sie einen Grund. Bitten Sie um einen neuen Termin.  — In English: you have a doctor’s appointment on Friday but cannot go. Write an email to the practice: apologise, give a reason, and ask for a new appointment.",
      checks: ["Greeting: Sehr geehrte Damen und Herren,", "Apology: Leider kann ich … nicht kommen.", "Reason: … denn ich muss arbeiten.", "Request: Können Sie mir bitte einen neuen Termin geben?", "Closing + name: Mit freundlichen Grüßen …"],
      model: "Sehr geehrte Damen und Herren,\nleider kann ich am Freitag nicht zum Termin kommen, denn ich muss arbeiten. Können Sie mir bitte einen neuen Termin geben? Am Montag oder Dienstag habe ich Zeit.\nMit freundlichen Grüßen\nMotia Cohen"
    }
  };

  const sprechen = {
    teil1: { title: "Part 1 · Introduce yourself (Sich vorstellen)", prompts: ["Name?", "Alter?", "Land?", "Wohnort?", "Sprachen?", "Beruf?", "Hobby?"],
      model: "Ich heiße Motia. Ich bin dreißig Jahre alt. Ich komme aus Israel und wohne in Haifa. Ich spreche Hebräisch, Englisch und ein bisschen Deutsch. Ich bin Ingenieurin von Beruf. Mein Hobby ist Lesen." ,
      extra: ["Buchstabieren Sie bitte Ihren Namen.", "Wie ist Ihre Telefonnummer?"] },
    teil2: { title: "Part 2 · Ask and answer questions (Fragen stellen und antworten)", cards: [
      ["Essen und Trinken", "Frühstück", "Was isst du zum Frühstück?", "Ich esse Brot mit Käse und trinke Kaffee."],
      ["Essen und Trinken", "Lieblingsessen", "Was ist dein Lieblingsessen?", "Mein Lieblingsessen ist Pizza."],
      ["Essen und Trinken", "Getränke", "Was trinkst du gern?", "Ich trinke gern Tee."],
      ["Freizeit", "Wochenende", "Was machst du am Wochenende?", "Am Wochenende treffe ich Freunde."],
      ["Freizeit", "Sport", "Machst du Sport?", "Ja, ich gehe zweimal pro Woche schwimmen."],
      ["Freizeit", "Kino", "Gehst du gern ins Kino?", "Ja, sehr gern. Ich gehe einmal im Monat ins Kino."],
      ["Wohnen", "Zimmer", "Wie viele Zimmer hat deine Wohnung?", "Meine Wohnung hat drei Zimmer."],
      ["Wohnen", "Nachbarn", "Kennst du deine Nachbarn?", "Ja, meine Nachbarn sind sehr nett."],
      ["Familie", "Geschwister", "Hast du Geschwister?", "Ja, ich habe einen Bruder."],
      ["Familie", "Eltern", "Wo wohnen deine Eltern?", "Meine Eltern wohnen in Tel Aviv."],
      ["Einkaufen", "Supermarkt", "Wann gehst du in den Supermarkt?", "Ich gehe am Samstag in den Supermarkt."],
      ["Einkaufen", "Kleidung", "Wo kaufst du Kleidung?", "Ich kaufe Kleidung im Internet."],
      ["Arbeit", "Beruf", "Was bist du von Beruf?", "Ich bin Lehrerin."],
      ["Arbeit", "Arbeitszeit", "Wann beginnt deine Arbeit?", "Meine Arbeit beginnt um neun Uhr."],
      ["Reisen", "Urlaub", "Wohin fährst du im Urlaub?", "Im Urlaub fahre ich nach Italien."],
      ["Reisen", "Verkehrsmittel", "Wie fährst du zur Arbeit?", "Ich fahre mit dem Bus zur Arbeit."]
    ] },
    teil3: { title: "Part 3 · Make requests and react (Bitten formulieren und reagieren)", cards: [
      ["🪟", "Fenster", "Kannst du bitte das Fenster öffnen?", "Ja, gern."],
      ["🧂", "Salz", "Gibst du mir bitte das Salz?", "Hier, bitte."],
      ["✏️", "Kugelschreiber", "Haben Sie einen Kugelschreiber für mich?", "Ja, hier bitte."],
      ["☕", "Kaffee", "Ich hätte gern einen Kaffee, bitte.", "Gern. Mit Milch?"],
      ["📞", "Telefon", "Kann ich bitte kurz telefonieren?", "Ja, natürlich."],
      ["🚪", "Tür", "Mach bitte die Tür zu!", "Okay, mache ich."],
      ["🕐", "Uhr", "Entschuldigung, wie spät ist es?", "Es ist halb drei."],
      ["🗺️", "Stadtplan", "Können Sie mir bitte den Weg zeigen?", "Ja, gehen Sie hier geradeaus."],
      ["💶", "Geld", "Kannst du mir bitte zehn Euro leihen?", "Tut mir leid, ich habe kein Geld dabei."],
      ["🚭", "Rauchen", "Bitte rauchen Sie hier nicht.", "Oh, Entschuldigung!"],
      ["🔊", "Musik", "Kannst du die Musik bitte leiser machen?", "Ja, klar."],
      ["🧳", "Koffer", "Können Sie mir bitte mit dem Koffer helfen?", "Ja, gern."]
    ] }
  };

  const examInfo = [
    ["🎧", "Hören", "ca. 20 Min.", "Short announcements, phone messages and dialogues. Each text is played twice — listen for numbers, times and places."],
    ["📖", "Lesen", "ca. 25 Min.", "Short emails, signs and ads. Decide richtig/falsch or choose the right text. You don't need every word."],
    ["✍️", "Schreiben", "ca. 20 Min.", "Fill in a form with personal details and write a short message (about 30 words) covering three points."],
    ["🗣️", "Sprechen", "ca. 15 Min.", "Introduce yourself, ask and answer questions on a topic card, and make polite requests."]
  ];

  return { grammar, gaps, tables, nouns, mc, lesen, hoeren, schreiben, sprechen, examInfo };
})();
