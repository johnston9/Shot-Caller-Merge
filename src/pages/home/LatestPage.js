/* Page to fetch the Latest post's data
 * Contains the Latest component to which it passes the data */
import React, { useEffect, useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import btnStyles from "../../styles/Button.module.css"
import { useHistory, useParams } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { useRedirect } from "../../hooks/Redirect"
import TopBox from "../../components/TopBox"
import Latest from "./Latest"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

function LatestPage() {
  useRedirect()
  const host = useHostName()
  const { id } = useParams()
  const [post, setPost] = useState({ results: [] })

  const history = useHistory()

  useEffect(() => {
    /* Function to fetch the Latest post's data */
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/department/posts/${id}`)
          const dept = data.departments
          console.log(dept)
          setPost({ results: [data] })
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/department/posts/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          const dept = data.departments
          console.log(dept)
          setPost({ results: [data] })
        }
      } catch (err) {
        console.log(err)
      }
    }

    handleMount()
  }, [id])

  return (
    <div>
      <TopBox work="Latest Buzz" title="Post" />
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} ml-3 mb-2`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
          <Latest {...post.results[0]} setPosts={setPost} />
        </Col>
      </Row>
    </div>
  )
}

export default LatestPage
