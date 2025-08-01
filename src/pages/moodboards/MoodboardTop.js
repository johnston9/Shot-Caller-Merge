/* Component rendered on the MoodboardsPage to display the 
   cover info for each Moodboard
 * When clicked on it opens that Moodboard's MoodboardPage
 * The word moodshot is used through the app in the urls for moodboard */
import React from "react"
import { Card } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import styles from "../../styles/Moodboards.module.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { PostDropdown } from "../../components/PostDropdown"
import Avatar from "../../components/Avatar"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const MoodboardTop = (props) => {
  const host = useHostName()
  const {
    id,
    is_owner,
    position,
    updated_at,
    name,
    profile_id,
    profile_image,
    number,
    title,
    character,
    location,
  } = props
  const currentUser = useCurrentUser()
  const history = useHistory()

  const handleEdit = () => {
    history.push(`/${localStorage.getItem("projectSlug")}/moodshots/${id}/edit`)
  }

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/moodshots/${id}/`)
        history.push(`/${localStorage.getItem("projectSlug")}/moodshots/`)
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/moodshots/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        history.push(`/${localStorage.getItem("projectSlug")}/moodshots/`)
      }
    } catch (err) {}
  }
  return (
    <div>
      {/* card */}
      <Card className={`py-0 mt-1 mb-0 ${styles.MoodTop}`}>
        <Link to={`/${localStorage.getItem("projectSlug")}/moodshots/${id}`}>
          <Card.Body className={`py-0 px-0 ${styles.MoodTop}`}>
            <Row className={`d-flex align-items-center pt-0 pb-0 my-0 pl-3`}>
              <Col xs={12} sm={3} className="my-0">
                {/* small */}
                <div className="d-none d-sm-block">
                  <Row>
                    <Col xs={3} className="pl-0 pr-0">
                      <Link
                        to={`/${localStorage.getItem(
                          "projectSlug"
                        )}/profiles/${profile_id}`}
                      >
                        <Avatar src={profile_image} height={45} />
                      </Link>
                    </Col>
                    <Col xs={9} className="pl-0 pr-0">
                      <div className={`${styles.Content4} pl-2 ml-2`}>
                        <p>
                          <span className="">{name} </span>
                        </p>
                        <p>
                          <span className="ml-0 ">{position}</span>
                        </p>
                      </div>
                      <div></div>
                    </Col>
                  </Row>
                </div>
                {/* mobile */}
                <div className="d-sm-none">
                  <Row>
                    <Col className="d-flex align-items-center" xs={2}>
                      <Link
                        to={`/${localStorage.getItem(
                          "projectSlug"
                        )}/profiles/${profile_id}`}
                      >
                        <Avatar src={profile_image} height={45} />
                      </Link>
                    </Col>
                    <Col xs={8} className="text-center">
                      <p>
                        <span className="">{name}</span>
                      </p>
                      <p className="">
                        {position} - {updated_at}
                      </p>
                    </Col>
                    <Col xs={2} className="d-flex align-items-center">
                      {currentUser &&
                        currentUser?.groups.length > 0 &&
                        (currentUser?.groups[0]?.name === "Admin" ||
                          currentUser?.groups[0]?.name === "Superadmin" ||
                          currentUser?.groups[0]?.name === "Admincreative") && (
                          <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                          />
                        )}
                    </Col>
                    <Col
                      xs={12}
                      sm={3}
                      className="px-0 d-flex align-items-center justify-content-center"
                    ></Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12} sm={6} className="my-1">
                <Row
                  className={`${styles.Content3} pt-1 my-0 pt-1-0 pl-2 mr-2 `}
                >
                  <Col xs={12} className={` ${styles.Content4} text-center`}>
                    <Row>
                      <Col className="px-0 mx-0" xs={4}>
                        {number && (
                          <h5 style={{ fontWeight: "700" }}>Scene {number} </h5>
                        )}
                      </Col>
                      <Col className="px-0 mx-0" xs={4}>
                        {location && <h5> {location}</h5>}
                      </Col>
                      <Col className="px-0 mx-0" xs={4}>
                        {character && (
                          <h5 style={{ fontWeight: "700" }}>{character} </h5>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={12}
                        className={`text-center px-0 mx-0 ${styles.ContentTitleUnOpen}`}
                      >
                        {title && (
                          <span style={{ fontStyle: "italic" }}> {title}</span>
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* <Row className={`${styles.Content3} py-1 pl-2 mr-2 `}>
                    <Col xs={12} 
                    className={` ${styles.Content4} text-center py-sm-2`} >
                    <h5>
                    {number && <span className='mr-3' style={{ fontWeight: '700' }}>Scene {number} </span>}
                    {location && <span> {location}</span>}
                    {character && <span className='ml-3'> {character} </span>} 
                    </h5>
                    </Col>
            </Row> */}
              </Col>
              {/* edit and date small */}
              <Col xs={12} sm={3} className="my-2 ">
                <div className="d-none d-sm-block">
                  <Row>
                    <Col
                      sm={3}
                      className="d-flex align-items-center px-0 float-right"
                    >
                      {currentUser &&
                        currentUser?.groups.length > 0 &&
                        (currentUser?.groups[0]?.name === "Admin" ||
                          currentUser?.groups[0]?.name === "Superadmin" ||
                          currentUser?.groups[0]?.name === "Admincreative") && (
                          <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                          />
                        )}
                    </Col>
                    <Col className="pl-0 pr-0" sm={9}>
                      <div className={`${styles.Content4} `}>
                        <p>
                          <span className={` text-center ${styles.Date}`}>
                            {updated_at}
                          </span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Link>
      </Card>
      {/* card2 */}
      {/* <Card className={ `mt-1 ${styles.MoodTop}`}>
                <Link to={`/moodshots/${id}`}>
                <Card.Body className={`py-0 px-0 ${styles.MoodTop}`}>
                <Row className={`d-flex align-items-center pt-0 pb-0 my-0 pl-3`}>
                <Col xs={12} lg={4} className="my-2 " >
                    <div className='d-none d-sm-block'>
                    <Row >
                    <Col xs={2} className="pl-0 pr-0" >
                    <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={45}/>
                    </Link>
                    </Col>
                    <Col xs={6} className="pl-0 pr-0" >
                    <div className={`${styles.Content4} pl-2 ml-2`}>
                    <p>
                    <span className=''>{name} </span>
                    </p>
                    <p>
                    <span className='ml-0 '>{position}</span>
                    </p>
                    </div>
                    <div>
                    </div>
                    </Col>
                    <Col className="pl-0 pr-0" xs={3} >
                    <div className={`${styles.Content4} `}>
                    <p>
                    <span className={ ` text-center ${styles.Date}`}>{updated_at}</span>
                    </p>
                    </div>
                    </Col>
                    <Col xs={1}
                    className="d-flex align-items-center px-0 float-right" >
                    {is_owner && (
                    <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                    ) } 
                    </Col>
                    </Row>   
                    </div>     
                    <div className='d-sm-none'>
                    <Row>
                    <Col className='d-flex align-items-center' 
                    xs={2}>
                    <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={45}  />
                    </Link>
                    </Col>
                    <Col xs={8} className="text-center" >
                    <p>
                    <span className=''>{name}</span>
                    </p>
                    <p className=''>
                    {position} - {updated_at}
                    </p>
                    </Col>
                    <Col xs={2} 
                    className="d-flex align-items-center" >
                    {is_owner && (
                    <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                    ) } 
                    </Col>
                    </Row>   
                    </div> 
                </Col> 
                <Col xs={12} lg={8} className="my-2" >
                    <Row className={`${styles.Content3} text-center py-1 pl-2 mr-2 `}>
                        <Col xs={12} sm={8} 
                        className={` ${styles.Content4} py-sm-2`} >
                        <Row>
                        <Col className='px-0 mx-0' xs={4}>
                        {number && <h5 style={{ fontWeight: '700' }}>Scene {number} </h5>}
                        </Col>
                        <Col className='px-0 mx-0' xs={4}>{location && <h5> {location}</h5>}
                        </Col>
                        <Col className='px-0 mx-0' xs={4}>{character && 
                                <h5 style={{  fontWeight: '700' }}>
                                {character} </h5>}  
                        </Col>
                        </Row>
                        </Col>
                        <Col xs={12} sm={4} className={`px-0 mx-0 py-sm-2 ${styles.Content4}`} >
                        {title && <span style={{ fontStyle: 'italic' }}> {title}</span>}
                        </Col>
                    </Row>
                </Col>
                </Row>
                </Card.Body>
                </Link>
            </Card>            */}
    </div>
  )
}

export default MoodboardTop
