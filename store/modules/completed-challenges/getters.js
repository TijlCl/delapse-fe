export default {
  completedChallenges: state => state.completedChallenges,
  isEmpty: state => state.completedChallenges.length <= 0
}
