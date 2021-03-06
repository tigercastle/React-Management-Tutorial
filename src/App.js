import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { TableHead } from '@material-ui/core';



const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }

})


const customers =[{
  'id':1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍이동',
  'birthday' : '971222',
  'gender' : '여자',
  'job' : '고등학생'
},
{
  'id':3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍삼동',
  'birthday' : '901222',
  'gender' : '남자',
  'job' : '직장인'
}
];

class App extends Component{
  render(){
    return (
      <Paper>
        <Table>
        <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>          
          <TableBody>
              {customers.map(c => {
                  return (
                              <Customer
                              key={c.id}
                              id={c.id}
                              image={c.image}
                              name={c.name}
                              birthday={c.birthday}
                              gender={c.gender}
                              job={c.job}
                              />
                  )
                })
              }
          </TableBody>  
        </Table>  
      </Paper>
    );
  }


}
export default withStyles(styles)(App);
