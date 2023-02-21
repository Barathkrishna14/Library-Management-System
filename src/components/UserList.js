import React from "react";
import { Button } from "react-bootstrap";
import { Table } from "antd";
import { Link ,useHistory} from "react-router-dom";
import { DeleteOutlined} from '@ant-design/icons';


const UserList = (user) => {
  const history = useHistory()

  const userss = user.users
  const onDeleteUser = (sectionName) => {
    fetch("http://localhost:8080/Library/deleteUser?name=" + sectionName, { crossDomain: true })
    alert("Successfully deleted!!!")

  }
  const value = userss[0]
  let users = []
  if (userss.length > 0) {
    users = value.map(data => {
      return data
    })

  }
  console.log(users, "users")

  const onEditUserChange=(sectionId)=>{
    history.push(`/edit-user/${sectionId}`)
  }

  const column = [
    {
      title: "Name",
      width:"25%",
      dataIndex: "sectionCemail"
    },
    {
      title: "Email",
      width:"25%",
      dataIndex: "sectionEmail"
    },
    {
      title: "Phone",
      width:"25%",
      dataIndex: "sectionPhone"
    },
    {
      title: "Edit",
      width:"25%",
      render:(text,record)=>{
        console.log(record.sectionEmail,"dasaa")
        return(
          <Button twoToneColor='#40a9ff' as={Link} to={{pathname:"/edit-user", state: {fromDashboard:record.sectionEmail }}}></Button>
        )

      }
    },
    {
      title: "Delete",
      width:"25%",
      render:(text,record)=>{
        return(
          <DeleteOutlined onClick={(data)=>onDeleteUser(text.sectionName)} twoToneColor='#40a9ff'></DeleteOutlined>
        )

      }
  }
]
return (
  <>
    <Table
      columns={column}
      dataSource={users}
      size="small"
      pagination={false}
      className="mt-4"
      
    />
    
  </>
);
}
export default UserList;
