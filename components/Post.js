import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, sethasLiked] = useState(false)

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => {
          setComments(snapshot.docs)
        }
      ),

    [db, id]
  )

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(() => {
    sethasLiked(likes.findIndex((like) => like.id === session?.user.uid) !== -1)
  }, [likes])

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
  }

  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className="my-7 rounded-sm border bg-white">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="mr-3 h-12 w-12  rounded-full border object-contain p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Img */}
      <img src={img} className="w-full object-cover" />

      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4 pb-3">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="post-btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="post-btn" />
            )}
            <ChatIcon className="post-btn" />
            <PaperAirplaneIcon className="post-btn" />
          </div>
          <BookmarkIcon className="post-btn" />
        </div>
      )}

      {/* Caption */}
      <p className="truncate p-5">
        {likes.length == 1 ? (
          <p className="mb-1 font-bold">{likes.length} like</p>
        ) : (
          <p className="mb-1 font-bold">{likes.length} likes</p>
        )}
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>
      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                src={comment.data().userImage}
                alt=""
                className="h-7 rounded-full "
              />
              <span className="font-bold">{comment.data().username}</span>
              <p className="flex-1 text-sm">{comment.data().comment}</p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border-none outline-none focus:ring-0"
          />
          <button
            type="submit"
            disable={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
