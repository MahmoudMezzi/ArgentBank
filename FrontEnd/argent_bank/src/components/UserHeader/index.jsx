import "../../style/UserHeader/userHeader.css"
import { useSelector, useDispatch } from 'react-redux'
import { selectUserInfo, selectEditInfo } from '../../utils/selectors';
import { toggleEdit } from '../../features/editInfo.js'
import FormEditInfo from '../FormEditInfo'


function UserHeader() {

  const userInfo = useSelector(selectUserInfo)
  const editInfo = useSelector(selectEditInfo)
  const dispatch = useDispatch()
  const firstName = userInfo.firstName
  const lastName = userInfo.lastName
  // const displayFormEdit = () => {
  //   if(editInfo.open === true){
  //     return <FormEditInfo />
  //   }
  //   return null
  // }
  return (
    <div className="header">
        {editInfo.open === true ? <h1>Edit user info</h1> : <h1>Welcome back<br />{firstName} {lastName}!</h1>}
        {editInfo.open === true ? null : <button className="edit-button" onClick={()=> dispatch(toggleEdit())}>Edit Name</button>}
        {editInfo.open === true ?<FormEditInfo /> : null}
        {/* {displayFormEdit()} */}
      </div>
  )
}

export default UserHeader