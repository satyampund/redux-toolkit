import React from 'react';
import './StaticTable.css';
import { Table } from 'antd';

const StaticTable = () => {
  const data = [
    {
      id: 1,
      name: 'Leanne Graham',
      age: 20,
      email: 'Sincere@april.com',
      address: 'London Kulas Light Apt. 556',
      phone: '9034567898',
      website: 'https://tekolio.com/',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      age: 15,
      email: 'Shanna@melissa.org',
      address: 'New York Victor Plains Suite 879',
      phone: '9035465578',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      age: 22,
      email: 'Nathan@yesenia.net',
      address: 'Douglas Extension uitzipcod',
      phone: '8044767790',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      age: 22,
      email: 'Julianne.OConner@kory.org',
      address: 'Hoeger Mal Apt. 692 South Elvis',
      phone: '7434446787',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      age: 18,
      email: 'Lucio_Hettinger@annie.com',
      address: 'Skiles ks Suit 51 Roscoevi',
      phone: '7809678235',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      age: 19,
      email: 'Karley_Dach@jasper.net',
      address: 'Norberto Crossing',
      phone: '8798902314',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      age: 24,
      email: 'Telly.Hoeger@billy.com',
      address: 'Rex Tra Suite 2 Howemouth',
      phone: '9145678901',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      age: 12,
      email: 'Sherwood@rosamond.net',
      address: 'Ellsworth mit Sui 729 Aliyavi',
      phone: '9436728489',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      age: 26,
      email: 'Chaim_McDermott@dana.org',
      address: 'Dayna Park uitzipcod',
      phone: '9501239876',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      age: 22,
      email: 'Rey.Padberg@karina.com',
      address: 'Kattie Turnpike Suite 198 Lebsackbury',
      phone: '9845721078',
      website: 'ambrose.net',
    },
  ];

  const columns = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      render: (item) => {
        return <span>{`A+ ${item}`}</span>;
      },
    },
    {
      key: 'age',
      title: 'Age',
      dataIndex: 'age',
      sorter: {
        compare: (a, b) => a.age - b.age,
      },
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: 'phone',
      title: 'Phone Number',
      dataIndex: 'phone',
    },
    {
      key: 'website',
      title: 'Website',
      dataIndex: 'website',
    },
    {
      key: 'graduated',
      title: 'Graduated?',
      render: (payload) => {
        return <p>{payload.age > 20 ? 'True' : 'False'}</p>;
      },
    },
  ];

  return (
    <div className="table-container">
      <Table dataSource={data} columns={columns}></Table>
    </div>
  );
};

export default StaticTable;
