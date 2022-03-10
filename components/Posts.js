import Post from '../components/Post'

const posts = [
  {
    id: '123',
    username: 'atomic',
    userImg:
      'https://www.pngkey.com/png/detail/468-4685836_funny-avatar-png-graphic-transparent-library-dream-league.png',
    img: 'https://endertech.com/wp-content/uploads/2020/06/react-js-projects.jpg',
    caption: 'This is the caption',
  },
  {
    id: '123',
    username: 'atomic',
    userImg:
      'https://www.pngkey.com/png/detail/468-4685836_funny-avatar-png-graphic-transparent-library-dream-league.png',
    img: 'https://endertech.com/wp-content/uploads/2020/06/react-js-projects.jpg',
    caption: 'This is the caption',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
