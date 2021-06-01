import { isNil } from 'lodash';
export default {
  checkInsWeekly: state => state.checkInsWeekly,
  checkIns: state => state.checkIns,
  errors: state => state.errors,
  isWeeklyEmpty: state => state.checkInsWeekly.length <= 0,
  isEmpty: state => state.checkIns.length <= 0,
  hasDailyFilled: state => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const d = new Date();
    const dayName = days[d.getDay()];
    return !isNil(state.checkInsWeekly[dayName]);
  },
  totalCheckIns: state => state.totalCheckIns,
  moodCounts: state => state.moodCounts,
}
