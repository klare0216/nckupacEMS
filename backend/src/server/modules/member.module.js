// 跟社員相關的資料庫行為
import mysql from 'mysql';
import config from '../../config/config';
import bcrypt from 'bcrypt';

const leftPad = require('left-pad');

const connectionPool = mysql.createPool({ // 建立一個連線池
	connectionLimit: 10, // 限制池子連線人數
	host: config.mysqlHost, // 主機名稱
	port: config.mysqlPort, // 連接埠
	user: config.mysqlUserName, // 用戶名稱 
	password: config.mysqlPass, // 用戶密碼
	database: config.mysqlDatabase // 資料庫名稱
});

/* Member  POST 新增 */
const createMember = (insertValues) => {
	return new Promise((resolve, reject) => {
		connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
			if (connectionError) {
				reject(connectionError); // 若連線有問題回傳錯誤
			} else {
				connection.query('SELECT COUNT(*) FROM 社員名單 WHERE 學年度=?', insertValues['學年度'], (error, result) => {
					if (error) {
						console.error('SQL error: ', error);
					} else {
						console.log('我在這'+JSON.stringify(result));
						console.log('我在這'+result[0][Object.keys(result[0])[0]]);
						var count;
						count = result[0][Object.keys(result[0])[0]] + 1;
						console.log('我在這'+count);
						
						insertValues.社員編號 = 'M'+insertValues['學年度']+leftPad(count,3,0);
						console.log('我在這'+insertValues['社員編號']);
						connection.query('INSERT INTO 社員名單 SET ?', insertValues, (error, result) => { // User資料表寫入一筆資料
							if (error) {
								console.error('SQL error: ', error);
								reject(error); // 寫入資料庫有問題時回傳錯誤
							} else if (result.affectedRows === 1) {
								resolve(`新增成功！ member_id: ${result.insertId}`); // 寫入成功回傳寫入id
							}
						});
					}
					connection.release();
				});
				
			}
		});
	});
};

/*  Member GET 取得  */
const selectMember = () => {
	return new Promise((resolve, reject) => {
		connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
			if (connectionError) {
				reject(connectionError); // 若連線有問題回傳錯誤
			} else {
				// Member撈取所有欄位的值組
				connection.query('SELECT * FROM 社員名單', (error, result) => {
					if (error) {
						console.error('SQL error: ', error);
						reject(error); // 寫入資料庫有問題時回傳錯誤
					} else {
						resolve(result); // 撈取成功回傳 JSON 資料
					}
					connection.release();
				});
			}
		});
	});
};

const selectMemberLogin = (insertValues) => {
	return new Promise((resolve, reject) => {
		connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
			if (connectionError) {
				reject(connectionError); // 若連線有問題回傳錯誤
			} else {
				// User撈取所有欄位的值組
				connection.query('SELECT * FROM 社員名單 WHERE 社員編號 = ?', insertValues.社員編號, (error, result) => {
					if (error) {
						console.error('SQL error: ', error);
						reject(error); // 寫入資料庫有問題時回傳錯誤
					} else if (Object.keys(result).length === 0) {
						resolve('尚未登錄！');
					} else {
						const dbHashPassword = result[0].密碼; // 資料庫加密後的密碼
						const userPassword = insertValues.密碼; // 使用者登入輸入的密碼
						bcrypt.compare(userPassword, dbHashPassword).then((res) => { // 使用bcrypt做解密驗證
							if (res) {
								resolve('登入成功'); // 登入成功
							} else {
								resolve('您輸入的密碼有誤！'); // 登入失敗
							}
						});
					}
					connection.release();
				});
			}
		});
	});
};
export default {
	createMember,
	selectMember,
	selectMemberLogin
};