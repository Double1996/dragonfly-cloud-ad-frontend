"use strict";
const { Service } = require("egg");
const Model = 'Ad';

class  AdService extends Service {
    async create({ _id, ...data } = {}) {
        const model = this.ctx.model[Model]
        return await model.create(data);
    }
    async removeAll(ids) {
        return this.ctx.model[Model].remove({ _id: { $in: ids } });
    }
    async update({ _id, ...update } = {}) {
        return this.ctx.model[Model].update({ _id }, update);
    }
    async findList({ size, pageNo, ...query } = {}) {
        const { QueryPage, filterQuery } = this.ctx.helper;
        const model = this.ctx.model[Model];
        const result = await QueryPage({ size, pageNo }, () => {
            let find = filterQuery(query)
            find.name = new RegExp(find.name)
            find.author = new RegExp(find.author)
            find.$and = []

            if (find.borrowStatus == 0) {
                find.borrowStatus = { $in: ['', 0] }
            }
            if (find.createdAt) {
                let date = new Date(find.createdAt)
                let hdate = new Date(+date + 24 * 3600 * 1000);
                find.$and.push({ createdAt: { $gt: date } })
                find.$and.push({ createdAt: { $lt: hdate } })
                delete find.createdAt
            }
            if (!find.$and.length) {
                delete find.$and;
            }
            return model.find(find).sort({ _id: -1 }).populate([{
                path: "category",
                select: "name",
            }, {
                path: "press",
                select: "name",
            }]);
        });
        return result;
    }
}

module.exports = AdService;

