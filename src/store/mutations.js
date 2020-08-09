import actionNames from '../const/actionNames'
export default {
  [actionNames.TOGGLE_DIRETORY_STATE] (state, { isShowDiretory }) {
    // 显示目录切换
    state.sideBar.directory.isShow = isShowDiretory
  }
}
