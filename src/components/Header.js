import React from 'react';
import Icon from '@material-ui/core/Icon';

function Header(props) {
    return (
        <div>
          <div className="logo">
            <Icon fontSize="large">{props.iconName}</Icon>
            <strong>{props.appName}</strong>  
          </div>
        </div>
    )
}

export default Header;