import React from 'react'
import '../css/AdminButton.css'

function AdminButton() {

    return (
        <button className="admin_btn" onClick={(e) => (
            window.location = 'http://localhost:4000/v1'
        )}>
            Admin
        </button>
    )
}

export default AdminButton;
