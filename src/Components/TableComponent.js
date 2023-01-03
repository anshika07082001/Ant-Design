import React from 'react'
import {Table} from 'antd';

const TableComponent = (props) => {

  return (
  <>
  <h3>Data using Table display in  Ant Design</h3>
  <Table columns={props.columns} expandable={{
    expandedRowRender: (record) => (
      <p style={{ margin: 0 }}>{record.email}</p>
    )}} dataSource={props.data}/>
  </>
  )
}

export default TableComponent