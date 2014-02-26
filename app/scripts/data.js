var DATA = [

  {
    id: "0",
    title: "Fill in your email so we can contact you?",
    kind: "text"
  },

  {
    id: "1",
    kind: "page",
    body: { text: "#Thursday 27.2.13" }
  },

  {
    id: "2",
    kind: "page",
    body: { text: "#10:00 research cases at work individual lunch break.\n\n#15:00 General gathering, scored exchange of observations." }
  },

  {
    id: "3",
    kind: "page",
    body: { text: "#Dear audience:" }
  },

  {
    id: "4",
    kind: "page",
    body: { text: "On february 10th, Gaja Karolczak asked me:\n\n\"Dear Cecilia,  \n(...) From some interviews with Pedro Costa, I found his method similar to sociologist Jean-Yves Petiteau’s approach of deep listening to the interviewee person. I find intriguing the **necessity of subtleness defined by devotion to listening in encounter with the other**, that is a trigger for opening the relation with the space of the other, the environment of personal identity. **\"To be listening is to be on the border of meaning.\"** said Petiteau once in a.pass, and he also referred to listening as an action admitting that one doesn’t know.\n\nIn the context of the performance it is usually the audience in the position of the listener. But I remember that you experimented with the position of listener in one of your projects (or in more?) – **how did you experience the listening from the place where you are expected to \"talk\"?**" }
  },

  {
    id: "5",
    kind: "page",
    body: { text: "#AUDIENCE'S ITINERARIES" }
  },

  {
    id: "6",
    kind: "page",
    body: { text: "_Whatch the video before you go to the next page_\n\n\n\n<iframe width=\"420\" height=\"315\" src=\"//www.youtube.com/embed/WetMfsujVZM\" frameborder=\"0\" allowfullscreen></iframe>" }
  },

  {
    id: "7",
    kind: "radio_button",
    title: "What have you seen in this video?",
    body: {
      options: [
        {
          text: "People waiting for something",
          branch_page: "8"
        },
        {
          text: "A dancing class",
          branch_page: "13"
        },
        {
          text: "A theatre play",
          branch_page: "18"
        }
      ]
    }
  },

  {
    id: "8",
    title: "If you have seen 'people waiting for something', what do you think they are waiting for?",
    kind: "text"
  },

  {
    id: "9",
    kind: "radio_button",
    title: "Choose one of the following characters of the audience you just have seen dancing:",
    body: {
      options: [
        {
          text: "The lady with long arms",
          branch_page: "10"
        },
        {
          text: "The arrhythmic guy",
          branch_page: "11"
        },
        {
          text: "The lonely lady on the left",
          branch_page: "12"
        }
      ]
    }
  },

  {
    id: "10",
    title: "If you have chosen 'the lady with long arms', please write down a story for this character that develops in a theatre:",
    kind: "text",
    end_page: true
  },

  {
    id: "11",
    kind: "text",
    title: "If you have chosen 'the arrhythmic guy', please, set a score for this character that take place in brussels:",
    end_page: true
  },

  {
    id: "12",
    title: "If you have chose 'the lonely woman on the left', please, send me a proposal for me to make:",
    kind: "text",
    end_page: true
  },

  {
    id: "13",
    kind: "radio_button",
    title: "If you have seen a 'dancing class', we assume you are a very dynamic person.\n\nCould you like to choose between:",
    body: {
      options: [
        {
          text: "A romantic dance",
          branch_page: "14"
        },
        {
          text: "A disco dance",
          branch_page: "15"
        },
        {
          text: "Silent vals",
          branch_page: "16"
        }
      ]
    }
  },

  {
    id: "14",
    kind: "page",
    body: { text: "Romantic dance\n\n\n\n<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/a6mvS_kiGFo\" frameborder=\"0\" allowfullscreen></iframe>" },
  },

  {
    id: "14a",
    title: "Could you please imagine a choreography for me?",
    kind: "text",
    end_page: true
  },

  {
    id: "15",
    kind: "page",
    body: { text: "Disco dance\n\n\n\n<iframe width=\"420\" height=\"315\" src=\"//www.youtube.com/embed/Py5Pg7GvIAI\" frameborder=\"0\" allowfullscreen></iframe>" },
  },

  {
    id: "15a",
    title: "Could you please imagine a choreography for me?",
    kind: "text",
    end_page: true
  },

  {
    id: "16",
    kind: "page",
    body: { text: "Silent vals\n\n\n\n<iframe width=\"420\" height=\"315\" src=\"//www.youtube.com/embed/LUs8gxBN248\" frameborder=\"0\" allowfullscreen></iframe>" }
  },

  {
    id: "16a",
    title: "Could you please imagine a choreography for me?",
    kind: "text",
    end_page: true
  },

  {
    id: "18",
    title: "What's the play about?",
    kind: "text"
  },

  {
    id: "19",
    title: "How are the performers?",
    kind: "text"
  },

  {
    id: "20",
    kind: "text",
    title: "Is there any difference for you in between the audience and the performer?"
  },

  {
    id: "21",
    kind: "radio_button",
    title: "What do you prefer to be?",
    body: {
      options: [
        {
          text: "Audience",
          branch_page: "22"
        },
        {
          text: "Performer",
          branch_page: "24"
        }
      ]
    }
  },

  {
    id: "22",
    title: "What do you think is the most important activity as an audience?",
    kind: "text"
  },

  {
    id: "23",
    title: "Do you feel connected with the other during a performance or most likely do you find yourself alone in the middle of the crowd?",
    kind: "text",
    end_page: true
  },

  {
    id: "24",
    title: "What do you think is the most important activity as an performer?",
    kind: "text"
  },

  {
    id: "25",
    title: "Do you feel connected with the other during a performance or most likely do you find yourself alone in the middle of the crowd?",
    kind: "text",
    end_page: true
  }

]