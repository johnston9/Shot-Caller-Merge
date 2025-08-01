/* Component in the Shot component to display 
   the image for each Shot */
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import { Image } from 'react-bootstrap';

const ShotImage = ({ image }) => {
    const [isImage, setIsImage] = useState(null);

    useEffect(() => {
        const checkContentType = async () => {
            if (!image) return;

            try {
                const response = await fetch(image, { method: "HEAD" });
                const contentType = response.headers.get("Content-Type");

                if (contentType && contentType.startsWith("image/")) {
                    setIsImage(true);
                } else {
                    setIsImage(false);
                }
            } catch (err) {
                console.error("Failed to fetch content type:", err);
                setIsImage(null);
            }
        };

        checkContentType();
    }, [image]);

    return (
        <div className={`${styles.InfoBack} mx-5 mt-1 mb-3 pt-3`}>
            <Row>
                <Col className="text-center pt-1 pb-3">
                    {image ? (
                        isImage === null ? (
                            <p>Loading preview...</p>
                        ) : isImage ? (
                            <Image src={image} alt="costume" height="200" />
                        ) : (
                            <iframe
                                src={image}
                                width="100%"
                                height="200"
                                title="file-preview"
                                style={{ border: "none", borderRadius: 8 }}
                            />
                        )
                    ) : (
                        <p>No image or file yet</p>
                    )}
                </Col>
            </Row>
        </div>
    )
}

export default ShotImage
