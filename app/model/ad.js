'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  return mongoose.model('Ad', new mongoose.Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book' }, // 书_id
    user: { type: Schema.Types.ObjectId, ref: 'Users' }, // 读者
    viewsTime: String, // 广告被展示的次数
    name: String, // 广告名称
    borrowStatus: Number, // 借阅状态
  }, {
    versionKey: false,
    timestamps: true,
  }));
};
