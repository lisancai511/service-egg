// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCar = require('../../../app/controller/car');
import ExportEntryPoint = require('../../../app/controller/entryPoint');
import ExportInit = require('../../../app/controller/init');
import ExportLogin = require('../../../app/controller/login');
import ExportRole = require('../../../app/controller/role');
import ExportSchool = require('../../../app/controller/school');
import ExportStudent = require('../../../app/controller/student');
import ExportStudentSource = require('../../../app/controller/studentSource');
import ExportTimeInterval = require('../../../app/controller/timeInterval');
import ExportTrainingGround = require('../../../app/controller/trainingGround');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    car: ExportCar;
    entryPoint: ExportEntryPoint;
    init: ExportInit;
    login: ExportLogin;
    role: ExportRole;
    school: ExportSchool;
    student: ExportStudent;
    studentSource: ExportStudentSource;
    timeInterval: ExportTimeInterval;
    trainingGround: ExportTrainingGround;
    user: ExportUser;
  }
}
