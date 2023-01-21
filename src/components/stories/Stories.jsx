import "./Stories.scss"
import React, { useContext } from 'react'
import { stories } from "./dummyStories.js"
import { AuthContext } from "../../context/authContext.js";

const Stories = () => {

  const { currentUser } = useContext(AuthContext);
  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>

        {
            stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Stories