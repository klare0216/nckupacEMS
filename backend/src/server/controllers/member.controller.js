import memberModule from '../modules/member.module';
import bcrypt from 'bcrypt';

/* Member  POST 新增 */
const memberPost = (req, res) => {
	// 取得新增參數
	const insertValues = req.body;
	insertValues.密碼 = bcrypt.hashSync(insertValues['社員編號'], 10);
	memberModule.createMember(insertValues).then((result) => {
		res.send(result); // 成功回傳result結果
	}).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/* Member GET 取得  */
const memberGet = (req, res) => {
	memberModule.selectMember().then((result) => {
		res.send(result); // 成功回傳result結果
	}).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/* Member POST 登入(Login) */
const memberLogin = (req, res) => {
	// 取得帳密
	const insertValues = req.body;
	memberModule.selectMemberLogin(insertValues).then((result) => {
		res.send(result); // 成功回傳result結果
	}).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};
export default {
	memberPost,
	memberGet,
	memberLogin
};