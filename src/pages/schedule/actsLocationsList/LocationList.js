import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import styles from "../../styles/ScheduleCreate.module.css"
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults"
import { useRedirect } from "../../../hooks/Redirect"
import ScheduleSceneItem from "./ScheduleSceneItem"
import InfiniteScroll from "react-infinite-scroll-component"
import Asset from "../../../components/Asset"
import { fetchMoreData } from "../../../utils/utils"
import useHostName from "../../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config"

const LocationList = ({
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
  useEffect(() => {
    const fetchScenes = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/scenes/?ordering=location`)
          setScenes(data)
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/scenes/?ordering=location`,
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
      <Container className={`mt-4 text-center ${styles.Scroll}`}>
        <h5 className={`text-center pb-0 mb-2 ${styles.SubTitle}`}>
          Select Scene
        </h5>
        <p className="text-center mb-2">
          Select Scene to add Scene details to the Stripboard then add the
          Shooting Info in the form below
        </p>
        {scenes.results.length ? (
          <InfiniteScroll
            children={scenes.results.map((scene) => {
              return (
                <div className="d-inline-flex justify-content-space-between">
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
                </div>
              )
            })}
            dataLength={scenes.results.length}
            loader={<Asset spinner />}
            hasMore={!!scenes.next}
            next={() => fetchMoreData(scenes, setScenes)}
          />
        ) : (
          ""
        )}
      </Container>
    </div>
  )
}
export default LocationList
