
const { Op } = require("sequelize");
const obj = require('./objectManupulation');
const _date = require('../helper/dateTime');

function queryObject(queryObject){
    const _query = obj.notNullObjects(queryObject);
        let _whereQ = {};

        // // check it hase date only
        // if (_query.formDate) {
        //     _whereQ = { ..._whereQ, ...{ where: { createdOn: _query.formDate } } }
        //     console.log('serch where createdOn', _where);
        // }

        // check it has date range
        if (_query.formDate && _query.toDate) {
            const startDate = _date.formatDate(_query.formDate).dateOnly
            const endDate = _date.formatDate(_query.toDate).dateOnly
            _whereQ = {
                // where: {
                    createdOn: {
                        // // $between: [_query.formDate, _query.toDate]
                        // [Op.lt]: _query.formDate, // new Date(_query.formDate),
                        // [Op.gt]: _query.toDate // new Date(new Date(_query.toDate))
                        [Op.gt]: startDate,
                        [Op.lt]: endDate
                    }
                // }
            }
            delete _query.formDate;
            delete _query.toDate;
            // console.log('serch between createdOn', _whereQ)
        }
        if (!_query.formDate) {
            delete _query.toDate;
        }
        // console.log('finally where object is: ', _whereQ)
        // check it has fields
        // if (_query.fields) {
        //     console.log('serch and set attribute')
        // }
        _whereQ = {..._whereQ, ..._query};
        // console.log('finally where object is: ', _whereQ)
        return _whereQ;
}

module.exports = {
    queryObject: queryObject
}