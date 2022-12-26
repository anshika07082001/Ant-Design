import React from 'react';
import { Button, Col, Pagination, Row,Typography} from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

const style = {padding: '8px 0',paddingLeft:'20px'}
const headerstyle = { padding: '8px 0',paddingLeft:'20px',borderLeft:'1px solid rgb(201, 201, 201)'};
const { Text } = Typography;

const Grid = (props)=>{
  return(
  <>
  <h3>Data using grid display in  Ant Design</h3>
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{background:'whitesmoke'}}>
      <Col className="gutter-row" span={7} >
        <div style={headerstyle}><Text strong>Name</Text></div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={headerstyle}><Text strong>username</Text></div>
      </Col>
      <Col className="gutter-row" span={9}>
        <div style={headerstyle}><Text strong>Address</Text></div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={headerstyle}><Text strong>Action</Text></div>
      </Col>
  </Row>
  {props.data.map((item)=>{
      return (
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={7}>
              <div style={style}><PlusSquareOutlined /><Text style={{paddingLeft:'10px'}}>{item.name}</Text></div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>{item.username}</div>
          </Col>
          <Col className="gutter-row" span={9}>
            <div style={style}>{item.address.suite} {item.address.city}</div>
          </Col>
          <Col className="gutter-row" span={4}>
              <Button type="link">Delete</Button>
          </Col>
      </Row>
      )
  })}
  <Row style={{justifyContent:'flex-end',paddingRight:'10px',padding:'20px'}}>
      <Pagination defaultCurrent={1} style={{border:'1px solid primary'}}/>
  </Row>
  </>
  )
};

export default Grid;