import React from 'react';

class MembersTable extends React.Component {
    componentDidMount(){
        console.log('did');
        this.getData();
    }
    getData() {
        var tableNode = document.getElementById('list');
        var url = "http://localhost:3000/api/member";
        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            var users = xhr.responseText;
            if (xhr.readyState == 4 && xhr.status == "200") {
                var rowCount = tableNode.rows.length;
                for (var x = rowCount - 1; x >= 0; x--) {
                    tableNode.deleteRow(x);
                }
                var trNode = tableNode.insertRow();
                var tdNode = trNode.insertCell();
                tdNode.innerHTML = "學年度";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "社員編號";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "學號";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "姓名";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "系所";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "生日";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "手機";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "入社日期";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "基礎音響";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "基礎燈光";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "音響大師";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "燈光大師";
                tdNode = trNode.insertCell();
                tdNode.innerHTML = "行政認證";
                var data = JSON.parse(users);
                for (var o in data) {
                    trNode = tableNode.insertRow();
                    for (var i in data[o]) {
                        tdNode = trNode.insertCell();
                        tdNode.innerHTML = data[o][i];
                    }
                }
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(null);
    }

    render() {
        return (
            <table className="table table-hover"  id="list"></table>
        );
    }
};



export default MembersTable;