import React , {Component} from 'react';
import {LoginWrap,LoginItem} from './loginStyle';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (values.username === 'user' && values.password === '123') {
                localStorage.setItem('User', JSON.stringify(values.password));
                this.props.history.push({ pathname: '/' })
            } else {
                alert('密码错误，请重新输入 ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <LoginWrap>
                    <LoginItem>
                        <h2>登录</h2>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item className="clearfix">
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住我</Checkbox>)}
                                <a className="login-form-forgot" href="#">
                                    忘记密码？
                                </a>
                                <Button type="primary" htmlType="submit" block className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </LoginItem>
                </LoginWrap>
            </div>
        )
    }
}


export default Form.create({ name: 'normal_login' })(Login)