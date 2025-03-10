/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/roselandroche
*/ 
const cardsSection = document.querySelector(".cards")

function newComponent(obj) {
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card')
  cardsSection.appendChild(cardDiv)

  const userImg = document.createElement('img')
  userImg.src = obj.avatar_url
  cardDiv.appendChild(userImg)

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  cardDiv.appendChild(cardInfo)

  const name = document.createElement('h3')
  name.classList.add('.name')
  name.textContent = obj.name
  cardInfo.appendChild(name)

  const userName = document.createElement('p')
  userName.classList.add('.username')
  userName.textContent = obj.login
  cardInfo.appendChild(userName)

  const location = document.createElement('p')
  location.textContent = `Location: ${obj.location}`
  cardInfo.appendChild(location)

  const profile = document.createElement('p')
  profile.textContent = `Profile: `
  cardInfo.appendChild(profile)

  const userUrl = document.createElement('a')
  userUrl.href = obj.html_url
  userUrl.textContent = `${obj.html_url}`
  profile.appendChild(userUrl)

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${obj.followers_url}`
  cardInfo.appendChild(followers)

  const following = document.createElement('p')
  following.textContent = `Following: ${obj.following_url}`
  cardInfo.appendChild(following)

  const bio = document.createElement('p')
  bio.textContent = `Bio: ${obj.bio}`
  cardInfo.appendChild(bio)

  return cardDiv
}

axios.get('https://api.github.com/users/roselandroche')
  .then( (response) => {
    cardsSection.appendChild(newComponent(response.data))
  })
  .catch( error => {
    console.log(error)
  })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<user-name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/justsml', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/bigknell'];

followersArray.forEach((item) => {
  axios.get(item)
  .then( response => {
    cardsSection.appendChild(newComponent(response.data))
  })
  .catch( error => {
    console.log(error)
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//// STRETCH ////

// const expand = document.createElement('span')
// expand.addEventListener('click', (event) => {
//   expand.classList.toggle('expand')
// })
// expand.textContent ='Expand'
// expand.style.padding = '40px 10px'

// console.log(expand)
