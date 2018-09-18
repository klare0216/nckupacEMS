import path from 'path';
import express from 'express';
import memberCtrl from '../controllers/member.controller';

const router = express.Router();

router.get('/index', function(req, res) {
	res.sendfile(path.resolve(__dirname, '../src/server/html/memberIndex.html'));
});

router.get('/create', function(req, res) {
	res.sendfile(path.resolve(__dirname, '../src/server/html/createMember.html'));
});

router.route('/').post(memberCtrl.memberPost); /* 新增 User 值組 */

export default router;