/* Three sentence gaps per lesson, in course order.
   Each entry contains a German sentence with a bracketed answer and an English cue. */
const lessonGaps = [
  [
    ["Guten Morgen! Ich [bin] Lena.", "Good morning! I'm Lena."],
    ["Hallo, ich [heiße] Tim. Wie heißt du?", "Hello, my name is Tim. What's your name?"],
    ["Wie [geht] es dir heute?", "How are you today?"]
  ],
  [
    ["Ich habe [keine] Frage.", "I don't have a question."],
    ["Das Wort verstehe ich [nicht].", "I don't understand that word."],
    ["Kannst du den Satz [bitte] wiederholen?", "Could you please repeat the sentence?"]
  ],
  [
    ["Wie [schreibt] man deinen Vornamen?", "How do you spell your first name?"],
    ["Wie alt [bist] du denn?", "How old are you?"],
    ["[Kannst] du die Nummer noch einmal sagen?", "Can you say the number again?"]
  ],
  [
    ["Ich komme [aus] Israel.", "I'm from Israel."],
    ["Meine Schwester wohnt [in] Berlin.", "My sister lives in Berlin."],
    ["[Woher] kommt deine Schwester?", "Where is your sister from?"]
  ],
  [
    ["Das ist [meine] Schwester auf dem Foto.", "That's my sister in the photo."],
    ["Auf dem Foto sehe ich [meinen] Bruder.", "I see my brother in the photo."],
    ["Dort steht [mein] Vater.", "My father is standing over there."]
  ],
  [
    ["Morgens stehe ich um sieben [auf].", "I get up at seven in the morning."],
    ["Um acht [fängt] der Kurs an.", "The class starts at eight."],
    ["Heute kaufe ich nach der Arbeit [ein].", "I'm doing the shopping after work today."]
  ],
  [
    ["Ich trinke Milch [nicht] gern.", "I don't like drinking milk."],
    ["Ich mag Tee, aber ich trinke [lieber] Kaffee.", "I like tea, but I prefer drinking coffee."],
    ["Abends esse ich [gern] eine Suppe.", "I like having soup in the evening."]
  ],
  [
    ["[Gehen] Sie bis zur Ampel geradeaus.", "Go straight ahead as far as the traffic light."],
    ["Biegen Sie an der Kreuzung rechts [ab].", "Turn right at the intersection."],
    ["Entschuldigung, [wo] ist die Apotheke?", "Excuse me, where is the pharmacy?"]
  ],
  [
    ["Das Buch liegt auf [dem] Tisch.", "The book is already on the table."],
    ["Ich lege das Buch auf [den] Tisch.", "I put the book onto the table."],
    ["Der Herd steht in [der] Küche.", "The stove is in the kitchen."]
  ],
  [
    ["Heute [regnet] es den ganzen Tag.", "It's raining all day today."],
    ["Morgen [wird] es kälter.", "It'll get colder tomorrow."],
    ["Am Nachmittag ist [es] sonnig.", "It's sunny in the afternoon."]
  ],
  [
    ["Für den Kuchen brauche ich [einen] Apfel.", "I need one apple for the cake."],
    ["Wir kaufen zwei [Äpfel] für den Ausflug.", "We're buying two apples for the outing."],
    ["Ich brauche noch [eine] Flasche Wasser.", "I still need a bottle of water."]
  ],
  [
    ["Eine einfache Fahrkarte [nach] Berlin, bitte.", "A one-way ticket to Berlin, please."],
    ["Wann [möchten] Sie abfahren?", "When would you like to leave?"],
    ["Ich möchte heute Abend nach Berlin [fahren].", "I'd like to travel to Berlin this evening."]
  ],
  [
    ["Der Kurs beginnt am [ersten] Juni.", "The course starts on June 1."],
    ["Mein Geburtstag ist am [fünften] Mai.", "My birthday is on May 5."],
    ["Die Feier ist am [zwanzigsten] August.", "The party is on August 20."]
  ],
  [
    ["Heute [lerne] ich Deutsch und morgen arbeite ich.", "Today I'm studying German, and tomorrow I'm working."],
    ["Ich mag den Park, aber heute [regnet] es.", "I like the park, but today it's raining."],
    ["Zuerst koche ich und dann [esse] ich.", "First I cook and then I eat."]
  ],
  [
    ["Ich [kenne] die Stadt gut.", "I'm familiar with the city."],
    ["Ich [weiß], wann das Museum schließt.", "I know when the museum closes."],
    ["Im Moment [arbeite] ich viel.", "I'm working a lot at the moment."]
  ],
  [
    ["[Normalerweise] stehe ich um sieben auf.", "I normally get up at seven."],
    ["Ich arbeite samstags [oft], aber nicht jeden Samstag.", "I often work Saturdays, but not every Saturday."],
    ["Am Sonntag arbeite ich [nie].", "I never work on Sundays."]
  ],
  [
    ["Ich [kann] am Samstag kommen.", "I can come on Saturday."],
    ["Wollen wir zusammen [kochen]?", "Shall we cook together?"],
    ["[Möchtest] du mit ins Kino gehen?", "Would you like to go to the cinema with us?"]
  ],
  [
    ["Wann passt es [Ihnen], Frau Klein?", "What time suits you, Ms Klein?"],
    ["Haben Sie [am] Dienstag Zeit?", "Are you free on Tuesday?"],
    ["Der Termin ist [um] zehn Uhr.", "The appointment is at ten o'clock."]
  ],
  [
    ["Ich [hätte] gern einen Kaffee.", "I'd like a coffee."],
    ["Für mich bitte [die] Tomatensuppe.", "The tomato soup for me, please."],
    ["Wir hätten gern [einen] zweiten Löffel.", "We'd like a second spoon."]
  ],
  [
    ["Der Pullover passt. Ich nehme [ihn].", "The sweater fits. I'll take it."],
    ["Die Jacke gefällt mir. Darf ich [sie] anprobieren?", "I like the jacket. May I try it on?"],
    ["Das Hemd ist günstig. Ich kaufe [es].", "The shirt is inexpensive. I'm buying it."]
  ],
  [
    ["Heute fahre ich mit [dem] Bus.", "Today I'm going by bus."],
    ["Wie komme ich [zum] Bahnhof?", "How do I get to the train station?"],
    ["Gehen Sie [zur] nächsten Haltestelle.", "Walk to the next stop."]
  ],
  [
    ["Die Lampe steht neben [dem] Sofa.", "The lamp is standing next to the sofa."],
    ["Ich stelle die Lampe neben [das] Sofa.", "I put the lamp next to the sofa."],
    ["Wir wohnen in [einer] kleinen Wohnung.", "We live in a small apartment."]
  ],
  [
    ["Seit gestern tut [mir] der Hals weh.", "My throat has hurt since yesterday."],
    ["Was fehlt [Ihnen], Frau Klein?", "What's the matter, Ms Klein?"],
    ["Mein Rücken tut weh. Die Schultern [tun] mir auch weh.", "My back hurts. My shoulders hurt too."]
  ],
  [
    ["Am Samstag [bin] ich nach Haifa gefahren.", "I went to Haifa on Saturday."],
    ["Ich habe dort Freunde [getroffen].", "I met friends there."],
    ["Am Sonntag [musste] ich arbeiten.", "I had to work on Sunday."]
  ],
  [
    ["[Könnte] ich ein anderes Zimmer bekommen?", "Could I get a different room?"],
    ["Ich habe für [einen] Gast reserviert.", "I booked for one guest."],
    ["Ich hätte [gern] ein ruhiges Zimmer.", "I'd like a quiet room."]
  ],
  [
    ["Ich lerne Deutsch, weil ich in Berlin [arbeite].", "I'm learning German because I work in Berlin."],
    ["Ich stehe früh auf, [denn] ich arbeite ab sieben.", "I get up early because I start work at seven. Use the connector that keeps normal main-clause order."],
    ["Da ich früh anfange, [stehe] ich um sechs Uhr auf.", "Since I start early, I get up at six."]
  ],
  [
    ["Sagen Sie ihr bitte, [dass] ich morgen komme.", "Please tell her that I'll come tomorrow."],
    ["Ich sage ihm, dass der Termin [ausfällt].", "I'm telling him that the appointment is canceled."],
    ["Sagen Sie bitte, dass ich angerufen [habe].", "Please say that I called."]
  ],
  [
    ["Was [soll] ich für die Feier mitbringen?", "What am I supposed to bring to the party?"],
    ["Soll ich [dir] beim Kochen helfen, Lena?", "Would you like me to help you cook, Lena?"],
    ["Du kannst einen Nachtisch [mitbringen].", "You can bring a dessert along."]
  ],
  [
    ["Das erste Hotel ist günstiger [als] das zweite.", "The first hotel is cheaper than the second."],
    ["Die Zimmer sind genauso groß [wie] unsere.", "The rooms are just as big as ours."],
    ["Ich buche den [günstigeren] Flug.", "I'm booking the cheaper flight."]
  ],
  [
    ["Ich glaube, dass der Kurs hilfreich [ist].", "I think the course is helpful."],
    ["Ich denke, [dass] das eine gute Idee ist.", "I think that this is a good idea."],
    ["Ich finde es gut, weil es mir [hilft].", "I think it's good because it helps me."]
  ],
  [
    ["Wie wäre es mit [einem] Ausflug?", "How about an outing?"],
    ["Wir [könnten] am Sonntag zum See fahren.", "We could go to the lake on Sunday."],
    ["Lass uns den Zug [nehmen].", "Let's take the train."]
  ],
  [
    ["Am Sonntag [treffen] wir uns vor dem Café.", "We're meeting in front of the café on Sunday."],
    ["Ich denke, dass wir uns um elf Uhr verabreden [können].", "I think we can agree to meet at eleven."],
    ["Was ich sagen [wollte], ist: Sonntag passt besser.", "What I meant to say is that Sunday works better."]
  ]
];
