/**
 * Created by devSC on 2017/9/15.
 */

import React, {PropTypes} from 'react';

const Link = ({active, children, onClick}) => {
	if (active) {
		return <span>{children}</span>
	}

	//当用户点击时, 分发action
	return (
		<a
			href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
		>{children}</a>
	)
}

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Link;