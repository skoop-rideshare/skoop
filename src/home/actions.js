export const CHANGE_MENU_CHOICE = 'CHANGE_MENU_CHOICE'

export const changeMenuChoice = (choice) => {
  return (dispatch) => {
    dispatch({type: CHANGE_MENU_CHOICE, payload: choice})
  }
}