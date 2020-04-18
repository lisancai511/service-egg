'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const StudentSchema = new Schema({
    id: String,
    schoolId: String, // 驾校Id
    name: String,    // 姓名
    nationality: String,   // 国际
    gender: String,   // 性别
    certificatesType: {
      type: String,
      defaule: 'ID',
      enum: ['ID','passport','certificateOfOfficers', 'other']
    },   // 证件类型 默认身份证
    certificatesNumber: String, //证件号
    birthday: Date || String,   // 生日
    endDay: Date || String,  // 证件有效日截至日期
    phone: String,  // 手机号
    phoneOne: String,  // 手机号1
    address: String,  // 身份证地址
    residentialAddress: String,  // 居住地址
    source: String, //  招生来源
    sourceDate: Date || String,  // 报名时间
    sourceAddress: String,  // 报名点
    introducer: String, // 介绍人
    basinessType: String, // 业务类型
    originalType:{
      type: String,
      default: 'C1',
      enum: ['C1','C3','B1','B2','A1','A2','A3','D','E','F','M','N','P']
    },
    originalId: String,  // 原驾驶证号
    group: String,  // 学院分组
    typeName: {
      type: String,
      default: 'C1',
      enum: ['C1','C3','B1','B2','A1','A2','A3','D','E','F','M','N','P']
    }, // 报名车型
    clasSystem: String,  // 班制
    trainingGround: String,  // 训练场
    coach: String,  // 预选教练
    complete: String,  // 资料是否齐全
    desc: String, // 备注
    payInfo: [ {
      type: String,  // 缴费类型
      mode: String, // 付费方式
      paidAmount: String, // 实缴金额
      discountAmount: String, // 优惠金额
      discountReason: String, // 优惠理由
    }],
    arrears: String, // 欠费
    ticketNumber: String, // 票号
    desc: String, // 备注
  });
  return mongoose.model('Student', StudentSchema);
};