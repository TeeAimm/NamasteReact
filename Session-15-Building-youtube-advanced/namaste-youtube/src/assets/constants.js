const GOOGLE_API_KEY = "AIzaSyCawnN5rhKBvuY5YbViRAlVRyy-Uipz7Mw";
const YOUTUBE_MULTIPLE_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&maxResults=50&regionCode=IN&key="
const YOUTUBE_MOST_LIKED_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
export const YOUTUBE_VIDEOS_API = YOUTUBE_MOST_LIKED_VIDEO + GOOGLE_API_KEY
export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


export const List = [
    {
        id: 1,
        name: 'All'
    },
    {
        id: 2,
        name: 'Music'
    },
    {
        id: 3,
        name: 'Mixes'
    },
    {
        id: 4,
        name: 'Lo-Fi'
    },
    {
        id: 5,
        name: 'JavaScript'
    },
    {
        id: 6,
        name: 'React'
    },
    {
        id: 7,
        name: 'Angular'
    },
    /* {
         id: 8,
         name: 'News'
     },
     {
         id: 9,
         name: 'K-drama'
     },
     {
         id: 10,
         name: 'Foundation'
     },
     {
         id: 11,
         name: 'Computer Programming'
     },
     {
         id: 12,
         name: 'Playlist'
     },
     {
         id: 13,
         name: 'Live'
     },
     {
         id: 14,
         name: 'Spice'
     } */
]