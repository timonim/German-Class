/* One entry per lesson, in course order.
   Rows are [prompt, answer, explanation, distractors?]. Omit distractors for a written answer. */
const unitQuizLessons = [
  [ // First meetings
    ["You introduce yourself at the start of class. Use sein: Ich ___ Motia H.", "bin", "With ich, sein becomes bin."],
    ["Ask someone their name with heißen. Start with Wie and use du.", "Wie heißt du?", "In a W-question, heißt comes between Wie and du."],
    ["Introduce yourself as Lena using heißen, then check if your partner is Tim using du. Which pair works?", "Ich heiße Lena. Du bist Tim, oder?", "Heißt is the du form of heißen. Here you need heiße for ich and bist for du.", ["Ich heißt Lena. Du bist Tim, oder?", "Ich heiße Lena. Du bin Tim, oder?", "Ich heißt Lena. Du bin Tim, oder?"]]
  ],
  [ // Classroom German
    ["Say you have no question. Fill in the negative article: Ich habe ___ Frage.", "keine", "Frage is feminine: eine Frage becomes keine Frage."],
    ["Negate this sentence. Add one word: Ich verstehe das.", "Ich verstehe das nicht.", "Nicht goes after das when you're saying you don't understand it."],
    ["Your teacher says: ‘Heute sprechen wir über die Familie.’ You heard the sentence clearly but don't know what Familie means. What do you ask?", "Was bedeutet das Wort Familie?", "Bedeuten asks about meaning. The other replies ask for spelling, pronunciation, or repetition.", ["Wie schreibt man das Wort Familie?", "Wie spricht man das Wort Familie aus?", "Können Sie den Satz bitte wiederholen?"]]
  ],
  [ // Names and numbers
    ["A clerk needs to spell a surname for a form. Complete their question with schreiben: Wie ___ man den Nachnamen?", "schreibt", "Man uses the same form as er or sie."],
    ["Ask how old your partner is. Use du and start with Wie alt.", "Wie alt bist du?", "The conjugated verb bist follows the question phrase Wie alt."],
    ["Motia dictates the first six digits of her phone number: ‘null fünf vier, drei zwei eins’. Which number should the receptionist write down?", "054 321", "Null fünf vier is 054. Drei zwei eins is 321.", ["045 321", "054 312", "054 231"]]
  ],
  [ // Home and languages
    ["Complete with a preposition: Ich komme ___ Israel, aber ich wohne in Berlin.", "aus", "Use aus for where someone comes from."],
    ["Ask where someone lives using wo and wohnen. Use du.", "Wo wohnst du?", "Wo asks for location, and wohnen becomes wohnst with du."],
    ["Lena says ‘Ich komme aus Wien, aber jetzt wohne ich in Berlin.’ Which reply keeps both places straight?", "Du kommst aus Wien und wohnst jetzt in Berlin.", "Aus Wien names her origin. In Berlin names where she lives now.", ["Du kommst aus Berlin und wohnst jetzt in Wien.", "Du kommst aus Wien und wohnst immer noch dort.", "Du wohnst jetzt in Wien und ziehst bald nach Berlin."]]
  ],
  [
    ["Complete with mein in the correct form: Das ist ___ Schwester.", "meine", "Schwester is feminine, so use meine."],
    ["Complete with mein in the correct form: Auf dem Foto sehe ich ___ Bruder.", "meinen", "Bruder is a masculine direct object, so use meinen."],
    ["Choose the pair that introduces both relatives correctly.", "Das ist mein Bruder. Das ist meine Schwester.", "Use mein with Bruder and meine with Schwester after Das ist.", ["Das ist meinen Bruder. Das ist meine Schwester.", "Das ist meine Bruder. Das ist meine Schwester.", "Das ist mein Bruder. Das ist mein Schwester."]]
  ],
  [
    ["You call your sister each evening. Complete with anrufen: Abends ___ ich meine Schwester an.", "rufe", "The verb form rufe is second. The prefix an goes to the end."],
    ["Start with Um acht and use all the chunks: ich / auf / Um acht / stehe.", "Um acht stehe ich auf.", "The whole time phrase fills position one. Stehe stays second and auf goes last."],
    ["You want to say you get up at 7 and then have breakfast. Which works?", "Um sieben stehe ich auf. Dann frühstücke ich.", "Stehe and frühstücke are each in the second position.", ["Um sieben ich stehe auf. Dann frühstücke ich.", "Um sieben stehe ich auf. Dann ich frühstücke.", "Um sieben aufstehe ich. Dann frühstücke ich."]]
  ],
  [
    ["Use the comparative of gern: Ich esse gern Reis, aber ich esse ___ Nudeln.", "lieber", "Lieber means you prefer the second option."],
    ["Build the sentence with these chunks. Start with Ich: Fisch / nicht gern / esse / Ich.", "Ich esse nicht gern Fisch.", "Nicht gern expresses dislike and follows esse here."],
    ["You enjoy both tea and coffee, but prefer tea. Which reply says both?", "Ich trinke Kaffee gern, aber Tee lieber.", "Gern says you like coffee. Lieber says you prefer tea.", ["Ich trinke Tee gern, aber Kaffee lieber.", "Ich trinke Kaffee und Tee gleich gern.", "Ich trinke Tee gern, aber Kaffee nicht gern."]]
  ],
  [
    ["Complete with gehen: ___ Sie geradeaus bis zur Ampel.", "Gehen", "A formal instruction starts with the verb and then Sie."],
    ["Use abbiegen to tell someone to turn left. Use Sie and start with Biegen.", "Biegen Sie links ab.", "Biegen comes first, followed by Sie. The prefix ab goes last."],
    ["The shop is on the second street to the left. Which instruction gets someone there?", "Biegen Sie in die zweite Straße links ab.", "Zweite is second, and links is left.", ["Biegen Sie in die erste Straße links ab.", "Biegen Sie in die zweite Straße rechts ab.", "Gehen Sie an der zweiten Straße links vorbei."]]
  ],
  [
    ["The book is already on the table. Complete with the definite article: Das Buch liegt auf ___ Tisch.", "dem", "Wo? asks for a fixed location, so der Tisch becomes dem Tisch."],
    ["You're putting it on the table. Complete with the definite article: Ich lege das Buch auf ___ Tisch.", "den", "Wohin? asks for the destination, so der Tisch becomes den Tisch."],
    ["Which pair first says where the chair is, then where you're moving it?", "Der Stuhl steht neben dem Fenster. Ich stelle ihn neben das Sofa.", "The position uses dative dem. The destination uses accusative das.", ["Der Stuhl steht neben das Fenster. Ich stelle ihn neben das Sofa.", "Der Stuhl steht neben dem Fenster. Ich stelle ihn neben dem Sofa.", "Der Stuhl steht neben das Fenster. Ich stelle ihn neben dem Sofa."]]
  ],
  [
    ["You tell a friend it will get colder this evening. Use werden: Heute Abend ___ es kälter.", "wird", "Wird expresses change and agrees with es."],
    ["Say ‘It's raining today’ using Heute first and the verb regnen.", "Heute regnet es.", "Heute comes first, regnet second, and weather expressions need es."],
    ["It's cold now and the forecast says it will get warmer tomorrow. Which forecast matches?", "Heute ist es kalt, aber morgen wird es wärmer.", "Ist describes a state. Wird describes the change to warmer weather.", ["Heute wird es wärmer, aber morgen ist es kalt.", "Heute ist es warm, aber morgen wird es kälter.", "Heute ist es kalt, aber morgen wird es kälter."]]
  ],
  [
    ["Complete with ein in the correct form: Ich brauche ___ Apfel.", "einen", "Apfel is masculine and the direct object."],
    ["Make Apfel plural: Ich kaufe zwei ___.", "Äpfel", "The plural of Apfel changes A to Ä."],
    ["Which sentence orders one apple and one bottle of water?", "Ich brauche einen Apfel und eine Flasche Wasser.", "The direct objects take einen for masculine Apfel and eine for feminine Flasche.", ["Ich brauche ein Apfel und eine Flasche Wasser.", "Ich brauche einen Apfel und einen Flasche Wasser.", "Ich brauche eine Apfel und eine Flasche Wasser."]]
  ],
  [
    ["You are in Berlin and need a ticket to Hamburg. Fill in the preposition for your destination: Eine Fahrkarte ___ Hamburg, bitte.", "nach", "Nach names the destination city. Von would name the starting point."],
    ["Ask formally when the other person would like to travel. Start with Wann and use möchten and fahren.", "Wann möchten Sie fahren?", "The question word comes first, möchten second, and fahren at the end."],
    ["You already have a return ticket and now need a one-way ticket to Berlin. What do you ask for?", "Eine einfache Fahrkarte nach Berlin, bitte.", "Eine einfache Fahrkarte is a one-way ticket.", ["Eine einfache Fahrkarte von Berlin, bitte.", "Eine Fahrkarte nach Berlin und zurück, bitte.", "Zwei einfache Fahrkarten nach Berlin, bitte."]]
  ],
  [
    ["Write out the ordinal: Wir treffen uns am ___ Mai. (3. Mai)", "dritten", "Drei has the irregular ordinal dritt-, giving am dritten Mai."],
    ["Write out the ordinal: Die Party ist am ___ Juni. (21. Juni)", "einundzwanzigsten", "From 20, use the -sten ending after am."],
    ["A party moves from August 12 to August 20. Which wording gives the new date?", "am zwanzigsten August", "20 takes -sten, so use am zwanzigsten.", ["am zwölften August", "am zwanzigten August", "am zweiundzwanzigsten August"]]
  ],
  [
    ["Use all the chunks. Start with Dann: nach Hause / fahre / Dann / ich.", "Dann fahre ich nach Hause.", "Dann fills the first position, so fahre comes before ich."],
    ["Join the sentences with a comma and aber: Ich koche gern. Ich backe nicht gern.", "Ich koche gern, aber ich backe nicht gern.", "Aber connects the clauses and the second clause keeps subject + verb order."],
    ["Which sentence keeps both verbs in position two within their clause?", "Ich wohne in Haifa, aber heute arbeite ich in Tel Aviv.", "Heute fills the first slot after aber, so arbeite goes before ich.", ["Ich wohne in Haifa, aber heute ich arbeite in Tel Aviv.", "Ich in Haifa wohne, aber heute arbeite ich in Tel Aviv.", "Ich wohne in Haifa, aber heute in Tel Aviv ich arbeite."]]
  ],
  [
    ["Use wissen in the correct form: ___ du, wo das Café ist?", "Weißt", "Wissen has the irregular du form weißt."],
    ["Use kennen in the correct form: Ich ___ die Stadt gut.", "kenne", "Kennen expresses familiarity with a person, place, or thing."],
    ["Your partner knows the neighborhood. You want a specific fact: where the pharmacy is. What do you ask?", "Weißt du, wo die Apotheke ist?", "Use wissen for facts and put ist at the end of the embedded question.", ["Weißt du, wo ist die Apotheke?", "Kennst du die Apotheke?", "Weißt du, wann die Apotheke schließt?"]]
  ],
  [
    ["Put the chunks in order. Start with Normalerweise: auf / ich / um sieben / Normalerweise / stehe.", "Normalerweise stehe ich um sieben auf.", "Stehe follows the opening adverb, and auf goes last."],
    ["Rewrite with Am Sonntag at the start: Ich arbeite am Sonntag nie.", "Am Sonntag arbeite ich nie.", "The time phrase comes first and the verb stays second."],
    ["Which sentence says that cooking in the evening happens on some days, but gives no fixed schedule?", "Ich koche manchmal am Abend.", "Manchmal means sometimes.", ["Ich koche jeden zweiten Abend.", "Ich koche manchmal am Morgen.", "Ich koche nur sonntags am Abend."]]
  ],
  [
    ["You can stay until nine. Use all the chunks, starting with Ich: bleiben / bis neun / kann / Ich.", "Ich kann bis neun bleiben.", "Kann is the conjugated verb. The infinitive bleiben goes last."],
    ["Use all the chunks to invite your partner. Start with Wollen: zusammen / Wollen / kochen / wir.", "Wollen wir zusammen kochen?", "A yes/no question starts with the finite modal."],
    ["You can come on Saturday, but have to leave early. Which reply says both?", "Ich kann am Samstag kommen, aber ich muss früh gehen.", "Kann expresses ability. Muss expresses necessity.", ["Ich muss am Samstag kommen, aber ich kann früh gehen.", "Ich kann am Samstag nicht kommen, aber ich muss früh gehen.", "Ich kann am Samstag kommen, aber ich darf nicht früh gehen."]]
  ],
  [
    ["Use the formal form of ‘you’: Wann passt es ___?", "Ihnen", "Passen takes the dative for the person a time suits."],
    ["Write the full time phrase with Dienstag, zehn Uhr, am and um. Put the day first.", "am Dienstag um zehn Uhr", "Use am for the day and um for the clock time."],
    ["The receptionist offers Tuesday at ten. You are free only on Tuesday at eleven. What do you say?", "Dienstag passt mir. Geht es auch um elf Uhr?", "The day works. You are asking to move the time to eleven.", ["Um zehn passt es mir. Geht es auch am Mittwoch?", "Dienstag um zehn passt mir gut.", "Um elf passt es mir nur am Mittwoch."]]
  ],
  [
    ["Complete with ein in the correct form: Ich hätte gern ___ Kaffee.", "einen", "Kaffee is a masculine direct object, so use einen."],
    ["Use all the chunks to ask for the bill. Start with Wir: die Rechnung / gern / hätten / Wir.", "Wir hätten gern die Rechnung.", "Wir takes hätten, and the object follows gern."],
    ["The server brings tea. You ordered coffee. Which reply corrects the order politely?", "Entschuldigung, ich hatte einen Kaffee bestellt.", "Entschuldigung softens the correction. Einen Kaffee is what you ordered.", ["Entschuldigung, ich hatte einen Tee bestellt.", "Entschuldigung, ich hatte einen Kaffee und einen Tee bestellt.", "Entschuldigung, ich hatte einen Kaffee abbestellt."]]
  ],
  [
    ["The shop assistant shows you a scarf (der Schal). Say you are taking it: Danke, ich nehme ___.", "ihn", "Der Schal is masculine. As a direct object, its pronoun is ihn."],
    ["Ask to try on die Jacke. Start with Darf ich, replace die Jacke with a pronoun and use anprobieren.", "Darf ich sie anprobieren?", "Die Jacke becomes sie, and the infinitive anprobieren stays together at the end."],
    ["The seller shows you das Hemd, den Pullover and die Jacke. Which reply says you are taking the sweater and trying on the shirt?", "Ich nehme ihn. Darf ich es anprobieren?", "Der Pullover becomes ihn, and das Hemd becomes es.", ["Ich nehme es. Darf ich ihn anprobieren?", "Ich nehme ihn. Darf ich sie anprobieren?", "Ich nehme sie. Darf ich es anprobieren?"]]
  ],
  [
    ["Fill in the article: Ich fahre mit ___ Bus zum Bahnhof.", "dem", "Mit requires dative, so der Bus becomes dem Bus."],
    ["Combine zu + der: Gehen Sie ___ Haltestelle.", "zur", "Zu der contracts to zur."],
    ["Which sentence says you take the tram to the station?", "Ich fahre mit der Straßenbahn zum Bahnhof.", "Mit der Straßenbahn is the means of transport. Zum Bahnhof is the destination.", ["Ich fahre mit die Straßenbahn zum Bahnhof.", "Ich fahre mit der Straßenbahn zur Bahnhof.", "Ich fahre mit der Straßenbahn vom Bahnhof."]]
  ],
  [
    ["Choose the definite article for a fixed position: Das Sofa steht neben ___ Fenster.", "dem", "For location, neben takes dative. Das Fenster becomes dem Fenster."],
    ["Choose the definite article for a destination: Ich stelle das Sofa neben ___ Fenster.", "das", "For where you put something, neben takes accusative. Das Fenster stays das Fenster."],
    ["Which pair first puts the lamp on the table, then describes where it is?", "Ich stelle die Lampe auf den Tisch. Sie steht auf dem Tisch.", "The destination takes accusative den. The fixed position takes dative dem.", ["Ich stelle die Lampe auf dem Tisch. Sie steht auf den Tisch.", "Ich stelle die Lampe auf den Tisch. Sie steht auf den Tisch.", "Ich stelle die Lampe auf dem Tisch. Sie steht auf dem Tisch."]]
  ],
  [
    ["The doctor asks how you feel. Say your eyes hurt: Die Augen tun ___ weh.", "mir", "The eyes are the subject. The person who feels the pain takes the dative pronoun mir."],
    ["Complete with haben: Seit gestern ___ ich Kopfschmerzen.", "habe", "Use the present tense with seit if the pain is still ongoing."],
    ["The doctor asks ‘Seit wann tut Ihnen der Hals weh?’ Which reply answers what they asked?", "Seit gestern Abend.", "Seit wann asks when the ongoing symptom started.", ["Bis gestern Abend.", "Erst wieder ab morgen Abend.", "Nur gestern Abend, heute nicht mehr."]]
  ],
  [
    ["Complete with haben or sein: Am Samstag ___ ich nach Jerusalem gefahren.", "bin", "Fahren uses sein here because you travelled to a destination."],
    ["Rewrite in the Perfekt: Ich treffe meine Freunde.", "Ich habe meine Freunde getroffen.", "Treffen uses haben and the participle getroffen."],
    ["Which sentence means you had to work on Saturday?", "Ich musste am Samstag arbeiten.", "Musste is the past form of müssen.", ["Ich muss am Samstag arbeiten.", "Ich wollte am Samstag arbeiten.", "Ich konnte am Samstag arbeiten."]]
  ],
  [
    ["You arrive before check-in and want to leave your suitcase at reception. Fill in the polite form of können: ___ ich meinen Koffer hier lassen?", "Könnte", "Könnte ich …? is a polite way to make a request."],
    ["Complete with ein in the correct form: Ich habe für ___ Gast reserviert.", "einen", "Für takes the accusative. Gast is masculine."],
    ["The heater is broken and you want to change rooms. Which request matches?", "Die Heizung funktioniert nicht. Könnte ich ein anderes Zimmer bekommen?", "This describes the heating problem and asks for a different room.", ["Die Heizung funktioniert nicht. Könnte ich ein anderes Heizgerät bekommen?", "Das Zimmer ist zu laut. Könnte ich ein anderes Zimmer bekommen?", "Die Heizung funktioniert nicht. Könnten Sie sie reparieren?"]]
  ],
  [
    ["Put these chunks in order. Start with weil: weil / arbeite / ich / in Berlin.", "weil ich in Berlin arbeite", "Weil sends the finite verb to the end."],
    ["Put these chunks in order. Start with denn: ich / in Berlin / denn / arbeite.", "denn ich arbeite in Berlin", "Denn leaves the following main clause in normal subject–verb order."],
    ["Which sentence starts with the reason and keeps the verb in the right place in both clauses?", "Da ich früh anfange, stehe ich um sechs auf.", "Anfange goes last within the da clause. Stehe follows the whole opening clause.", ["Da ich fange früh an, stehe ich um sechs auf.", "Da ich früh anfange, ich stehe um sechs auf.", "Da ich anfange früh, stehe ich um sechs auf."]]
  ],
  [
    ["You text a colleague that you are running late: ‘Ich wollte dir sagen, ___.’ Complete the message with a clause starting with dass and using ich, später and kommen.", "dass ich später komme", "The finite verb komme goes at the end of the dass clause."],
    ["Put the chunks in order. Start with dass: angerufen / ich / habe / dass.", "dass ich angerufen habe", "The conjugated auxiliary habe goes after the participle in a dass clause."],
    ["You receive ‘Der Termin fällt aus.’ Which message relays the same information?", "Sagen Sie ihr bitte, dass der Termin ausfällt.", "The separable verb comes together at the end of the dass clause.", ["Sagen Sie ihr bitte, dass der Termin fällt aus.", "Sagen Sie ihr bitte, dass der Termin später stattfindet.", "Sagen Sie ihr bitte, dass der Termin ausfallen."]]
  ],
  [
    ["Fill in the informal dative pronoun: Soll ich ___ helfen? (du)", "dir", "Helfen takes dative, so du becomes dir."],
    ["Use all the chunks. Start with Du: mitbringen / einen Salat / Du / kannst.", "Du kannst einen Salat mitbringen.", "After a modal, the full infinitive mitbringen goes last."],
    ["You have already offered to help. Now ask what you are expected to bring. What do you say?", "Was soll ich mitbringen?", "Soll asks what is expected. Mitbringen stays as one word at the end.", ["Was soll ich mitnehmen?", "Was sollst du mitbringen?", "Was kann ich mitbringen?"]]
  ],
  [
    ["Complete the comparison: Das Hotel ist günstiger ___ das andere.", "als", "Different degrees use the comparative with als."],
    ["Complete the adjective: Ich nehme den ___ Flug. (comparative of günstig)", "günstigeren", "Add -er for the comparative and -en after masculine accusative den."],
    ["Two hotels cost exactly the same. Which sentence says so?", "Das erste Hotel ist genauso teuer wie das zweite.", "Genauso … wie expresses equality.", ["Das erste Hotel ist teurer als das zweite.", "Das erste Hotel ist günstiger als das zweite.", "Das erste Hotel ist genauso teuer als das zweite."]]
  ],
  [
    ["Put the chunks in order. Start with dass: ist / das / dass / eine gute Idee.", "dass das eine gute Idee ist", "A dass clause puts the conjugated verb ist at the end."],
    ["Complete the clause with helfen: Ich glaube, dass der Kurs mir ___.", "hilft", "Der Kurs takes the third-person form hilft, at the end of the clause."],
    ["You think the course is useful but expensive. Which reply includes both points?", "Ich glaube, dass der Kurs hilfreich ist, aber er ist teuer.", "Ist stays at the end of the dass clause. After aber, er ist starts a main clause.", ["Ich glaube, dass der Kurs ist hilfreich, aber er ist teuer.", "Ich glaube, dass der Kurs hilfreich ist, weil er günstig ist.", "Ich glaube, dass der Kurs hilfreich ist, aber ist er teuer."]]
  ],
  [
    ["Complete with ein in the correct form: Wie wäre es mit ___ Ausflug?", "einem", "Mit takes dative. Ein Ausflug becomes einem Ausflug."],
    ["Use all the chunks. Start with Wir: am Sonntag / fahren / könnten / Wir.", "Wir könnten am Sonntag fahren.", "Könnten is in position two, and fahren is the infinitive at the end."],
    ["Your partner proposes driving. You suggest the train as your first choice. What do you say?", "Lass uns lieber den Zug nehmen.", "Lass uns plus infinitive makes a suggestion, and lieber signals a preference.", ["Lass uns lieber zum Bahnhof fahren und dort ein Auto mieten.", "Wir hätten lieber den Zug nehmen sollen.", "Wie wäre es mit dem Zug, falls wir kein Auto finden?"]]
  ],
  [
    ["Put the chunks in order. Start with Am Sonntag: uns / treffen / Am Sonntag / wir / um elf.", "Am Sonntag treffen wir uns um elf.", "The time phrase takes the first slot. Treffen stays second."],
    ["Your group agreed to take the train. Report ‘Wir nehmen den Zug.’ Write only the clause starting with dass.", "dass wir den Zug nehmen", "In the dass clause, nehmen goes last."],
    ["Your partner heard Saturday, but you meant Sunday. Which reply repairs the misunderstanding?", "Was ich sagen wollte, ist: Sonntag passt besser.", "This restarts the statement and clearly supplies the intended day.", ["Was ich sagen wollte, ist: Samstag passt doch.", "Ich meinte Sonntag, aber Samstag passt mir besser.", "Ich dachte, du meinst Sonntag. Samstag passt mir besser."]]
  ]
];
