import { Route, Routes } from "react-router-dom";
import { EditUserModal } from "./components/Tasks"
import {Tasks} from './components/Tasks'
import { App } from "./App";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/task" element={<Tasks />} />
            <Route path="/task/form" element={<EditUserModal/>} />
        </Routes>
    )
}