import React from 'react';
import FormRow from './FormRow';

class MemberForm extends React.Component {
    sendData() {
        var url = "http://localhost/api/member";
        var xhr = new XMLHttpRequest();
        var data = {};
        data.學年度 = document.getElementById("semesterYear").value;
        data.社員編號 = document.getElementById("studentId").value;
        data.姓名 = document.getElementById("fullName").value;
        data.系所 = document.getElementById("department").value;
        data.生日 = document.getElementById("birth").value;
        data.手機 = document.getElementById("phone").value;
        data.入社日期 = document.getElementById("joinDate").value;
        var json = JSON.stringify(data);
        console.log(json);
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => {
            var users = xhr.responseText;
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
                alert(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(json);
    }

    render() {
        return (
            <div className="container mt-5">
                <form>
                    <div className="form-row">
                        <div className="form-group  col-sm-3">
                            <label htmlFor="syear" className="mt-1">學年度</label>
                            <input type="text" className="form-control" id="semesterYear" />
                            <small className="form-text text-muted">上學期F 下學期S，必填</small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group  col-sm-3">
                            <label htmlFor="studentId">學號</label>
                            <input type="text" className="form-control" id="studentId" />
                            <small className="form-text text-muted">必填</small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group  col-sm-3">
                            <label htmlFor="fullName">姓名</label>
                            <input type="text" className="form-control" id="fullName" />
                            <small className="form-text text-muted">必填</small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group  col-sm-3">
                            <label htmlFor="department">系所</label>
                            <input type="text" className="form-control" id="department" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group  col-sm-3">
                            <label htmlFor="birth">生日</label>
                            <input type="text" className="form-control" id="birth" />
                            <small className="form-text text-muted">yyyy-MM-dd</small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group  col-sm-3">
                            <label htmlFor="phone">手機</label>
                            <input type="text" className="form-control" id="phone" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group  col-sm-3">
                            <label htmlFor="joinDate">入社日期</label>
                            <input type="text" className="form-control" id="joinDate" />
                            <small className="form-text text-muted">必填</small>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => this.sendData()}>送出</button>

                </form>
                <br />
                <br />
            </div>
        );
    }
};


export default MemberForm;