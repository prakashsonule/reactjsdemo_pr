import React, { Component } from 'react'

export default class Auth extends Component {
    login() {
        console.warn("state", this.state)
        fetch('http://192.168.1.20/reactjsdemoapi_pr/index.php/api/loginuser', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                localStorage.setItem("auth",JSON.stringify(resp.result))
            })
        })
        // alert("login");
    }
    render() {

        const box = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            width: "300px",
            margintop: "95px",
        };

        return (
            <div>
                <div style={box}>
                    <input type="text"
                        class="form-control"
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                    /><br /><br />
                    <input type="text"
                        class="form-control"
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                    /><br /><br />
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
}