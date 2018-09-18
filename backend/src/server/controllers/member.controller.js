import memberModule from '../modules/member.module';

/* User  POST 新增 */
const memberPost = (req, res) => {
	// 取得新增參數
	const insertValues = req.body;
	memberModule.createMember(insertValues).then((result) => {
		res.send(result); // 成功回傳result結果
	}).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};
export default {
	memberPost
};