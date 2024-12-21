const GOOGLE_API_KEY = "AIzaSyAg2mxnDSPmyQfpJGJiW9YVs8krv52MvD0";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_BY_KEYWORD_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  GOOGLE_API_KEY + "&q=";

export const commentsData = [
  {
    name: "Ved",
    comment: "Hi Hello Shrish.... ",
  },
  {
    name: "Shrish",
    comment: "Hi Hello Ved.... ",
    replys: [
      {
        name: "Ved",
        comment: "Hi Hello Shrish.... ",
      },
      {
        name: "Ved",
        comment: "Hi Hello Shrish.... ",
        replys: [
          {
            name: "Ved",
            comment: "Hi Hello Shrish.... ",
          },
          {
            name: "Ved",
            comment: "Hi Hello Shrish.... ",
          },
        ],
      },
    ],
  },
];

export const LIVE_CHAT_COUNT = 10
