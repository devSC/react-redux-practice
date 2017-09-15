/**
 * Created by devSC on 2017/9/15.
 */

/*
 * 其它的常量
 */
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const visibilityFilter = (state='SHOW_ALL', action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.visibilityFilter;
		default:
			return state;
	}
}

export default visibilityFilter;