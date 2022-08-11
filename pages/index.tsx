import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Nums from "../component/selectNum";

// create cookie when enter index page
const Index = () => {
    return (
        <>
            <Navbar />
            <Nums />
        </>
    );
}
export default Index;
