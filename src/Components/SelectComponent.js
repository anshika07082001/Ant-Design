import { PlusSquareOutlined } from '@ant-design/icons'
import { Button, Col, Row, Select, Typography } from 'antd'
import React from 'react'

const style = {padding: '8px 0',paddingLeft:'20px'};
const { Text } = Typography;
const headerstyle = { padding: '8px 0',paddingLeft:'20px',borderLeft:'1px solid rgb(201, 201, 201)'};
const options= [ {value: '1',label: '1',},{value: '2',label: '2',},{value: '3',label: '3',},{value: '4',label: '4',},{value: '5',label: '5',}];
const SelectComponent = (props) => {
    return (
    <>
    <h3>Data using select display in  Ant Design</h3>
    <Select defaultValue="1" style={{ width: 120,paddingLeft: '20px' }} onChange={props.handleChange}options={options}/>
    {props.selectData!==''?
    <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{background:'whitesmoke'}}>
        <Col className="gutter-row" span={7} >
          <div style={headerstyle}><Text strong>Name</Text></div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={headerstyle}><Text strong>username</Text></div>
        </Col>
        <Col className="gutter-row" span={9}>
          <div style={headerstyle}><Text strong>Website</Text></div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={headerstyle}><Text strong>Action</Text></div>
        </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={7}>
            <div style={style}><PlusSquareOutlined /><Text style={{paddingLeft:'10px'}}>{props.selectData.name}</Text></div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>{props.selectData.username}</div>
        </Col>
        <Col className="gutter-row" span={9}>
          <div style={style}>{props.selectData.website}</div>
        </Col>
        <Col className="gutter-row" span={4}>
            <Button type="link">Delete</Button>
        </Col>
    </Row>
    </>:
    <p></p>}
    </>
  )
};

export default SelectComponent