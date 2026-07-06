/**
 * mockQuestions.js
 * Grade-based MCQ question bank for the Starborn math webapp.
 * 10 MCQ questions per grade level (grades 3–8) — 60 questions total.
 * All questions use answerType: 'multiple-choice' only (no text-input).
 *
 * Exposed as window.STARBORN_QUESTION_BANK so app.js can import it
 * without a module bundler.
 */
(function () {
  "use strict";

  /** @type {Record<number, Array<{id:string, prompt:string, answerType:string, choices:string[], correctAnswer:string}>>} */
  var QUESTION_BANK = {

    // ── Grade 3 ──────────────────────────────────────────────────────────────
    3: [
      {
        id: "g3q1",
        prompt: "What is 7 × 8?",
        answerType: "multiple-choice",
        choices: ["48", "54", "56", "63"],
        correctAnswer: "56"
      },
      {
        id: "g3q2",
        prompt: "Which fraction is greater: 3/4 or 1/2?",
        answerType: "multiple-choice",
        choices: ["1/2", "3/4", "They are equal", "Cannot tell"],
        correctAnswer: "3/4"
      },
      {
        id: "g3q3",
        prompt: "A rectangle has a length of 6 and a width of 3. What is its perimeter?",
        answerType: "multiple-choice",
        choices: ["9", "18", "12", "24"],
        correctAnswer: "18"
      },
      {
        id: "g3q4",
        prompt: "What is 45 ÷ 5?",
        answerType: "multiple-choice",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "9"
      },
      {
        id: "g3q5",
        prompt: "How many minutes are in 2 hours?",
        answerType: "multiple-choice",
        choices: ["60", "90", "100", "120"],
        correctAnswer: "120"
      },
      {
        id: "g3q6",
        prompt: "What is 9 × 9?",
        answerType: "multiple-choice",
        choices: ["72", "81", "90", "63"],
        correctAnswer: "81"
      },
      {
        id: "g3q7",
        prompt: "Which shape has 4 equal sides and 4 right angles?",
        answerType: "multiple-choice",
        choices: ["Rectangle", "Rhombus", "Square", "Triangle"],
        correctAnswer: "Square"
      },
      {
        id: "g3q8",
        prompt: "Sam had 84 apples and gave 37 to friends. How many are left?",
        answerType: "multiple-choice",
        choices: ["41", "47", "51", "57"],
        correctAnswer: "47"
      },
      {
        id: "g3q9",
        prompt: "What is 352 + 148?",
        answerType: "multiple-choice",
        choices: ["480", "490", "500", "510"],
        correctAnswer: "500"
      },
      {
        id: "g3q10",
        prompt: "A bag has 3 apples and 5 oranges. What fraction of the fruits are apples?",
        answerType: "multiple-choice",
        choices: ["3/5", "5/8", "3/8", "5/3"],
        correctAnswer: "3/8"
      }
    ],

    // ── Grade 4 ──────────────────────────────────────────────────────────────
    4: [
      {
        id: "g4q1",
        prompt: "What is 12 × 15?",
        answerType: "multiple-choice",
        choices: ["150", "160", "170", "180"],
        correctAnswer: "180"
      },
      {
        id: "g4q2",
        prompt: "What is 2/3 of 24?",
        answerType: "multiple-choice",
        choices: ["8", "12", "16", "18"],
        correctAnswer: "16"
      },
      {
        id: "g4q3",
        prompt: "What is 3.5 + 2.7?",
        answerType: "multiple-choice",
        choices: ["5.2", "5.8", "6.2", "6.5"],
        correctAnswer: "6.2"
      },
      {
        id: "g4q4",
        prompt: "A rectangle has an area of 48 and a width of 6. What is its length?",
        answerType: "multiple-choice",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "8"
      },
      {
        id: "g4q5",
        prompt: "What is 125 ÷ 5?",
        answerType: "multiple-choice",
        choices: ["15", "20", "25", "30"],
        correctAnswer: "25"
      },
      {
        id: "g4q6",
        prompt: "Round 3,847 to the nearest hundred.",
        answerType: "multiple-choice",
        choices: ["3,000", "3,800", "3,900", "4,000"],
        correctAnswer: "3,800"
      },
      {
        id: "g4q7",
        prompt: "What is 5/8 − 1/8?",
        answerType: "multiple-choice",
        choices: ["1/4", "3/8", "1/2", "3/4"],
        correctAnswer: "1/2"
      },
      {
        id: "g4q8",
        prompt: "How many degrees are in a right angle?",
        answerType: "multiple-choice",
        choices: ["45°", "90°", "180°", "360°"],
        correctAnswer: "90°"
      },
      {
        id: "g4q9",
        prompt: "What is 304 × 3?",
        answerType: "multiple-choice",
        choices: ["892", "902", "912", "922"],
        correctAnswer: "912"
      },
      {
        id: "g4q10",
        prompt: "A hexagon has how many sides?",
        answerType: "multiple-choice",
        choices: ["5", "6", "7", "8"],
        correctAnswer: "6"
      }
    ],

    // ── Grade 5 ──────────────────────────────────────────────────────────────
    5: [
      {
        id: "g5q1",
        prompt: "What is 8 × 8?",
        answerType: "multiple-choice",
        choices: ["64", "72", "80", "88"],
        correctAnswer: "64"
      },
      {
        id: "g5q2",
        prompt: "What is the area of a square with side length 9?",
        answerType: "multiple-choice",
        choices: ["90", "81", "50", "36"],
        correctAnswer: "81"
      },
      {
        id: "g5q3",
        prompt: "Which of these is a prime number?",
        answerType: "multiple-choice",
        choices: ["9", "15", "53", "21"],
        correctAnswer: "53"
      },
      {
        id: "g5q4",
        prompt: "What is 3/4 × 8?",
        answerType: "multiple-choice",
        choices: ["3", "4", "6", "8"],
        correctAnswer: "6"
      },
      {
        id: "g5q5",
        prompt: "Solve using order of operations: 2 + 3 × 4",
        answerType: "multiple-choice",
        choices: ["12", "14", "16", "20"],
        correctAnswer: "14"
      },
      {
        id: "g5q6",
        prompt: "What is 15% of 60?",
        answerType: "multiple-choice",
        choices: ["6", "9", "12", "15"],
        correctAnswer: "9"
      },
      {
        id: "g5q7",
        prompt: "A cube has a side length of 4. What is its volume?",
        answerType: "multiple-choice",
        choices: ["16", "32", "48", "64"],
        correctAnswer: "64"
      },
      {
        id: "g5q8",
        prompt: "What is 2.5 × 4?",
        answerType: "multiple-choice",
        choices: ["6", "8", "10", "12"],
        correctAnswer: "10"
      },
      {
        id: "g5q9",
        prompt: "Convert 3/4 to a decimal.",
        answerType: "multiple-choice",
        choices: ["0.25", "0.34", "0.43", "0.75"],
        correctAnswer: "0.75"
      },
      {
        id: "g5q10",
        prompt: "What is the LCM of 4 and 6?",
        answerType: "multiple-choice",
        choices: ["6", "8", "12", "24"],
        correctAnswer: "12"
      }
    ],

    // ── Grade 6 ──────────────────────────────────────────────────────────────
    6: [
      {
        id: "g6q1",
        prompt: "Which ratio is equivalent to 3:4?",
        answerType: "multiple-choice",
        choices: ["4:5", "5:6", "6:8", "9:16"],
        correctAnswer: "6:8"
      },
      {
        id: "g6q2",
        prompt: "What is 25% of 80?",
        answerType: "multiple-choice",
        choices: ["15", "20", "25", "40"],
        correctAnswer: "20"
      },
      {
        id: "g6q3",
        prompt: "Solve for x: x + 7 = 15",
        answerType: "multiple-choice",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "8"
      },
      {
        id: "g6q4",
        prompt: "What is −5 + 8?",
        answerType: "multiple-choice",
        choices: ["−13", "−3", "3", "13"],
        correctAnswer: "3"
      },
      {
        id: "g6q5",
        prompt: "What is the mean of: 4, 8, 6, 10, 2?",
        answerType: "multiple-choice",
        choices: ["5", "6", "7", "8"],
        correctAnswer: "6"
      },
      {
        id: "g6q6",
        prompt: "A bag has 3 red and 2 blue balls. What is the probability of picking a red ball?",
        answerType: "multiple-choice",
        choices: ["1/3", "2/5", "1/2", "3/5"],
        correctAnswer: "3/5"
      },
      {
        id: "g6q7",
        prompt: "What is the area of a triangle with base 10 and height 6?",
        answerType: "multiple-choice",
        choices: ["15", "20", "30", "60"],
        correctAnswer: "30"
      },
      {
        id: "g6q8",
        prompt: "Simplify: 4x + 2x − 3x",
        answerType: "multiple-choice",
        choices: ["x", "2x", "3x", "5x"],
        correctAnswer: "3x"
      },
      {
        id: "g6q9",
        prompt: "What is 60% expressed as a fraction in simplest form?",
        answerType: "multiple-choice",
        choices: ["2/3", "3/5", "3/6", "6/10"],
        correctAnswer: "3/5"
      },
      {
        id: "g6q10",
        prompt: "The ratio of boys to girls is 3:2. There are 15 boys. How many girls are there?",
        answerType: "multiple-choice",
        choices: ["6", "8", "10", "12"],
        correctAnswer: "10"
      }
    ],

    // ── Grade 7 ──────────────────────────────────────────────────────────────
    7: [
      {
        id: "g7q1",
        prompt: "Solve for x: 2x + 3 = 11",
        answerType: "multiple-choice",
        choices: ["3", "4", "5", "7"],
        correctAnswer: "4"
      },
      {
        id: "g7q2",
        prompt: "What is the circumference of a circle with radius 7? (Use π ≈ 22/7)",
        answerType: "multiple-choice",
        choices: ["22", "44", "49", "154"],
        correctAnswer: "44"
      },
      {
        id: "g7q3",
        prompt: "What is −3 × −4?",
        answerType: "multiple-choice",
        choices: ["−12", "−7", "7", "12"],
        correctAnswer: "12"
      },
      {
        id: "g7q4",
        prompt: "A jacket costs $80 with a 15% discount. What is the sale price?",
        answerType: "multiple-choice",
        choices: ["$65", "$68", "$70", "$72"],
        correctAnswer: "$68"
      },
      {
        id: "g7q5",
        prompt: "Simplify: 2(x + 3) + x",
        answerType: "multiple-choice",
        choices: ["3x", "2x + 6", "3x + 3", "3x + 6"],
        correctAnswer: "3x + 6"
      },
      {
        id: "g7q6",
        prompt: "What is the probability of rolling an even number on a standard die?",
        answerType: "multiple-choice",
        choices: ["1/6", "1/3", "1/2", "2/3"],
        correctAnswer: "1/2"
      },
      {
        id: "g7q7",
        prompt: "If y = 2x − 1, what is y when x = 4?",
        answerType: "multiple-choice",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "7"
      },
      {
        id: "g7q8",
        prompt: "What is the surface area of a cube with side length 3?",
        answerType: "multiple-choice",
        choices: ["18", "27", "36", "54"],
        correctAnswer: "54"
      },
      {
        id: "g7q9",
        prompt: "Which of these is equivalent to 0.6?",
        answerType: "multiple-choice",
        choices: ["2/3", "3/5", "5/6", "6/5"],
        correctAnswer: "3/5"
      },
      {
        id: "g7q10",
        prompt: "Solve: 3(x − 2) = 9",
        answerType: "multiple-choice",
        choices: ["3", "4", "5", "7"],
        correctAnswer: "5"
      }
    ],

    // ── Grade 8 ──────────────────────────────────────────────────────────────
    8: [
      {
        id: "g8q1",
        prompt: "Given 2x + 3y = 12 and x = 3, what is y?",
        answerType: "multiple-choice",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "2"
      },
      {
        id: "g8q2",
        prompt: "What is √144?",
        answerType: "multiple-choice",
        choices: ["11", "12", "13", "14"],
        correctAnswer: "12"
      },
      {
        id: "g8q3",
        prompt: "A right triangle has legs of length 6 and 8. What is the hypotenuse?",
        answerType: "multiple-choice",
        choices: ["8", "10", "12", "14"],
        correctAnswer: "10"
      },
      {
        id: "g8q4",
        prompt: "What is 3² × 2³?",
        answerType: "multiple-choice",
        choices: ["36", "48", "64", "72"],
        correctAnswer: "72"
      },
      {
        id: "g8q5",
        prompt: "If f(x) = 3x − 5, what is f(4)?",
        answerType: "multiple-choice",
        choices: ["6", "7", "8", "12"],
        correctAnswer: "7"
      },
      {
        id: "g8q6",
        prompt: "Express 0.000045 in scientific notation.",
        answerType: "multiple-choice",
        choices: ["4.5 × 10⁻⁴", "4.5 × 10⁻⁵", "4.5 × 10⁵", "45 × 10⁻⁶"],
        correctAnswer: "4.5 × 10⁻⁵"
      },
      {
        id: "g8q7",
        prompt: "What is the slope of the line y = 3x + 2?",
        answerType: "multiple-choice",
        choices: ["−3", "1/3", "2", "3"],
        correctAnswer: "3"
      },
      {
        id: "g8q8",
        prompt: "Solve: x² = 49",
        answerType: "multiple-choice",
        choices: ["−7", "7", "±7", "49"],
        correctAnswer: "±7"
      },
      {
        id: "g8q9",
        prompt: "A cylinder has radius 5 and height 10. What is its volume? (Use π ≈ 3.14)",
        answerType: "multiple-choice",
        choices: ["250", "314", "785", "1570"],
        correctAnswer: "785"
      },
      {
        id: "g8q10",
        prompt: "Which equation represents a linear function?",
        answerType: "multiple-choice",
        choices: ["y = x²", "y = 1/x", "y = √x", "y = 2x + 1"],
        correctAnswer: "y = 2x + 1"
      }
    ]

  };

  // Expose to global scope so app.js can access it.
  window.STARBORN_QUESTION_BANK = QUESTION_BANK;

})();
