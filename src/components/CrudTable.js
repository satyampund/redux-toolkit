import React, { useState } from 'react';
import { Table, Modal, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CrudTable = () => {
  const dataArr = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      address: 'John Address',
    },
    {
      id: 2,
      name: 'Sam',
      email: 'sam@gmail.com',
      address: 'Sam Address',
    },
    {
      id: 3,
      name: 'Steve',
      email: 'steve@gmail.com',
      address: 'Steve Address',
    },
    {
      id: 4,
      name: 'Jimmy',
      email: 'jimmy@gmail.com',
      address: 'Jimmy Address',
    },
    {
      id: 5,
      name: 'Kevin',
      email: 'kevin@gmail.com',
      address: 'Kevin Address',
    },
    {
      id: 6,
      name: 'Marnus',
      email: 'marnus@gmail.com',
      address: 'Marnus Address',
    },
    {
      id: 7,
      name: 'Joe',
      email: 'joe@gmail.com',
      address: 'Joe Address',
    },
  ];

  const columns = [
    { key: 1, title: 'ID', dataIndex: 'id' },
    { key: 2, title: 'Name', dataIndex: 'name' },
    { key: 3, title: 'Email', dataIndex: 'email' },
    { key: 4, title: 'Address', dataIndex: 'address' },
    {
      key: 5,
      title: 'Actions',
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                editStudentHandler(record);
              }}
              style={{ color: 'green', cursor: 'pointer', fontSize: '20px' }}
            />
            <DeleteOutlined
              onClick={() => {
                deleteStudentHandler(record);
              }}
              style={{ color: 'red', cursor: 'pointer', fontSize: '20px', marginLeft: '20px' }}
            />
          </>
        );
      },
    },
  ];

  const [data, setData] = useState(dataArr);
  const [isNewStudent, setIsNewStudent] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const deleteStudentHandler = (record) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this student record?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setData((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const editStudentHandler = (record) => {
    setIsEditing(true);
    setIsNewStudent(false);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <div className="table-container">
      <Button
        type="primary"
        onClick={() => {
          setIsEditing(true);
          setIsNewStudent(true);
          setEditingStudent(null);
        }}>
        Add a new student
      </Button>

      <Table dataSource={data} columns={columns} />
      <Modal
        title="Edit Student"
        visible={isEditing}
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          if (isNewStudent) {
            setData((prevData) => [...prevData, editingStudent]);
          } else {
            setData((prevData) =>
              prevData.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              })
            );
          }
          resetEditing();
        }}
        okText="Save">
        <Input
          value={editingStudent?.name}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.email}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.address}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default CrudTable;
