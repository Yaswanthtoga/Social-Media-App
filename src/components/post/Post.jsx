import React, { useContext, useState } from 'react'
import "./Post.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {Link} from "react-router-dom";
import Comments from '../comment/Comments';


const Post = ({post}) => {

  const liked = true;
  const [commentopen,setCommentOpen] = useState(false);

  return (
    <div className='post'>
      <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}} >
                        <span className='name'>{post.name}</span>
                    </Link>
                    <span className='date'>1 min ago</span>
                </div>
            </div>
            <MoreHorizIcon/>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked?<FavoriteOutlinedIcon/>:<FavoriteBorderOutlinedIcon/>}
            12 likes
          </div>
          <div className="item" onClick={()=>setCommentOpen(!commentopen)}>
            <TextsmsOutlinedIcon/>
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            Share
          </div>
        </div>
        {commentopen&&<Comments/>}
      </div>
    </div>
  )
}

export default Post