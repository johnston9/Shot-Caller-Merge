/* Component to display Comments on the PostPage */
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import Avatar from "../../components/Avatar"
import { PostDropdown } from "../../components/PostDropdown"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import CommentEditForm from "./CommentEditForm"
import styles from "../../styles/Comment.module.css"
import { toast } from "react-hot-toast"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const Comment = (props) => {
  const host = useHostName()
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPost,
    setComments,
  } = props

  const [showEditForm, setShowEditForm] = useState(false)
  const [showActionMenu, setShowActionMenu] = useState(true)

  const currentUser = useCurrentUser()
  const is_owner = currentUser?.username === owner

  useEffect(() => {
    if (
      currentUser &&
      currentUser?.groups.length > 0 &&
      (currentUser?.groups[0]?.name === "Admincreative" ||
        currentUser?.groups[0]?.name === "Crew")
    ) {
      // now check where the post is His own post or NOT
      if (Number(profile_id) !== Number(currentUser?.profile_id)) {
        setShowActionMenu(false)
      }
    } else {
      if (
        currentUser &&
        currentUser?.groups.length > 0 &&
        currentUser?.groups[0]?.name === "Cast"
      ) {
        // Never show the menu
        setShowActionMenu(false)
      }
    }
  }, [profile_id, currentUser])

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosRes.delete(`/comments/${id}/`)
        /* update the posts comment count  */
        setPost((prevPost) => ({
          results: [
            {
              ...prevPost.results[0],
              comments_count: prevPost.results[0].comments_count - 1,
            },
          ],
        }))

        setComments((prevComments) => ({
          /* delete the comment from the comments state */
          ...prevComments,
          results: prevComments.results.filter((comment) => comment.id !== id),
        }))
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/comments/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        /* update the posts comment count  */
        setPost((prevPost) => ({
          results: [
            {
              ...prevPost.results[0],
              comments_count: prevPost.results[0].comments_count - 1,
            },
          ],
        }))

        setComments((prevComments) => ({
          /* delete the comment from the comments state */
          ...prevComments,
          results: prevComments.results.filter((comment) => comment.id !== id),
        }))
      }
    } catch (err) {}
  }

  return (
    <div>
      <hr />
      <div className="media">
        <Link
          to={`/${localStorage.getItem("projectSlug")}/profiles/${profile_id}`}
        >
          <Avatar src={profile_image} />
        </Link>
        <div className="media-body align-self-center ml-1">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </div>
        {showActionMenu && (
          <PostDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  )
}

export default Comment
