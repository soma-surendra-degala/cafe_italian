import React from "react";
import "./header.css";

export default function Header() {
    return (
        <div className="container py-2">
            <nav className="navbar row">     
                <div className="col-md-6 d-flex justify-content-sm-evenly align-items-center">
                    <span className="font"><i class="bi bi-geo-alt icon-color fs-6"></i> 2 Bury Old Road, Manchester, M8 9JN</span>
                    <span className="font"><i class="bi bi-clock icon-color fs-6"></i> Mon-Sat 11am - 11:30pm, Sun 12pm - 11pm</span>
                </div>    
                <div className="col-md-5 d-flex justify-content-sm-evenly align-items-center">
                    <span className="font"><i class="bi bi-telephone icon-color fs-6"></i> 0161 795 5502</span>
                    <span className="font"><i class="bi bi-envelope icon-color fs-6"></i> reservations@istanbulrestaurantmanchester.co.uk</span>
                </div>   
            </nav>
        </div>
    );
}
