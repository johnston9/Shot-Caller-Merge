import React, { useEffect, useState } from "react"
import styles from "../../styles/ScheduleCreate.module.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults"
import { useRedirect } from "../../../hooks/Redirect"
import ScheduleSceneItem from "./ScheduleSceneItem"
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config"
import useHostName from "../../../hooks/useHostName"

const Act1List = ({
  setPostData,
  setShowOne,
  setShowTwoA,
  setShowTwoB,
  setShowThree,
  setShowLoc,
  list,
}) => {
  const host = useHostName()
  const [scenes, setScenes] = useState({ results: [] })
  // const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchScenes = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/scenes/?act=one`)
          setScenes(data)
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/scenes/?act=one`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          setScenes(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    if (host === CLIENT_PROGRAM_HOSTNAME) {
      fetchScenes()
    } else {
      if (localStorage.getItem("accessToken")) {
        fetchScenes()
      }
    }
  }, [host])

  return (
    <div>
      <div className={`mt-4`}>
        <h5 className={`text-center pb-0 mb-2 ${styles.SubTitle}`}>
          Select Scene
        </h5>
        <p className="text-center mb-2">
          Select Scene to add Scene details to the Stripboard then add the
          Shooting Info in the form below
        </p>
        <Row>
          {scenes.results.length
            ? scenes.results.map((scene) => (
                <Col xs={12} md={6}>
                  <ScheduleSceneItem
                    setShowOne={setShowOne}
                    setShowTwoA={setShowTwoA}
                    setShowTwoB={setShowTwoB}
                    setShowThree={setShowThree}
                    setShowLoc={setShowLoc}
                    list={list}
                    setPostData={setPostData}
                    scene={scene}
                    {...scene}
                    key={scene.id}
                  />
                </Col>
              ))
            : ""}
        </Row>
      </div>
    </div>
  )
}

export default Act1List
