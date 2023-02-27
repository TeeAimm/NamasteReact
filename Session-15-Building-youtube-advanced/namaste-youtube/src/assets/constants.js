const GOOGLE_API_KEY = "AIzaSyCawnN5rhKBvuY5YbViRAlVRyy-Uipz7Mw";
const YOUTUBE_MULTIPLE_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&maxResults=50&regionCode=IN&key="
const YOUTUBE_MOST_LIKED_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
export const YOUTUBE_VIDEOS_API = YOUTUBE_MOST_LIKED_VIDEO + GOOGLE_API_KEY
export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const GET_SEARCH_RESULT_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" + GOOGLE_API_KEY + '&q='
export const CommentData = [
    {
        id: 'c1',
        name: 'Tania Mollah',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: [
            {
                id: 'c1_1',
                name: 'Tania Mollah',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: [
                    {
                        id: 'c1_1',
                        name: 'Tania Mollah',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        replies: [
                            {
                                id: 'c1_1',
                                name: 'Tania Mollah',
                                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'c2',
        name: 'Tania Mollah',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: [
            {
                id: 'c2_1',
                name: 'Tania Mollah',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: []
            }
        ]
    },
    {
        id: 'c3',
        name: 'Tania Mollah',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: [
            {
                id: 'c3_1',
                name: 'Tania Mollah',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: []
            },
            {
                id: 'c3_2',
                name: 'Tania Mollah',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: []
            }
        ]
    },
    {
        id: 'c4',
        name: 'Tania Mollah',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        id: 'c5',
        name: 'Tania Mollah',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        id: 'c6',
        name: 'Tania Mollah',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        id: 'c7',
        name: 'Tania Mollah',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        id: 'c8',
        name: 'Tania Mollah',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
]

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