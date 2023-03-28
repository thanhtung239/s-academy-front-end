import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./base.css"

const AppFooter = () => {
    return (
        <div className="app-footer">
            <div className="footer-content">
                <div>Copyright </div>
                <div style={{width: 30, paddingLeft: 6}}><CopyrightIcon className="footer-icon" /></div>
                <div>2023 All Rights Reserved by HTT</div>
                <div><FavoriteIcon className="footer-icon" /></div>
            </div>
        </div>
    )
}

export default AppFooter
