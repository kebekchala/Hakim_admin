
import { createContext } from "react"

const handleSidebar = createContext({
    currentHeadbar: 'verify',
     setCurrentHeadbar: (auth) => {}
})

export default handleSidebar;
