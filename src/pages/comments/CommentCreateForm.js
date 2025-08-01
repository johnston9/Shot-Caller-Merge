/* Form component to create Comments on the PostPage */
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import styles from "../../styles/CommentCreateEditForm.module.css"
import Avatar from "../../components/Avatar"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

function CommentCreateForm(props) {
  const host = useHostName()
  const { post, setPost, setComments, profileImage, profile_id } = props
  const [content, setContent] = useState("")

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosRes.post("/comments/", {
          content,
          post,
        })
        setComments((prevComments) => ({
          /* Update the comments state */
          ...prevComments,
          results: [data, ...prevComments.results],
        }))
        setPost((prevPost) => ({
          /* Update the Post comment count */
          results: [
            {
              ...prevPost.results[0],
              comments_count: prevPost.results[0].comments_count + 1,
            },
          ],
        }))
        setContent("")
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/comments/`,
          {
            content,
            post,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setComments((prevComments) => ({
          /* Update the comments state */
          ...prevComments,
          results: [data, ...prevComments.results],
        }))
        setPost((prevPost) => ({
          /* Update the Post comment count */
          results: [
            {
              ...prevPost.results[0],
              comments_count: prevPost.results[0].comments_count + 1,
            },
          ],
        }))
        setContent("")
      }
    } catch (err) {
      // console.log(err);
    }
  }

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link
            to={`/${localStorage.getItem(
              "projectSlug"
            )}/profiles/${profile_id}`}
          >
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        Post
      </button>
    </Form>
  )
}

export default CommentCreateForm
