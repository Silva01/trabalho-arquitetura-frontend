import React from 'react'
import './PostList.css';

function PostList() {
  const posts = [
    { title: '5 Dicas para sua Carreira Profissional', description: 'Descrição do Post 1' },
    { title: '5 Dicas de Teste de Codigo', description: 'Descrição do Post 2' },
    { title: '5 Dicas de Viagem', description: 'Descrição do Post 3' },
  ]

  return (
    <div>
      <h1 className="post-item post-title">Posts</h1>
      {posts.map((post, index) => (
        <div key={index} className="post-item">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList