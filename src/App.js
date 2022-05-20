import React, { useState, useEffect} from 'react';
import './App.css';
 

function App() {
  // const [name, setName] = useState('');
  // const [userName, setUsername] = useState('');
  // const [followers, setFollowers] = useState('');
  // const [following, setFollowing] = useState('');
  // const [repos, setRepos] = useState('');
  // const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  // const [error, setError] = useState('');
  const [user, setUser] = useState({})
 
 useEffect(() => {
   fetch("https://api.github.com/users/example")
   .then(res => res.json())
   .then(data => {
    setUser(data)
   });
 }, []);

//  const setData = ({
//        name, 
//        login, 
//        followers, 
//        following,
//        public_repos,
//        avatar_url
//      }) => {
//         setName(name);
//         setUsername(login);
//         setFollowers(followers);
//         setFollowing(following);
//         setRepos(public_repos);
//         setAvatar(avatar_url);    
//  }

   const handleSearch = (e) => {
     e.preventDefault();
    setUserInput(e.target.value);
   }

   const handleSubmit = (e) => {
     e.preventDefault()
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      setUser(data);
    })
   }

  return (
    <div>
    <div className="p-5 bg-gray-200 ">Github Finder</div>
    <div className="flex justify-center py-5 px-o">
      <form onSubmit={(e) => handleSubmit(e)} >
      <input className='p-2 border mr-2 rounded'
      type="text"
      placeholder='Github Users...'
      name='github user'
      onChange={handleSearch} />
      <button className='bg-gray-500 p-2 rounded'>Search</button>
      </form>
    </div>
    <div className='flex items-center justify-center '>
    <div className=" flex flex-col justify-center items-center
     bg-gray-200 mx-16  w-4/6 h-5/6">
      <img src={user?.avatar_url} alt='avatar'></img>
      <h1>{user?.name}</h1>
      <h1>{user?.login}</h1>
      <p>{user?.followers} Followers</p>
      <p>{user?.public_repos} Repos</p>
      <p>{user?.following} Following</p>
    </div>
    </div>
    </div>
  );
}

//nullish coalescing 

export default App;
