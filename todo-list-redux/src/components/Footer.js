/**
 * Created by devSC on 2017/9/15.
 */
import React from 'react';
import FilterLink from '../containers/FilterLink';

//显示组件
const Footer = () => (
	<p>
		Show:
		{' '}
		<FilterLink filter='SHOW_ALL'>All</FilterLink>
		{', '}
		<FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
		{', '}
		<FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
	</p>
)

export default Footer;