import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post'
import { db } from './firebase'

function App() {
  const [posts, setPosts] = useState([]);
  

  // useEffect runs a piece of code based on a specific condition 
  useEffect(() => {
    // this is where code runs
    db.collection('posts').onSnapshot(snapshot => {
      // everytime a new post is added, this code runs
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  return (
    <div className="app">
      <Modal 
      open={open}
      onClose={handleClose}
      >
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text</h2>
        <p id="simple-modal-description">
          simple-modal-description
        </p>
        <SimpleModal />
      </div>

      </Modal>

      <div className="app__header">
        <img 
        className="app__headerImage" 
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="logo"
        />
      </div>
      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
