import React from 'react';

const HomeAlertListNoMemo = ()=>{
    console.log("HomeAlertListNoMemo render");

    return (
        <div className="home-alert-list">
            <div className="message">Message</div>
            <div className="success">Success</div>
            <div className="error">Error</div>
            <div className="warning">Warning</div>
        </div>
    )
}

export default HomeAlertListNoMemo;