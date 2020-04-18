// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCar = require('../../../app/model/car');
import ExportEntryPoint = require('../../../app/model/entryPoint');
import ExportRole = require('../../../app/model/role');
import ExportSchool = require('../../../app/model/school');
import ExportStudent = require('../../../app/model/student');
import ExportStudentSource = require('../../../app/model/studentSource');
import ExportTimeInterval = require('../../../app/model/timeInterval');
import ExportTrainingGround = require('../../../app/model/trainingGround');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Car: ReturnType<typeof ExportCar>;
    EntryPoint: ReturnType<typeof ExportEntryPoint>;
    Role: ReturnType<typeof ExportRole>;
    School: ReturnType<typeof ExportSchool>;
    Student: ReturnType<typeof ExportStudent>;
    StudentSource: ReturnType<typeof ExportStudentSource>;
    TimeInterval: ReturnType<typeof ExportTimeInterval>;
    TrainingGround: ReturnType<typeof ExportTrainingGround>;
    User: ReturnType<typeof ExportUser>;
  }
}
