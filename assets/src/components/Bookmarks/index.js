import React, { useEffect, useContext } from 'react'
import './style.scss'
import { withRouter } from 'react-router-dom'
import { StoreContext } from '../../store/store'
import TweetCard from '../TweetCard'

const Bookmarks = (props) => {
  const { state, actions } = useContext(StoreContext)

  const { account, bookmarks } = state
  // const userParam = props.match.params.username

  useEffect(() => {
    window.scrollTo(0, 0)
    actions.getBookmarks()
    // actions.startChat({id: '5eee5f050cc0ae0017ed2fb2', content: 'hi there buddy'})
  }, [])

  return (
    <div className="bookmarks-wrapper">
      <div className="bookmarks-header-wrapper">
        <div className="bookmarks-header-content">
          <div className="bookmarks-header-name">Bookmarks</div>
          <div className="bookmarks-header-tweets">
            @{account && account.username}
          </div>
        </div>
      </div>
      {/* add loader for bookmarks when empty using dispatch */}
      {account && account.bookmarks.length < 1 ? (
        <div className="workInProgress"> You don't have any bookmarks </div>
      ) : (
        bookmarks.map((t) => (
          <TweetCard
            retweet={t.retweet}
            username={t.username}
            name={t.name}
            parent={t.parent}
            key={t._id}
            id={t._id}
            user={t.user}
            createdAt={t.createdAt}
            description={t.description}
            images={t.images}
            replies={t.replies}
            retweets={t.retweets}
            likes={t.likes}
          />
        ))
      )}
    </div>
  )
}

export default withRouter(Bookmarks)
