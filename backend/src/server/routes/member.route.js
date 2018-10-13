import path from 'path';
import express from 'express';
import validate from 'express-validation';
import memberCtrl from '../controllers/member.controller';
import paramValidation from '../../config/param-validation';

const router = express.Router();

router.get('/index', function(req, res) {
	res.sendfile(path.resolve(__dirname, '../src/server/html/memberIndex.html'));
});

router.get('/create', function(req, res) {
	res.sendfile(path.resolve(__dirname, '../src/server/html/createMember.html'));
});

router.route('/')
	.get(memberCtrl.memberGet) /** 取得 Member 所有值組 */
	.post(validate(paramValidation.createUser), memberCtrl.memberPost); /* 新增 Member 值組 */

export default router;