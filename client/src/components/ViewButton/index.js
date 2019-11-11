import React from "react";
import { Button } from "antd";

function ViewButton(props) {
    return (
        <div>
            <Button type = "primary" {...props}>View</Button>
        </div>
    )
}

export default ViewButton;