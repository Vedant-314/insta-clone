import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id:'1',
            username:'vedanttaak',
            userImg: 'https://images.unsplash.com/photo-1693438672953-409b661134fd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            img:'https://images.unsplash.com/photo-1682687982298-c7514a167088?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption:'Live in the moment'
        },
        {
            id:'2',
            username:'vedanttaak',
            userImg: 'https://images.unsplash.com/photo-1693438672953-409b661134fd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            img:'https://images.unsplash.com/photo-1697422156255-1e18078323be?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption:'Unstoppable'
        }
    ]
  return (
    <div>
        {posts.map(post =>(
            <Post
                key = {post.id}
                id = {post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
