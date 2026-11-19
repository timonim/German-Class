# Sprechen!

A static German speaking course for Motia H. Open `index.html` to use the course. Your lesson progress is saved in the browser.

Each lesson opens with a grammar explanation and a visual showing what changes in the German examples. A speaking task applies the lesson topic. The phrase bank, pronunciation tips, model dialogue, and listening cards are available as optional support.

The course and grammar explanations are in `index.html`. The visual examples and speaking tasks are in `assets/lesson-plans.js`, in the same order as the course. Highlight the part of a German example being taught by surrounding it with vertical bars. When you add or move a lesson, keep the plans and grammar topics aligned with it. Lesson order also matters for existing saved progress.

Each unit quiz covers four lessons with eight written questions and four contextual multiple-choice questions. Edit `assets/unit-quiz-data.js` alongside the lessons it covers. Previous unit scores stay visible alongside scores for the current quizzes.

Lesson gap practice uses the sentences in `assets/lesson-gaps.js`, in course order. Each item pairs a complete German sentence with a bracketed missing word and an English cue.
