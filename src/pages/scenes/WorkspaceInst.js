/* Insrtuctions Component in the scene Component
   for the Scene Workspace Guide */
import React from 'react';
import styles from "../../styles/Scene.module.css";

const WorkspaceInst = ({setShowInts}) => {
    return (
        <div className={`mt-3 mb-3 px-3 ${styles.Instructions }`}>
            <div className={`mt-0 text-center pb-2 ${styles.SubTitle }`}>
            <span className={`float-right ${styles.Close }`} 
            onClick={() => setShowInts(false) } >Close</span> 
            <h5 className={`pl-5 text-center`} 
            style={{ textTransform: 'uppercase'}} >Instructions </h5>
            </div>
            <p className='px-3'>
                Use the Workspace Guide to indicate which
                Departments Workspaces will be used for this Scene.
                The Universal Workspace can be used for all work on the scene or
                in conjunction with one or a number of departments.
                 Use the Guide to indicate which.
            </p>
        </div>
    )
}

export default WorkspaceInst
