import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


const SearchPage = (props) => {

    


    return(
        <div>
            {
                !searchTerm
                ?
                <Navigate to="/homepage" replace={true}></Navigate>
                : 
                <SearchPage />
            }
        </div>

    )

}