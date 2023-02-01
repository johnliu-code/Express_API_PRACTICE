import React from 'react';
import { Table } from 'semantic-ui-react';

const Dashboard = ({data, onDelete, onUpdate, user}) => {
  return (
    <div>
      <h1>Welcome {user}! Your stories here... </h1>
      <Table sortable celled fixed>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Autor</Table.HeaderCell>
                    <Table.HeaderCell>Instagram</Table.HeaderCell>
                    <Table.HeaderCell>ImgUrl</Table.HeaderCell>
                    <Table.HeaderCell>Content</Table.HeaderCell>
                    <Table.HeaderCell>userID</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map(({_id, user, title, author, imgurl, content, instagram }, i) => (
                <Table.Row key={i}>
                    <Table.Cell>{_id}</Table.Cell>
                    <Table.Cell>{title}</Table.Cell>
                    <Table.Cell>{author}</Table.Cell>
                    <Table.Cell>{instagram}</Table.Cell>
                    <Table.Cell>{imgurl}</Table.Cell>
                    <Table.Cell>{content[0]}</Table.Cell>
                    <Table.Cell>{user}</Table.Cell>
                    <Table.Cell onClick={() => {onUpdate(_id); console.log(_id)}} className='updatebtn'>✓</Table.Cell>
                    <Table.Cell onClick={() => {onDelete(_id); console.log(_id)}} className='deletebtn'>x</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </div>
  )
}

export default Dashboard