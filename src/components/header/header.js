import React from 'react';

import DropMenu from'../dropMenu/dropMenu.js';
import './header.less';

class Header extends React.Component {

    render() {

      const { header, actions  } = this.props;
      //const { domain,  _user_name, toggle , isMain} = header;

        return (
            <div className="navbar">
                <div className="navbar-header">
                    <a className="navbar-brand" href="javascript:;">
                        <span>test</span>
                        <span>name：</span>
                    </a>
                </div>
            {/*    <div className="pull-right pull-right-style" onClick={actions.headerAction.bind(this, !toggle)} >
                    <span className="navbar-text">
                        欢迎，{_user_name}！
                        <i className="glyphicon glyphicon-triangle-bottom" style={{top: "2px"}}></i>
                    </span>
                </div>
                <DropMenu
                  toggle={toggle}
                  isMain={isMain}
                />  */}
            </div>
        )
    }
}

module.exports = Header;
