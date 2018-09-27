import BaseJoi from 'joi';
import Extension from 'joi-date-extensions';
const Joi = BaseJoi.extend(Extension);

export default {
	createUser: {
		body: {
			學年度: Joi.string().uppercase().regex(/^[0-9]{3}[FS]$/).required(),
			學號: Joi.string().uppercase().regex(/^[A-Z][0-9]{8}$/).allow(''),
			姓名: Joi.string().required(),
			系所: Joi.string().allow(''),
			生日: Joi.date().format('YYYY-MM-DD').allow('').raw(),
			手機: Joi.string().regex(/^[0-9]{10}$/).allow(''),
			入社日期: Joi.date().format('YYYY-MM-DD').raw().required()
		}
	}
};