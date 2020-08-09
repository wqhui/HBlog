import actionNames from '../const/actionNames'
export default {
  [actionNames.TOGGLE_DIRETORY_STATE]: function (context, data) {
    context.commit(actionNames.TOGGLE_DIRETORY_STATE, data)
  }
}
