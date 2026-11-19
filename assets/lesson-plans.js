/* One plan per course lesson. Each grammar row pairs a label with sentence
   chunks. Wrap the part being taught in |bars| to highlight it. */
const lessonPlans = [
  {
    visual: [["ich", "Ich |heiße| Motia H."], ["du", "Wie |heißt| du?"], ["sein", "Ich |bin| Motia. Du |bist| Tim."]],
    activity: ["Meet twice", "Do two 20-second first meetings. In the second, swap who starts and use an imaginary name. Ask your partner’s name without looking at the dialogue."]
  },
  {
    visual: [["Negate an action", "Ich verstehe |nicht|."], ["Negate a noun", "Ich habe |keine| Frage."], ["Polite request", "Noch einmal, |bitte|."]],
    activity: ["Repair the conversation", "Tim says one unfamiliar German word at normal speed. Ask him to repeat it, then ask what it means. Show you understood by using it. Switch roles."]
  },
  {
    visual: [["Question word first", "|Wie| schreibt man das?"], ["Verb second", "Wie |schreibt| man das?"], ["man uses the er/sie form", "Ich schreibe → man |schreibt|"]],
    activity: ["Take a message", "Each person invents a phone number and a name and keeps them hidden. Dictate yours while your partner writes them down. Have them read both back before you compare notes."]
  },
  {
    visual: [["Woher? · origin", "Ich komme |aus Israel|."], ["Wo? · where you live", "Ich wohne |in Haifa|."]],
    activity: ["Guess the profile", "Imagine a person whose birthplace and current city are different. Your partner asks Woher? and Wo? to guess both, then introduces your character to someone else."]
  },
  {
    visual: [["Masculine · after ist", "Das ist |mein Bruder|."], ["Feminine · after ist", "Das ist |meine Schwester|."], ["Masculine · direct object", "Ich sehe |meinen Bruder|."]],
    activity: ["Sketch a family tree", "Describe three real or imaginary relatives while your partner draws the connections. Let them point at one person and ask a question. Compare the sketch to what you meant."]
  },
  {
    visual: [["Dictionary form", "|aufstehen|"], ["Verb in position 2, prefix at the end", "Ich |stehe| um sieben |auf|."]],
    activity: ["Put the day in order", "Tell your partner three things you do in the morning, out of order. They retell your routine in order. Use at least one separable verb and listen for its prefix."]
  },
  {
    visual: [["Like", "Ich esse |gern| Reis."], ["Prefer", "Ich esse |lieber| Nudeln."], ["Dislike", "Ich esse |nicht gern| Fisch."]],
    activity: ["Build a shared menu", "Name three foods and find out what your partner likes or prefers. Agree on one starter and one main you would both actually order."]
  },
  {
    visual: [["Ask for a place", "|Wo| ist der Supermarkt?"], ["Formal command · verb + Sie", "|Gehen Sie| geradeaus."], ["Separable command", "|Biegen Sie| links |ab|."]],
    activity: ["Draw my route", "Sketch three streets and mark a destination. Give directions from the same starting point while your partner traces the route without seeing the destination. Check where they arrive."]
  },
  {
    visual: [["Wo? · fixed position · dative", "Das Buch liegt |auf dem Tisch|."], ["Wohin? · destination · accusative", "Ich lege das Buch |auf den Tisch|."]],
    activity: ["Move the object", "Put a small object in, on, or beside something. Ask where it is. Then tell your partner where to put it next and listen for how the article changes."]
  },
  {
    visual: [["State", "|Es ist| warm."], ["Weather verb", "|Es regnet|."], ["Change", "Morgen |wird es| wärmer."]],
    activity: ["Give a two-day forecast", "Pick different weather for today and tomorrow. Give a short forecast, then have your partner choose what to wear or pack based on what they heard."]
  },
  {
    visual: [["Masculine changes", "|ein| Apfel → Ich brauche |einen| Apfel."], ["Feminine and neuter stay the same", "|eine| Flasche · |ein| Kilo"], ["Plural · use a number", "Ich kaufe |zwei| Äpfel."]],
    activity: ["Shop from memory", "Tell your partner a three-item list with quantities. They take the list from memory to an imaginary checkout. Confirm the quantities before you pay."]
  },
  {
    visual: [["Polite request", "Ich |möchte| eine Fahrkarte."], ["Destination", "Eine Fahrkarte |nach Berlin|, bitte."], ["Second verb at the end", "Wann |möchten| Sie |fahren|?"]],
    activity: ["Catch the right train", "Invent two departures to the same city. The passenger has a time they must arrive by. Ask about the options and buy the ticket that gets you there in time."]
  },
  {
    visual: [["Irregular third", "3. Mai → am |dritten| Mai"], ["Most dates below 20", "12. August → am zwölf|ten| August"], ["From 20", "21. Juni → am einundzwanzig|sten| Juni"]],
    activity: ["Find an available date", "Write down three dates in one month when you are busy. Compare calendars aloud and settle on a date for a party. Each person writes down the agreed date independently."]
  },
  {
    visual: [["Subject first", "|Ich| |lerne| Deutsch."], ["Time first · verb still second", "|Dann| |lerne| ich Deutsch."], ["With aber", "Ich koche gern, |aber| ich |backe| nicht gern."]],
    activity: ["Run a conversation relay", "Start with a short introduction. Your partner asks a follow-up about your routine, then asks you to recommend a place in town. Switch who leads for the next round."]
  },
  {
    visual: [["kennen · familiarity", "Ich |kenne| die Stadt gut."], ["wissen · fact", "Ich |weiß|, wo das Café ist."], ["Time first · verb second", "Im Moment |arbeite| ich viel."]],
    activity: ["Find something new", "Give your partner two personal updates. They ask a follow-up on each, then retell one detail they learned. Correct any misunderstanding in German."]
  },
  {
    visual: [["Frequency after the verb", "Ich |koche| |oft| am Abend."], ["Frequency first · verb second", "|Normalerweise| |stehe| ich um sieben auf."]],
    activity: ["Spot the unusual habit", "Describe two true habits and one invented habit using frequency words. Your partner asks a follow-up and guesses which one you made up."]
  },
  {
    visual: [["Statement · modal second", "Ich |kann| am Samstag |kommen|."], ["Yes/no question · modal first", "|Wollen| wir zusammen |kochen|?"]],
    activity: ["Negotiate an invitation", "Each person privately picks a day they’re busy and an activity they’d enjoy. Make an invitation, decline one option politely, and find a plan you both like."]
  },
  {
    visual: [["Formal subject", "Kommen |Sie| am Dienstag?"], ["Formal dative", "Wann passt es |Ihnen|?"], ["Day and time", "|am Dienstag| · |um zehn Uhr|"]],
    activity: ["Reschedule an appointment", "One person is the receptionist with two free times. The caller cannot make the first time. Find a slot that works and repeat the day and time before hanging up."]
  },
  {
    visual: [["Polite opening", "Ich |hätte gern| einen Kaffee."], ["Masculine direct object", "|ein| Kaffee → Ich hätte gern |einen| Kaffee."]],
    activity: ["Fix a mixed-up order", "Order a drink and a snack. The server reads back one item incorrectly. Correct it politely, then ask for the bill."]
  },
  {
    visual: [["Masculine", "der Pullover → Ich nehme |ihn|."], ["Feminine / neuter", "die Jacke → |sie| · das Hemd → |es|"], ["Permission · modal first", "|Darf| ich sie |anprobieren|?"]],
    activity: ["Choose an outfit", "Name two items in an imaginary shop. Ask to try one on and say which one you’ll buy. Once the items are introduced, refer to them with pronouns."]
  },
  {
    visual: [["mit + dative", "mit |dem Bus| · mit |der Bahn|"], ["zu + dem", "zu dem Bahnhof → |zum Bahnhof|"], ["zu + der", "zu der Haltestelle → |zur Haltestelle|"]],
    activity: ["Reroute the traveler", "Plan how to get from home to the station. Your partner says one leg of the trip is unavailable. Give a new route using a different means of transport."]
  },
  {
    visual: [["Wo? · dative", "Das Café ist |neben dem Park|."], ["Wohin? · accusative", "Ich stelle den Tisch |neben das Fenster|."]],
    activity: ["Furnish the room", "Sketch an empty room with a window and door. Agree on where to put three pieces of furniture. Then describe where each one is in the finished room."]
  },
  {
    visual: [["Who feels it? · dative", "|Mir| tut der Hals weh."], ["What hurts? · subject", "|Meine Augen| tun mir weh."], ["Still happening · seit + present", "|Seit gestern| |habe| ich Kopfschmerzen."]],
    activity: ["Do a symptom interview", "The patient invents two symptoms and when they started. The doctor asks for the details and repeats both symptoms and their timing back to the patient."]
  },
  {
    visual: [["haben + participle", "Ich |habe| Freunde |getroffen|."], ["sein + participle", "Ich |bin| nach Jerusalem |gefahren|."], ["Past modal + infinitive", "Ich |musste| am Samstag |arbeiten|."]],
    activity: ["Retell a weekend", "Write three keywords from your weekend. Tell the story without reading full sentences. Your partner retells one event and asks what happened next."]
  },
  {
    visual: [["Polite wish", "Ich |hätte gern| ein ruhiges Zimmer."], ["Polite question", "|Könnte| ich ein anderes Zimmer bekommen?"], ["für + accusative", "für |einen| Gast"]],
    activity: ["Solve a hotel problem", "The guest picks one problem with the room. Reception can offer a repair or a different room. Agree on a solution and confirm how long the guest is staying."]
  },
  {
    visual: [["weil · verb last", "Ich lerne Deutsch, |weil| ich in Berlin arbeiten |möchte|."], ["denn · verb second in its clause", "Ich lerne Deutsch, |denn| ich |arbeite| in Berlin."], ["da · verb last", "|Da| ich früh |anfange|, stehe ich um sechs auf."]],
    activity: ["Interview a colleague", "Ask why your partner chose a job, course, or hobby. Follow up once. Then give your own reason with weil and say it again using denn."]
  },
  {
    visual: [["Direct message", "Ich |komme| später."], ["Reported message · verb last", "Sag ihr bitte, |dass| ich später |komme|."]],
    activity: ["Pass on a phone message", "Read your partner a short message with a changed time or place. They write down keywords and relay it to the intended recipient using dass. Check that the change survived."]
  },
  {
    visual: [["Expectation", "Was |soll| ich |mitbringen|?"], ["Modal + intact infinitive", "Du |kannst| einen Salat |mitbringen|."], ["helfen + dative", "Soll ich |dir| helfen?"]],
    activity: ["Divide the party jobs", "List three things the party needs. Ask what you should bring, offer to help with something else, and end by confirming who is doing what."]
  },
  {
    visual: [["Difference · als", "Das Hotel ist günstig|er als| das andere."], ["Equality · so … wie", "Das Hotel ist |so günstig wie| das andere."], ["Before a noun", "ein gut|es| Hotel · den günstig|eren| Flug"]],
    activity: ["Pick between two offers", "Invent two hotels with different prices and distances. Compare both features aloud. One person values price most and the other values location. Pick one together and explain why."]
  },
  {
    visual: [["Direct opinion", "Das |ist| eine gute Idee."], ["Opinion with dass · verb last", "Ich denke, |dass| das eine gute Idee |ist|."]],
    activity: ["Change one mind", "Choose a small proposal, such as an evening class instead of a morning class. Give an opinion with dass and a reason. Your partner offers a different view, then you say what you agree on."]
  },
  {
    visual: [["mit + dative", "Wie wäre es mit |einem Ausflug|?"], ["Modal + infinitive", "Wir |könnten| am Sonntag |fahren|."], ["lass uns + infinitive", "|Lass uns| den Zug |nehmen|."]],
    activity: ["Plan around a surprise", "Agree on a day, destination, and transport for an outing. Halfway through, one person announces rain or a canceled train. Make a new proposal and confirm the revised plan."]
  },
  {
    visual: [["Main clause · verb second", "Am Sonntag |treffen| wir uns um elf."], ["dass · verb last", "Ich denke, |dass| wir uns um elf |treffen|."], ["Restart", "|Was ich sagen wollte, ist:| Sonntag passt besser."]],
    activity: ["Run the three stations", "Take turns interviewing each other, solving an everyday problem, and planning an outing. At each station, deliberately mishear one detail so your partner can correct it and continue."]
  }
];
