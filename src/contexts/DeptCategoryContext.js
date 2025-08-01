/* Context file for the Scene Page to set the scene id, scene number,
    department and category the user selects  
 * DeptGeneralContext to set the department wanted 
   in the Department xtra page */
import { createContext, useContext,  useState } from "react";

export const SceneContext = createContext();
export const SetSceneContext = createContext();
export const useSceneContext = () => useContext(SceneContext);
export const useSetSceneContext = () => useContext(SetSceneContext);

export const NumberContext = createContext();
export const SetNumberContext = createContext();
export const useNumberContext = () => useContext(NumberContext);
export const useSetNumberContext = () => useContext(SetNumberContext);

export const DeptContext = createContext();
export const SetDeptContext = createContext();
export const useDeptContext = () => useContext(DeptContext);
export const useSetDeptContext = () => useContext(SetDeptContext);

export const CategoryContext = createContext();
export const SetCategoryContext = createContext();
export const useCategoryContext = () => useContext(CategoryContext);
export const useSetCategoryContext = () => useContext(SetCategoryContext);

export const DeptGeneralContext = createContext();
export const SetDeptGeneralContext = createContext();
export const useDeptGeneralContext = () => useContext(DeptGeneralContext);
export const useSetDeptGeneralContext = () => useContext(SetDeptGeneralContext);

export const DeptCategoryProvider = ({ children }) => {
  const [sceneId, setSceneId] = useState("");
  const [number, setNumber] = useState("");
  const [dept, setDept] = useState("");
  const [category, setCategory] = useState("");
  const [deptGeneral, setDeptGeneral] = useState("");

  return (
    <SceneContext.Provider value={sceneId}>
      <SetSceneContext.Provider value={setSceneId}>
        <DeptContext.Provider value={dept}>
          <SetDeptContext.Provider value={setDept}>
            <CategoryContext.Provider value={category}>
              <SetCategoryContext.Provider value={setCategory}>
               <NumberContext.Provider value={number}>
                <SetNumberContext.Provider value={setNumber}>
                  <DeptGeneralContext.Provider value={deptGeneral}>
                    <SetDeptGeneralContext.Provider value={setDeptGeneral}>
                      {children}
                    </SetDeptGeneralContext.Provider>
                   </DeptGeneralContext.Provider>
                  </SetNumberContext.Provider>
                </NumberContext.Provider>
              </SetCategoryContext.Provider>
            </CategoryContext.Provider>
          </SetDeptContext.Provider>
        </DeptContext.Provider>
      </SetSceneContext.Provider>
    </SceneContext.Provider>
  );
};