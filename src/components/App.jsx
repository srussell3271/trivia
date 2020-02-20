import React, { Component } from 'react';
import data from '../sample_data.json';
import '../css/App.css';
// import components
import {Question} from "./Question.jsx";
import {Answer} from "./Answer.jsx";

var database = [
  {
    "choices": [
      "48",
      "13",
      "52",
      "50"
    ],
    "correct_choice_index": 3,
    "question_text": "How many states are in the United States?",
    "user_id": "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
  },
  {
    "choices": [
      "Albany",
      "Tallahassee",
      "Austin",
      "Sacramento"
    ],
    "correct_choice_index": 0,
    "question_text": "What is the capital of New York?",
    "user_id": "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
  },
  {
    "choices": [
      "Thomas Jefferson",
      "George Washington",
      "Peter J",
      "George III"
    ],
    "correct_choice_index": 1,
    "question_text": "Who is the first president of the US",
    "user_id": "AFQ8f4Va95cch90Kv7mz4IXVOuu1"
  },
  {
    "choices": [
      "1",
      "0",
      "error",
      "false"
    ],
    "correct_choice_index": 0,
    "question_text": "What is 0! (zero factorial) ?",
    "user_id": "f7Qkv17pYFPjuS6z1LpmuCgpHwt2"
  },
  {
    "choices": [
      "He and Aldrin walked",
      "Tom and Jerry",
      "Batman and superman",
      "me and I"
    ],
    "correct_choice_index": 1,
    "question_text": "who was the first two person to walk on the moon?",
    "user_id": "X5OXxvRKtsRCOtfdTB2m5Oz6CXc2"
  },
  {
    "choices": [
      "Leonard Kleinrock",
      "Bill Gates",
      "Tim Cook",
      "Sundar Pichai"
    ],
    "correct_choice_index": 0,
    "question_text": "Who invented the internet?",
    "user_id": "1KbtQJejUlUh4q4HhbQBCdYf0qJ2"
  },
  {
    "choices": [
      "Bubble Sort",
      "Merge Sort",
      "QuickSort",
      "HeapSort"
    ],
    "correct_choice_index": 0,
    "question_text": "What was the First Sorting Algorithm",
    "user_id": "1KbtQJejUlUh4q4HhbQBCdYf0qJ2"
  },
  {
    "choices": [
      "Bill Gates",
      "Bruno Mars",
      "Elon Musk",
      "Usman A"
    ],
    "correct_choice_index": 2,
    "question_text": "Who is the CEO of SpaceX and Tesla?",
    "user_id": "BxN56aSzQfZZHrDSBL3bnLwRpfA3"
  },
  {
    "choices": [
      "Carrot",
      "Bird's Nest",
      "Noodles",
      "Orange Peels"
    ],
    "correct_choice_index": 1,
    "question_text": "Bird's nest soup contains which of the following?",
    "user_id": "jd1HMtFxl5dl3yo3XB9ZM4A01682"
  },
  {
    "choices": [
      "Bill Gates",
      "Larry Page",
      "Sergey Brin",
      "John Cena"
    ],
    "correct_choice_index": 1,
    "question_text": "Who is the CEO of Google?",
    "user_id": "a2PyEDe7OhYsORl9Dt4pLuA2J2A2"
  },
  {
    "choices": [
      "Angular",
      "Vue",
      "React",
      "Zoom"
    ],
    "correct_choice_index": 2,
    "question_text": "What JavaScript framework are we using in this project?",
    "user_id": "3O1GH3mVuWT798b1RShC703HU5n2"
  },
  {
    "choices": [
      "Bruno Mars",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Yuri Gageren"
    ],
    "correct_choice_index": 1,
    "question_text": "Who was the first person on the moon?",
    "user_id": "AFQ8f4Va95cch90Kv7mz4IXVOuu1"
  },
  {
    "choices": [
      "Death",
      "MEmes",
      "Yes",
      "No"
    ],
    "correct_choice_index": 1,
    "question_text": "What is the meaning of life?",
    "user_id": "BKMMLhnYfrTVrzGjyt6MtU3hnQh2"
  },
  {
    "choices": [
      "Micronesia",
      "Belarus",
      "Tasmania",
      "Andorra"
    ],
    "correct_choice_index": 2,
    "question_text": "Which of the following is not a country?",
    "user_id": "E9BJLPN5fgTirp3dD5MQciiyjmg1"
  },
  {
    "choices": [
      "1957",
      "1936",
      "1990",
      "1941"
    ],
    "correct_choice_index": 1,
    "question_text": "When was the first computer invented?",
    "user_id": "cnUKBgDaA6Ty7Jh3U6FzBRkGSyU2"
  },
  {
    "choices": [
      "e^x + c",
      "e^x",
      "x^e",
      "some number"
    ],
    "correct_choice_index": 0,
    "question_text": "What is the integral of e^x?",
    "user_id": "tiqJGeuYwzaVSFe5DxSPVcxG7VU2"
  },
  {
    "choices": [
      "Small Brain",
      "Big Brain",
      "Mega Mind",
      "Small Mind"
    ],
    "correct_choice_index": 2,
    "question_text": "Flash under tower to secure a kill?",
    "user_id": "dpqAuaH5MqXIm1xGm6Mvrr5L27v1"
  },
  {
    "choices": [
      "AWP",
      "AK-47",
      "M4A1",
      "M4A1-S"
    ],
    "correct_choice_index": 0,
    "question_text": "What is the best rifle to buy in csgo",
    "user_id": "cnUKBgDaA6Ty7Jh3U6FzBRkGSyU2"
  },
  {
    "choices": [
      "New York",
      "Albany",
      "Buffalo",
      "DuBois"
    ],
    "correct_choice_index": 1,
    "question_text": "Whats the capital of New York",
    "user_id": "dpqAuaH5MqXIm1xGm6Mvrr5L27v1"
  },
  {
    "choices": [
      "Norway",
      "Armenia",
      "Uzbekistan",
      "Poland"
    ],
    "correct_choice_index": 0,
    "question_text": "Which of the following countries borders Russia?",
    "user_id": "E9BJLPN5fgTirp3dD5MQciiyjmg1"
  },
  {
    "choices": [
      "5",
      "7",
      "10",
      "4"
    ],
    "correct_choice_index": 3,
    "question_text": "What is 2 + 2?",
    "user_id": "AFQ8f4Va95cch90Kv7mz4IXVOuu1"
  },
  {
    "choices": [
      "2",
      "3",
      "1",
      "0"
    ],
    "correct_choice_index": 0,
    "question_text": "what is 1 +1?",
    "user_id": "x3eSTK0FVegRVylUVWszAXIp1IO2"
  },
  {
    "choices": [
      "Hulk",
      "Super Saiyan 4 Goku",
      "Ultra Instinct Shaggy",
      "Superman"
    ],
    "correct_choice_index": 0,
    "question_text": "Who is stronger?",
    "user_id": "TnqqT35wzwhoUq4phK9lE9fRxvA2"
  },
  {
    "choices": [
      "One Piece",
      "Naruto",
      "Dragon Ball",
      "Bleach"
    ],
    "correct_choice_index": 0,
    "question_text": "Which series has the, currently, best selling manga?",
    "user_id": "TnqqT35wzwhoUq4phK9lE9fRxvA2"
  },
  {
    "choices": [
      "Flak emplacements",
      "Medic Trucks",
      "JagTiger",
      "Volksgrenadiers"
    ],
    "correct_choice_index": 2,
    "question_text": "Why are the Oberkommando OP?",
    "user_id": "dpqAuaH5MqXIm1xGm6Mvrr5L27v1"
  },
  {
    "choices": [
      "King Tigers",
      "Tigers",
      "Osttruppen",
      "Pioneers"
    ],
    "correct_choice_index": 2,
    "question_text": "Why are the Germans OP?",
    "user_id": "dpqAuaH5MqXIm1xGm6Mvrr5L27v1"
  },
  {
    "choices": [
      "01010100 01101111 01110111 01100101 01110010 00100000 01000100 01101001 01110110 01100101 0001010",
      "No",
      "You are Inting",
      "Stop running it down"
    ],
    "correct_choice_index": 0,
    "question_text": "01010100 01101111 01110111 01100101 01110010 00100000 01000100 01101001 01110110 01100101 0001010?",
    "user_id": "dpqAuaH5MqXIm1xGm6Mvrr5L27v1"
  },
  {
    "choices": [
      "This is not the right answer",
      "Two options are true but only one is \"correct\"",
      "The correct choice is above",
      "I am a scapegoat"
    ],
    "correct_choice_index": 0,
    "question_text": "Which of these is false?",
    "user_id": "tiqJGeuYwzaVSFe5DxSPVcxG7VU2"
  },
  {
    "choices": [
      "1100110011",
      "110001100011",
      "11000011000011",
      "None of the above"
    ],
    "correct_choice_index": 3,
    "question_text": "Which number is a prime number?",
    "user_id": "tiqJGeuYwzaVSFe5DxSPVcxG7VU2"
  },
  {
    "choices": [
      "Yes",
      "No",
      "I dont get it?",
      "Who is on first"
    ],
    "correct_choice_index": 0,
    "question_text": "Who's on first?",
    "user_id": "6yY7a13uJES8iHcf2BhNRAIXeYg2"
  },
  {
    "choices": [
      "Awesome",
      "Wonderful",
      "Could be better",
      "Terrible"
    ],
    "correct_choice_index": 0,
    "question_text": "How are you feeling today?",
    "user_id": "QiKM1sxxqWcV9pb8amOeomOncf23"
  },
  {
    "choices": [
      "red",
      "blue",
      "purple",
      "green"
    ],
    "correct_choice_index": 1,
    "question_text": "Red pill or Blue pill?",
    "user_id": "2rKKV95ckSUlPyZDwRelkIaXY5W2"
  },
  {
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct_choice_index": 3,
    "question_text": "What is 2+2",
    "user_id": "AA5l1ZwENIPPd6FvD1i2c6MSYlq1"
  },
  {
    "choices": [
      "Deal",
      "Seal",
      "No deal",
      "No seal"
    ],
    "correct_choice_index": 1,
    "question_text": "Deal or no deal",
    "user_id": "qK0Zi5fA7kb0BSiNl6QLbJ8eeJw2"
  },
  {
    "choices": [
      "si señor",
      "no",
      "help",
      "..."
    ],
    "correct_choice_index": 0,
    "question_text": "Are you ready for WW3?",
    "user_id": "2HJaQm0MQ1PsaYuoEiFdY8FR5yx2"
  },
  {
    "choices": [
      "Diverge",
      "Converge",
      "Neither",
      "Can not be determined"
    ],
    "correct_choice_index": 0,
    "question_text": "Is 1/n converging or diverging",
    "user_id": "rynbTnQXZucLIKZBn3lB3ADDqyQ2"
  },
  {
    "choices": [
      "Yes",
      "42",
      "Reproduce",
      "Idk"
    ],
    "correct_choice_index": 3,
    "question_text": "What's the meaning of life?",
    "user_id": "qK0Zi5fA7kb0BSiNl6QLbJ8eeJw2"
  },
  {
    "choices": [
      "Kirito",
      "Naruto",
      "Goku",
      "Asuna"
    ],
    "correct_choice_index": 0,
    "question_text": "Who's the main character of Sword Art Online?",
    "user_id": "ogCdcyYF1IYtGiLPbH3rfNIHDNZ2"
  },
  {
    "choices": [
      "blue",
      "red",
      "green",
      "yes"
    ],
    "correct_choice_index": 3,
    "question_text": "Why is blue the best color?",
    "user_id": "gxUC6NMn0OSkxIEKywnEOxNCawN2"
  },
  {
    "choices": [
      "Barack",
      "Obama",
      "Bobby",
      "Billy"
    ],
    "correct_choice_index": 1,
    "question_text": "What is Obama's Last Name?",
    "user_id": "fDjB3mDYxBWrn1wyQyITy5Ba8xu2"
  },
  {
    "choices": [
      "1665",
      "1775",
      "1885",
      "1995"
    ],
    "correct_choice_index": 1,
    "question_text": "When was the first car made?",
    "user_id": "J8O1hJO4YTeixVqK9Ol2mFScKhm1"
  },
  {
    "choices": [
      "Python",
      "Java",
      "React",
      "C++"
    ],
    "correct_choice_index": 1,
    "question_text": "What coding language is Minecraft coded in?",
    "user_id": "hVand2JX0zTzJqV7yNBpFuVhS5Y2"
  },
  {
    "choices": [
      "january 20",
      "november 7",
      "january 3",
      "november 30"
    ],
    "correct_choice_index": 0,
    "question_text": "what day does a new presidential term officially start?",
    "user_id": "mvEr7vSyBOMiaUPSNqaUVPPyOfd2"
  },
  {
    "choices": [
      "Tupac",
      "Logic",
      "J. Cole",
      "Kendrick Lamar"
    ],
    "correct_choice_index": 2,
    "question_text": "Who's the best rapper",
    "user_id": "2rKKV95ckSUlPyZDwRelkIaXY5W2"
  },
  {
    "choices": [
      "6 years",
      "4 years",
      "2 years",
      "8 years"
    ],
    "correct_choice_index": 2,
    "question_text": "how many years is a congressional term",
    "user_id": "mvEr7vSyBOMiaUPSNqaUVPPyOfd2"
  },
  {
    "choices": [
      "It's Me",
      "Mario",
      "Who are you",
      "Leave me alone"
    ],
    "correct_choice_index": 2,
    "question_text": "Hello?",
    "user_id": "qK0Zi5fA7kb0BSiNl6QLbJ8eeJw2"
  },
  {
    "choices": [
      "because it doesn't exist",
      "communist isn't ideal",
      "it doesn't follow KMT",
      "communist helps you communicate"
    ],
    "correct_choice_index": 2,
    "question_text": "Why is non-ideal gas communist?",
    "user_id": "v2gEmSfqTRXGDkeJxdZmcaT70HD3"
  },
  {
    "choices": [
      "21",
      "19",
      "100",
      "91"
    ],
    "correct_choice_index": 0,
    "question_text": "9+10",
    "user_id": "jqxHtR33ZOfr4Z3s97VovLAfbGw1"
  },
  {
    "choices": [
      "IDK",
      "1",
      "2",
      "100"
    ],
    "correct_choice_index": 0,
    "question_text": "How many anime have you watched?",
    "user_id": "ogCdcyYF1IYtGiLPbH3rfNIHDNZ2"
  },
  {
    "choices": [
      "Death",
      "Yuki",
      "Phone",
      "Hi"
    ],
    "correct_choice_index": 1,
    "question_text": "What is the word Yuno from \"Future Diary/ Mirai Nikki\" says the most?",
    "user_id": "ogCdcyYF1IYtGiLPbH3rfNIHDNZ2"
  },
  {
    "choices": [
      "Sword Art Online",
      "Konosuba",
      "My Hero Academia",
      "Re:Zero"
    ],
    "correct_choice_index": 3,
    "question_text": "Where is this quote from: \"I love Emilia.\" ?",
    "user_id": "ogCdcyYF1IYtGiLPbH3rfNIHDNZ2"
  },
  {
    "choices": [
      "Tsundere",
      "Kuudere",
      "Yandere",
      "Himedere"
    ],
    "correct_choice_index": 0,
    "question_text": "What is Taiga from Toradora?",
    "user_id": "ogCdcyYF1IYtGiLPbH3rfNIHDNZ2"
  },
  {
    "choices": [
      "Edgar?",
      "Who is Edgar?",
      "First Place Edgar",
      "Last Place Edgar"
    ],
    "correct_choice_index": 1,
    "question_text": "Who is Edgar?",
    "user_id": "jqikBoaEF9bz3HErMZ91qRkRokN2"
  },
  {
    "choices": [
      "You",
      "Mark Manson",
      "David Wong",
      "Jason Pargin"
    ],
    "correct_choice_index": 1,
    "question_text": "Who wrote Everything is F*cked, a book about hope?",
    "user_id": "f7Qkv17pYFPjuS6z1LpmuCgpHwt2"
  },
  {
    "choices": [
      "Magic",
      "Pink Lemons",
      "Food Dye",
      "Keanu Reeves"
    ],
    "correct_choice_index": 2,
    "question_text": "What makes pink lemonade pink?",
    "user_id": "Sd4mJSer88acj5FmfbfvUdaZaEk1"
  },
  {
    "choices": [
      "ada lovelace",
      "tanzema lovelace",
      "oscar lovelace",
      "shannon (wrong answer)"
    ],
    "correct_choice_index": 0,
    "question_text": "Who invented the first computer?",
    "user_id": "mNjkMrgjNAZSsXm0eIn0N75MBcE3"
  },
  {
    "choices": [
      "Richard Dawkins",
      "Steve Jobs",
      "Hatsune Miku",
      "Bill Gates"
    ],
    "correct_choice_index": 0,
    "question_text": "Who coined the term 'meme'",
    "user_id": "dt1ghgjHXXUsC7JRJmHY9CIfkW63"
  },
  {
    "choices": [
      "Ears???",
      "Horns",
      "Ossicles",
      "Antlers"
    ],
    "correct_choice_index": 2,
    "question_text": "What are the things on giraffes head called?",
    "user_id": "Sd4mJSer88acj5FmfbfvUdaZaEk1"
  },
  {
    "choices": [
      "Keanu Reeves",
      "You",
      "Me",
      "Null"
    ],
    "correct_choice_index": 0,
    "question_text": "Who is Breathtaking?",
    "user_id": "loOWmjsevYWb8kZkOK6XrmjneMj2"
  },
  {
    "choices": [
      "Emily Garvey",
      "Grace Hopper",
      "Ada Lovelace",
      "Edith Clarke"
    ],
    "correct_choice_index": 1,
    "question_text": "Who was the first computer programmer?",
    "user_id": "jqikBoaEF9bz3HErMZ91qRkRokN2"
  },
  {
    "choices": [
      "Dogs",
      "Cats",
      "Neither",
      "What?"
    ],
    "correct_choice_index": 0,
    "question_text": "What's better dogs or cats?",
    "user_id": "f7Qkv17pYFPjuS6z1LpmuCgpHwt2"
  },
  {
    "choices": [
      "woof",
      "meow",
      "Ring-ding-ding-ding-dingeringeding!",
      "tweet"
    ],
    "correct_choice_index": 2,
    "question_text": "What did the fox say?",
    "user_id": "omHOzoaFH0SWIrLgLEo6mTnzxfG2"
  },
  {
    "choices": [
      "Blue",
      "Purple",
      "Red",
      "N/A"
    ],
    "correct_choice_index": 1,
    "question_text": "What's Emily's favorite color?",
    "user_id": "xlIFZwpnqjhXliwbdHvNFugacSB3"
  },
  {
    "choices": [
      "Ock",
      "Man",
      "Bodega Cat",
      "Men who stand outside the deli"
    ],
    "correct_choice_index": 0,
    "question_text": "Who works at the deli",
    "user_id": "KbHlDYBJsygglo9c1CCrerin2272"
  },
  {
    "choices": [
      "Emily",
      "Edgar",
      "Stan",
      "Chris"
    ],
    "correct_choice_index": 3,
    "question_text": "Who was sick last Wednesday",
    "user_id": "jqikBoaEF9bz3HErMZ91qRkRokN2"
  },
  {
    "choices": [
      "It's your number neigbor",
      "FBI, Open up",
      "Keanu Reeves",
      "Your mom"
    ],
    "correct_choice_index": 1,
    "question_text": "New Phone Who Dis?",
    "user_id": "loOWmjsevYWb8kZkOK6XrmjneMj2"
  },
  {
    "choices": [
      "instagram",
      "facebook",
      "snapchat",
      "teens only read books and play outside"
    ],
    "correct_choice_index": 0,
    "question_text": "What social media do teens use the most?",
    "user_id": "mNjkMrgjNAZSsXm0eIn0N75MBcE3"
  },
  {
    "choices": [
      "NO, this is patrick!",
      "How did you get my #?",
      "Yes",
      "No"
    ],
    "correct_choice_index": 0,
    "question_text": "Is this the krusty krab?",
    "user_id": "loOWmjsevYWb8kZkOK6XrmjneMj2"
  },
  {
    "choices": [
      "Rush Hour 3",
      "American Pie",
      "Home Alone",
      "Spider-Man: Far From Home"
    ],
    "correct_choice_index": 0,
    "question_text": "What's Mamadou's favorite movie",
    "user_id": "vpDHFPg6WSZvuFAJkRejBSPsro12"
  },
  {
    "choices": [
      "PHP",
      "Java",
      "JavaScript",
      "SQL"
    ],
    "correct_choice_index": 1,
    "question_text": "Which of the following is the most popular programming language?",
    "user_id": "dt1ghgjHXXUsC7JRJmHY9CIfkW63"
  },
  {
    "choices": [
      "All of them",
      "21",
      "0",
      "Burritos?"
    ],
    "correct_choice_index": 1,
    "question_text": "How many people showed up on January 22 2020 by 4:50 to the code nation class at AMEX?",
    "user_id": "f7Qkv17pYFPjuS6z1LpmuCgpHwt2"
  },
  {
    "choices": [
      "1000",
      "2000",
      "3000",
      "27"
    ],
    "correct_choice_index": 1,
    "question_text": "Whats your calorie intake",
    "user_id": "NZNjOAn2w0Q0RZ6mv62WOkqZerA3"
  },
  {
    "choices": [
      "N/A",
      "1",
      "2",
      "3"
    ],
    "correct_choice_index": 0,
    "question_text": "How many siblings do I have?",
    "user_id": "vpDHFPg6WSZvuFAJkRejBSPsro12"
  },
  {
    "choices": [
      "Lime",
      "Blackcherry",
      "Orange",
      "Grapefruit"
    ],
    "correct_choice_index": 1,
    "question_text": "What is the best flavor of seltzer?",
    "user_id": "PxzFuD8CkcbLte3XE7GAJLUX6Lw1"
  },
  {
    "choices": [
      "flooring",
      "walls",
      "roofing",
      "electrical"
    ],
    "correct_choice_index": 2,
    "question_text": "What type of construction do dogs do?",
    "user_id": "dt1ghgjHXXUsC7JRJmHY9CIfkW63"
  },
  {
    "choices": [
      "No",
      "Yes",
      "No this is Patrick",
      "Emily"
    ],
    "correct_choice_index": 1,
    "question_text": "Is Mayonaise a instrument?",
    "user_id": "yFnsJmld6JMtIkrDB2eMog2yI0v1"
  },
  {
    "choices": [
      "Last Place Edgar",
      "Edgar",
      "Emily",
      "Emil"
    ],
    "correct_choice_index": 1,
    "question_text": "Who won last Kahoot?",
    "user_id": "jqikBoaEF9bz3HErMZ91qRkRokN2"
  },
  {
    "choices": [
      "27",
      "13",
      "50",
      "28"
    ],
    "correct_choice_index": 3,
    "question_text": "How many member states are in the EU",
    "user_id": "dt1ghgjHXXUsC7JRJmHY9CIfkW63"
  },
  {
    "choices": [
      "Little Seizures",
      "Papa John's",
      "Dominoes",
      "none of the above"
    ],
    "correct_choice_index": 0,
    "question_text": "What is Juicewrld's favorite pizzeria?",
    "user_id": "dt1ghgjHXXUsC7JRJmHY9CIfkW63"
  },
  {
    "choices": [
      "monkaS",
      "i don't think so",
      "no, i don't think i will",
      "no, i think we've had enough of your jokes"
    ],
    "correct_choice_index": 3,
    "question_text": "how about another joke?",
    "user_id": "H2lB7M6NtEbuA5fWm4aPtDm42e73"
  },
  {
    "choices": [
      "HAHAHA",
      "no i'm not",
      "(dead silence)",
      "hehe"
    ],
    "correct_choice_index": 1,
    "question_text": "you're crazy",
    "user_id": "H2lB7M6NtEbuA5fWm4aPtDm42e73"
  },
  {
    "choices": [
      "good",
      "fine",
      "decent",
      "awesome"
    ],
    "correct_choice_index": 0,
    "question_text": "how are you?",
    "user_id": "RihhN5mI1UTvYd57xDVn9Il2TX23"
  },
  {
    "choices": [
      "Bartholomew Jojo Simpson",
      "Jojo Siwa",
      "Jojo Rabbit",
      "Jotaro"
    ],
    "correct_choice_index": 0,
    "question_text": "Who is the realest Jojo?",
    "user_id": "uONznUaRSVNKDZMiym48D73mPwI3"
  },
  {
    "choices": [
      "Williams",
      "Campbell",
      "Morales",
      "Kincaid"
    ],
    "correct_choice_index": 0,
    "question_text": "What is Kayla's last name?",
    "user_id": "BNF81PaQhfZJQmaOhtaUNnX2KKp2"
  },
  {
    "choices": [
      "California",
      "Alaska",
      "Texas",
      "New York"
    ],
    "correct_choice_index": 1,
    "question_text": "What is the biggest state in the U.S.",
    "user_id": "ewC3m6ZEmpRlpdD1fyfNysiaIn32"
  },
  {
    "choices": [
      "Yes",
      "No",
      "I don't know",
      "I'm too rich for this"
    ],
    "correct_choice_index": 1,
    "question_text": "Is McDonalds wifi good?",
    "user_id": "d927jO995NPgI2E8lTl4iJ96KRZ2"
  },
  {
    "choices": [
      "Big Heroe 6",
      "UP!",
      "Star Wars",
      "Frozen 2"
    ],
    "correct_choice_index": 0,
    "question_text": "Which movie is Tadashi Hamada from?",
    "user_id": "zDehJbWDEZRzfqgtrAWmQcAKo1q2"
  },
  {
    "choices": [
      "Fortnite",
      "Minecraft",
      "Super Smash Bros. Ultimate",
      "Final Fantasy 7"
    ],
    "correct_choice_index": 1,
    "question_text": "Which of these are considered an indie game title?",
    "user_id": "OSXawNfp5DQM6HHbqUAE81AA0md2"
  },
  {
    "choices": [
      "5",
      "10",
      "6",
      "2"
    ],
    "correct_choice_index": 2,
    "question_text": "How many characters are in the 2nd Fighters Pass for Super Smash Bros. Ultimate?",
    "user_id": "OSXawNfp5DQM6HHbqUAE81AA0md2"
  },
  {
    "choices": [
      "10",
      "2",
      "0",
      "5"
    ],
    "correct_choice_index": 2,
    "question_text": "What is 10%2",
    "user_id": "AA5l1ZwENIPPd6FvD1i2c6MSYlq1"
  },
  {
    "choices": [
      "Alex's BFF",
      "Not Humanoid",
      "Not Not Humanoid",
      "\"Human\" + \"Noid\""
    ],
    "correct_choice_index": 2,
    "question_text": "What is Tony?",
    "user_id": "qK0Zi5fA7kb0BSiNl6QLbJ8eeJw2"
  },
  {
    "choices": [
      "Usain Bolt",
      "Yohan Blake",
      "Asafa Powell",
      "Nesta Carter -"
    ],
    "correct_choice_index": 0,
    "question_text": "Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?",
    "user_id": "J8O1hJO4YTeixVqK9Ol2mFScKhm1"
  },
  {
    "choices": [
      "price goes up, demand goes up",
      "price goes up, demand goes down",
      "price goes down, demand goes down",
      "i really don't know"
    ],
    "correct_choice_index": 1,
    "question_text": "what is the law of demand?",
    "user_id": "mvEr7vSyBOMiaUPSNqaUVPPyOfd2"
  },
  {
    "choices": [
      "4",
      "8",
      "16",
      "32"
    ],
    "correct_choice_index": 2,
    "question_text": "What is 2^2^2",
    "user_id": "AA5l1ZwENIPPd6FvD1i2c6MSYlq1"
  },
  {
    "choices": [
      "Black Hole",
      "Dead Sun",
      "Tony",
      "A 50-year old men living in his mom's basement eating pizza and playing video games everyday"
    ],
    "correct_choice_index": 0,
    "question_text": "What is the densest object in the universe?",
    "user_id": "qK0Zi5fA7kb0BSiNl6QLbJ8eeJw2"
  },
  {
    "choices": [
      "let x =",
      "var x =",
      "const x =",
      "All of the above"
    ],
    "correct_choice_index": 3,
    "question_text": "How do you initialize a variable in JavaScript?",
    "user_id": "hVand2JX0zTzJqV7yNBpFuVhS5Y2"
  },
  {
    "choices": [
      "61",
      "21",
      "59",
      "60"
    ],
    "correct_choice_index": 0,
    "question_text": "How many floors is salesforce tower?",
    "user_id": "GS9kXXa48gRf0vO8ELyLyJHOqd13"
  },
  {
    "choices": [
      "0.100M HCl",
      "0.200M HC2H3O2",
      "0.100M Na2CO3",
      "0.200M NaCl"
    ],
    "correct_choice_index": 2,
    "question_text": "Which of the following has the highest pH?",
    "user_id": "v2gEmSfqTRXGDkeJxdZmcaT70HD3"
  },
  {
    "choices": [
      "Mike Tyson",
      "Floyd Mayweather",
      "Muhammad Ali",
      "Manny Pacquiao"
    ],
    "correct_choice_index": 2,
    "question_text": "Which boxer was known as “The Greatest” and “The People’s Champion”?",
    "user_id": "J8O1hJO4YTeixVqK9Ol2mFScKhm1"
  },
  {
    "choices": [
      "1995",
      "2000",
      "1800",
      "1997"
    ],
    "correct_choice_index": 0,
    "question_text": "What year was 'Toy Story' created?",
    "user_id": "pcStq8JBQOPpbBW7yytsHb8efbT2"
  },
  {
    "choices": [
      "åΩ√≈",
      "≈œ∑",
      "ˆøπ",
      "ßå˜˙"
    ],
    "correct_choice_index": 3,
    "question_text": "åß∂ƒ©˙∆˚¬Ω≈ç√∫˜˜µ",
    "user_id": "gxUC6NMn0OSkxIEKywnEOxNCawN2"
  },
  {
    "choices": [
      "25",
      "5",
      "120",
      "60"
    ],
    "correct_choice_index": 3,
    "question_text": "What does 5! equal",
    "user_id": "AA5l1ZwENIPPd6FvD1i2c6MSYlq1"
  },
  {
    "choices": [
      "2.61",
      "2.43",
      "11.39",
      "13.52"
    ],
    "correct_choice_index": 2,
    "question_text": "The pH of a 1.23 * 10^-3 M solution of Ba(OH)2 aqueous solution is",
    "user_id": "v2gEmSfqTRXGDkeJxdZmcaT70HD3"
  },
  {
    "choices": [
      "10800",
      "3600",
      "9000",
      "7200"
    ],
    "correct_choice_index": 3,
    "question_text": "how many seconds is in two hours and a half?",
    "user_id": "mvEr7vSyBOMiaUPSNqaUVPPyOfd2"
  },
  {
    "choices": [
      "MOO",
      "M0O",
      "M8",
      "Woof"
    ],
    "correct_choice_index": 0,
    "question_text": "What sound do cows make?",
    "user_id": "mJt0xwcY2hSNNZ9Sh4tLDhq8kgG2"
  },
  {
    "choices": [
      "The answer after to this is false",
      "The answer before this is true",
      "No",
      "IT'S A TRAP!"
    ],
    "correct_choice_index": 2,
    "question_text": "What is the correct answer?",
    "user_id": "qK0Zi5fA7kb0BSiNl6QLbJ8eeJw2"
  },
  {
    "choices": [
      "x",
      "x^2/2",
      "x^3",
      "y"
    ],
    "correct_choice_index": 1,
    "question_text": "What's the integral of a variable x?",
    "user_id": "OSXawNfp5DQM6HHbqUAE81AA0md2"
  },
  {
    "choices": [
      "2",
      "5",
      "6",
      "3"
    ],
    "correct_choice_index": 3,
    "question_text": "314th digit of pi",
    "user_id": "mJt0xwcY2hSNNZ9Sh4tLDhq8kgG2"
  },
  {
    "choices": [
      "you :)",
      "not you :(",
      "me :)",
      "me but again :)"
    ],
    "correct_choice_index": 0,
    "question_text": "who's cool? :)",
    "user_id": "OSXawNfp5DQM6HHbqUAE81AA0md2"
  },
  {
    "choices": [
      "[\"Zero\"]+{}",
      "[]+{}",
      "{}+[]",
      "{}+[\"Zero\"]"
    ],
    "correct_choice_index": 2,
    "question_text": "Which of the following is equal to 0?",
    "user_id": "QAKhyACtGtWs7DcXadxsgBcx7Tz1"
  },
  {
    "choices": [
      "it doesn't matter.",
      "[object Object]",
      "render is low quality (144p).",
      "infinite return"
    ],
    "correct_choice_index": 3,
    "question_text": "why shouldn't you put setState() in render?",
    "user_id": "QAKhyACtGtWs7DcXadxsgBcx7Tz1"
  },
  {
    "choices": [
      "undefined",
      "\"undefined\"",
      "\"object\"",
      "\"number\""
    ],
    "correct_choice_index": 3,
    "question_text": "Evaluate the following in Javascript: typeof NaN",
    "user_id": "v2gEmSfqTRXGDkeJxdZmcaT70HD3"
  },
  {
    "choices": [
      "setState()",
      "1920s",
      "1930s",
      "1940s"
    ],
    "correct_choice_index": 1,
    "question_text": "What time period is the novel \"The Great Gatsby\" by F. Scott Fitzgerald set in?",
    "user_id": "QAKhyACtGtWs7DcXadxsgBcx7Tz1"
  }
]
// var databaseRef = database.ref("/questions");
// databaseRef.once("value").then(function(data) {
//  const questions = data.val();
// // Do something with the question
// console.log(questions)
// });



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  render() {
    return (

      <div className="app">
        
    <Question question_text= {database[this.state.index].question_text}> </Question>
    <Answer choices={database[this.state.index].choices} onclick={(index) => {

      alert(index == database[this.state.index].correct_choice_index)
      if(index == database[this.state.index].correct_choice_index){
        this.setState({index: this.state.index + 1})
      }
      }}> </Answer>
      </div>
    );
  }
}

export default App;