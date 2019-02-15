// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    const state = getState()
    console.log(state)
    console.log(Immutable.get(state,'text'))
    // return <div>Testing</div>
    // // console.log(tweets[0].getIn(['user','handle']))
    // // console.log(Immutable.get(tweets, 'text'))
    // return (
    //     <span>tweets</span>
    // )

    const tweetsHTML = state.map(function (tweet, index) {
        console.log(tweet.getIn(['user', 'handle']))
        console.log(Immutable.get(tweet, 'text'))
                return <div className="bg-white p-2 m-2 w-50">
                <div className="d-flex align-items-center">
                    <img width="50" src={tweet.getIn(['user', 'profilePic'])}/>
                    <div className="mt-4 ml-2">
                        <b>{tweet.getIn(['user', 'displayName'])}</b>
                        {Immutable.get(tweet, 'user.isVerified') ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''}
                        <p>{tweet.getIn(['user', 'handle'])}</p>
                    </div>
                </div>
                <h3>{Immutable.get(tweet,'text')}</h3>
                <hr />
                <div className="d-flex text-secondary">
                    <img src="twitterIcons/message-circle.svg" />
                    <b className="mr-3 ml-1">{Immutable.get(tweet, 'replies')}</b>
                    <img src="twitterIcons/repeat.svg" />
                    <b className="mr-3 ml-1">{Immutable.get(tweet, 'retweets')}</b>
                    <img src="twitterIcons/heart.svg" />
                    <b className="mr-3 ml-1">{Immutable.get(tweet, 'likes')}</b>
                </div>
            </div>

    })
    return tweetsHTML
    // ReactDOM.render(tweetsHTML, document.getElementById('tweetsContainer'))
}

{/* <b>${tweet.getIn(['user','username'])}</b> */}


const Tweet = null;  // CHALLENGE: Write a separate Tweet component for use in the App component

const User = null;  // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = null;  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly

// const render = () => {
//     const tweetsDOM = document.getElementById('tweetsContainer');

//     const state = getState()
//     // console.log(Immutable.get(state.text, 'text'))

//     const tweetsHTML = state.map(function (tweet) {
//         console.log(Immutable.get(tweet, 'user')['username'])
//         return `
//             <div class="bg-white p-2 m-2 w-50">
//                 <div class="d-flex align-items-center">
//                     <img width="50" src="${Immutable.get(tweet,'user')}" />
//                     <div class="mt-4 ml-2">
//                         <b>${tweet.getIn(['user','username'])}</b>
//                         ${Immutable.get(tweet, 'user.isVerified') ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''}
//                         <p>${Immutable.get(tweet, 'user.handle')}</p>
//                     </div>
//                 </div>
//                 <h3>${Immutable.get(tweet,'text')}</h3>
//                 <hr />
//                 <div class="d-flex text-secondary">
//                     <img style="opacity: 0.62" src="twitterIcons/message-circle.svg" />
//                     <b class="mr-3 ml-1">${Immutable.get(tweet, 'replies')}</b>
//                     <img style="opacity: 0.62" src="twitterIcons/repeat.svg" />
//                     <b class="mr-3 ml-1">${Immutable.get(tweet, 'retweets')}</b>
//                     <img style="opacity: 0.62" src="twitterIcons/heart.svg" />
//                     <b class="mr-3 ml-1">${Immutable.get(tweet, 'likes')}</b>
//                 </div>
//             </div>
//         `
//     });

//     tweetsDOM.innerHTML = `
//         <div class="d-flex flex-column justify-content-start align-items-center mt-5">
//             ${tweetsHTML.join('')}
//         </div>
//     `
// }
