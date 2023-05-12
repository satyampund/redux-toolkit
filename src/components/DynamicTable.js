import React, { useState, useEffect } from 'react';
// import './StaticTable.css';
import axios from 'axios';

import { Table } from 'antd';

const DynamicTable = () => {
  const [data, setData] = useState([]);

  const fecthData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setData(data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'User ID',
      dataIndex: 'userId',
      sorter: (a, b) => {
        return a.userId > b.userId;
      },
    },
    {
      key: '3',
      title: 'Title',
      dataIndex: 'title',
    },
    {
      key: '4',
      title: 'Completed',
      dataIndex: 'completed',
      width: '15%',
      render: (text) => String(text),
    },
    {
      key: '5',
      title: 'Status',
      render: (rowData) => {
        return <p>{rowData.completed === true ? 'Completed' : 'In Progress'}</p>;
      },
      filters: [
        { text: 'Completed', value: true },
        { text: 'In Progress', value: false },
      ],
      filterMultiple: false,
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  return (
    <div className="table-container">
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default DynamicTable;
