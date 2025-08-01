/* Component rendered on the ProfilesPage to display the 
   cover info for each Profile
 * When clicked on it opens that Profile's ProfilePage 
 * Contains the handleFollow and handleUnFollow functions
   from useSetProfileData */
import React from "react"
import styles from "../../styles/Profile.module.css"
import btnStyles from "../../styles/Button.module.css"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { Link } from "react-router-dom"
import Avatar from "../../components/Avatar"
import Button from "react-bootstrap/Button"
import { useSetProfileData } from "../../contexts/ProfileDataContext"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Profile = (props) => {
  const { profile, imageSize = "40" } = props
  const { id, following_id, image, owner, name, position } = profile

  const currentUser = useCurrentUser()
  const is_owner = currentUser?.username === owner

  const { handleFollow, handleUnfollow } = useSetProfileData()

  return (
    <div>
      {/* mobile */}
      <div className="mt-1 text-center">
        <Card className={styles.Back}>
          <Card.Body className={`px-0 ${styles.CardHead}`}>
            <Link to={`/${localStorage.getItem("projectSlug")}/profiles/${id}`}>
              {/* Avatar */}
              <Row>
                <Col xs={12}>
                  <Avatar src={image} height={imageSize} />
                </Col>
              </Row>
              <Row className="mt-2 text-center">
                <Col xs={12}>
                  <div>
                    <h5
                      className={`${styles.WordBreakWhite}`}
                      style={{ textTransform: "capitalize" }}
                    >
                      {name}
                    </h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p
                    style={{ textTransform: "capitalize" }}
                    className={` ${styles.WordBreakWhite}`}
                  >
                    {position}{" "}
                  </p>
                </Col>
              </Row>
            </Link>
          </Card.Body>
          <Card.Header className="my-0 py-1 px-0">
            <Row>
              <Col xs={12}>
                <div className="mt-1">
                  {currentUser &&
                    !is_owner &&
                    (following_id ? (
                      <Button
                        className={` py-0 ${btnStyles.Button} ${btnStyles.White}`}
                        onClick={() => handleUnfollow(profile)}
                      >
                        unfollow
                      </Button>
                    ) : (
                      <Button
                        className={`py-0 ${btnStyles.Button} ${btnStyles.Black}`}
                        onClick={() => handleFollow(profile)}
                      >
                        follow
                      </Button>
                    ))}
                </div>
              </Col>
            </Row>
          </Card.Header>
        </Card>
      </div>
    </div>
  )
}

export default Profile
