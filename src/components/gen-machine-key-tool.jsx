import * as React from 'react'
import { Link} from "gatsby"
import { Themed } from "@theme-ui/mdx"
import Content from "../elements/content"
import Inner from "../elements/inner"
import axios from "axios"

//import Style from "./gen-machine-key-tool.module.css"
class GenMachineKeyTool extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            machineCode:"",
            machineKey:""
        }
        this.machineCodeChanged = this.machineCodeChanged.bind(this);
        this.request = this.request.bind(this);
    }
    request()
    {
        if(this.state.machineCode === undefined || this.state.machineCode === "")
        {
          alert("未设置机器码");
          return;
        }
        console.log(`code:${this.state.machineCode}`);
        try
        {
          console.log(`start request:${process.env.GATSBY_API_URL}`);
          axios
          .request({
            url: `${process.env.GATSBY_API_URL}/GenKey`,
            method: "get",
            params: {
              machineCode: this.state.machineCode,
            },
          })
          .then((res) => {
            this.setState({ machineKey: res.data.data });
            console.log(`key:${res.data.data}`);
          })
          .catch((error) => {
            alert("服务器出现了一些错误");
            return;
          });
        }
        catch(ex)
        {
          alert(ex.message);
        }
    }
    machineCodeChanged(event)
    {
        this.setState({machineCode:event.target.value});
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
                <Themed.h2>授权密钥生成工具</Themed.h2>
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
                    <Themed.p>您的机器码: </Themed.p>
                    <input placeholder='输入您的机器代码'
                      id="machineCode"
                      type="text"
                      onChange={this.machineCodeChanged}
                    ></input>
                  </Themed.div>
                  <Themed.div className="row">
                    <Themed.p id="key">密钥: <label>{this.state.machineKey}</label></Themed.p>
                  </Themed.div>

                  <button className="blue" onClick={this.request}>
                    生成
                  </button>
                </Themed.div>
              </Themed.div>
            </Inner>
          </Content>
        );
    }
}

export default GenMachineKeyTool