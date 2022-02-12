import React from "react";

export function Footer() {
    var d = new Date();
    return (
        <div className="d-flex justify-content-center">
            <footer>
                &copy;{d.getFullYear()}. All rights Reserved.
            </footer>
        </div>
    );


}