/* Component in the Scene Component to fetch 
   the StoryBoard for the Srory / Shot page  */
   import React from 'react'
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import Container from 'react-bootstrap/Container';
   import styles from "../../../styles/Scene.module.css";
   import appStyles from "../../../App.module.css";
   import Asset from '../../../components/Asset';
   import NoResults from "../../../assets/no-results.png";
   
   const StoryboardforSList = ({storyboard}) => {  
    //    const [postData, setPostData] = useState({
    //        storyboard: "", 
    //        number: "",
    //    })
    //    const {storyboard, number} = postData;
   
    //    useEffect(() => {
    //        const handleMount = async () => {
    //          try {
    //            const { data } = await axiosReq.get(`/scenes/${id}/`);
    //            const { storyboard, number } = data;
    //            setPostData({ storyboard, number });
    //            setHasLoaded(true);
    //          } catch (err) {
    //            console.log(err);
    //          }
    //        };
       
    //        handleMount();
    //      }, [id]);
   
       return (
           <div >
               <Row className="h-100 my-2">
               <Col xs={12} className='text-center'> 
               <h5 className={`mb-2 py-1 ${styles.SubTitle }`}>
                STORYBOARD</h5>
                   <>
                       {storyboard ? (
                           <div className={`${styles.Frame} mt-2`}>
                           <iframe title="Storyboard" src={storyboard} 
                            className={appStyles.iframeFull} alt="Storyboard"  />
                           </div>
                       )
                       : (
                       <Container className={appStyles.Content}>
                           <Asset src={NoResults } message="No Storyboard Added" />
                       </Container>
                       )}
                   </>
               </Col>
               </Row>
               <Row>
                <Col xs={2} ></Col>
                <Col xs={8}>
                <hr className={`${styles.Break1} mb-5`}/>
                </Col>
                </Row>           
           </div>
       )
   }   

export default StoryboardforSList