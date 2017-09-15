/**
 * Created by devSC on 2017/9/15.
 */
import { connect } from 'react-redux';
import {setVisibility} from '../actions';
import Link from '../components/Link';

//逻辑组件

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibility(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Link);

export default FilterLink;