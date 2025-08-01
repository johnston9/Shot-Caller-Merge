/* Form component to edit Comments in the Comment Component */
import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import styles from "../../styles/CommentCreateEditForm.module.css"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

function CommentEditForm(props) {
  const host = useHostName()
  const { id, content, setShowEditForm, setComments } = props

  const [formContent, setFormContent] = useState(content)

  const handleChange = (event) => {
    setFormContent(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosRes.put(`/comments/${id}/`, {
          content: formContent.trim(),
        })
        setComments((prevComments) => ({
          /* Update the comment state */
          ...prevComments,
          results: prevComments.results.map((comment) => {
            return comment.id === id
              ? {
                  ...comment,
                  content: formContent.trim(),
                  updated_at: "now",
                }
              : comment
          }),
        }))
        setShowEditForm(false)
      } else {
        await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/comments/${id}/`,
          {
            content: formContent.trim(),
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
          /* Update the comment state */
          ...prevComments,
          results: prevComments.results.map((comment) => {
            return comment.id === id
              ? {
                  ...comment,
                  content: formContent.trim(),
                  updated_at: "now",
                }
              : comment
          }),
        }))
        setShowEditForm(false)
      }
    } catch (err) {}
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  )
}

export default CommentEditForm
