import * as React from 'react'
import { Link} from "gatsby"
import { Themed } from "@theme-ui/mdx"
import Content from "../../elements/content"
import Inner from "../../elements/inner"
import {login} from '../../api/user'
//import {setToken} from '../../libs/util'
import * as classes from "./style.module.css"
import store from '../../store'
class LoginForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            userName:"",
            password:""
        }
        this.userNameChanged = this.userNameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.loginHandle = this.loginHandle.bind(this);
    }
    loginHandle()
    {
        try
        {
          login(this.state.userName,this.state.password).then((res)=>
          {
            console.log(`token:${res.data.data.token}`);
            store.dispatch({
              type:'setToken',
              value:res.data.data.token
            })
            store.dispatch({
              type:'setHasGetInfo',
              value:true
            })
            store.dispatch({
              type:'setUserName',
              value:"TestUser"
            })
            //setToken(res.data.data.token)
            alert("登陆成功:"+this.state.userName)
            
          }).then((res)=>{
            //window.location.pathname = "./";
          })
          
        }
        catch(ex)
        {
          alert(ex.message);
        }
    }
    userNameChanged(event)
    {
        this.setState({userName:event.target.value});
    }
    passwordChanged(event)
    {
        this.setState({password:event.target.value});
    }
    render()
    {
        return (
          <Content
            sx={{ variant: `texts.bigger` }}
            speed={0.4}
            offset={0}
            factor={1}
          >
            <Inner>
              <Themed.p>
                回到 <Link to="/">主页</Link>.
              </Themed.p>
              <Themed.div sx={{
                width:`100%`,
                alignItems:`center`,
                h2:{
                  textAlign:`center`,
                  width:`75%`
                }
              }}>
                <Themed.h2>登陆您的账户</Themed.h2>
                <Themed.div sx={{
                  p:{
                    display:`inline-block`,
                    margin:`1rem 1rem 2px 2px`,
                    textAlign:`center`,
                    minWidth:`5rem`
                  },
                  input:{
                    display:`inline-block`,
                    height:`1.5rem`,
                    width:`60%`
                  }
                }
                }>
                  <Themed.div className="row">
                    <Themed.p>账户: </Themed.p>
                    <input placeholder='输入您的用户名'
                      id="userName"
                      type="text"
                      onChange={this.userNameChanged}
                    ></input>
                  </Themed.div>
                  <Themed.div className="row">
                    <Themed.p>密码: </Themed.p>
                    <input placeholder='输入您的密码'
                      id="password"
                      type="password"
                      onChange={this.passwordChanged}
                    ></input>
                  </Themed.div>
                  <button className={classes.Button} onClick={this.loginHandle}>登陆</button>
                  <button className={classes.Button} onClick={this.loginHandle}>注册</button>
                </Themed.div>
              </Themed.div>
            </Inner>
          </Content>
        );
    }
}

export default LoginForm