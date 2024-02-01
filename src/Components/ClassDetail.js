import React, { Suspense, useEffect, useRef, useState } from "react";
import "./MainPage.css";
import "./ClassDetail.css";
import "./MobileView.css";
import AgeFilterDropdown from "./AgeSelection";
import DownIcon from "../assets/down.png";
import UpIcon from "../assets/up.png";
import ClassCard from "./ClassCard";
const ClassDetail = (props) => {
  const [data, setData] = useState([]);
  const buttonRef = useRef(null);

  const class_data = [
    {
      id: "67",
      title: "Creative Writing: Hyperbole",
      class_details:
        "This class will be more fun than an amusement park and more enlightening than Einstein's Theory of Relativity! If you believed that... then you need to attend this class to learn that hyperboles are not meant to be taken literally! Rather, hyperboles are a literary device that writers can use to enhance their writing. \n\nIn this one-time live course, learners will examine uses of hyperbole from literature and from teacher examples. Interspersed with the instruction is plenty of involvement from the learners. Besides a fun warm-up in which they have to entice the class to attend a party by using hyperbole, they will be involved throughout the course in identifying and generating their own hyperboles. \n\nCentral to creating hyperboles is the notion that our hyperboles should be fresh and creative, not trite.\n\nThe final project is for learners to create a description or advertisement for a holiday using hyperboles. However, these are not regular holidays... these are holidays like Polar Bear Plunge Day, Pickle Day, Lost Sock Memorial Day... holidays that will spark their creativity! \n\nLearners are welcome to send me their assignments after class for feedback. ",
      prerequisite: "There are no prerequisites needed for the class.",
      learning_outcomes:
        "Discover the art of hyperbole in this engaging class, where you'll learn to creatively exaggerate like a pro, using literary examples and fun activities, culminating in crafting unique holiday descriptions",
      about_teacher:
        "I'm here because I love writing, reading, and teaching! I offer classes in writing and literature analysis (especially poetry), and I often try to combine the study of a book, poem, or short story with a creative writing assignment that applies the knowledge students have gained in my class. \nUnderpinning this passion is a strong writing background. For years I worked as a professional journalist for newspapers, magazines, and various freelance and online publications. I also hold dual degrees from the University of North Carolina at Chapel Hill in Journalism and French Literature. Even before homeschooling my own five children, I taught writing and literature classes to homeschooled students.",
      teaching_philosophy:
        "I believe that all education should strive to increase a student's love of learning. I believe that the best way to accomplish this is to engage the student with fun activities and creative methods of instruction -- but most importantly, the instructor must possess and display enthusiasm and passion for the subject!",
      teacher_pic: "https://imgur.com/Xz8KeoY.png",
      age_group: "9-13 years old",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://imgur.com/rhFxwr5.png",
      tutor: "Dana Lorelle",
      expand: true,
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      timeslots: [
        {
          "subClassId": "33_1",
          "timing": "Class 1: 20 December",
          "isPast": false
        },
        {
          "subClassId": "33_4",
          "timing": "Class 4: 9 February",
          "isPast": false
        },
        {
          "subClassId": "33_2",
          "timing": "Class 2: 31 January",
          "isPast": true
        },
        {
          "subClassId": "33_3",
          "timing": "Class 3: 5 January",
          "isPast": true
        }
      ],
      isMoveToPast: false,
      isSlotOpen: ["", "yes","yes","No"],
      class_tag: "course",
    },
    {
      id: "68",
      title: "Public Speaking and Debate Part 1",
      class_details:
        "Debate topic: \nShould the US provide free college for eligible students\n\nDid you know that public speaking is the number one fear for most people? Yet it's a necessary skill in nearly every profession and a crucial part of life in general. \n\nIn this class, learners will overcome that fear by consistently practicing their public speaking and debate skills. \nThe class will start with a short lesson on the fundamentals of debate (logic, fallacy, etc).   These lessons will change weekly but learners will be able to participate in class even if they didn’t join from the start. \nThe second half of the class will be spent practicing beginner debate skills. Learners will be given the topic a week in advance so they can do some research and gather facts to support their opinion. \n\nThis class is to introduce learners to speech writing and debate and is an open debate style.  Leaners will all be given a chance to present their opening argument. Then we will go to the rebuttal round where they are encouraged to counter the opposition's arguments. A debate can't be won just by speaking, it's just as important to listen. We will encourage them to listen to the other side and think of ways to weaken their points.",
      prerequisite: "There are no prerequisites needed for the class.",
      learning_outcomes:
        "Our primary goal in this class is to build confidence and communication skills. Learners will also benefit from learning basic debate fundamentals, how to organize and express their thoughts, the importance of data and logic, crucial listening skills and how to disagree with others.",
      about_teacher:
        "Bill has coached and instructed speech and debate for more than 30 years with a variety of University, high school, & middle school programs around the country. In the last decade he has coached 7 high school national finalists and 11 middle school national finalists. He has coached 5 high school national champions and 3 middle school national champions in his career.  Bill received a B.A. in Speech Communication  from Western Kentucky University in 2002 and also competed in speech and debate at the collegiate level.",
      teaching_philosophy:
        "In my classes I like to teach debaters the foundational components of debate while guiding their discovery of their unique voices.  It is my belief that debate allows students to critically explore the world around them and advocate for the policies and changes they would like to see in that world.",
      teacher_pic: "https://imgur.com/5iGXs5Z.png",
      age_group: "8-13 years old",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://imgur.com/wOSU7YY.png",
      tutor: "Bill Thompson",
      expand: true,
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      timeslots: [
        {
          subClassId: "33_1",
          timing: "31 January",
          isPast: true,
        },
        {
          subClassId: "33_2",
          timing: "5 February",
          isPast: false,
        },
      ],
      isMoveToPast: true,
      isSlotOpen: ["", "yes"],
      class_tag: "onetime",
    },
    {
      id: "69",
      title: "Historic Clashes: 5 Game Changing Battles",
      class_details:
        "In this class we are going to learn about 5 epic battles that changed the course of history. If any of these battles end differently than they did, the whole course of world history is different. We’re going to learn about the build up -- the different sides and the origins of the dispute and why these sides were at war -- and we’ll talk about how the world would look differently today if they other side had won.\n\nThese are epic stories with great leaders, larger than life characters, and remarkable acts of heroism.\n\nThe 5 Battles:\n\n1. Battle of Constantinople\n2. Spanish Armada defeated\n3. Battle of Yorktown\n4. Battle of Waterloo\n5. D Day and the Beaches of Normandy\n\nThis is one time class that covers 5 turning points in history, which means we devote about ten minutes to each battle, so it's a brief overview. Class is interactive, students are invited to participate, ask questions, and use the chat to interact with each other and the teacher.\n\nBattle 1\nThe end of the Roman Empire as Constantinople falls to the Ottoman Empire in 1453.\n\nBattle 2\nThe Spanish Armada is defeated in 1588. The Spanish have been the dominant world power. Why is Spanish the prevalent language in most of Central and South America? Because these were all Spanish colonies as Spain was the dominant world power and their navy, the Spanish Armada, was viewed as unstoppable. 1588 is a turning point when England’s Sir Francis Drake defeated the Spanish Armada.\n\nBattle 3\nThe Battle of Yorktown. Great Britain surrenders to the United States and French forces, ending what we call in the United States the Revolutionary War. The Declaration of Independence was a big deal, but if the United States lose the war, America is still a part of Great Britain today. How does the world look different today with no United States?\n\nBattle 4\nThe Battle of Waterloo. I was in France last year and the French have mixed feelings about this guy Napoleon. On the one hand, he represents this era of French power and dominance. On the other hand, he was trying to take over the world by force and military conquest -- and he was successful at taking over much of Europe. At the Battle of Waterloo, Napoleon is finally defeated.\n\nBattle 5\nD Day and the Beaches of Normandy. The decisive day that was the turning point in World War II when the United States and the Allies begin to beat back the advances of Adolf Hitler and Nazi Germany. \n\nThis is a great survey course of world history. Students are going to learn about some watershed moments and colossal figures in history.\n",
      prerequisite: "There are no prerequisites needed for the class.",
      learning_outcomes:
        "Students will have a basic understanding of these five moments in world history. These five battles span 500+ years of world history so understanding the order in which the events unfolded also serve as a basic timeline of the unfolding of world history. But please note, this is a 55 minute class. Students won't be experts, but they will know something. I also offer this class as on multi-day course that meets 5 separate times. It's a good idea to take this class as a one time-class to get an overview, then, if you are interested in learning more, tame the multi-day class that meets 5 times.",
      about_teacher:
        "Hello, I'm Clark, and I'm thrilled to be your child's guide on an exciting journey. As a passionate educator, I've developed my classes specifically for an online, virtual classroom. I began teaching online 15 years ago in a corporate setting, training executives in the non-profit sector, and transferred the skills of creating a high-energy, engaging environment for professional adults to give kids a similar experience in a virtual classroom. I'm here to introduce your young learners to the captivating world of great ideas, heroes of history, and some of the most remarkable stories ever told, and we have a lot of fun together.\n\nOur world is vast and filled with wonders, and my goal is to ignite your child's curiosity, fostering an appreciation for the world's diversity and rich cultures. My approach draws from my extensive experiences as a world traveler, having explored and lived in twenty-two countries. Additionally, I've had the privilege of serving as the former deputy director of the historic home of President Ronald Reagan, have authored two books, run multiple businesses, and even once ran for United States Congress.",
      teaching_philosophy:
        "If you're a teacher, and you're trying to do online what you once did in a brick and mortar classroom, you're doing it wrong. The virtual classroom is different, and a good online teacher is going to build a class from the ground up knowing that this is a virtual experience, not just a lecture that’s taking place over Zoom.\n\nThat’s why I use programs like Nearpod, that give my students the opportunity to have an immersive experience, and actually look around the places we are talking about in class through a VR mode in Nearpod. Students submit work to me, live, and I can see their screens while they are working on tasks. Getting my students to talk is important, so I'll invite kids to participate in polls during class, and ask them “why” they voted the way they did. The opportunity for self-expression makes them far more likely to remember what we talked about in class that day. \n",
      teacher_pic: "https://i.imgur.com/g5C8ExO.png",
      age_group: "10-15 years old",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://imgur.com/JJ0nADG.png",
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      tutor: "Clark Vandeventer",
      expand: true,
      timeslots: [
        {
          subClassId: "33_1",
          timing: "31 January",
          isPast: true,
        },
        {
          subClassId: "33_2",
          timing: "5 February",
          isPast: false,
        },
      ],
      isMoveToPast: false,
      isSlotOpen: ["", "yes"],
      class_tag: "course",
    },
    {
      id: "70",
      title: "Creative Writing Series- Animals",
      class_details:
        "Let's take an adventure together!  What do you say?  Creative writing is just that!  An adventure.  In creative writing we can  get  inspiration from a variety of things:  scenery, a painting, a sound or even an emotion. \nIn this class, your  inspiration will come from pictures of  animals. \nUsing your imagination and creative ideas, the teacher will guide you through a piece of writing from brainstorming to a finished piece. \nThis class is interactive, engaging and fun!\nJoin us in your writing adventure !",
      prerequisite: "There are no prerequisites needed for the class.",
      learning_outcomes:
        "Learn to harness the power of visual inspiration from animal imagery to develop imaginative writing skills, from initial brainstorming to crafting a complete piece, in an interactive and enjoyable class environment",
      about_teacher:
        "I graduated with QTS in 2015 and  have worked in schools mainly primary since, after having my own children in 2016 and onwards I found a passion in online teaching and tuition. I have broadened my horizons and now offer pre-K to ages 16 and thoroughly love the diversity of the different age ranges. \n",
      teaching_philosophy:
        "I am a kind and patient teacher with the view that every child deserves to be able to succeed. I pride my abilities to adapt to different styles of teaching to suit the needs of the learner. Everyone learns in their unique way.\n",
      teacher_pic: "https://i.imgur.com/8tb0nFn.png",
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      age_group: "8-12 years old",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://imgur.com/xXUDB4n.png",
      tutor: "Lianne Brunt",
      expand: true,
      timeslots: [
        {
          subClassId: "33_1",
          timing: "31 January",
          isPast: true,
        },
        {
          subClassId: "33_2",
          timing: "5 February",
          isPast: false,
        },
      ],
      isMoveToPast: false,
      isSlotOpen: ["", "yes"],
      class_tag: "course",
    },
    {
      id: "71",
      title: "The Logic Club",
      class_details:
        "Do you love logic puzzles, brainteasers, or any challenge to test that big brain? This is for you. These puzzles and codes are the basis for many Escape Rooms ! Work with a team to solve the challenges. Some puzzle examples are: Cryptograms, Star Battles, WordMaster, Sudoku, Logic Grid Puzzles, and much more. And don’t worry, all puzzles will be explain thoroughly in the class.",
      prerequisite: "There are no prerequisites needed for the class.",
      learning_outcomes:
        "Students will learn to solve a wide range of logic puzzles, enhancing their problem-solving and teamwork skills",
      about_teacher:
        "Teaching and working with kids has always been my passion. I was a classroom teacher in the public schools for over 15 years and, for the past 14 years, have been helping my wife homeschool as well.  I currently hold state certifications in Florida (certificate #  960883) in the areas of Middle Grades Social Science and  Language Arts and Elementary Education.  I have extensive classroom experience with all Elementary and Middle Grades subject content and have done private tutoring for many years in Math, Civics, Science, and Language Arts.",
      teaching_philosophy:
        "I have always been very curious and creative and I love to inspire it in kids (both my own and others) as well.  I like to teach through projects, which give students a choice on the way they learn and show their understanding.  I also love to teach through games and like to combine game elements in my classes. And, of course, lots of interaction.",
      teacher_pic: "https://i.imgur.com/0KQasIg.png",
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      age_group: "8-13 years old",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://imgur.com/Wy8vNIW.png",
      tutor: "Aaron Potstick",
      expand: true,
      timeslots: [
        {
          subClassId: "33_1",
          timing: "31 January",
          isPast: true,
        },
        {
          subClassId: "33_2",
          timing: "5 February",
          isPast: false,
        },
      ],
      isMoveToPast: false,
      isSlotOpen: ["", "yes"],
      class_tag: "onetime",
    },
    {
      id: "72",
      title: "The Week In News: A Current Events Discussion Class",
      class_details:
        "Learners will practice their public speaking skills while discussing and debating news. This is a great chance for them to learn more about the news of the world and turn that knowledge into peer discussions. We will prompt learners with questions and games, but this is a peer-led conversation-style class. The goal is for the students to get more comfortable sharing their own thoughts and opinions while listening and responding to others in a respectful way. \n\nWe will post links to the articles that we will be discussing in class for review prior to class. These articles will come from credible news sources on a level appropriate for kids.  We will be discussing current events, discoveries in science, and some overall fun news.  We will do our absolute best to make sure the articles and sources are unbiased.  During class, we will guide the learners through the key points of those articles and provide opportunities to share ideas, opinions, debate with each other, etc. We will wrap up the class by playing a game of Kahoot for a final review of that week’s news. ",
      prerequisite:
        "Learners will be provided with several articles to read over prior to class. This is not required but does leave more time for discussion rather than review. ",
      learning_outcomes:
        "The overall goal of this course is to educate our learners about happenings in the world around us while giving them a platform to sort out and share their ideas and perspectives.",
      about_teacher:
        "I started debate in high school, and it quickly became an enormous part of my life. I competed in several different kinds of debate and achieved success on the state and national level. After graduating high school, I began studying Philosophy at the University of Edinburgh in Scotland, where I also joined and eventually coached the Edinburgh Debates Union. I have coached debate summer camps, privately coached, taught students in China, Singapore, the United States, the United Kingdom, as well as coaching the Czech National Debate team. I recently graduated college and am now dedicating myself completely to helping other students begin their debate journey.",
      teaching_philosophy:
        "I believe that all education should be fun. There’s nothing worse than a dry, boring class. I like to incorporate games, interactive activities, and thought provoking questions into my lessons so that students not only learn better, but look forward to coming to class each week.",
      teacher_pic: "https://i.imgur.com/Bvlue7U.png",
      age_group: "8-13 years old",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://i.imgur.com/Th0QO25.png",
      tutor: "Tia Speece",
      expand: true,
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      timeslots: [
        {
          subClassId: "33_1",
          timing: "31 January",
          isPast: true,
        },
        {
          subClassId: "33_2",
          timing: "5 February",
          isPast: false,
        },
      ],
      isMoveToPast: false,
      isSlotOpen: ["", "yes"],
      class_tag: "onetime",
    },
    {
      id: "74",
      title: "Solving matrix logic games",
      class_details:
        "A introduction to logical reasoning and thinking using matrix logic and other fun puzzles",
      prerequisite: "There are no prerequisites needed for the class.",
      learning_outcomes:
        "Familiarizing students with logic through a gamified process",
      about_teacher:
        "Alan earned his bachelor’s degree in mathematics and master’s degree in economics from Rutgers University, New Brunswick. Additionally, Alan is about to complete his Ph.D. in economics. Alan has taught various courses at Rutgers, TCNJ, and even Princeton, from statistics to American economic history to The Philosophical and Economic Roots of Inequality. He has also taught various math, statistics, and physics levels at many after-school extra-curricular programs.",
      teaching_philosophy:
        "Alan’s classes are all about classroom engagement! Be prepared to talk, think and discuss like never before! Through a combination of games and other fun activities, Alan seeks to lead classes that will leave his students thinking, laughing, and learning.",
      teacher_pic: "https://imgur.com/gH00FxU.png",
      age_group: "8-11 years old",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://imgur.com/nDl2wwz.png",
      tutor: "Alan Ronald Chernoff",
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      expand: true,
      timeslots: [
        {
          subClassId: "33_1",
          timing: "31 January",
          isPast: true,
        },
        {
          subClassId: "33_2",
          timing: "5 February",
          isPast: false,
        },
      ],
      isMoveToPast: false,
      isSlotOpen: ["", "yes"],
      class_tag: "ongoing",
    },
    {
      id: "75",
      title: "Public Speaking and Debate Part 2",
      class_details:
        "Debate topic: Should the US provide free college for eligible students\n\nDid you know that public speaking is the number one fear for most people? Yet it's a necessary skill in nearly every profession and a crucial part of life in general. \n\nIn this class, learners will overcome that fear by consistently practicing their public speaking and debate skills. \nThe class will start with a short lesson on the fundamentals of debate (logic, fallacy, etc).   These lessons will change weekly but learners will be able to participate in class even if they didn’t join from the start. \nThe second half of the class will be spent practicing beginner debate skills. Learners will be given the topic a week in advance so they can do some research and gather facts to support their opinion. \n\nThis class is to introduce learners to speech writing and debate and is an open debate style.  Leaners will all be given a chance to present their opening argument. Then we will go to the rebuttal round where they are encouraged to counter the opposition's arguments. A debate can't be won just by speaking, it's just as important to listen. We will encourage them to listen to the other side and think of ways to weaken their points.",
      prerequisite: "There are no prerequisites needed for the class.",
      learning_outcomes:
        "Our primary goal in this class is to build confidence and communication skills. Learners will also benefit from learning basic debate fundamentals, how to organize and express their thoughts, the importance of data and logic, crucial listening skills and how to disagree with others.",
      about_teacher:
        "Bill has coached and instructed speech and debate for more than 30 years with a variety of University, high school, & middle school programs around the country. In the last decade he has coached 7 high school national finalists and 11 middle school national finalists. He has coached 5 high school national champions and 3 middle school national champions in his career.  Bill received a B.A. in Speech Communication  from Western Kentucky University in 2002 and also competed in speech and debate at the collegiate level.",
      teaching_philosophy:
        "In my classes I like to teach debaters the foundational components of debate while guiding their discovery of their unique voices.  It is my belief that debate allows students to critically explore the world around them and advocate for the policies and changes they would like to see in that world.",
      teacher_pic: "https://imgur.com/5iGXs5Z.png",
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      age_group: "8-13 years old",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://imgur.com/wOSU7YY.png",
      tutor: "Bill Thompson",
      expand: true,
      timeslots: [
        {
          subClassId: "33_1",
          timing: "31 January",
          isPast: true,
        },
        {
          subClassId: "33_2",
          timing: "5 February",
          isPast: false,
        },
      ],
      isMoveToPast: false,
      isSlotOpen: ["", "yes"],
      class_tag: "ongoing",
    },
    {
      id: "76",
      title: "An Introduction to Formal Logic",
      class_details:
        "An introduction to formal logic and predicate calculus where students are introduced to propositional phrases and truth tables.",
      prerequisite: "There are no prerequisites needed for the class.",
      learning_outcomes:
        "Familiarize students with the foundations of formal logic that is used in philosophy, mathematics, computer science and linguistics.",
      about_teacher:
        "Alan earned his bachelor’s degree in mathematics and master’s degree in economics from Rutgers University, New Brunswick. Additionally, Alan is about to complete his Ph.D. in economics. Alan has taught various courses at Rutgers, TCNJ, and even Princeton, from statistics to American economic history to The Philosophical and Economic Roots of Inequality. He has also taught various math, statistics, and physics levels at many after-school extra-curricular programs.",
      teaching_philosophy:
        "Alan’s classes are all about classroom engagement! Be prepared to talk, think and discuss like never before! Through a combination of games and other fun activities, Alan seeks to lead classes that will leave his students thinking, laughing, and learning.",
      teacher_pic: "https://imgur.com/gH00FxU.png",
      age_group: "11-15 years old",
      display_timing: "Fridays, 3:30 AM - 9:30 AM (MST)",
      duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
      link: "https://imgur.com/nhSxLCF.png",
      tutor: "Alan Ronald Chernoff",
      expand: true,
      timeslots: [
        {
          subClassId: "33_1",
          timing: "31 January",
          isPast: true,
        },
        {
          subClassId: "33_2",
          timing: "5 February",
          isPast: false,
        },
      ],
      isMoveToPast: true,
      isSlotOpen: ["", "yes"],
      class_tag: "ongoing",
    },
  ];

  useEffect(() => {
    const fetchClassData = async () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      try {
        const response = await fetch(
          `https://backend-z29v.onrender.com/info?timezone=${timezone}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(class_data);
      } catch (err) {
        console.log("Error");
      }
    };

    fetchClassData();
  }, []);

  // console.log(data,"after api call")

  const transformedClasses = data.reduce((result, classItem) => {
    result[classItem.id] = "";
    return result;
  }, {});

  const transformedfullClasses = data.reduce((result, classItem) => {
    result[classItem.id] = [];
    return result;
  }, {});

  const [newfulldata, setNewFullData] = useState(transformedfullClasses);

  useEffect(() => {
    if (Object.keys(props.fullclass).length > 0) {
      setNewFullData(props.fullclass);
    }
  }, [props.fullclass]);

  const storedSelections = localStorage.getItem("selectedTimeSlots");
  let initial_state = [];
  if (storedSelections) {
    initial_state = JSON.parse(storedSelections);
  } else {
    initial_state = transformedClasses;
  }

  const storedmoreSelections = localStorage.getItem("moreSlots");
  let more_select_state = {};
  if (storedmoreSelections) {
    more_select_state = JSON.parse(storedmoreSelections);
  }

  const [expandedClassId, setExpandedClassId] = useState(null);
  const [selectedTimeslots, setSelectedTimeslots] = useState(initial_state);
  const [moreslots, setMoreSlots] = useState(more_select_state);
  const [isActive, setIsActive] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedAges, setSelectedAges] = useState(null);
  const [isDropDown, setIsDropDown] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "selectedTimeSlots",
      JSON.stringify(selectedTimeslots)
    );
  }, [selectedTimeslots]);

  useEffect(() => {
    if (data.length != 0) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem("moreSlots", JSON.stringify(moreslots));
  }, [moreslots]);

  const toggleDescription = (classId) => {
    if (expandedClassId === classId) {
      setExpandedClassId(null);
    } else {
      setExpandedClassId(classId);
    }
  };

  const handleTimeslotSelection = (classid, timeslotObj) => {
    setSelectedTimeslots((prevSelectedTimeSlots) => {
      const updatedSelection = { ...prevSelectedTimeSlots };
      if (updatedSelection[classid]) {
        const index = updatedSelection[classid].findIndex(
          (obj) => obj.subClassId === timeslotObj.subClassId
        );

        if (index !== -1) {
          updatedSelection[classid].splice(index, 1);
          if (updatedSelection[classid].length === 0) {
            delete updatedSelection[classid];
          }
        } else {
          updatedSelection[classid].push(timeslotObj);
        }
      } else {
        updatedSelection[classid] = [timeslotObj];
      }

      return updatedSelection;
    });

    // setSelectedTimeslots((prevSelectedTimeSlots) => {
    //   const updatedSelection = { ...prevSelectedTimeSlots };
    //   if (updatedSelection[classid] === timeslotname) {
    //     delete updatedSelection[classid];
    //   } else {
    //     updatedSelection[classid] = timeslotname;
    //   }
    //   return updatedSelection;
    // });

    // if (timeslotname != "Want another slot") {
    //   setMoreSlots((moreslots) => {
    //     const updatedSelection = { ...moreslots };
    //     if (classid in updatedSelection) {
    //       delete updatedSelection[classid];
    //     }

    //     return updatedSelection;
    //   });
    // }

    // if (timeslotname == "Want another slot") {
    //   setMoreSlots((moreslots) => {
    //     const updatedSelection = { ...moreslots };
    //     if (classid in updatedSelection) {
    //       delete updatedSelection[classid];
    //     } else {
    //       updatedSelection[classid] = "Want another slot:";
    //     }
    //     return updatedSelection;
    //   });
    // }
  };

  const liveClassHandler = () => {
    setIsActive(true);
    // setFilteredData(data.filter((classitem) => !classitem.timeslots.includes('')))
  };

  const pastClassHandler = () => {
    setIsActive(false);
    // setFilteredData(data.filter((classitem) => classitem.timeslots.includes('')))
  };

  useEffect(() => {
    filterClasses();
  }, [selectedAges, isActive]);

  const filterClasses = () => {
    const filtered = data.filter((cls) => {
      const age_group = cls.age_group.replace(/ /g, "");
      const age_range = age_group.split("year")[0];
      const [startAge, endAge] = age_range.split("-").map(Number);
      const selectedClasses =
        selectedAges >= startAge && selectedAges <= endAge;
      if (selectedAges) {
        return selectedClasses;
      } else {
        return true;
      }
    });

    const timeFiltered = isActive
      ? filtered.filter((cls) => !cls.isMoveToPast)
      : filtered.filter((cls) => cls.isMoveToPast);

    setFilteredData(timeFiltered);
  };

  const handleAgeSelect = (age) => {
    setSelectedAges(selectedAges === age ? null : age);
    if (selectedAges !== age) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    setFilteredData(
      data.filter((classitem) => !classitem.timeslots.includes(""))
    );
  }, [data]);

  useEffect(() => {
    const resultArray = Object.keys(selectedTimeslots).map((classid) => {
      console.log(selectedTimeslots, "in the send data funtuon");
      let timeslot = selectedTimeslots[classid];
      if (timeslot === "Want another slot") {
        timeslot = moreslots[classid];
      }
      let classInfo = data.find((classInfo) => classInfo.id === classid);
      let final_data = [];

      if (!classInfo) {
        const new_data = localStorage.getItem("data");
        final_data = JSON.parse(new_data);
        classInfo = final_data.find((classInfo) => classInfo.id === classid);
      }

      const className = classInfo ? classInfo.title : "ClassName";
      const classTag = classInfo ? classInfo.class_tag : "onetime";
      if (classTag.toLowerCase() === "course" && classInfo){
        timeslot = classInfo.timeslots
      }
      console.log(className, "classname");

      return {
        classid,
        className,
        classTag,
        timeslot: timeslot || "",
      };
    });

    // const newArray = resultArray.map((obj) => obj[className] = data.find[cla])

    props.onSendData(resultArray);
    console.log(resultArray, "selcted");
    props.onSelectTimeSlot(Object.keys(selectedTimeslots).length);
  }, [selectedTimeslots, moreslots]);

  const requiredTimeslotHandler = (classid, event) => {
    setMoreSlots((moreslot) => {
      const newslot = { ...moreslot };
      newslot[classid] = "Want another Slot:" + event.target.value;
      return newslot;
    });
  };

  const dropdownHandler = () => {
    setIsDropDown((prevstate) => !prevstate);
  };

  const handleOutsideClick = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="sub-cards-grid">
      <h1>Happy Exploring</h1>
      <div className="filter-div">
        <div className="firstfilter" ref={buttonRef}>
          {selectedAges && (
            <button
              onClick={dropdownHandler}
              className="dropdown-toggle"
              type="button"
              id="ageFilterDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Learner's Age : {selectedAges}
            </button>
          )}

          {!selectedAges && (
            <button
              onClick={dropdownHandler}
              className="dropdown-toggle"
              type="button"
              id="ageFilterDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Learner's Age
              {isDropDown ? (
                <img src={UpIcon} alt="upicon" className="icon" />
              ) : (
                <img src={DownIcon} alt="dropDown" className="icon" />
              )}
            </button>
          )}

          {isDropDown && (
            <AgeFilterDropdown
              selected={selectedAges}
              onSelect={handleAgeSelect}
            />
          )}
        </div>
        <div className="tab-style">
          <p
            id="live_class"
            className={isActive ? "underlined-text" : "text"}
            onClick={liveClassHandler}
          >
            Live classes
          </p>
          <p
            id="past_class"
            className={!isActive ? "underlined-text" : "text"}
            onClick={pastClassHandler}
          >
            Past classes
          </p>
        </div>
      </div>

      {isActive && (
        <>
          <p className="tag">Courses</p>
          <ClassCard
            filteredData={filteredData.filter(
              (cls) => cls.class_tag === "course"
            )}
            newfulldata={newfulldata}
            onToggle={toggleDescription}
            selectedTimeslots={selectedTimeslots}
            onSelect={handleTimeslotSelection}
            moreslots={moreslots}
            onTimeslotHandler={requiredTimeslotHandler}
            expandedClassId={expandedClassId}
          ></ClassCard>
          <p className="tag">Ongoing</p>
          <ClassCard
            filteredData={filteredData.filter(
              (cls) => cls.class_tag === "ongoing"
            )}
            newfulldata={newfulldata}
            onToggle={toggleDescription}
            selectedTimeslots={selectedTimeslots}
            onSelect={handleTimeslotSelection}
            moreslots={moreslots}
            onTimeslotHandler={requiredTimeslotHandler}
            expandedClassId={expandedClassId}
          ></ClassCard>
          <p className="tag">Onetime</p>
          <ClassCard
            filteredData={filteredData.filter(
              (cls) => cls.class_tag === "onetime"
            )}
            newfulldata={newfulldata}
            onToggle={toggleDescription}
            selectedTimeslots={selectedTimeslots}
            onSelect={handleTimeslotSelection}
            moreslots={moreslots}
            onTimeslotHandler={requiredTimeslotHandler}
            expandedClassId={expandedClassId}
          ></ClassCard>
        </>
      )}

      {!isActive && (
        <ClassCard
          filteredData={filteredData}
          newfulldata={newfulldata}
          onToggle={toggleDescription}
          selectedTimeslots={selectedTimeslots}
          onSelect={handleTimeslotSelection}
          moreslots={moreslots}
          onTimeslotHandler={requiredTimeslotHandler}
          expandedClassId={expandedClassId}
        ></ClassCard>
      )}
    </div>
  );
};

export default ClassDetail;
