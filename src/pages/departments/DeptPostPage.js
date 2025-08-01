/* Page to fetch the data for each DeptPost
 * Contains the DeptPost Component to which it passes the data */
import React, { useEffect, useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import btnStyles from "../../styles/Button.module.css"
import { useHistory, useParams } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { useRedirect } from "../../hooks/Redirect"
import TopBox from "../../components/TopBox"
import DeptPost from "./DepPost"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

function DeptPostPage() {
  useRedirect()
  const host = useHostName()
  const { id } = useParams()
  const [post, setPost] = useState({ results: [] })
  const [title, setTitle] = useState("")

  const history = useHistory()

  useEffect(() => {
    /* Function to fetch the deptPost data */
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/department/posts/${id}`)
          const dept = data.departments
          console.log(dept)
          setPost({ results: [data] })
          setTitle(dept)
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
          console.log(data)
          setPost({ results: [data] })
          setTitle(dept)
        }
      } catch (err) {
        console.log(err)
      }
    }

    handleMount()
  }, [id])
  // console.log("Dep",post.results[0])

  return (
    <div>
      <TopBox title="Dept Xtra" title2={title} />
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} ml-3 mb-2`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
          <DeptPost {...post.results[0]} setPosts={setPost} />
        </Col>
      </Row>
    </div>
  )
}

export default DeptPostPage
