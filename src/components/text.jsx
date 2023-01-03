import * as React from 'react'
import { Link} from "gatsby"
import { Themed } from "@theme-ui/mdx"
import Content from "../elements/content"
import Inner from "../elements/inner"
import axios from "axios"
import apiserver from '../libs/api.request'
import {login} from '../api/user'
import {setToken,getToken} from '../libs/util'
import store from '../store'
//import Style from "./gen-machine-key-tool.module.css"
class TestApi extends React.Component{
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
          console.log(getToken());
          apiserver.request({
            url:"/WeatherForecast",
            withPrefix:true,
            prefix:"api"
          }).then((res)=>
          {
            alert("Success");
          })
          
        }
        catch(ex)
        {
          alert(ex.message);
        }
    }
    storeHandle()
    {
        console.log(store.getState())
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
                },
                button:{
                  backgroundColor:`rgba(0,127,0,0.5)`,
                  height:`1.5rem`,
                  width:`40%`,
                  textAlign:`center`,
                  verticalAlign:`center`,
                  alignItems:`center`,
                  margin:`10px 10px 20% 20%`,
                  border:`1px solid green`
                }
              }}>
                <Themed.h2>Api测试</Themed.h2>
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

                  <button className="blue" onClick={this.loginHandle}>
                    Wear
                  </button>
                  <button className="blue" onClick={this.storeHandle}>
                    Store
                  </button>
                </Themed.div>
              </Themed.div>
            </Inner>
          </Content>
        );
    }
}

export default TestApi