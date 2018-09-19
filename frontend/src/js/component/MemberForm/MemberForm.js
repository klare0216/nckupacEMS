import React from 'react';
import FormRow from './FormRow';

class MemberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            semesterYear: '',
            studentId: '',
            fullName: '',
            department: '',
            birth: '',
            phone: '',
            joinDate: '',
        }
        this.form = [
            {id: "semesterYear", type: 'text', label: "學年度", tip: "必填，上學期F 下學期S"},
            {id: "studentId", type: 'text', label: "學號", tip: "必填"},
            {id: "fullName", type: 'text', label: "姓名", tip: "必填"},
            {id: "department", type: 'text', label: "系所", tip: ""},
            {id: "birth", type: 'date', label: "生日", tip: "yyyy-MM-dd"},
            {id: "phone", type: 'tel', label: "手機", tip: ""},
            {id: "joinDate", type: 'date', label: "入社日期", tip: "必填，yyyy-MM-dd"},
        ];
    }

    sendData() {
        var url = "http://localhost/api/member";
        var xhr = new XMLHttpRequest();
        var data = {};
        data.學年度 = this.state.semesterYear;
        data.社員編號 = this.state.studentId;
        data.姓名 = this.state.fullName;
        data.系所 = this.state.department;
        data.生日 = this.state.birth;
        data.手機 = this.state.phone;
        data.入社日期 = this.state.joinDate;
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

    setData(event, id) {
        let newState = {};
        newState[id] = event.target.value;
        this.setState(newState);
    }

    getForm() {
        return this.form.map( (item, i) => {
            return(
                <FormRow id={item.id} key={i} type={item.type}
                label={item.label} tip={item.tip}
                onChange={ (event, id) => this.setData(event, id)} />
            );
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <form>
                    {this.getForm()}
                    <button type="button" className="btn btn-success" onClick={() => this.sendData()}>送出</button>
                </form>
                <br />
                <br />
            </div>
        );
    }
};


export default MemberForm;